socket = io('http://localhost:3030');
app = feathers();
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const navSpan = document.getElementById("nav-name-span");
var profilePicture = document.getElementsByClassName("profile-picture");


const replaceNav = async () => {
    const { user } = await app.reAuthenticate(); 
    const name = user.name;
    const id = user.id;

    navSpan.textContent = name;

    Array.from(profilePicture).locaforEach((pic) => {
        if(ImageExist("assets/profile-pictures/" + id + ".jpg")){
            pic.src = "assets/profile-pictures/" + id + ".jpg";
        }
    });
}

function ImageExist(url) {
   var img = new Image();
   img.src = url;
   return img.height != 0;
}

replaceNav();