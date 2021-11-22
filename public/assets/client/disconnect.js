app = feathers();
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const disconnectButton = document.getElementById("disconnect-button");

disconnectButton.onclick = async function(){
    await app.logout();
    window.open("login","_self");
}