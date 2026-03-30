const fs = require("fs");
let data = "Hello, Gla is welcoming for 2026 admission";
fs.writeFile("Sample.txt", data,{encoding: 'utf-8',flag:'w'},(err)=>{
    if(err) throw(err);
    console.log("File created succesfully");
})
fs.readFile("Sample.txt", {encoding : 'utf-8', flag:'r'}, (err, data)=>{
    if(err) throw(err);
    console.log(data);
})
fs.appendFile("Sample.txt", "\n North India's Best College", (err)=>{
    if (err) throw(err);
    console.log("File edited succesfully");
})
// const fs = require("fs");
// fs.unlink("sample.txt", (err)=>{
//      if(err) throw(err);
//      console.log("file deleted sucessfully");
// }) 


const fs = require('node:fs');
const constant = 'Some content!';
try{
    fs.writeFileSync('/Users/joe/test.txt', content);
    // file written successfully
} catch (err){
    console.error(err);
}

