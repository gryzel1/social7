<template>
    <div>
        <verify-auth />
        <title>Social7 Modification du profil</title>
        <div class="container feed-container">
            <div class="notification profile-desc">
            &nbsp;&nbsp;
            <span class="tag is-name is-large" id="profile-name-span"><input v-model="profileNameSpan" type="text" class="new-post-area edit-name"></span>
            <span class="tag is-username is-large" id="profile-username-span"><input v-model="profileUsernameSpan" type="text" class="new-post-area edit-username"></span>
            <br><br>
            <textarea v-model="descriptionSpan" class="new-post-area edit-desc" id="new-post-area" name="new-post" cols="s" rows="3"></textarea>
            <br><br>
            <h1>Photo de profil</h1>
            <input type="file" id="avatar" name="avatar" accept="image/jpg">
            <br><br>
            <button style="border:none;" class="follow-button" v-on:click="save">Enregistrer</button>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import verifyAuth from '../components/verify-auth.vue';
import ProfilePostFeed from "../components/profile-post-feed.vue";
export default { 
  name: 'Profile',
  components: {
    navbar,
    verifyAuth,
    ProfilePostFeed
},
  data() {
    return {
      profileNameSpan: '',
      profileUsernameSpan: '',
      descriptionSpan: '',
      joinedAtSpan: '',
      profileID: '',
      sessionID: ''
    }
  },
  async mounted() {
    const socket = io('http://localhost:3030');
    const app = feathers();
    app.configure(feathers.socketio(socket));
    app.configure(feathers.authentication({ storage: localStorage }));

    const { user } = await app.reAuthenticate();

    const name = user.name;
    const username = user.username;
    const description = user.description;
    this.sessionID = user.id;

    this.profileNameSpan = name;
    this.profileUsernameSpan = username;
    this.descriptionSpan = description;
  },
  methods:{
    save: async function() {
      const io = require('socket.io-client');
            const feathers = require('@feathersjs/client');

            const socket = io('http://localhost:3030');
            const app = feathers();

            app.configure(feathers.socketio(socket));
            app.configure(feathers.authentication({ storage: localStorage }));

            await app.reAuthenticate();
            
            const usersService = app.service('users');
            var queryUser = await usersService.find({
                query: {
                  id: this.sessionID
                }
            });

            try{
                usersService.patch(null,
                  { name: this.profileNameSpan,
                  username: this.profileUsernameSpan,
                  description: this.descriptionSpan },
                  queryUser);
                window.open("profile?user="+this.profileUsernameSpan,"_self");
            }catch(error){
              console.log(error);
            }
    }
  }
}
</script>