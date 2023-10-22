$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000')
    $("#cpf").mask("999.999.999-99");
    $("#cep").mask("99.999-999");

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required:true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos.`)
                }
            
        }
    })

});