<template>
  <div id="hehe" class="row">
  <div id="texty" class="col-md-6" style="border-right: 1px solid black;">
    <h2>Hii I am...</h2>
      <h1>Kayden Hendricks</h1>
      <h2>I am an aspiring web developer</h2>
  </div>
  <div class="col-md-4">
    <div>
      <div class="landImg">
        <img :src="landImgUrl" alt="mee" class="landImg1"/>
  </div>
      
    </div>
  </div>
</div>
 
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      landImgUrl: 'https://kingkrazee.github.io/eccomerce/images/id.jpg'
    }
  }
}
</script>
<style scoped>
#hehe{
  height: 77vh;
}
.landImg{
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5rem;
  position: absolute;
  top: 15%;
  left: 38%;
  /* transform: translate(-50%, -50%); */
  animation: slide-in-right 1.5s forwards, rotate-3d 2s;
  transform: perspective(600px) rotateY(0deg);
}
.landImg1{
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5rem;
  position: absolute;
  top: 15%;
  left: 38%;
  box-shadow: -15px 7px 10px rgba(0, 0, 0, 0.3);
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes rotate-3d {
  0% {
    transform: perspective(600px) rotateY(0deg);
  }
  50% {
    transform: perspective(600px) rotateY(-20deg);
  }
  100% {
    transform: perspective(600px) rotateY(0deg);
  }
}

#texty{
  margin-top: 2rem;
  width: 400px;
  height: 400px;
  font-family: "Kranky", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  animation: slide-in-left 1s forwards;
  margin-left: 20rem;
}
@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.row{
  width: 100%;
}
h1, h2 {
  text-shadow: -10px 3px 5px rgba(0, 0, 0, 0.5);
}

/* MEDIA QUERIES */

/* For screens 768px and below */
@media only screen and (max-width: 768px) {
  .landImg {
    width: 300px;
    height: 300px;
    left: 25%;
  }
  .texty {
    width: 300px;
    height: 300px;
    font-size: 20px;
  }
}

/* For screens 480px and below */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
  }

  #texty {
    margin-left: 0;
    text-align: center;
    margin-top: 1rem;
  }

  .landImg {
    position: static;
    margin-top: 1rem;
    transform: none;
    width: 80%;
    max-width: 400px;
    height: auto;
  }
}

@media (max-width: 480px) {
  .landImg {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 360px) {
  .landImg {
    max-width: 250px;
  }
}
</style>
