<template>
    <div name="Project Home"  >
        <encabezado :login="true"/>
        <div class="container">

         <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item btn btn-outline-light " aria-current="page" ><a href="#/">WorkFlows/</a></li>
            <li class="breadcrumb-item active btn btn-outline-light" aria-current="page">{{projects[id].name}}</li>
        </ol>
        </nav>

        <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>  -->
        <label for="" style="color:white">
            {{projects[id]}}
            {{projec}}
        </label>
        </div>
    </div>
</template>
<script>
import encabezado from '../components/header.vue'
export default {
    props:{
        id:String,
        project:String
    },
    components:{
        encabezado
    },
    data(){
        return {
            dataComp:{
                log:true,
                nav:1,
                project:this.project
            }, 
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
            ],
            confirm:false,
            
        }
    },
    methods:{
        Workflows:function(){
            this.dataComp.nav=1
            this.$emit('log', this.dataComp)
        },
        nav:function(nav){
            this.dataComp.project=project
            this.$emit('log', this.dataComp)
        }

    }
    
}
</script>
<style >
.jump{
     background: url(https://ninetechs.000webhostapp.com/img/fondo2.jpg);
    background-size: 200px;
    
}



</style>