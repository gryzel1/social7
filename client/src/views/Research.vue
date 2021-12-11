<template>
    <div>
        <verify-auth />
        <title>Social7 Recherche</title>

        <div class="container feed-container">
            <router-link :to="'/profile?user=' + answer.username" v-for="answer in queryAnswer">
                <div class="card post">
                    <header class="card-header">
                        <p class="card-header-title tags has-addons username">
                        <img class="profile-picture-post" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
                        &nbsp;&nbsp;
                        <span class="tag is-name">{{ answer.name }}</span>
                        <span class="tag is-username">{{ answer.username }}</span>
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {{ answer.description }}
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import verifyAuth from '../components/verify-auth.vue';
export default {
    name: 'Research',
    components: {
        verifyAuth
    },
    data(){
        return {
            queryAnswer: []
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
    },
}
</script>