<template>
  <div class="row">
    <div class="col">
      <div id="oor">
    <h1>About Me</h1>
    <div class="oor">
      <p>{{ aboutMe }}</p>
    </div>
  </div>
    </div>
    <div class="col">
      <div class="aboutImg">
       <img  :src="aboutImgUrl" alt="mee" class="aboutImg1"/>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  computed: {
    aboutMe(){
      return this.$store.state.aboutMe;
  }
},
mounted(){
  this.$store.dispatch('getAboutMe')
},
data(){
  return{
    aboutImgUrl: "https://github.com/kingkrazee/eccomerce/blob/main/images/abouut-me.jpg?raw=true"
  }
}
}
</script>
<style scoped>
  #oor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, p {
  text-align: center;
}
h1{
  font-family: "Kranky", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 45px;
}
p {
    width: 80%;
    margin: 0 auto; 
  }
  .aboutImg1{
    width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5rem;
  position: absolute;
  top: 23%;
  left: 60%;
  animation: bounce 3s infinite;
  box-shadow: -15px 7px 10px rgba(0, 0, 0, 0.3);
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
