function  runAjax ( ) {

    // 1. inicializar el objeto xhr
    let  xhr ;

    if ( ventana . XMLHttpRequest ) {
        xhr  =  new  XMLHttpRequest ( ) ;
    } else{
        xhr =  new  ActiveXObject ( "Microsoft.XMLHTTP" ) ;
    }

    // 2. cargar la petición
    xhr . open ( "POST" ,  "RUTA_CONTROLADOR" ) ;
    
    // 4. Escuchador de eventos para el xhr
    xhr . addEventListener ( "cargar" ,  evento  => {
        let  dataJSON  =  JSON . analizar ( evento . objetivo . respuesta ) ;
        consola . registro ( dataJSON ) ;
    } ) ;
    
    let  formData  =  new  FormData ( "OBJETO_FORMULARIO_OPCIONAL" ) ;
    
    // Adjuntar variables
    formData . añadir ( "CLAVE" ,  "VALOR" ) ;
    formData . añadir ( "CLAVE" ,  "VALOR" ) ;

    // 3. enviar la petición
    xhr . enviar ( formData ) ;
}