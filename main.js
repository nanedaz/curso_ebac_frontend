$(document).ready(function(){
    var listaForm = $('#form-lista');
    var listaInput = $('#input-lista');
    var listaTarefas = $('#lista-tarefas');

    listaForm.submit(function(event){
        event.preventDefault();

        var textoLista = listaInput.val();
        if (textoLista !=="") {
            listaTarefas.append(`<li> ${textoLista} </li>`);
            listaInput.val("");
        }
    });
    
    listaTarefas.on("click", "li", function(){
        $(this).toggleClass("completa");
    });
});