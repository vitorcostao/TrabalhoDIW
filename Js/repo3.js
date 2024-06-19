const tela = document.querySelector('#repositorio');

function getApiGitHub() {
    fetch('https://api.github.com/users/vitorcostao/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(`Erro HTTP! Status: ${res.status}`);
            }

            let data = await res.json();

            data.forEach(repo => {
                // Formatar a data
                let createdAt = new Date(repo.created_at).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                // Criar elementos HTML dinamicamente para cada repositório
                let projeto = document.createElement('div');
                projeto.innerHTML = `
                    <div class="container">
                        <div class="row">
                            <div class="titulo col-12">
                                <h2>Repositório: ${repo.name}</h2>
                            </div>
                            <div class="content col-md-6">
                                <p class="text-primary">Descrição: </p>
                                <p>${repo.description || 'Sem descrição disponível'}</p>
                            </div>
                            <div class="contenti col-md-6">
                                <p class="text-primary">Data de criação: </p>
                                <p>${createdAt}</p>
                            </div>
                            <div class="contentii col-md-6">
                                <p class="text-primary">Linguagem: </p>
                                <p>${repo.language || 'Não especificada'}</p>
                            </div>
                            <div class="contentiii col-md-6">
                                <p class="text-primary">Link de acesso:</p>
                                <a class="text-dark" href="${repo.html_url}">${repo.html_url}</a>
                            </div>
                            <div class="content col-md-6">
                                <p class="text-primary">Tópicos:</p>
                                <ul class="ListasT">
                                    <li class="T3">Linguagem C</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
                
                tela.appendChild(projeto);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
        });
}

getApiGitHub();