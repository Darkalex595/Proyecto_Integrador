/* eslint-disable */
// eslint-disable-next-line
<template>
  <div class="hello">
    <div class="filtro">
      <div class="tagsSup">
        <a>TAG 1</a>
        <a>TAG 2</a>
        <a>TAG 3</a>
      </div>
      <div class="barra">
        <div class="search">
          <input type="text" id="searchterm" placeholder="Busqueda" >
          <button type="button" id="search" v-on:click="getAllUrl()"> Buscar </button>
        </div>
      </div>
      <div class="anuncios">
        <div class="facts">99 <br> Proyectos</div>
        <div class="facts">99 <br> Lenguajes</div>
        <div class="facts">99,000 <br> lineas de código</div>
      </div>
    </div>
    <div class="opciones">
      <div class="productos" v-for="(producto, index) in productos" v-bind:key="producto">
        <img class="logo" src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" v-on:click="cambiar(index)">
      </div>
    </div>
    <div class="posterior" v-show="mostrar">

      <div id="id" class="post">
        <img class="logoId" src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png">
      </div>

      <div id="descripcion" class="post">
        <h2> Titulo: {{titulo}} </h2>
        <h2> Fecha: {{fecha}} </h2>

        <div id="extraInfo">
          {{descripcion}}
        </div>

      </div>

      <div id = "tagsInf" class="post">
        <h2>Tags</h2>
        <div id="divTags">
          <ul id="listaTags" v-for="tag in tags" v-bind:key="tag">
            <li class ="tags">{{tag}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

/* --------------------------------------------------------- */
<style scoped>
@media screen and (min-width: 320px) and (max-width: 480px){
  .hello{
    height: 100%;
    width: 100%
  }
  .filtro{
    background-color: aqua;
  }
  .tagsSup{
    width: 100%;
  }
  .anuncios{
    display: flex;
    flex-direction: row;
  }
  .posterior{
    background-color:#88cc00
  }
}
/* --------------------------------------------------------- */
@media screen and (min-width: 481px) and (max-width: 820px){
  .hello{
    height: 100%;
    width: 100%
  }
  .filtro{
    background-color: aqua;
  }
  .tagsSup{
    width: 100%;
  }
  .anuncios{
    display: flex;
    flex-direction: row;
  }
  .posterior{
    background-color:#88cc00
  }
}
/* --------------------------------------------------------- */
@media screen and (min-width: 821px) and (max-width: 1024px){
  .hello{
    height: 100%;
    width: 100%;
  }
  .filtro{
   background-color: aqua;
  }
  .tagsSup{
    width: 100%;
  }
  .anuncios{
    display: flex;
    flex-direction: row;
  }
  .posterior{
    background-color:#88cc00
  }
}
/* --------------------------------------------------------- */
@media screen and (min-width: 1025px) and (max-width: 1200px){
  .hello{
    height: 100%;
    width: 100%;
  }
  .filtro{
    background-color: aqua;
  }

  .tagsSup{
    width: 100%;
  }
  .anuncios{
    display: flex;
    flex-direction: row;
  }

  .posterior{
    background-color:#88cc00;
  }
}
/* --------------------------------------------------------- */
@media screen and (min-width: 1201px){
  .hello{
    height: 100%;
    width: 100%;
    background-image: url("../assets/css/bush.png");
    background-attachment: fixed;
  }
  .filtro{
    background-color: #4aaaa5;
    height: 30%;
  }
  .tagsSup{
    width: 100%;
    text-align: right;
  }
  a{
    margin: 2%
  }
  .barra{
    height: 40%;
  }
  .search{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #searchterm{
    width: 50%;
    height: 40%;
  }
  #search{
    height: 40%;
  }
  .facts{
    color:lightgrey;
    font-size: 30px;
  }
  .anuncios{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2%;
  }
  .opciones{
    height: 30%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
  .productos{
    background-color: black;
    width: fit-content;
    height: fit-content;
    padding: 1%;
  }
  .logo{
    height: 150px;
    width: 250px;
  }
  .posterior{
    height: 50%;
    background-color:#88cc00;
    display: flex;
    justify-content: space-between;
    margin-left: 1%;
    margin-right: 1%;
  }
  #id{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoId{
    height: 150px;
    width: 200px;
  }
  .post{
    width: 30%
  }
  #extraInfo{
    background-color: #b37700;
    height: 60%;
    padding: 3%;
    text-align: left;
  }
  #divTags{
    
  }
  #listaTags{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tags{
    background-color: blue;
    color: white;
    padding: 2%;
    border-radius: 25%;
  }
}
</style>

<script>
import { createTag } from '../api/routes';

export default{
  name: 'Principal',
  data(){
    return{
      productos: [],
      tags: [],
      titulo: "",
      fecha: "",
      descripcion: "",
      logoPos: 0,
      mostrar: false
    }
  },
  async created(){
        this.productos = [
          {
            logo: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png",
            titulo: "Generico 1",
            Fecha: "01/01/2021",
            Descripcion: "No hay descripcion",
          },
          {
            logo: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png",
            titulo: "Generico 2",
            Fecha: "01/01/2021",
            Descripcion: "No hay descripcion"
          },
          {
            logo: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png",
            titulo: "Generico 3",
            Fecha: "01/01/2021",
            Descripcion: "No hay descripcion"
          },
          {
            logo: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png",
            titulo: "Generico 4",
            Fecha: "01/01/2021",
            Descripcion: "No hay descripcion"
          },
        ]
        this.titulo = this.productos[0].titulo;
        this.fecha = this.productos[0].Fecha;
        this.descripcion = this.productos[0].Descripcion;
        this.tags= ["tag1", "tag2", "tag3", "tag4", "tag5"]

        
  },
  methods:{
      buscar(){
        alert(this.logoPos)
      },
      cambiar(Num){
          this.mostrar = true;
          this.logoPos = Num
          this.titulo = this.productos[Num].titulo;
          this.fecha = this.productos[Num].Fecha;
          this.descripcion = this.productos[Num].Descripcion;
      },
      async getAllUrl() {
        const body = {
          "tagName": "pruebaAxios3333"
        };
        const result = await createTag(body);
        console.log('ALL RESULT', result);

      }
  }
}
</script>

