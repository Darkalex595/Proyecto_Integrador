<template>
<div class="URLDiv">
  <div id="line2"> </div>
  <div id="wrap">
  <body>
    <h1>
      Crear URL
    </h1>

    <h1 v-if="created">Se creó el url exitosamente</h1>
    <h1 v-if="error" class="error-message">Lo siento, hubo un error: {{ error }}</h1>

	<div id="line"> </div>
          <div style="text-align: left">
            <label class="label">
              URL:    
            </label>
            <label class="label" id="showroom">
              showroom.bp.com/ 
            </label>
            <input type="text" id="url" class="textf" v-model="urlName"/>
          </div>
        <div style="text-align: left">		  
          <label class="label">
            Vigencia:
          </label>
          <input type="date" id="vigencia" class="textf" v-model="vigencia"/>
        </div>
        <div style="text-align: left">		  
          <label class="label">
            Contador 1:
          </label>
          <input type="text" id="contador" class="textf" v-model="dato1" placeholder="#"/>
          <input type="text" id="contador" class="textf" v-model="etiqueta1" placeholder="Etiqueta"/>
        </div>
        <div style="text-align: left">		  
          <label class="label">
            Contador 2:
          </label>
          <input type="text" id="contador" class="textf" v-model="dato2" placeholder="#"/>
          <input type="text" id="contador" class="textf" v-model="etiqueta2" placeholder="Etiqueta"/>
        </div>
        <div style="text-align: left">		  
          <label class="label">
            Contador 3:
          </label>
          <input type="text" id="contador" class="textf" v-model="dato3" placeholder="#"/>
          <input type="text" id="contador" class="textf" v-model="etiqueta3" placeholder="Etiqueta"/>
        </div>
        <div style="text-align: left">		  
          <label class="label">
            Items:
          </label>
        </div>
        <div style="text-align: left">		  
          <input type="button" value="+" id="addItem" class="clickable"/>
          <input type="text" id="Items" class="textf" v-model="items"/>
        </div>
        <div style="text-align: left">		  
          <label class="label">
            Tags:
          </label>
        </div>
        <div style="text-align: left">		  
          <input type="button" value="+" id="addItem" class="clickable"/>
          <input type="text" id="Tags" class="textf" v-model="tags"/>
        </div>
        <div>
            <button id="submit-button" type="button" v-on:click="createUrl()"> Crear url </button>
        </div>
        
  </body>
  
  </div>

  
</div>
</template>

<style scoped>

    #submit-button {
        color: white;
        background-color: #4aaaa5;
    }
  .URLDiv{
    background-image: url("../assets/css/bush.png");
    height: 100%
  }
  body{
    font-family : 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
    margin : 0;
    padding : 0;
    
    } 

    #wrap{
      width : 960px;
      height : 550px;
      margin : 25px auto;
      background-color : white;
      overflow : hidden;
      padding : 0px 0px;
  
    }

    #top{
        background-color : white;
        display : flex;
    }

    .error-message {
        color:red;
    }

    h1{
    font-family : 'Georgia', Times, Times New Roman, serif;
    color : #4aaaa5;
    padding : 0px 20px;
    }

    h2{
    font-family : 'Georgia', Times, Times New Roman, serif;
    background-color : #4aaaa5;
    font-size : 25px;
    margin : auto;
    padding : 15px 20px;
    color : white;
    }

    ul {
    list-style : none;
    margin : 0;
    padding : 0px 262px;
    overflow : auto;
    }

    ul > li{
    float : right;
    padding : 22px 20px;
    font-size : 13px;
    color : #777777;
    }

    ul > li:hover{
    cursor : pointer;
    color : white;
    background-color : #4aaaa5;
    }


    #line{
    display : block;
    height : 10px;
    width : 96%;
    border : 0;
    border-top : 3px solid #ccc;
    margin : 15px auto;
    padding : 0;
    }

    #line2{
    display : block;
    height : 10px;
    border : 0;
    border-top : 3px solid #ccc;
    }

    .label{
    padding : 10px 20px;
    font-size : 20px;
    font-family : 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
    color : #777777;
    }

    .wrapper {
    display: flex; 
    justify-content: space-around;
    }

    .textf{
    margin: 5px 0px;
    }

    .label{
    margin: 5px 0px;
    }

    #titulo{
    margin: 0px 5.6px;
    }

    #descripcion{
    margin: 5px 28.8px;
    }

    #imagenC{
    margin: 5px 18px;
    }

    #imagenD{
    margin: 5px 0px;
    }

    #Tags2{
    margin : 10px 0px;
    padding-right : 50px;
    padding-bottom : 50px;
    }

    #addItemInfo{
    margin : 5px 90%;
    }

    #nombre{
    margin-left: 33px ;
    }

    #url2{
    margin-left: 64px;
    }

    #valor{
    margin-left: 24px;
    }

    #url{
    padding-right: 50px;
    margin-left: -21px;
    }

    #addItem{
    margin-left: 50px;
    }

    #vigencia{
    margin-left: 22.7px;
    }

    #showroom{
    margin-left: 38px;
    }

    #Items{
    margin : 10px 20px;
    padding-right : 75px;
    padding-bottom : 100px;
    }

    .textfbig{
    margin : 10px 20px;
    padding-right : 75px;
    padding-bottom : 75px;
    }

    #Tags{
    margin : 10px 20px;
    }

    #submit{
    margin : 10px 90%;
    padding : 5px 20px;
    color : white;
    background-color : #4aaaa5;
    }

    #submit2{
    margin : 24px 90%;
    padding : 5px 20px;
    color : white;
    background-color : #4aaaa5;
    }

    a{
    color: #4aaaa5;
    padding : 22px;
    }

    a:hover{
    cursor : pointer;
    color : white;
    background-color : #4aaaa5;
    }

</style>

<script>

import { createUrl } from '../api/routes';
export default({
    name: "Url",
    data() {
      return {
        error: null,
        created: false,
        urlName: '',
        vigencia: '',
        items: '',
        tags: '',
        dato1: '',
        etiqueta1: '',
        dato2: '',
        etiqueta2: '',
        dato3: '',
        etiqueta3: ''
      }
    },
    methods: {
      async createUrl() {
        console.log('CREATE URL');
        if (
            this.urlName &&
            this.vigencia &&
            this.items &&
            this.tags
        ) {
            const tagsArray = this.tags.split(', ');
            const itemsArray = this.items.split(', ');
            const contadores = [];
            if (this.dato1 && this.etiqueta1){
                contadores.push({
                    dato: this.dato1,
                    etiqueta: this.etiqueta1
                });
            }
            if (this.dato2 && this.etiqueta2){
                contadores.push({
                    dato: this.dato2,
                    etiqueta: this.etiqueta2
                });
            }
            if (this.dato3 && this.etiqueta3){
                contadores.push({
                    dato: this.dato3,
                    etiqueta: this.etiqueta3
                });
            }
            const body = {
                urlName: this.urlName,
                vigencia: this.vigencia,
                contadores: contadores,
                items: itemsArray,
                tags: tagsArray
            };
            const result = await createUrl(body);
            if (result) {
                this.error = null;
                this.created = true;
            } else {
                this.error = "Algo fallo al crear el url, intenta de nuevo por favor";
                this.created = false;
            }
        } else {
            this.error = "No hay datos suficientes";
            this.created = false;
        }
      }
    }
})
</script>
