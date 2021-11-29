<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img style="max-height: 2.5rem;" src="assets/images/social7.png" alt="">
          </a>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
                <input class="input nav-research" type="text" placeholder="Rechercher un utilisateur">
            </a>
            <a href="" class="navbar-item nav-button">
                <span class="nav-button-span">
                    <i class="fas fa-search"></i>
                </span>
            </a>
          </div>
      
          <div class="navbar-end">
            <a href="notifications" class="navbar-item nav-button">
              <span title="Badge top right" class="badge is-bottom social7-badge">8</span>
              <span class="nav-button-span">
                  <i class="fas fa-bell"></i>
              </span>
            </a>
            <a href="" class="navbar-item nav-button">
              <span title="Badge top right" class="badge is-bottom social7-badge">3</span>
                <span class="nav-button-span">
                  <i class="fas fa-envelope"></i>
                </span>
            </a>
            <a href="" class="navbar-item nav-button">
              <span title="Badge top right" class="badge is-bottom social7-badge">1</span>
                <span class="nav-button-span">
                    <i class="fas fa-calendar-alt"></i>
                </span>
            </a>
            <a class="navbar-item nav-button" id="disconnect-button">
              <span class="nav-button-span">
                <i class="fas fa-power-off"></i>
              </span>
            </a>
            <a href="profile" class="navbar-item nav-button">
                <span class="nav-button-span">
                    <img class="profile-picture" src="assets/images/default-profile-picture.jpg" alt="Profile picture">
                    <span id="nav-name-span"></span>
                </span>
            </a>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>