
const isIntersecting = (entry) =>{
    return entry.isIntersecting// true si esta en la pantalla y falso si no 
}
const accion=(event)=>{


    const nodo = event.target;//div
    const imagen = nodo.firstChild;
    const url = imagen.dataset.src;
    imagen.src= url;

    console.log("Assssssdssh")
    observer.unobserve(nodo)
    loadedImages++;
    console.log(`🟣 Se han cargado ${loadedImages} imágenes`)
    //desregistra la imagen
}
const observer =new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(accion)
});


let appendedImages = 0;
let loadedImages = 0;

export  const registerImage = (img) =>{
    //intersectionobserver ->observer(imagen)
    observer.observe(img)
    appendedImages++;
        console.log(`⚪ Se han agregado ${appendedImages} imágenes`)
}
