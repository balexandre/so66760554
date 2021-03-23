# StackOverflow helper for question 66760554

[Original question](https://stackoverflow.com/q/66760554/28004)

## to run

change both SendGrid API Key and sender email in the code

```javascript
const SENDGRID_API_KEY = 'SENDGRID_API_KEY'
const SENDGRID_SENDER_EMAIL = 'SENDGRID_SENDER_EMAIL'
```

install and start server with

```bash
npm i
npm start
```

if using [VSCode REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) plugin, open `_.http` and run the request

## node version

using nvm, install `14.16.0`

```bash
nvm install 14.16.0
nvm use 14.16.0
```

`.nvmrc` exists, so all you need is to have an [NVM extension in VSCode](https://marketplace.visualstudio.com/items?itemName=abumalick.vscode-nvm) to load the correct version when you open the project
