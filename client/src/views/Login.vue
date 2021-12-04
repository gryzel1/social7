<template>
    <div class="global">
        <title>Social7 Login</title>
        <div id="particles-js" class="particles"></div>
            <div class="block container margin-auto">
            <section class="hero is-fullheight">
                <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form class="box" onsubmit="return false;">
                        <img class="login-icon" src="assets/images/social7.png" alt="Social7">
                        <div class="field">
                            <label for="" class="label">Identifiant</label>
                            <div class="control has-icons-left">
                                <input id="username" placeholder="username" class="input">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-id-card"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="label">Mot de passe</label>
                            <div class="control has-icons-left">
                            <input id="password" type="password" placeholder="**********" class="input">
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                            </div>
                        </div>
                        <div class="field">
                            <button id="submit" type="submit" class="button login-button" v-on:click="login">
                            Se connecter
                            </button>
                            <a href="createAccount" class="button login-button create-account-button">
                                Créer un compte
                            </a>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="columns is-centered" id="error-div">
                    <div class="notification is-danger is-light column is-5-tablet is-4-desktop is-3-widescreen">
                        <button class="delete" id="error-close" v-on:click="closePopup"></button>
                        Échec de l'authentification. Veuillez réessayer avec d'autres identifiants ou contacter un administrateur.
                    </div>
                </div>
                </div>
                </div>
            </section>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    
  },
  methods: {
        login: async function(){
            const io = require('socket.io-client');
            const feathers = require('@feathersjs/client');

            const socket = io('http://localhost:3030');
            const app = feathers();

            app.configure(feathers.socketio(socket));
            app.configure(feathers.authentication({ storage: localStorage }));

            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const submitButton = document.getElementById("submit");

            const errorDiv = document.getElementById("error-div");

            app.authenticate({
                strategy: 'local',
                username: usernameInput.value,
                password: passwordInput.value
            }).then((result) => {
                window.open("/","_self");
            }).catch(e => {
                errorDiv.style.display = "flex";
            });
        },
        closePopup: function(){
            const errorDiv = document.getElementById("error-div");
            errorDiv.style.display = "none";
        }
    }
}
    // particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    //     console.log('callback - particles.js config loaded');
    // });

</script>

<style scoped>
    .global{
        background: url("../../public/assets/images/enseeiht.jpg") no-repeat center fixed;
        background-color: #00AA5F;
        overflow: hidden;
    }

    .login-icon{
        width:100%;
        display:block;
        margin:auto
    }

    .field{
        margin-top: 20px;
    }

    .login-rectangle{
        border-radius: 20px !important;
    }

    .login-button{
        width: 100%;
        font-size: 20px;
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 10px;
        background-color: lightgray;
        color: black;
    }

    .login-button:hover{
        background-color: #00AA5F;
        color: white;
    }

    .particles{
        width: 100%;
        height: 100%;
        position: fixed;
    }

    #error-div{
        display: none;
    }

    .create-account-button{
        margin-top: 10px;
    }

    .navbar{
        display: none;
    }
</style>