socket = io('http://localhost:3030');
app = feathers();
app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const profileNameSpan = document.getElementById("profile-name-span");
const profileUsernameSpan = document.getElementById("profile-username-span");
const descriptionSpan = document.getElementById("profile-description-span");
const joinedAtSpan = document.getElementById("profile-joined-at");

const replaceProfile = async () => {
    const { user } = await app.reAuthenticate(); 
    const name = user.name;
    const username = user.username;
    const description = user.description;
    const joinedAt = user.createdAt;

    joinedAt.slice(0,10);
    joinedAtString = joinedAt.substring(8,10) + "/" + joinedAt.substring(5,7) + "/" + joinedAt.substring(0,4)

    profileNameSpan.textContent = name;
    profileUsernameSpan.textContent = "@"+username;
    descriptionSpan.textContent = description;
    joinedAtSpan.textContent = joinedAtString;

}

replaceProfile();