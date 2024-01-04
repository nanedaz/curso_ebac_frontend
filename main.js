
$(document).ready(function(){
    const nomeElement = $('#nome');
    const avatarElement = $('#avatar');
    const userElement = $('#user');
    const repositorioElement = $('#repositorio');
    const seguidoresElement = $('#seguidores');
    const seguindoElement = $('#seguindo');
    const perfilElement = $('#perfil');
    const endpoint = 'https://api.github.com/users/anameneiro';

    fetch(endpoint)
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        const nome = json.name;
        const user = json.login;
        const avatar = json.avatar_url;
        const repositorio = json.public_repos;
        const seguidores = json.followers;
        const seguindo = json.following;
        const perfil = json.html_url;

        nomeElement.text(nome);
        userElement.text(user);
        avatarElement.attr('src', avatar);
        repositorioElement.text(repositorio);
        seguidoresElement.text( seguidores);
        seguindoElement.text(seguindo);
        perfilElement.attr('href', perfil);
    })
    .catch(function(error) {
        console.log("Erro ao obter dados do GitHub:", error);
    });
});

