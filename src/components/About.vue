<template>
  <div class="about">

  
    <encabezado :login="false"  />
    producto id
    <h1>This is an about page  {{id}}</h1>

  </div>
</template>

<script>

// @ is an alias to /src

import encabezado from '@/components/header.vue'

export default {
  name: 'home',
  props:{
    ['id']:Number
  },
  components: {
    
    encabezado,
   
  },
  data(){
    return {
      datos:{},
      sesion:false
    }
  },
  methods:{
    ses:function(event){
      this.datos=event
      this.sesion=event.log
    }
  }
}
</script>