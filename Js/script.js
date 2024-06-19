
/*Perfil Site pessoal*/
const perfil = document.querySelector('#perfil');
function getApiGitHub() {
    fetch('https://api.github.com/users/vitorcostao')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            let project = document.createElement('div');

            project.innerHTML = `
                    <div class="container">
                    <div class="row">
                        <div class="titulo col-12">
                            <h2>Perfil</h2>
                        </div>
                        <div class="col-md-6">
                            <img class="perfil img-fluid" src="${data.avatar_url}" alt="FotoPerfil">
                        </div>
                        <div id="descricao" class="col-md-6">
                            <p class="text-primary">${data.name}</p>
                            <p>${data.bio}</p>
                            <p><b>Localização: </b>${data.location}</p>
                            <p><b>Instagram: </b> <a href="${data.blog}"> ${data.blog} </a>
                            </p>
                            <img id="images" class="image-fluid" src="/Css/outros/instagram.jpg" alt="Insta">
                        </div>
                    </div>
                </div> `;

            perfil.appendChild(project);
        })
}
getApiGitHub();



/*Colegas Site Pessoal*/

const colegas = document.querySelector('#colegas');

var dados
function getJSONData(){
    fetch('http://localhost:3000/colegas')
    .then(async res => {
        if (!res.ok) {
            throw new Error(res.status);
        }

        dados = await res.json();

        console.log(dados);
        let project = document.createElement('div')

        project.innerHTML = `<div class="container">
                <div class="row">
                    <div class="titulo col-12">
                        <h2>Colegas de trabalho</h2>
                    </div>
                    <div class="colega col-md-2">
                        <img src="${dados[0].UrlFoto}" id="C1">
                        <h5 class="text-primary">${dados[0].nome}</h5>
                    </div>
                    <div class="colega col-md-2">
                        <img src="${dados[1].UrlFoto}" id="C2">
                        <h5 class="text-primary">${dados[1].nome}</h5>
                    </div>
                    <div class="colega col-md-2">
                        <img src="${dados[2].UrlFoto}" id="C3">
                        <h5 class="text-primary">${dados[2].nome}</h5>
                    </div>
                    <div class="colega col-md-2">
                        <img src="${dados[3].UrlFoto}" id="C4">
                        <h5 class="text-primary">${dados[3].nome}</h5>
                    </div>
                </div>
            </div>`
        
        colegas.appendChild(project);
    
    })
}

getJSONData();




