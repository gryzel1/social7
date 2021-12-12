<template>
    <div>
        <h1 class="title section-title">Fil d'Actualité</h1>

        <!-- début post -->
        <div class="card post" v-for="post in posts">
            <header class="card-header">
            <p class="card-header-title tags has-addons username">
                <img v-if="imageExists(Object.values(post)[7])" class="profile-picture-post" :src="'../assets/profile-pictures/' + Object.values(post)[7] + '.jpg'" alt="Profile picture">
                <img v-if="!imageExists(Object.values(post)[7])" class="profile-picture-post" :src="'../assets/images/default-profile-picture.jpg'" alt="Profile picture">
                &nbsp;&nbsp;
                <router-link :to="'/profile?user=' + Object.values(post)[5]"><span class="tag is-name">{{ Object.values(post)[6] }}</span></router-link>
                <router-link :to="'/profile?user=' + Object.values(post)[5]"><span class="tag is-username">{{ Object.values(post)[5] }}</span></router-link>
            </p>
            </header>
            <div class="card-content">
            <div class="content">
                {{ post.text }}
                <br>
                <time>{{ post.createdAt.substring(8,10) + "/" + post.createdAt.substring(5,7) + "/" + post.createdAt.substring(0,4) + " " + post.createdAt.substring(11,19)}}</time>
            </div>
            </div>
        </div>
        <!-- fin post -->
    </div>
</template>

<script>
export default {
    name: 'feed',
    data(){
        return {
            posts: [],
            sessionID: ''
        }
    },
    async mounted() {
        const socket = io('http://localhost:3030');
        const app = feathers();
        app.configure(feathers.socketio(socket));
        app.configure(feathers.authentication({ storage: localStorage }));

        const { user } = await app.reAuthenticate();
        this.sessionID = user.id;

        const postsService = app.service('posts');
        const usersService = app.service('users');

        const followService = app.service('follow');
        var queryFollow = await followService.find({
            query: {
                $select: [ 'followedId' ],
                userId: this.sessionID
            }
        });

        console.log(queryFollow.data);
        var followedUsers = []
        followedUsers.push(this.sessionID);
        var i=0;
        while(i<queryFollow.data.length){
            followedUsers.push(queryFollow.data[i].followedId);
            i++;
        }
        console.log(followedUsers);

        var query = await postsService.find({
            query: {
                $sort: {
                    createdAt: -1
                },
                userId: followedUsers
            }
        });

        this.posts = query.data;
    },
    methods: {
        imageExists(id){
            var img = new Image();
            img.src = "../assets/profile-pictures/" + id + ".jpg";
            if(img.height != 0){
                return true;
            }
        }
    }
}
</script>