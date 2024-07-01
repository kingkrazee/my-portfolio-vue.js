<template>
 <NavbarComp>

 </NavbarComp>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'

export default{
  components:{
    NavbarComp,
    FooterComp
  }
}
</script>
<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #f2ff00;
}
body{
  background: rgb(228,0,0);
background: linear-gradient(286deg, rgba(228,0,0,1) 15%, rgba(255,255,0,1) 100%);
background-repeat: no-repeat;
height: 100vh;
}
</style>
