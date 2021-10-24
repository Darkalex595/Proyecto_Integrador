/* eslint-disable */
// eslint-disable-next-line
<template>
  <div class="hello">
    <div class="filtro">
      <div class="barra">
        <div class="search">
          <input type="text" id="searchterm" placeholder="Busqueda" >
          <button type="button" id="search" v-on:click="buscar()"> Buscar </button>
        </div>
      </div>
      <div class="anuncios">
        <div class="facts" v-for="(etiqueta, index) in etiquetas" v-bind:key="etiqueta">{{contadores[index]}} <br> {{etiqueta}}</div>
      </div>
    </div>
    <div class="opciones">
      <div class="productos" v-for="(producto, index) in productos" v-bind:key="producto" v-show="Slides[index]">
        <img class="logo" src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" v-on:click="cambiar(index)">
      </div>
        <a class="prev" v-on:click="showSlides(-1)">&#10094;</a>
        <a class="next" v-on:click="showSlides(1)">&#10095;</a>
    </div>
    <div class="posterior">

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
          <ul id="listaTags" >
            <li class ="tags" v-for="tag in tags" v-bind:key="tag">{{tag}}</li>
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
    background: linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(54,200,209,1) 43%, rgba(41,168,148,1) 100%);
    height: 30%;
    padding:0.5%
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
    font-size: 30px;
    float: left;
    border: solid;
    width: 30%;
    border-color: black;
    background-color: #29a894;
  }

  .anuncios{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1%;
    font-family: Impact, Helvetica, Arial, sans-serif;
    
  }
  .opciones{
    height: 40%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

  }
  .productos{
    background-color: black;
    width: fit-content;
    height: fit-content;
    padding: 1%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .logo{
    height: 250px;
    width: 300px;
    
  }
  .posterior{
    height: 50%;
    background-color:gray;
    border-style: groove;
    border-color: #29a894;
    display: flex;
    justify-content: space-between;;
  }
  #id{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoId{
    height: 200px;
    width: 300px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  }
  .prev,
  .next {
  cursor: pointer;
  position: absolute;
  top: 65%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: black;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  background-color: lightgray;
}
  .next {
    right: 20%;
    border-radius: 3px 0 0 3px;
  }
  .prev {
    left: 20%;
    border-radius: 3px 0 0 3px;
  }

  .post{
    width: 30%
  }
  #descripcion{
      font-family : 'Georgia', Times, Times New Roman, serif;
  }
  #extraInfo{
    background-color: #29a894;
    height: 60%;
    padding: 3%;
    text-align: left;
    font-family : Times, Times New Roman, serif;
  }
  #listaTags{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tags{
    background-color: #29a894;
    color: white;
    padding: 2%;
    border-radius: 25%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    font-family : 'Georgia', Times, Times New Roman, serif;
  }
}
</style>

<script>
import { getItem, getUrl } from '../api/routes';



export default{
  name: 'Principal',
  data(){
    return{
      productos: [],
      tags: [],
      contadores: [],
      etiquetas:[],
      titulo: "",
      fecha: "",
      descripcion: "",
      logoPos: 0,
      mostrar: false,
      Slides: []
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
        ];
        this.titulo = this.productos[0].titulo;
        this.fecha = this.productos[0].Fecha;
        this.descripcion = this.productos[0].Descripcion;
        this.tags= ["tag1", "tag2", "tag3", "tag4", "tag5"];
        this.contadores = ["99", "99", "99000"];
        this.etiquetas = ["Proyectos", "Lenguajes", "Lineas de código"];

        this.Slides[0] = true;
        for(var i=1; i< this.productos.length; i++){
          
          this.Slides[i] = false;
        }

         
  },
  methods:{
      buscar(){
        console.log(this.Slides[0])
      },
      cambiar(Num){
          this.mostrar = true;
      },
      showSlides(Atras){
        console.log(this.productos.length)
        console.log(this.Slides.length)
        console.log(this.logoPos);
        this.Slides[this.logoPos] = false;
        if(Atras == -1){
          this.logoPos -= 1;
        }
        else{
          this.logoPos += 1;
        }

        console.log(this.logoPos);

        if (this.logoPos >= this.productos.length) {this.logoPos = 0}
        if (this.logoPos < 0) {this.logoPos = this.Slides.length-1}

        this.Slides[this.logoPos] = true;
        this.titulo = this.productos[this.logoPos].titulo;
        this.fecha = this.productos[this.logoPos].Fecha;
        this.descripcion = this.productos[this.logoPos].Descripcion;
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

