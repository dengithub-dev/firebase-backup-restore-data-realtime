const fs = require('fs');

const auth = new google.auth.GoogleAuth({
  keyFile: "credential.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// Create client instance for auth
const client = auth.getClient();

// Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client });

const spreadsheetId = "1PsfYrAm_l4kRko4Xtme8elMU00kQ0MeOeuvj6LGo4-E";

//parse json file
const json = JSON.parse(fs.readFileSync('local json file destination here', 'utf8'));
//get the keys json
const keys = Object.keys(dataJson);
const push_data_firstname = []; 
for (let i = 1; i < keys.length; i++) {
  push_data_email.push(dataJson[keys[i]].email) //get value/s
}

googleSheets.spreadsheets.values.append({ //you can change append to update 
  auth,
  spreadsheetId,
  range: "Sheet1!A2:A",
  valueInputOption: "USER_ENTERED",
  requestBody: { majorDimension: "COLUMNS" , values: [push_data_email] }
})
