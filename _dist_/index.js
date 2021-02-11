/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from './lazy.js'

console.log('Happy hacking :)')
const app = document.getElementById("images")


const div =document.querySelector('.p-4')
const image = document.querySelector('.mx-auto')

function getRandomInt(min, max) {
    return(Math.floor(Math.random() * (max - min)) + min);}
    
    function creacion(){
        
        const url = `https://randomfox.ca/images/${getRandomInt(1,122)}.jpg`
        
        const div = document.createElement('div')
        div.className = "p-4"
        
        const img = document.createElement('img')
        img.dataset.src = `${url}`;
        img.width = '420';
        
        div.appendChild(img)
        
        
        
        
        return div
        
    }
    const mountNode = document.getElementById('images');
    const buton  = document.getElementById('buton')
  
    const addImage = () => { 
        
        //guardamos la imagen que recibimos retornada de la funcion en una variable
        const hola = creacion();
        //agregamos la imagen al contenedor padre
        mountNode.append(hola)
        
        registerImage(hola)
        console.log(mountNode.childNodes);
       
        
    }
    const clear = document.getElementById("clear")

   
    const borrar = () =>{
       

      [...mountNode.childNodes].forEach( child => {
          child.remove()
      })
        
        
   
        
    }
    borrar()
    buton.addEventListener("click", addImage)
    clear.addEventListener("click", borrar)