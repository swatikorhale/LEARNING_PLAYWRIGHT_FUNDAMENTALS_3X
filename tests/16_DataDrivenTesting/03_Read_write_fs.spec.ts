import fs from 'fs';
import path from 'path';
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url';

const filepath=path.join(path.dirname(fileURLToPath(import.meta.url)), 'userData.json');
console.log("File path:",filepath);

//fs can read our file
const fileData=fs.readFileSync(filepath,'utf-8');
//converting json data in javascriptobjec
const userDataJSObject=json.parse(fileData);
console.log(userDataJSObject);
console.log(userDataJSObject.username);
console.log(userDataJSObject.password);

// Writing Data to a JSON File

const user = {
    name: "Pramod",
    role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");
