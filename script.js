// Your public key
// 6bc464d7e7269863a095a15b748c28b8
// Your private key
// 7807bd9cf71fca12a9e73edb789caf82b5485b8e

let endpoint = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6bc464d7e7269863a095a15b748c28b8&hash=32f084cd8cec69f9cf6d06143942c54c"
let container = document.getElementById("container")
let lista = document.getElementById("lista")
let descricao = document.getElementById("desc")

fetch(endpoint)
.then(resposta=>resposta.json())
.then(dados=>{
    resultados = dados.data.results
    console.log(resultados)
    resultados.forEach(postagem =>{
        let item = document.createElement('li');
        item.textContent = postagem.name
        lista.appendChild(item)
        let imagem = document.createElement('img');
        imagem.src = postagem.thumbnail.path + "." + postagem.thumbnail.extension
        item.appendChild(imagem)
        let descricao = document.createElement('p')
        descricao.textContent = postagem.description
        lista.appendChild(descricao)
    })
   })