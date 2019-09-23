<template>
  <div class="home ">
    <!-- <HelloWorld /> -->
    <encabezado :login="sesion" v-on:log="ses($event)" />

    <Login v-if="sesion==false" :login="sesion" v-on:log="ses($event)" />
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import encabezado from '@/components/header.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Login,
    encabezado
  },
  data(){
    return {
      sesion:true
    }
  },
  methods:{
    ses:function(event){
      this.sesion=event
    }
  }
}
</script>
