<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img style="max-height: 2.5rem;" src="assets/images/social7.png" alt="">
          </router-link>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
                <input class="input nav-research" type="text" placeholder="Rechercher un utilisateur">
            </a>
            <a href="" class="navbar-item nav-button">
                <span class="nav-button-span">
                    <i class="fas fa-search"></i>
                </span>
            </a>
          </div>
      
          <div class="navbar-end">
            <router-link class="navbar-item nav-button" to="/notifications">
              <span title="Badge top right" class="badge is-bottom social7-badge">8</span>
              <span class="nav-button-span">
                  <i class="fas fa-bell"></i>
              </span>
            </router-link>
            <a href="" class="navbar-item nav-button">
              <span title="Badge top right" class="badge is-bottom social7-badge">3</span>
                <span class="nav-button-span">
                  <i class="fas fa-envelope"></i>
                </span>
            </a>
            <router-link class="navbar-item nav-button" to="/events">
              <span title="Badge top right" class="badge is-bottom social7-badge">1</span>
                <span class="nav-button-span">
                    <i class="fas fa-calendar-alt"></i>
                </span>
            </router-link>
            <a class="navbar-item nav-button" id="disconnect-button" v-on:click="disconnect">
              <span class="nav-button-span">
                <i class="fas fa-power-off"></i>
              </span>
            </a>
            <router-link class="navbar-item nav-button" to="/profile">
                <span class="nav-button-span">
                    <img class="profile-picture" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
                    <span id="nav-name-span">{{navSpan}}</span>
                </span>
            </router-link>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      navSpan: ''
    }
  },
  async mounted(){
      const socket = io('http://localhost:3030');
      const app = feathers();
      app.configure(feathers.socketio(socket));
      app.configure(feathers.authentication({ storage: localStorage }));

      var profilePicture = document.getElementsByClassName("profile-picture");

      const { user } = await app.reAuthenticate(); 
      const name = user.name;
      const id = user.id;

      this.navSpan = name;

      Array.from(profilePicture).forEach((pic) => {
          var img = new Image();
          img.src = "../../public/assets/profile-pictures/" + id + ".jpg";
          if(img.height != 0){
              pic.src = "../../public/assets/profile-pictures/" + id + ".jpg";
          }
      });
  },
  methods: {
    disconnect: async function(){
      const socket = io('http://localhost:3030');
      app = feathers();
      app.configure(feathers.socketio(socket));
      app.configure(feathers.authentication({ storage: localStorage }));

      const disconnectButton = document.getElementById("disconnect-button");

      await app.logout();
      window.open("login","_self");
    }
  }
}
    // particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    //     console.log('callback - particles.js config loaded');
    // });

</script>