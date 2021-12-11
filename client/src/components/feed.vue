<template>
    <div>
        <h1 class="title section-title">Fil d'Actualité</h1>

        <!-- début post -->
        <div class="card post">
            <header class="card-header">
            <p class="card-header-title tags has-addons username">
                <img class="profile-picture-post" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
                &nbsp;&nbsp;
                <span class="tag is-name">Maël Queguiner</span>
                <span class="tag is-username">@zeyesm</span>
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
            </header>
            <div class="card-content">
            <div class="content">
                Mathis c'est un bg si je pouvais le sucer je le ferais
                <br>
                <time datetime="2021-11-20">22:55 PM - 20 Nov 2021</time>
            </div>
            </div>
            <footer class="card-footer">
            <a href="#" class="card-footer-item">0 &nbsp;<i class="fas fa-comment"></i></a>
            <a style="color:green" href="#" class="card-footer-item">1 &nbsp;<i class="fas fa-retweet"></i></a>
            <a style="color: red" href="#" class="card-footer-item">1 &nbsp;<i class="fas fa-heart"></i></a>
            </footer>
        </div>
        <!-- fin post -->
    </div>
</template>

<script>
export default {
    name: 'feed',
    data(){
        return {
            posts: []
        }
    },
    async mounted() {
        const socket = io('http://localhost:3030');
        const app = feathers();
        app.configure(feathers.socketio(socket));
        app.configure(feathers.authentication({ storage: localStorage }));

        await app.reAuthenticate(); 

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const usersService = app.service('users');
        var query = await usersService.find({
            query: {
                $select: [ 'id', 'username', 'name', 'description' ],
                $or: [
                    {username:{$like: "%"+urlParams.get('user')+"%"}},
                    {name:{$like: "%"+urlParams.get('user')+"%"}}
                ]
            }
        });

        this.queryAnswer = query.data;
    }
}
</script>