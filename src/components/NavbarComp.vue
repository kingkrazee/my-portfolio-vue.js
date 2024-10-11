<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="mylogo">
       <img :src="mylogoUrl" alt="Kk" class="mylogo"/>
       <h4>KingKrazee</h4>
      </div>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto">
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
            <router-link to="/edexp">Education & Experience</router-link>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
  nav a.router-link-exact-active {
  color: #f2ff00;
}
nav a{
  margin-left: 7px;
  margin-right: 7px;
  text-decoration: none;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  color: black;
}
.mylogo{
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
}
.mylogo h4{
  margin-right: 10px;
}
.mylogo h4{
  margin: 0;
}
/* MEDIA QUERIES */

/* For screens 768px and below */
@media only screen and (max-width: 768px) {
  .mylogo{
    width: 300px;
    height: 300px;
    left: 25%;
  }

}

/* For screens 480px and below */
@media (max-width: 480px) {
  .mylogo {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
  }
  h4{
    font-size: 20px;
    margin: 10px;
  }
  .navbar-toggler{
    margin-right: 10px;
  }
  .container-fluid{
    width: 250px;
  }
  .navbar-collapse{
    font-size: 20px;
  }

}

@media (max-width: 360px) {
  .mylogo {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
  }
  h4{
    font-size: 10px;
    margin: 10px;
  }
  .navbar-toggler{
    margin-right: 10px;
  }
  .container-fluid{
    width: 250px;
  }
  .navbar-collapse{
    font-size: 20px;
  }
}
</style>