<template>
    <div class="container" >
    
        <div class="row trans mt-5">
            <div class="col-md-3">

            </div>
            <div class="col-md-6">
                <form class="modal-content animate mb-5" style="border-radius:10px;" action="/action_page.php">
                    <div class="imgcontainer">
                        <!-- <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span> -->
                        <img src="../assets/149071.png" width="100" alt="Avatar" class="avatar">
                    </div>

                    <div class="container p-4 trans" >
                        <label for="uname"><b>Nombre de Usuario</b></label>
                        
                        <input type="text" class="form-control" placeholder="Ingresar Usuario" v-on:keyup.enter="Iniciar()" name="uname" required v-model="dataComp.user">

                        <label for="psw"><b>Contraseña</b></label>
                        <input type="password" class="form-control" placeholder="Ingresar Contraseña" v-on:keyup.enter="Iniciar()" name="psw" required v-model="dataComp.pass">
                            
                        <span class="btn btn-success btnEntrar" v-on:click="Iniciar()">Iniciar Sesión</span>
                        <label for="" style="color:red">{{dataComp.mensaje}}</label>
                        
                    </div>

                    <div class="container" style="background-color:#f1f1f1">
                    <!--     -->
                    <span class="psw mb-3">Olvidaste la <a href="#">contraseña?</a></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  props:{
    usuario:String,
    contraseña:String,
    recordar:Boolean,
    
  },
  components: {
    
  },
    data(){
      return{
        
        dataComp:
        {
        user:this.usuario,
        pass:this.contraseña,
        log:false,
        nav:0,
        mensaje:null,
        }
      }
    },
    
    methods:{
      Iniciar:function () {
        if (this.dataComp.user=="admin" && this.dataComp.pass == "root") {
          this.dataComp.mensaje = ""
          this.dataComp.log=true
          this.dataComp.nav=1

          
                /*Captura de datos escrito en los inputs*/        
                var name = this.dataComp.user
                var pass = this.dataComp.pass
                /*Guardando los datos en el LocalStorage*/
                localStorage.setItem("cuenta", name);
                localStorage.setItem("passwort", pass);
                localStorage.setItem("log", true);
                
         
            this.$emit('log', this.dataComp)
            
        }else{
          
          this.mensaje = "Error de inicio de sesión"
          localStorage.setItem("log", false);
        }
      }
    }
}
</script>
<style >
input[type=text], input[type=password] {
  width: 100%;
  height: 15%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
.btnEntrar {
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}



/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}



span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */

/* Modal Content/Box */

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}



/* Change styles for span and cancel button on extra small screens */

  .cancelbtn {
     width: 100%;
  }
  
  
</style>