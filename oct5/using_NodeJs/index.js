// const fs = require("fs");
// fs.writeFile("mess.txt","hello i am new file created " , (error)=>{
//     if (error) throw error ; 
//     console.log(" file creation done !");
// })


import { readFile} from 'node:fs';

readFile('mess.txt','Utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

