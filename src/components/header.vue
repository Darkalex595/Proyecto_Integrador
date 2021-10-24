<template>
    <div class="URLDiv">
  <header>
  <div id="top">
	<h2>
    <router-link class="links" to="/"> Blue People </router-link>
    </h2>
	<ul>
      <li>
        <router-link class="links" to="/item"> Agregar Item </router-link>
      </li>
      <li>
	      <router-link class="links" to="/url"> Crear URL </router-link>
      </li>
    </ul>
  </div>
  </header>
    </div>
</template>

<style scoped>
#top{
  background: linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(54,200,209,1) 43%, rgba(41,168,148,1) 100%);
  display : flex;
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

a{
  color: white;
  padding : 22px;
  text-decoration: none;
}

a:hover{
  cursor : pointer;
  color : white;
  background-color : #4aaaa5;
}
</style>

<script>

export default({
    data() {
        
    },
})
</script>
