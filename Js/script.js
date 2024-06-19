
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

/*Carousel Site Pessoal*/

const Carousel = document.querySelector('.carousel-inner');
let CarouselData;

function getCarouselDataApi(){
    fetch('http://localhost:3000/sugeridos')
    .then(async res => {
        if (!res.ok) {
            throw new Error(res.status);
        }

        CarouselData = await res.json();

        let project = document.createElement('div')
        console.log(CarouselData)

        project.innerHTML = `      
                <div class="carousel-item active">
                    <img src="${CarouselData[0].urlI}" class="d-block" alt="Imagem 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${CarouselData[0].title}</h5>
                        <p> <a href="${CarouselData[0].urlC}" class="text-white">${CarouselData[0].descricao}</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${CarouselData[1].urlI}" class="d-block" alt="Imagem 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${CarouselData[1].title}</h5>
                        <p> <a href="${CarouselData[1].urlC}" class="text-white">${CarouselData[1].descricao}</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${CarouselData[2].urlI}" class="d-block" alt="Imagem 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${CarouselData[2].title}</h5>
                        <p> <a href="${CarouselData[2].urlC}" class="text-white">${CarouselData[2].descricao}</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${CarouselData[3].urlI}" class="d-block" alt="Imagem 4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${CarouselData[3].title}</h5>
                        <p> <a href="${CarouselData[3].urlC}" class="text-white">${CarouselData[3].descricao}</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${CarouselData[4].urlI}" class="d-block" alt="Imagem 5">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${CarouselData[4].title}</h5>
                        <p> <a href="${CarouselData[4].urlC}" class="text-white">${CarouselData[4].descricao}</a></p>
                    </div>
                </div>`;

            Carousel.appendChild(project);
    })
}

getCarouselDataApi();




