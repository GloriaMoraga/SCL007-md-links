
// const fs = require('fs');
// const path = require('path');
// let regExp =  /\(https?:(.+)\)/g;


// export const getData = (fileName, type) =>
//   new Promise((resolve, reject) =>
//     fs.readFile(fileName, type, (err, data) => {
//       //if has error reject, otherwise resolve
//       return err ? reject(err) : resolve(data);
//     })
//   );

// getData('./README.md', 'utf8')
//   .then(data => console.log('Data: ', data.toString().match(regExp)))
//   .catch(error => console.log('Error: ', error));


 








// const testFolder = process.cwd();
// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });