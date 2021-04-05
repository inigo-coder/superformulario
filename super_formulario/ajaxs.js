addEventListener(runAjax)


var form= document.querySelector("#form")
function runAjax() {
    
    let xhr ;

    if(ventana.XMLHttpRequest) {
        xhr  =  new  XMLHttpRequest ( );
    } else {
        xhr =  new  ActiveXObject ( "Microsoft.XMLHTTP" ) ;
    }
    
    xhr.open("POST","controlador.php") ;


    
    let  formData = new FormData(form);

    

    xhr.send(formData);

}