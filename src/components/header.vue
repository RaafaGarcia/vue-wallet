<template>
    <div name="NAVBAR" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark  mb-1 " >
            <div v-if="login == false" class="container">
                <a class="navbar-brand" href="#/">Work wallet</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#/about">Acerca de</a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>-->
                    </ul> 
                    
                </div>
            </div>

            <div v-else class="container " >
                    <a class="navbar-brand"  href="#/">Work wallet</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#/about">Acerca de</a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>-->
                    </ul>

                    
                    <div class=" dropdown pull-right ">
                         <span href="">
                             <a class="nav-link dropdown-toggle btn btn-outline-secondary" href="#" id="navbarDropdown" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Raafa G
                            <i class="fas fa-user"></i>
                            </a>
                            <div class="dropdown-menu btn btn-secondary" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item btn btn-secondary" href="#">
                                <i class="fas fa-user-cog"></i>   Perfil</a>
                            <a class="dropdown-item btn btn-secondary" href="#">
                                <i class="fas fa-chart-bar"></i>   Workflows</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item btn btn-secondary" v-on:click="dataComp.confirm=true" >
                                <i class="fas fa-sign-out-alt"></i>   Cerrar Sesión</a>
                            </div>
                            <!-- <label class="" for="" style="color:white">Cerrar Sesión</label> -->
                            </span>
                    <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>  -->
                    </div>
                </div>
            </div>
        </nav>
        
        <div v-if="dataComp.confirm" class="conten">
          <div  class="mod p-4">
                    <div class="header">
                        
                        <h2>¿Esta seguro de que desea cerrar la sesión actual?</h2>
                    </div>
                    <div class="contenido " style="left:50%">
                        
                         <button class="btn btn-outline-danger  btn-md mr-2 block" @click="dataComp.confirm=false;" >Cancelar</button>
                         <button class="btn btn-outline-success btn-md"  @click="dataComp.confirm=false;Cerrar()" >Aceptar</button>
                    </div>
        </div>
        </div>

        
    </div>
</template>
<script>
export default {
    props:{
        login:Boolean
    },
    data(){
        return {
            dataComp:{
                confirm:false,
                log:true,
                nav:0
            }
            
        }
    },
    methods:{
      Cerrar:function () {
            this.dataComp.log=false
            this.$emit('log', this.dataComp)
            
      }
    }
    
}
</script>
<style >
.mod{
 background: white;
 width: 82%;
 padding: 5px;
 border-radius: 10px;
 margin:  100px auto;
}
.conten{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 100;
}
</style>