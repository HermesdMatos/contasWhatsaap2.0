const { scopes, tokenPath } = require('./apiGmail');

const fs = require('fs');
const readline = require('readline');

const { google } = require('googleapis');

async function gerarNovaAutenticacao() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  )

  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes[0],
  });

  console.log('Acesse esta URL para autorizar:', url);

}

fs.writeFile(tokenPath, JSON.stringify(tokens), (err) => {
  if (err) console.error('Erro ao salvar token:', err);
});

