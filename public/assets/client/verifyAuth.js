socket = io('http://localhost:3030');
app = feathers();
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const login = async () => {
    try{
        return await app.reAuthenticate();
    } catch(error){
        window.open("login.html","_self");
    }
};

login();

async function getConnectedUsername(){
    const { user } = await app.get('authentication');
    return user.username;
}

async function getConnectedName(){
    const { user } = await app.get('authentication');
    return user.name;
}

async function getConnectedEmail(){
    const { user } = await app.get('authentication');
    return user.email;
}

async function getConnectedJoinDate(){
    const { user } = await app.get('authentication');
    return user.createdAt;
}