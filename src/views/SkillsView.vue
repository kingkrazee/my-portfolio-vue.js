<template lang="">
  <section class="hehe">
      <div class="title">
          <h1>Skills</h1>
      </div>
    <div class="skill-container" id="skill-container" v-if="getSkills?.length">
        <div v-for="skill in getSkills" :key="skill" class="skill">
            <div class="card">
                <div class="skillImg">
                    <img  :src="skill.image" :alt="skill.image" class="skillImg1"/>
                </div>
                <div class="card-info">
                    <h2>{{skill.name}}</h2>
                    <p>{{skill.description}}</p>
                </div>
            </div>
        </div>
    </div>
    <SpinnerComp v-else/>
  </section>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  data() {
    return {
      skillsLoaded: false,
    }
  },
  components: { SpinnerComp },
  
  methods: {
    // getSkillInfo(){
    //     return this.$store.state.skills
    // }
  },
  computed: {
    getSkills() {
      return this.$store.state.skills
    }

  },
  mounted() {
    // this.getSkills.then(()=>{
    //   this.skillsLoaded = true
    // })
    this.$store.dispatch('getSkills')
  }
}
</script>
<style scoped>
.title {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  font-family: "Kranky", serif;
}

h1 {
  font-size: 45px;
}

.hehe {
  height: 80vh;
}

.skill-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  margin: 10px;
  flex: 0 0 calc(30% - 20px);
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  border: none;
}

.card .skillImg {
  width: 200px;
  height: 200px;
}

.card .skillImg img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  animation: beat 2s ease-in-out infinite;
}

@keyframes beat {
  0% {
    transform: scale(0.75);
  }

  50% {
    transform: scale(1.01);
  }

  100% {
    transform: scale(0.75);
  }
}

.card-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 1rem;
}

.card:hover .card-info {
  opacity: 1;
}
</style>