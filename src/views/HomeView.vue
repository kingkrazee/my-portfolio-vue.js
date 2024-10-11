<template>
  <div id="hehe" class="row">
    <div id="texty" class="col-md-6" style="border-right: 1px solid black;">
      <h2>Hii I am...</h2>
      <h1>Kayden Hendricks</h1>
      <h2>I am an aspiring <span>{{ typedProfession }}</span></h2>
    </div>
    <div id="imgy" class="col-md-4">
      <div>
        <div class="landImg">
          <img :src="landImgUrl" alt="mee" class="landImg1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      landImgUrl: 'https://github.com/kingkrazee/capstone-hosted/blob/main/porfolio.jpg?raw=true',
      professions: ['web developer', 'software engineer', 'full-stack developer', 'UI/UX designer'],
      currentProfessionIndex: 0,
      typedProfession: '',
      typingSpeed: 50 // adjust the speed to your liking
    }
  },
  mounted() {
    this.typeProfession()
  },
  methods: {
    typeProfession() {
      const profession = this.professions[this.currentProfessionIndex]
      let charIndex = 0

      const typeInterval = setInterval(() => {
        if (charIndex < profession.length) {
          this.typedProfession += profession[charIndex]
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            this.deleteProfession()
          }, 2000) // wait 2 seconds before deleting
        }
      }, this.typingSpeed)
    },
    deleteProfession() {
      let charIndex = this.typedProfession.length

      const deleteInterval = setInterval(() => {
        if (charIndex > 0) {
          this.typedProfession = this.typedProfession.substring(0, charIndex - 1)
          charIndex--
        } else {
          clearInterval(deleteInterval)
          this.currentProfessionIndex = (this.currentProfessionIndex + 1) % this.professions.length
          this.typedProfession = ''
          this.typeProfession()
        }
      }, this.typingSpeed)
    }
  }
}
</script>
<style scoped>
#hehe{
  margin-top: 2rem;
  margin-bottom: 4.2rem;
}
.landImg{
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5rem;
  position: absolute;
  top: 20%;
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
  left: 45%;
  top: 10%;
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

  #texty {
    width: 300px;
    font-size: 20px;
    margin-left: 0;
    margin-top: 1rem;
  }
}

/* For screens 480px and below */
@media (max-width: 480px) {
  #texty {
    height: 200px;
    width: 300px;
    border-right: none !important;
    margin-left: 5rem;
  }
  #imgy {
    margin-left: 4rem;
    display: block;
  }
  .landImg {
    position: relative;
    top: 0; 
    left: 0;
    width: 250px;
    height: 250px;
  }
  .landImg1 {
    position: relative;
    top: 0;
    left: 0;
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 360px) {
  .landImg {
    width: 250px;
    height: 250px;
  }
  .landImg1{
    width: 250px;
    height: 250px;
  }
  #texty{
    height: 200px;
    width: 200px;
    border-right: none !important;
    margin-left: 5rem;
  }
  #imgy{
  margin-top: 1rem; 
  margin-left: -4.9rem;
  }
}
</style>
