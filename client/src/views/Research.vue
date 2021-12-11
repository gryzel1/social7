<template>
    <div>
        <verify-auth />
        <title>Social7 Recherche</title>
    </div>
</template>

<script>
import verifyAuth from '../components/verify-auth.vue';
export default{
    name: 'Research',
    data(){
        return {
            queryAnswer: []
        }
    },
    components: {
        verifyAuth
    },
    async mounted() {
        const socket = io('http://localhost:3030');
        const app = feathers();
        app.configure(feathers.socketio(socket));
        app.configure(feathers.authentication({ storage: localStorage }));

        const usersService = app.service('users');
        var query = await usersService.find({
            query: {
                $select: [ 'id', 'username', 'name', 'description' ]
            }
        });

        this.queryAnswer = query.data;
    },
}
</script>