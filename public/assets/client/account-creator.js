particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

const socket = io('http://localhost:3030');
const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const usersService = app.service('users');

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submit");

const errorDiv = document.getElementById("error-div");
const errorClose = document.getElementById("error-close");

submitButton.onclick = async function(){
    try{
        const newUser = await usersService.create({
            email: emailInput.value,
            username: usernameInput.value,
            name: nameInput.value,
            password: passwordInput.value
        });
        window.open("login","_self");
    }catch(error){
        errorDiv.style.display = "flex";
    }
}

errorClose.onclick = function(){
    errorDiv.style.display = "none";
}