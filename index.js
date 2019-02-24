/*
module.exports = () => {
  // ...
};
*/

const testFolder = process.cwd();
const fs = require('fs');
// const path = require('path');
let regExp =  /\(https?:(.+)\)/g;


// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });


const getData = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {
      //if has error reject, otherwise resolve
      return err ? reject(err) : resolve(data);
    })
  );

getData('./README.md', 'utf8')
  .then(data => console.log('Data: ', data.toString().match(regExp)))
  .catch(error => console.log('Error: ', error));




// fs.readFile('./README.md','utf-8', function(err,data) {
//   if (err){
//     console.log(err);
//   }
//   console.log(data.toString().match(regExp));
  
//   })










  
/*
function getFilenames(path, extension) {
  return fs
      .readdirSync(path)
      .filter(
          item =>
              fs.statSync(Path.join(path, item)).isFile() &&
              (extension === undefined || Path.extname(item) === extension)
      )
      .sort();
}

*/
/*

let getFiles = function(testFolder , files){
  fs.readdirSync(testFolder ).forEach(function(file){
      let subpath = testFolder  + '/' + file;
      if(fs.lstatSync(subpath).isDirectory()){
          getFiles(subpath, files);
      } else {
          files.push(testFolder  + '/' + file);
      }
  });     
}
*/


