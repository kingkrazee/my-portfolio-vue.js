<template lang="">
  <section class="hehe">
    <div class="title">
      <h1>Projects</h1>
    </div>
    <div class="project-container" id="project-container">
        <div v-for="project in getProjInfo()" :key="project" class="project">
            <div class="card">
                <div class="projImg">
                    <img  :src="project.image" :alt="project.image" class="projImg1"/>
                </div>
             <div class="card-body">
               <h5 id="projName" class="card-title">{{project.name}}</h5>
               <p id="projDes" class="card-text">{{project.description}}</p>
               <div class="btn-wrapper">
                   <a :href="project.vercel" target="_blank" class="btn btn-primary live-btn" >Live</a>
                   <a :href="project.github" target="_blank" class="btn btn-primary github-btn" >GitHub</a>
               </div>
               </div>
           </div>
        </div>
    </div>
  </section>
</template>
<script>
export default {
    
    methods:{
        getProjInfo(){
            return this.$store.state.projects
        }
    },
    computed: {
        getProjects(){
            return this.$store.dispatch('getProjects')
        }

    },
    mounted() {
        this.getProjects
    }
}
</script>
<style scoped>
.title{
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  font-family: "Kranky", serif;
}
h1{
  font-size: 45px;
}
.hehe{
  background: rgb(228,0,0);
  background: linear-gradient(286deg, rgba(228,0,0,1) 15%, rgba(255,255,0,1) 100%);
  background-repeat: no-repeat;
  height: 120vh;
}
.project-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-left: 8rem;
  position: relative;
  z-index: 0;
  max-height: calc(100vh - 6rem);
}


.project {
  margin: 0;
}
.card:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    perspective: 1000px;
    
}
.card {
  height: 300px; 
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-color: white;
  animation: grow 0.5s forwards;
  transform: scale(0.5);
  opacity: 0;
  transition: transform 0.5s, box-shadow 0.5s;
}
@keyframes grow {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.btn-wrapper{
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
}
.btn-wrapper a:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}
.live-btn{
    background-color: red;
    border-color: black;
}
.github-btn{
    background-color: black;
    border-color: white;
}
.card-body {
  flex: 1;
}
.card-title, .card-text{
    text-align: center;
}
.projImg1{
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    }
#projName{
    font-family: "Kranky", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  text-decoration: underline 1px;
  
}
#projDes{
    font-family: "Kranky", serif;
}
</style>