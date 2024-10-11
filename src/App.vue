<template>
  <div id="app">
    <NavbarComp />

    <!-- Background Animation (persistent on all pages) -->
    <div class="animated-background">
      <div class="light x1"></div>
      <div class="light x2"></div>
      <div class="light x3"></div>
      <div class="light x4"></div>
      <div class="light x5"></div>
      <div class="light x6"></div>
      <div class="light x7"></div>
      <div class="light x8"></div>
      <div class="light x9"></div>
    </div>

    <!-- Content Transition -->
    <router-view v-slot="{Component}">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: {
    NavbarComp,
    FooterComp,
  }
}
</script>

<style>
#app {
  position: relative;
  overflow: hidden;
}

.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(286deg, rgba(228, 0, 0, 1) 15%, rgba(255, 255, 0, 1) 100%);
  overflow: hidden;
}

.light {
  position: absolute;
  width: 0px;
  opacity: .75;
  background-color: white;
  box-shadow: #e9f1f1 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}

.x1 { animation: floatUp 4s infinite linear; transform: scale(1.0); }
.x2 { animation: floatUp 7s infinite linear; transform: scale(1.6); left: 15%; }
.x3 { animation: floatUp 2.5s infinite linear; transform: scale(.5); left: -15%; }
.x4 { animation: floatUp 4.5s infinite linear; transform: scale(1.2); left: -34%; }
.x5 { animation: floatUp 8s infinite linear; transform: scale(2.2); left: -57%; }
.x6 { animation: floatUp 3s infinite linear; transform: scale(.8); left: -81%; }
.x7 { animation: floatUp 5.3s infinite linear; transform: scale(3.2); left: 37%; }
.x8 { animation: floatUp 4.7s infinite linear; transform: scale(1.7); left: 62%; }
.x9 { animation: floatUp 4.1s infinite linear; transform: scale(0.9); left: 85%; }

@keyframes floatUp {
  0% { top: 100vh; opacity: 0; }
  25% { opacity: 1; }
  50% { top: 0vh; opacity: .8; }
  100% { top: -100vh; opacity: 0; }
}

/* Route transitions */
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
