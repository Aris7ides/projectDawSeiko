let nav=document.querySelector("header nav");

//funcion que se le aplica al menu en version movil, abre y cierra el nav
function openNav(){
    if(nav.style.display=="none" || nav.style.display==""){
        document.body.style.overflow="hidden";
        nav.style.display="block";
    }else{
        nav.style.display="none";
        document.body.style.overflow="auto";
    }
}

window.addEventListener('resize', function(){
    //cambia el atributo display al nav en caso de que este none y el tamaño de la pantalla cambie
    if(document.body.clientWidth>=600){
        if(nav.style.display=='none'){
            nav.style.display='block';
        }
    }
});

//HACER*********
//Cuando se haga click fuera del nav y este este mostrandose en movil que se oculte

// document.addEventListener('click', function(evento){
//     if(document.body.clientWidth<600 && nav.style.display==='block'){
//         if(!nav.contains(evento.target)){
//             nav.style.display='none';
//             console.log('se cierra');
//         }else{
//             console.log(" lo ocntiene");
//         }
//     }
// });
