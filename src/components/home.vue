<template>
  <div class="home ">
    <encabezado :login="log" @log="ses($event)"></encabezado>
    <login v-if="log == false" @log="ses($event)"/>
    
    <inicio v-if="log == true"  @log="ses($event)"/>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import encabezado from '@/components/header.vue'
import inicio from '@/components/inicio.vue'
// import projectPage from '@/components/projectPage.vue'

export default {
  components: {
    // HelloWorld,
    Login,
    encabezado,
    inicio,
    // projectPage
  },
  data(){
    return {
      datos:{},
      nav:0,
      log:false,
      cuenta:"",
      pass:""
    }
  },
  methods:{
    ses:function(event){
      this.datos=event
      this.nav=event.nav
      this.log=event.log
/*Funcion de Capturar, Almacenar datos y Limpiar campos*
/*Funcion Cargar y Mostrar datos*/
        /*Obtener datos almacenados*/
        /*Mostrar datos almacenados*/      


    }
  },
  created(){
    try {
        if (localStorage.getItem("cuenta")) {
             var nombre = localStorage.getItem("cuenta");
        var apellido = localStorage.getItem("passwort");
        this.log=true
        this.cuenta=nombre
        this.pass=apellido
        }else{
        this.log=false
        this.cuenta=""
        this.pass=""
        }
       
    } catch (error) {
        
    }
        
  },
  updated(){
    try {
        if (localStorage.getItem("cuenta")) {
             var nombre = localStorage.getItem("cuenta");
        var apellido = localStorage.getItem("passwort");
        this.log=true
        this.cuenta=nombre
        this.pass=apellido
        }else{
        this.log=false
        this.cuenta=""
        this.pass=""
        }
       
    } catch (error) {
        
    }
  }
}
</script>
