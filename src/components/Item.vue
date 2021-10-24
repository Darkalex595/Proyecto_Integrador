<template>
    <main>
        <section class="w-75 center ">
            <h1>Agregar Item</h1>
            <hr class="w-75">

            <h1 v-if="error" class="error-message">Lo siento, hubo un error: {{ error }}</h1>

            <div class="flex space-around">
                <aside class="w-50">
                    <div class="flex space-around space-row">
                        <p class="w-40 text-right">Título *</p>
                        <input class="w-50" type="text" id="titulo" v-model="titulo"/>
                    </div>
                    <div class="flex space-around space-row">
                        <p class="w-40 text-right">Fecha *</p>
                        <input class="w-50" type="date" id="titulo" v-model="fecha"/>
                    </div>
                    <div class="flex space-around space-row">
                        <p class="w-40 text-right">Descripción *</p>
                        <input class="w-50" type="text" id="titulo" v-model="descripcion"/>
                    </div>
                    <div class="flex space-around space-row">
                        <p class="w-40 text-right">Imagen card *</p>
                        <input class="w-50"  type="text" id="titulo" v-model="imagenCard"  />
                    </div>
                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">Imagen detalle *</p>
                        <input class="w-50"  type="text" id="titulo" v-model="imagenDetalle"  />
                    </div>
                </aside>

                <aside class="w-50">
                    <div class="flex space-around space-row">
                        <p>Liks Relacionados</p>
                    </div>
                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">Nombre</p>
                        <input class="w-50"  type="text" id="titulo" v-model="nombreLink"  />
                    </div>
                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">URL:</p>
                        <input class="w-50"  type="text" id="titulo" v-model="url"/>
                    </div>
                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">Descripción</p>
                        <input  class="w-50" type="text" id="titulo" v-model="descripcionLink"  />
                    </div>

                    <div class="flex space-around space-row">
                        <p>Información adicional</p>
                    </div>

                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">Atributo</p>
                        <input class="w-50"  type="text" id="titulo" v-model="infoAtributo"  />
                    </div>

                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">Valor</p>
                        <input class="w-50"  type="text" id="titulo" v-model="info"  />
                    </div>


                    <div class="flex space-around space-row">
                        <p  class="w-40 text-right">Tags *</p>
                        <input class="w-50" type="text" id="tags" v-model="tags"  />
                    </div>

                    <div class="space-row" style="margin-bottom: 15px;">
                        <button id="submit-button" type="button" v-on:click="createItem()"> Crear item </button>
                    </div>
                </aside>
            </div>

            <h1 v-if="created" style="padding-bottom: 15px;">Se creó el item exitosamente</h1>
            
        </section>
    </main>
</template>

<style scoped>

    main {
        background-image: url("../assets/css/bush.png");
        height: 100%;
        font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
    }

    section {
        background-color: white;
    }

    h1 {
        font-family: 'Georgia', Times, Times New Roman, serif;
        color: #4aaaa5;
        padding: 0px 20px;
    }

    p {
        font-size: 20px;
        font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
        color: #777777;
    }

    input {
        height: 30px;
    }

    .error-message {
        color:red;
    }

    .flex {
        display: flex;
    }

    .space-between {
        justify-content: space-between;
    }

    .space-around{
        justify-content: space-around;
    }

    .center {
        margin: 0 auto;
    }

    .text-right {
        text-align: right;
    }

    .w-40 {
        width: 40%;
    }

    .w-50 {
        width: 50%;
    }

    .w-75 {
        width: 75%;
    }

    .w-80 {
        width: 80%;
    }

    .space-row {
        margin-top: 8px;
    }

    #submit-button {
        color: white;
        background-color: #4aaaa5;
    }

    #tags {
        height: 50px;
    }

</style>

<script>
    import { createItem } from '../api/routes';
    export default ({
        name: "Item",
        data(){
            return {
                titulo: "",
                fecha: "",
                descripcion: "",
                imagenCard: "",
                imagenDetalle: "",
                nombreLink: "",
                url: "",
                descripcionLink: "",
                infoAtributo: "",
                info: "",
                tags: "",
                error: null,
                created: false,
            }
        },
        methods: {
            async createItem() {
                console.log('CREATE ITEM');
                if (
                    this.titulo &&
                    this.fecha &&
                    this.descripcion &&
                    this.imagenCard &&
                    this.imagenDetalle &&
                    this.tags
                ) {
                    const tagsArray = this.tags.split(', ');
                    const body = {
                        "titulo": this.titulo,
                        "fecha": this.fecha,
                        "descripcion": this.descripcion,
                        "imagenCard": this.imagenCard,
                        "imagenDetalle": this.imagenDetalle,
                        "nombreLink": this.nombreLink,
                        "url": this.url,
                        "descripcionLink": this.descripcionLink,
                        "infoAtributo": this.infoAtributo,
                        "info": this.info,
                        "tags": tagsArray
                    };
                    const result = await createItem(body);
                    if (result) {
                        this.error = null;
                        this.created = true;
                    } else {
                        this.error = "Algo fallo al crear el item, intenta de nuevo por favor";
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
