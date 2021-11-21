const socket = io('http://localhost:3030');
const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const postsService = app.service('posts');

app.authenticate({
    strategy: 'local',
    id: 'gryzel',
    password: 'internet'
}).then((result) => {
    console.log("Authentication successful!");
}).catch(e => {
    console.error('Authentication failed', e);
});