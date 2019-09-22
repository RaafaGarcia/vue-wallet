<template>
  <div class="hello">
    
    <p class="mensaje" v-if="mensaje">{{mensaje}}</p>
            <button @click="nuevoUsuario=true" >Nuevo</button>
            <table>
                <thead>
                    <th>ID</th><th>NOMBRE</th><th>DESCRIPCION</th><th>FOTO</th><th>ACCION</th>
                </thead>
                <tbody>
                    <tr v-for="paisaje in paisajes" :key="paisaje.id">
                        <td>{{paisaje.id}}</td>
                        <td>{{paisaje.nombre}}</td>
                        <td>{{paisaje.descripcion}}</td>
                        <td><img :src="'https://ninetechs.000webhostapp.com/img/'+paisaje.foto" width="100" alt=""></td>
                        <td>
                            <button @click="editarUsuario=true;elegirPaisajes(paisaje)">EDITAR</button>
                            <button @click="eliminarUsuario=true;elegirPaisajes(paisaje)">ELIMINAR</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- NUEVO -->
           <div class="contenedor" v-if="nuevoUsuario">
               <div class="modal">
                    <div class="header">
                        <button class="close" @click="nuevoUsuario=false">X</button>
                        <h1>Nuevo</h1>
                    </div>
                    <div class="contenido">
                         <input type="text" name="nombre" id="nombre" ><br>
                         <input type="text" name="descripcion" id="descripcion" ><br>
                         <img  v-if="url" :src="url" width="100"><br>
                         <input type="file" name="foto" ref="foto"  id="foto"  @change="verImagen()" ><br>
                         <button @click="nuevoUsuario=false;insertarPaisajes()" >CREAR</button>
                    </div>
               </div>
           </div>
           <!-- EDITAR -->
           <div class="contenedor" v-if="editarUsuario">
                <div class="modal">
                     <div class="header">
                         <button class="close" @click="editarUsuario=false">X</button>
                         <h1>Edicion</h1>
                     </div>
                     <div class="contenido">
                        <input type="text" name="enombre" id="enombre" v-model="elegido.nombre"><br>
                        <input type="text" name="edescripcion" id="edescripcion" v-model="elegido.descripcion"><br>
                        <div v-if="eurl">
                            <img   :src="eurl" width="100"><br>
                        </div>
                        <div v-else>
                            <img   :src="'img/'+elegido.foto" width="100"><br>
                        </div>
                        <input type="hidden" id="eid" name="eid" v-model="elegido.id">
                        <input type="file" name="efoto" ref="efoto"  id="efoto"  @change="everImagen()" ><br>
                        <button @click="editarUsuario=false;editarPaisajes()" >EDITAR</button>
                     </div>
                </div>
            </div>
            <!-- ELIMINAR -->
            <div class="contenedor" v-if="eliminarUsuario">
                    <div class="modal">
                         <div class="header">
                             <button class="close" @click="eliminarUsuario=false">X</button>
                             <h1>Eliminar</h1>
                         </div>
                         <div class="contenido">
                              <p>{{elegido.nombre}}</p>
                              <input type="hidden" id="did" name="did" v-model="elegido.id">
                              <button @click="eliminarUsuario=false; eliminarPaisajes()">Si</button>
                              <button @click="eliminarUsuario=false;">No</button>
                         </div>
                    </div>
                </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return {
      mensaje:"mensaje test",
      nuevoUsuario:false,
      editarUsuario:false,
      eliminarUsuario:false,
      paisajes:[],
      elegido:{},
      eurl:null,
      url:null,
    }
  },
  mounted:function(){
  this.mostrarPaisajes()
  },
  methods:{
    mostrarPaisajes:function(){
      let el=this
        axios.get("https://ninetechs.000webhostapp.com/api.php?accion=mostrar")
        .then(function(response){
            console.log(response)
            el.paisajes=response.data.paisajes
        })

    },
    verImagen:function(){
        var _this=this
        _this.file = _this.$refs.foto.files[0];
        _this.url = URL.createObjectURL(_this.file);
        
    },
    everImagen:function(){
        var _this=this
        _this.file = _this.$refs.efoto.files[0];
        _this.eurl = URL.createObjectURL(_this.file);
        
    },
    insertarPaisajes:function(){
        let formdata=new FormData()
        formdata.append("nombre",document.getElementById("nombre").value)
        formdata.append("descripcion",document.getElementById("descripcion").value)
        formdata.append("foto",document.getElementById("foto").files[0])

      
        
        console.log(formdata)
        axios.post("http://192.168.0.2:8080/MyWallet/api.php?accion=insertar",formdata)
        .then(function(response){
            console.log(response)
            app.mensaje=response.data.mensaje
            app.mostrarPaisajes()
        })
    },
    editarPaisajes:function(){
        let formdata=new FormData()
        formdata.append("eid",document.getElementById("eid").value)
        formdata.append("enombre",document.getElementById("enombre").value)
        formdata.append("edescripcion",document.getElementById("edescripcion").value)
        formdata.append("efoto",document.getElementById("efoto").files[0])

        
      
        console.log(formdata)
        axios.post("http://192.168.0.2:8080/MyWallet/api.php?accion=editar",formdata)
        .then(function(response){
            console.log(response)
            app.mensaje=response.data.mensaje
            app.mostrarPaisajes()
        })
    },
    elegirPaisajes:function(paisaje){
        app.elegido=paisaje
    },
    eliminarPaisajes:function(){
        let formdata=new FormData()
        formdata.append("did",document.getElementById("did").value)
                                
        console.log(formdata)
        axios.post("http://192.168.0.2:8080/MyWallet/api.php?accion=eliminar",formdata)
        .then(function(response){
            console.log(response)
            app.mensaje=response.data.mensaje
            app.mostrarPaisajes()
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
