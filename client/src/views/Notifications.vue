<template>
    <div>
        <verify-auth />
        <div class="container feed-container">
        <h1 class="title section-title">Notifications</h1>

        <div class="notification notif-desc">
            <h1 class="title notif-title">
            <span class="like-notif"><i class="fas fa-heart"></i></span> Maël Gueguiner et 17M autres personnes ont aimé votre Post.
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
            </h1>
            
        </div>

        <div class="notification notif-desc">
            <h1 class="title notif-title">
            <span class="repost-notif"><i class="fas fa-retweet"></i></span> Maël Gueguiner et 3,4M autres personnes ont republié votre Post.
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
            </h1>
            
        </div>

        <div class="notification notif-desc">
            <h1 class="title notif-title">
            <i class="fas fa-comment"></i> Maël Gueguiner et 13 autres personnes ont commenté votre Post.
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
            </h1>
            
        </div>

        </div>
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import verifyAuth from '../components/verify-auth.vue';
export default {
  name: 'Notifications',
  components: {
    navbar, verifyAuth
  }
}
</script>