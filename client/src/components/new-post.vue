<template>
    <div>
        <h1 class="title section-title">Nouveau Post</h1>
        <!-- début post -->
        <div class="card post">
            <div class="card-content">
            <div class="content">
                <textarea v-model="text" class="new-post-area" id="new-post-area" name="new-post" cols="30" rows="5"></textarea>
            </div>
            </div>
            <footer class="card-footer">
            <a v-on:click="publish" id="publish-button" class="card-footer-item">Publier &nbsp;<i class="fas fa-paper-plane"></i></a>
            </footer>
        </div>
        <!-- fin post -->
    </div>
</template>

<script>
export default{
    name: 'New Post',
    data(){
        return {
            text: ''
        }
    },
    methods: {
        publish: async function(){
            const socket = io('http://localhost:3030');
            const app = feathers();
            app.configure(feathers.socketio(socket));
            app.configure(feathers.authentication({ storage: localStorage }));

            const { user } = await app.reAuthenticate(); 
            const id = user.id;

            const postsService = app.service('posts');

            const newPost = await postsService.create({
                text: this.text,
                senderID: id
            });
            this.text = "";
        }
    }
}
</script>