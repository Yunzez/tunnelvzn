const express = require('express')
const app = express()
const { GoogleSpreadsheet } = require('google-spreadsheet');




app.get('/', async (req, res) => {
// const doc = new GoogleSpreadsheet('https://docs.google.com/spreadsheets/d/1W7tw1QhSjSP1IugS0BuRaCVrueqzA05uE-6TP3UQxIc/edit#gid=0');
// await doc.useServiceAccountAuth({
//   // env var values are copied from service account credentials generated by google
//   // see "Authentication" section in docs for more info
//   client_email: 'tunnelvzn.uw@gmail.com',
//   private_key: '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',
// });

const doc = new GoogleSpreadsheet();
// await doc.useServiceAccountAuth('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');
// await doc.createNewSpreadsheetDocument({ title: 'This is a new doc' });
console.log(doc.spreadsheetId);
  res.send(doc.spreadsheetId)
})

app.listen(3001)