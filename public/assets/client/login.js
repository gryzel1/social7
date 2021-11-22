particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

const socket = io('http://localhost:3030');
const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const errorDiv = document.getElementById("error-div");
const errorClose = document.getElementById("error-close");

submitButton.onclick = async function(){
    app.authenticate({
        strategy: 'local',
        username: usernameInput.value,
        password: passwordInput.value
    }).then((result) => {
        window.open("feed.html","_self");
    }).catch(e => {
        errorDiv.style.display = "flex";
    });
}

errorClose.onclick = function(){
    errorDiv.style.display = "none";
}