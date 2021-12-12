<template>
  <div>
    <verify-auth />
    <div class="container feed-container">
        <title>Social7 Profil</title>
        <div class="notification profile-desc">
          <img v-if="!imageExists(profileID)" class="profile-picture profile-picture-profile" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
          <img v-if="imageExists(profileID)" class="profile-picture profile-picture-profile" :src="'assets/profile-pictures/' + profileID + '.jpg'" alt="Profile picture">
          &nbsp;&nbsp;
          <span class="tag is-name is-large" id="profile-name-span">{{profileNameSpan}}</span>
          <span class="tag is-username is-large" id="profile-username-span">{{profileUsernameSpan}}</span>
          <router-link to="profileEditor" v-if="isOwnAccount()" href="" class="profile-icon"><i class="fas fa-cog"></i></router-link>
          <button v-if="!isOwnAccount() && !isFollowed" style="border:none;" class="follow-button" v-on:click="follow">Suivre</button>
          <button v-if="!isOwnAccount() && isFollowed" style="border:none;" class="followed-button" v-on:click="unFollow">Suivi</button>
  
          <br><br>
          <p><span id="profile-description-span">{{descriptionSpan}}</span></p>
          <br>
          <p>
            <i class="fas fa-birthday-cake"></i> A rejoint le {{joinedAtSpan}}<span id="profile-joined-at"></span>
          </p>
          <br>

          <div class="columns subscribers">
            <div class="column">
              {{ followersCount }} Abonnés
            </div>
            <div class="column">
              {{ followingsCount }} Abonnements
            </div>
          </div>
          
        </div>
       
        
        <profile-post-feed />

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
      sessionID: '',
      isFollowed: '',
      followersCount: 0,
      followingsCount: 0
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
    const joinedAt = user.createdAt;
    this.sessionID = user.id;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const profileUserName = urlParams.get('user');

    const usersService = app.service('users');
    var query = await usersService.find({
        query: {
          $select: [ 'id', 'username', 'name', 'description', 'createdAt' ],
          username:{$like: urlParams.get('user')}
        }
    });

    const profileName = query.data[0].name;
    const profileDesc = query.data[0].description;
    const profileJoinedAt = query.data[0].createdAt.substring(8,10) + "/" + query.data[0].createdAt.substring(5,7) + "/" + query.data[0].createdAt.substring(0,4);

    joinedAt.slice(0,10);
    const joinedAtString = joinedAt.substring(8,10) + "/" + joinedAt.substring(5,7) + "/" + joinedAt.substring(0,4)

    this.profileNameSpan = profileName;
    this.profileUsernameSpan = "@"+profileUserName;
    this.descriptionSpan = profileDesc;
    this.joinedAtSpan = profileJoinedAt;
    this.profileID = query.data[0].id;

    const followService = app.service('follow');
      var query = await followService.find({
        query: {
          userId: this.sessionID,
          followedId: this.profileID
        }
      });
    if(query.data.length == 1) this.isFollowed = true;
    else this.isFollowed = false;

    var queryFollowers = await followService.find({
      query: {
        followedId: this.profileID,
      }
    });

    this.followersCount = queryFollowers.data.length;

    var queryFollowings = await followService.find({
      query: {
        userId: this.profileID,
      }
    });

    this.followingsCount = queryFollowings.data.length;
    

  },
  methods: {
    imageExists(id){
            var img = new Image();
            img.src = "../assets/profile-pictures/" + id + ".jpg";
            if(img.height != 0){
                return true;
            }
    },
    isOwnAccount(){
      if (this.profileID == this.sessionID) return true;
      else return false;
    },
    async follow(){
      const socket = io('http://localhost:3030');
      const app = feathers();
      app.configure(feathers.socketio(socket));
      app.configure(feathers.authentication({ storage: localStorage }));

      const { user } = await app.reAuthenticate();

      const followService = app.service('follow');
      await followService.create({
                userId: this.sessionID,
                followedId: this.profileID
      });

      this.isFollowed = true;
    },
    async unFollow(){
      const socket = io('http://localhost:3030');
      const app = feathers();
      app.configure(feathers.socketio(socket));
      app.configure(feathers.authentication({ storage: localStorage }));

      const { user } = await app.reAuthenticate();

      const followService = app.service('follow');
      var query = await followService.find({
        query: {
          userId: this.sessionID,
          followedId: this.profileID
        }
      });

      await followService.remove(query.data[0].id);

      this.isFollowed = false;
    }
  }
}
</script>