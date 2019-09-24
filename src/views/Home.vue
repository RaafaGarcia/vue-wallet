<template>
  <div class="home ">
    <!-- <HelloWorld /> -->
    <!-- <label for="" style="color:white">{{log}}</label> -->
    <encabezado :login="log" v-on:log="ses($event)" />

    <Login v-if="nav== 0 && log == false" :login="log" v-on:log="ses($event)" />

    <inicio v-if="nav== 1 && log == true" :login="log" v-on:log="ses($event)" />

    <projectPage v-if="nav == 2 && log == true" :project="datos.project" v-on:log="ses($event)"/>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import encabezado from '@/components/header.vue'
import inicio from '@/components/inicio.vue'
import projectPage from '@/components/projectPage.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Login,
    encabezado,
    inicio,
    projectPage
  },
  data(){
    return {
      datos:{},
      nav:0,
      log:false,
    }
  },
  methods:{
    ses:function(event){
      this.datos=event
      this.nav=event.nav
      this.log=event.log
    }
  }
}
</script>
