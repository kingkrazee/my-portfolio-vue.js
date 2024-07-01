<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="mylogo">
       <img :src="mylogoUrl" alt="Kk" class="mylogo"/>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      mylogoUrl: 'https://kingkrazee.github.io/host-/images/K-removebg-preview.png'
  };
},
};
</script>

<style>
  #navbarNav{
    display: flex;
    justify-content: right;
    font-size: 20px;
  }
  nav{
    background-color: transparent;
  font-family: "Kranky", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
}
  nav a.router-link-exact-active {
  color: #f2ff00;
}
nav a{
  margin-left: 7px;
  margin-right: 7px;
  text-decoration: none
}
.mylogo{
  height: 100px;
  width: 100px;
}
</style>