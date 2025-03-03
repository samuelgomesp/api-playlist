# Api de Playlist de músicas

   
## Descrição
Esta é uma Api de Playlists de Músicas no qual desenvolvi com o intuito de praticar meus conhecimentos em node.js e express, além de armazenar dados das playlists podemos manipular estes dados de diversas formas e desse modo adicionar, atualizar e excluir tanto as músicas dentro das playlists como as próprias playlists com os métodos GET, PUT e DELETE, a Api segue a estrutura Rest.

## Tecnologias utilizadas 
<div align="center"> 
<img align="left" alt="Node" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg">
<img align="left" alt="Javascript" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
<img align="left" alt="Express" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg">

</div>
<br/><br/>

## Inicialização

Esse projeto foi desenvolvido através do editor de códigos VSCode, e com as tecnologias citadas anteriormente.

Para instalação do VSCode visite o site https://code.visualstudio.com/

## Dependências

O projeto depende de frameworks como Express e Node.js para funcionar.

Para instalação das depêndencias digite o código abaixo no terminal no diretório do projeto e visite o site.

https://nodejs.org/pt/download

```bash
npm i express
```

## Funcionamento
É indicado que a api seja testada em uma plataforma de testes de api, no caso deste projeto utilizei o Thunder Cliente que é uma extensão do próprio VSCode para realizar estes testes, mas as rotas podem ser testadas no próprio servidor também. 

Para dar inicio e colocar o "servidor" no ar, digite ``` npm run dev ``` no terminal do VScode, isso irá subir o servidor que está configurado para "ouvir" ou seja funcionar na porta ``` 3000 ```

URL Base: http://localhost:3000

Após iniciar o servidor acessar as seguintes rotas:

Método GET:

``` /playlists ``` Utilizar para obter todas as playlists salvas

``` /playlists/:name ``` Utilizar para obter uma playlist especifica ":name" será o nome da playlist desejada

Método POST:

``` /playlists ``` Utilizar para cadastrar uma nova playlist, deverá ser passado nos parâmetros um objeto em formato json nos mesmo moldes da playlist primária salva no arquivo ./models/playlistModel

``` /playlists/:name/musics ``` Utilizar para cadastrar uma nova música em uma playlist, ":name" será o nome da playlist desejada, deverá ser passado nos parâmetros um objeto em formato json nos mesmo moldes das músicas dentro da playlist primária salva no arquivo ./models/playlistModel


Método PUT: <br>

``` /playlists/:name ``` Utilizar para atualizar uma playlist, ":name" será o nome da playlist desejada, deverá ser passado nos parâmetros um objeto em formato json nos mesmo moldes da playlist primária salva no arquivo ./models/playlistModel

``` /playlists/:name/tags ``` Utilizar para atualizar as tags de uma playlist que a caracterizam, ":name" será o nome da playlist desejada, deverá ser passado nos parâmetros um objeto em formato json nos mesmo moldes da playlist primária salva no arquivo ./models/playlistModel

Método DELETE: <br>

``` /playlists/:name ``` Utilizar para excluir uma playlist, ":name" será o nome da playlist desejada

``` /playlists/:name/musics/:title ``` Utilizar para excluir uma música de uma playlist especifica, ":name" será o nome da playlist desejada e ":title" o título da música

Com esse passo a passo você deve explorar o máximo desse projeto.

## 🔎 Status do Projeto

![Badge em Desenvolvimento](https://img.shields.io/badge/Status-Finalizado-green)
