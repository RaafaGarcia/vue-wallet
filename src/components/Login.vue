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
                        
                        <input type="text" class="form-control" placeholder="Ingresar Usuario" name="uname" required v-model="user">

                        <label for="psw"><b>Contraseña</b></label>
                        <input type="password" class="form-control" placeholder="Ingresar Contraseña" name="psw" required v-model="pass">
                            
                        <span class="btn btn-success btnEntrar" v-on:click="Iniciar()">Iniciar Sesión</span>
                        <label for="" style="color:red">{{mensaje}}</label>
                        <br>
                        <label>
                          <div class="custom-control custom-checkbox" >
                            <input type="checkbox" class="custom-control-input" v-model="rec" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1" >Recordarme</label>
                          </div>
                        </label>
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
    login:Boolean
  },
    data(){
      return{
        user:this.usuario,
        pass:this.contraseña,
        rec:this.recordar,
        log:this.login,
        mensaje:null
      }
    },
    
    methods:{
      Iniciar:function () {
        if (this.user=="admin" && this.pass == "root") {
          this.mensaje = ""
            this.$emit('log', true)
            
        }else{
          
          this.mensaje = "Error de inicio de sesión"
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

span:hover {
  opacity: 0.8;
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


.trans{
background-color: transparent;
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
  .back{
background: rgba(0,0,0,0.1);
border-radius: 10px;
  }
  
</style>