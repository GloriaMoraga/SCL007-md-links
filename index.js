const mdLinks = require('./mdlinks')
const fetch = require('node-fetch');
const colors = require('colors');
const fileUser = process.argv[2];
let options = {
  validate: false,
  stats: false
}   
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
       let urlArray = [];
        response.forEach(element => {
          urlArray.push(element.href)
          })
         console.log('El total de links en el archivo ' + fileUser.cyan +' es: '+ + urlArray.length); 
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