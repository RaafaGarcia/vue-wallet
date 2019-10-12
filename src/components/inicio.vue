<template>
    <div name="INICIO" class="container" >
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page" ><a href="#/">WorkFlows/</a></li>
        </ol>
        </nav>

        <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
        </nav>

        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav> -->

        <div class="row">
            
            <div  v-for="(project,index) in projects" :key="project.id" class="col-md-4 " >
                <a  >
                <button class="project story-project btn btn-outline-light animation  btn-block " type="link" id="capa"
                    :style="' border-left: 15px solid '+project.color"   v-on:click="spiner=true;red(project,index)"
                    >
                        <h3>{{project.name}}</h3>
                        <p>{{project.description}}</p>
                        <div :style="'border-radius:5px; border: 2px solid '+project.color">
                            integrantes: {{" "+project.integrantes}}
                        </div>
                        
                </button>
                  </a>
            </div>
          
                
        </div>

        <div class="animation"></div>
    </div>
</template>
<script>
import { setTimeout } from 'timers'
export default {
    props:{
        login:Boolean
    },
    data(){
        return {
            dataComp:{
                log:true,
                nav:1,
                project:{},
            },
            spiner:false,
            confirm:false,
            projects:
            [
                {
                    id:1,
                    name:"Toldo LFSD",
                    description: "Instalacion del toldo para la empresa FFSD",
                    color:"green",
                    integrantes:2

                },
                {
                    id:2,
                    name:"Test Name",
                    description: "Descripcion de test",
                    color:"orange",
                    integrantes:2

                }
            ]
        }
    },
    methods:{
        projectClick:function(project){
            this.dataComp.nav=2
            this.dataComp.project=project

            this.$emit('log', this.dataComp)
        },
        red:function(project,index){
            // alert("Hello! I am an alert box!!");
        this.$router.push(''+project.name+'/'+index)    
        },
        
        sleep: function(milisegundos){
          
            var comienzo = new Date().getTime();
            while (true) {
                if ((new Date().getTime() - comienzo) > milisegundos)
                break;
            }
        }

    },
   
    
}
</script>
<style >
.jump{
     background: url(https://ninetechs.000webhostapp.com/img/fondo2.jpg);
    background-size: 200px;
    
}
.project {
    color: white;
    background:#37393B ;
    border-radius: 10px;
    border-left-width: 8px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    float: left;
    margin: 0 14px 16px 0;
    height: 176px;
    opacity: 1;
    padding: 14px 16px 16px;
    position: static;
    
}


</style>