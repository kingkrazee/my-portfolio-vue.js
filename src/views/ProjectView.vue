<template lang="">
    <div class="project-container">
        <div v-for="project in getProjInfo()" :key="project" class="project">
            <div class="card" style="width: 18rem;">
             <img src="" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">{{project.name}}</h5>
               <p class="card-text">{{project.description}}</p>
               <a href="#" class="btn btn-primary">{{project.vercel}}</a>
               </div>
           </div>
        </div>
    </div>
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
<style>
    .project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project {
  margin: 10px;
}
</style>