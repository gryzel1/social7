<template>
  <div>
    <verify-auth />
    <div class="container feed-container">
        <title>Social7 Profil</title>
        <div class="notification profile-desc">
          <img class="profile-picture profile-picture-profile" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
          &nbsp;&nbsp;
          <span class="tag is-name is-large" id="profile-name-span">{{profileNameSpan}}</span>
          <span class="tag is-username is-large" id="profile-username-span">{{profileUsernameSpan}}</span>
          <a href="" class="profile-icon"><i class="fas fa-cog"></i></a>
          <br><br>
          <p><span id="profile-description-span">{{descriptionSpan}}</span></p>
          <br>
          <p>
            <i class="fas fa-birthday-cake"></i> A rejoint le {{joinedAtSpan}}<span id="profile-joined-at"></span>
          </p>
          <br>

          <div class="columns subscribers">
            <div class="column">
              4M Abonnés
            </div>
            <div class="column">
              251 Abonnements
            </div>
          </div>

          <br>

          <div class="columns">
            <div class="column active-category">
              1 Post
            </div>
            <div class="column category">
              0 Commentaire
            </div>
            <div class="column category">
              1 Repost
            </div>
            <div class="column category">
              1 J'aime
            </div>
          </div>
          
        </div>
       
        
        <h1 class="title section-title">Derniers Posts</h1>

        <!-- début post -->
        <div class="card post">
            <header class="card-header">
              <p class="card-header-title tags has-addons username">
                <img class="profile-picture-post" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
                &nbsp;&nbsp;
                <span class="tag is-name">Mathis Grisel</span>
                <span class="tag is-username">@gryzel64</span>
              </p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                Y'en a marre des noix, des arbres et des bagnoles...
                <a href="#">@zeyesm</a>. <a href="#">#firstpost</a> <a href="#">#helloworld</a>
                <br>
                <time datetime="2021-11-20">22:42 PM - 20 Nov 2021</time>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">13 &nbsp;<i class="fas fa-comment"></i></a>
              <a href="#" class="card-footer-item">3,4M &nbsp;<i class="fas fa-retweet"></i></a>
              <a href="#" class="card-footer-item">17M &nbsp;<i class="fas fa-heart"></i></a>
            </footer>
        </div>
        <!-- fin post -->

    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import verifyAuth from '../components/verify-auth.vue';
export default { 
  name: 'Profile',
  components: {
    navbar, verifyAuth
  },
  data() {
    return {
      profileNameSpan: '',
      profileUsernameSpan: '',
      descriptionSpan: '',
      joinedAtSpan: ''
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

    joinedAt.slice(0,10);
    const joinedAtString = joinedAt.substring(8,10) + "/" + joinedAt.substring(5,7) + "/" + joinedAt.substring(0,4)

    this.profileNameSpan = name;
    this.profileUsernameSpan = "@"+username;
    this.descriptionSpan = description;
    this.joinedAtSpan = joinedAtString;
  }
}
</script>