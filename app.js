// //zona segura
// //nativa
// document.addEventListener('DOMContentLoaded', function(){

    
//     //Recuperar por id
//     const nombre= $('#txtNombre').val();
//     const cedula= $('#txtCedula').val();
    
//     //cambiar/asignar
//     $('#txtNombre').val('otro fulano');
//     alert($('#txtNombre').val());
//     $('#txtNombre').val('Dario');
// });


//jquery
//zona segura

$(function(){
    //para prueba
    //$('input').css("background-color", "yellow")
    const Cliente= $('#txtCliente').val();
    const Sabor= $('#txtSabor').val();
    
    //cambiar/asignar
    $('#txtCliente').val('');
    // alert($('#txtNombre').val());
    $('#txtCliente').val('');

    //añadir evento click al boton
    $('#btnHecho').on('click', function(){
       //cuando hiciste click, se ejecuta aqui
        //alert('Hiciste click');
        $('#btnHecho').removeClass('btn-info').addClass('btn-primary');
        //recuperar los valores del formulario
        const Cliente= $('#txtCliente').val();
        const Sabor= $('#txtSabor').val();
        const Carga= $('#txtCarga').val();
        if(!Cliente.trim()){
            alert('complete este!!');
            $('#txtCliente').css('border-color','red').focus();
            return;
        }

        if(!Sabor.trim()){
            alert('complete este!!');
            $('#txtSabor').css('border-color','red').focus();
            return;
        }

        if(!Carga.trim()){
            alert('complete este!!');
            $('#txtCarga').css('border-color','red').focus();
            return;
        }
        alert('se ha registrado su pedido:)');
        
    });

});