const socket = io('http://localhost:3030');
const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const postsService = app.service('posts');

const newPostArea = document.getElementById("new-post-area");
const publishButton = document.getElementById("publish-button");

publishButton.onclick = async function(){
    const newPost = await postsService.create({
        text: newPostArea.value
    });
    newPostArea.value = "";
}