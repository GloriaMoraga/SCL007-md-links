// #!/usr/bin/env node
// const fs = require('fs');
// const fetch = require('node-fetch');
// const path = require('path');
// const colors = require('colors');



// //------------------------ Funcion que retorna los links

//   const mdLinks = (fileName) => new Promise((resolve, err) => {
          
//             let urlToAbsolute = path.resolve(fileName);
//             let extFile = path.extname(urlToAbsolute);
//             if(extFile === '.md'){
//             let dataMd = fs.readFileSync(urlToAbsolute).toString();
//             let linksMd = [];
//                const expRegLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
//                 const expRegHref =/\((http|https|ftp|ftps).+?\)/g;
//                 const expRegLinktext = /\[.+?\]/g;
//                 let dataLinks = dataMd.toString();
//                 let dataStrings = dataLinks.toString().match(expRegLinks);

//                 for (let i in dataStrings){
//                   let txtLinkMd = dataStrings[i].match(expRegLinktext)[0].substring(1, dataStrings[i].match(expRegLinktext)[0].length - 1);
//                   let urlLinkMd = dataStrings[i].match(expRegHref)[0].match(expRegHref)[0].substring(1, dataStrings[i].match(expRegHref)[0].length - 1);
//                   //Este codigo permite agregar al array un objetos con las siguientes propiedades
//                   linksMd.push({
//                     text: txtLinkMd,
//                     href: urlLinkMd,
//                     file: fileUser
//                   });
//                 }
//                resolve(linksMd);
//                let arrStatus = [];
    
//     Promise.all(linksMd.map(function(element){ 
//       fetch(element.href).then(res =>{
//         arrStatus.push(element);

//         if(res.status === 200){
//           console.log(`Archivo: ${element.file.blue} Texto: ${element.text.green} Link: ${res.url.yellow} Status: ${res.status} ${res.statusText.cyan}`);
//         }
//          else if(res.status === 404){
//           console.error(`Enlace roto --> Archivo: ${element.file.blue} Texto: ${element.text.green} Link: ${element.href.yellow}` + err);

//           } 
//       }).catch(err =>{
//         console.error(`Enlace roto --> Archivo: ${element.file.blue} Texto: ${element.text.red} Link: ${element.href.red}` + err);
         
//       });
//     }));
  
//               //  console.log(linksMd)
//               } else {
//                 console.log('Archivo ingresado no es de extención .md');
//               }
          
//                });

   
// mdLinks(fileUser);

// module.exports = mdLinks;
































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