<template>
<div class="itemDiv">
      <header>
  <div id="top">
	<h2>
		Blue People
    </h2>
	<ul>
      <li>
	  <a href="index.html">
          Agregar Item
	  </a>
      </li>
      <li>
	  <a href="portfolio.html">
          Crear URL
	  </a>
      </li>
      <li>
	  <a href="contact.html">
          Main
	  </a>
      </li>
    </ul>
  </div>
  </header>

    <div id="line2"> </div>
  <div id="wrap">
  <body>
    <h1>
      Agregar Item
    </h1>
	<div id="line"> </div>
    <div class="wrapper">
        <div class="row1">
            <label class="label">
              Título:    
            </label>
            <input type="text" id="titulo" class="textf"/>
        <div>		  </div>
          <label class="label">
            Fecha:
          </label>
          <input type="text" id="fecha" class="textf"/>
          <div>		  </div>
          <label class="label">
            Descripción:
          </label>
          <div>		  </div>
          <label class="label">
            Imagen Card:
          </label>
          <input type="text" id="imagenC" class="[textfbig, textf]"/>
          <div>		  </div>
          <label class="label">
            Imagen Detalle:
          </label>
          <input type="text" id="imagenD" class="[textfbig, textf]"/>
        </div>
        <div class="row2">
            <label class="label">
                Links Relacionados
            </label>
            <div>		  </div>
            <label class="label">
                Nombre:    
              </label>
              <input type="text" id="nombre" class="textf"/>
            <div>		  </div>
              <label class="label">
                URL:
              </label>
              <input type="text" id="url2" class="textf"/>
              <div>		  </div>
              <label class="label">
                Descripción:
              </label>
              <input type="text" id="descripcion2" class="textf"/>
              <div>		  </div>
              <input type="button" value="+" id="addItemInfo" class="clickable"/>
              <div>		  </div>
              <label class="label">
                Información Adicional
            </label>
            <div>		  </div>
            <label class="label">
                Atributo:    
              </label>
              <input type="text" id="atributo" class="textf"/>
            <div>		  </div>
              <label class="label">
                Valor:
              </label>
              <input type="text" id="valor" class="textf"/>
              <div>		  </div>
              <input type="button" value="+" id="addItemInfo" class="clickable"/>
          <div>		  </div>
          <label class="label">
            Tags:
          </label>
          <input type="text" id="Tags2" class="textfbig"/>
        </div>
    </div>
        <div>
        <input type="submit" value="Crear" id="submit2" class="clickable"/>
        </div>
  </body>
  </div>

</div>
</template>

<style scoped>
  .itemDiv{
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
export default({
    name: "Item",
    setup() {
        
    },
    created(){

    },
    methods(){

    }
})
</script>
