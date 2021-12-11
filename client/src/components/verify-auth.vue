<script>
export default{
    name: "verify-auth",
    async setup(){
        const socket = io('http://localhost:3030');
        const app = feathers();
        app.configure(feathers.socketio(socket));
        app.configure(feathers.authentication({ storage: localStorage }));
        try{
            return await app.reAuthenticate();
        } catch(error){
            window.open("login","_self");
        }
    }
}
</script>