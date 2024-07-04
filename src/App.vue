<template>
 <NavbarComp>

 </NavbarComp>
 <router-view v-slot="{Component}">
   <transition name="route" mode="out-in">
     <component :is="Component"></component>
    </transition>
  </router-view>
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
/* ROUTE TRANSITIONS */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
