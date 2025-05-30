const path = require('path');
const scopes = process.env.SCOPES.split(',');
const tokenPath = path.join(__dirname, process.env.TOKEN_PATH);
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const auth = oauth2Client;
auth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
console.log(auth);

const gmail = google.gmail({ version: 'v1', auth });

module.exports = { gmail, scopes, tokenPath };

