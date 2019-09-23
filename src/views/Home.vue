<template>
  <div class="home ">
    <!-- <HelloWorld /> -->
    <encabezado/>

    <Login/>
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
  }
}
</script>
