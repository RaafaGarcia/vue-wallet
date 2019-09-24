<template>
    <div name="Project Home" class="container" >
        

         <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="btn btn-outline-light" >Workflows</a></li>
            <li class="breadcrumb-item active btn btn-outline-light" aria-current="page">{{project.name}}</li>
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
            {{project}}
        </label>
    </div>
</template>
<script>
export default {
    props:{
        project:Object
    },
    data(){
        return {
            dataComp:{
                log:true,
                nav:1,
                project:{}
            },
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