#!/usr/bin/env node

const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const colors = require('colors');
const fileUser = process.argv[2];
let options = {
  validate: false,
  stats: false
}


//------------------------ Funcion que retorna los links

  const mdLinks = (fileName) => new Promise((resolve, err) => {
          
            let urlToAbsolute = path.resolve(fileName);
            let extFile = path.extname(urlToAbsolute);
            if(extFile === '.md'){
            let dataMd = fs.readFileSync(urlToAbsolute).toString();
            let linksMd = [];
               const expRegLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
                const expRegHref =/\((http|https|ftp|ftps).+?\)/g;
                const expRegLinktext = /\[.+?\]/g;
                let dataLinks = dataMd.toString();
                let dataStrings = dataLinks.toString().match(expRegLinks);

                for (let i in dataStrings){
                  let txtLinkMd = dataStrings[i].match(expRegLinktext)[0].substring(1, dataStrings[i].match(expRegLinktext)[0].length - 1);
                  let urlLinkMd = dataStrings[i].match(expRegHref)[0].match(expRegHref)[0].substring(1, dataStrings[i].match(expRegHref)[0].length - 1);
                  //Este codigo permite agregar al array un objetos con las siguientes propiedades
                  linksMd.push({
                    text: txtLinkMd,
                    href: urlLinkMd,
                    file: fileUser
                  });
                }
               resolve(linksMd);
              //  console.log(linksMd)
              } else {
                console.log('Archivo ingresado no es de extención .md');
              }
          
               });

   

mdLinks(fileUser, options).then( (response) =>{
  let arrStatus = [];
  if(process.argv[3] === '--validate'){
     return response.forEach((element)=> {
      fetch(element.href).then(res =>{
        arrStatus.push(element);

        if(res.status === 200){
      
          console.log(`File: ${element.file.blue} Titulo: ${element.text.yellow} Link: ${res.url.green} Status: ${res.status} ${res.statusText.cyan}`);
        }
         else if(res.status === 404){
          console.log(`Enlace roto --> Archivo: ${element.file.blue} Texto: ${element.text.green} Link: ${element.href.yellow}` + err );

          } 
      }).catch(err =>{
        console.log(`Enlace con Problemas --> Archivo: ${element.file.red} Texto: ${element.text.green} Link: ${element.href.red}` + err);
         
      });
      
    });

  } else {

    return response.forEach((element)=> {
      let file = element.file,
          href = element.href,
          text = element.text;      
      return console.log(file.blue  + ' ' + text.yellow + ' ' + href.green);
    });
    
  }
  
});

module.exports = mdLinks;

