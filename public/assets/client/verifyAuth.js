socket = io('http://localhost:3030');
app = feathers();
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const login = async () => {
    try{
        return await app.reAuthenticate();
    } catch(error){
        window.open("login","_self");
    }
};

login();