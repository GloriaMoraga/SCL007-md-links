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
                  let urlLinkMd = dataStrings[i].match(expRegHref)[0].substring(1, dataStrings[i].match(expRegHref)[0].length - 1);
                  //Este codigo permite agregar al array un objetos con las siguientes propiedades
                  linksMd.push({
                    text: txtLinkMd,
                    href: urlLinkMd,
                    file: fileUser
                  });
                }
               resolve(linksMd);
              //  console.log(linksMd)
              } else {console.log('Archivo ingresado no es de extención .md');}
});

   
if (require.main === module) {
  mdLinks(fileUser, options).then( (response) =>{
  let arrValidate = [];
  
  if(process.argv[3] === '--validate'){
    options.validate = true;
     return response.forEach((element)=> {
      fetch(element.href).then(res =>{
        arrValidate.push(element);

        if(res.status === 200){
      
          return console.log(`File: ${element.file.blue} Titulo: ${element.text.yellow} Link: ${res.url.green} Status: ${res.status} ${res.statusText.cyan}`);
        }
         else if(res.status === 404){
          return console.log(`File: ${element.file.blue} Texto: ${element.text.yellow} Link: ${element.href.red} Status: ${res.status} ${res.statusText.red}` );

          } 
      }).catch(err =>{
        console.log(`File: ${element.file.red} Texto: ${element.text.green} Link: ${element.href.red} <--- Enlace con Problemas` + err);
         
      });
      
    });

  } else if(process.argv[3] === '--stats'){
       options.stats = true;
       let urlArr = [];
        response.map(element => {
          urlArr.push(element.href)
        
        return console.log('Total : '+ urlArr.length);
         })
         
  }else {
          return response.forEach((element)=> {
          let file = element.file,
          href = element.href,
          text = element.text;      
          return console.log(file.blue  + ' ' + text.yellow + ' ' + href.green);
    });

    
  }
  
});
}
module.exports = mdLinks;

