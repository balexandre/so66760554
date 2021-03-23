const crypto = require("crypto")
const express = require('express')
const sgMail = require('@sendgrid/mail')
const asyncHandler = require("express-async-handler")

const SENDGRID_API_KEY = 'SENDGRID_API_KEY'
const SENDGRID_SENDER_EMAIL = 'SENDGRID_SENDER_EMAIL'

const app = express()
const PORT = process.env.PORT || 3001

sgMail.setApiKey(process.env.SENDGRID_API_KEY || SENDGRID_API_KEY)

app.get('/password/reset/:token', asyncHandler((req, res) => {
    res.json({ token: req.params.token })
}))
app.post('/forgot', asyncHandler(async (req, res) => {
    const user = {
        token: crypto.randomBytes(20).toString('hex'),
        email: 'destination_email'
    }
    const resetUrl = `http://${req.headers.host}/password/reset/${user.token}`

    const msg = {
        to: user.email,
        from: SENDGRID_SENDER_EMAIL,
        subject: "PASSWORD RESET LINK",
        html: `
            <p><a href="${resetUrl}">click to reset your password</a></p>
        `,
    }

    await sgMail.send(msg)
    res.json({ message: 'email sent' })
}))

app.use((err, req, res, next) => {
    res.status(500).json({
        status: err.code,
        message: err.message,
        detailed: err.response?.body,
    })
})

app.listen(PORT, () => console.log(`open http://localhost:${PORT}`))
