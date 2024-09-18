<template>
  <div id="hehe">
    <div>
      <div id="oor">
        <h1>About Me</h1>
        <div class="oor">
          <p>{{ aboutMe }}</p>
        </div>
      </div>
    </div>
    <div>
      <div class="aboutImg">
        <h1>Soft Skills</h1>
      </div>
    </div>
  </div>
<div class="skills">
      <h1>Technical Skills</h1>
      <div class="skill-container" v-if="getSkills?.length">
        <div v-for="skill in getSkills" :key="skill" class="skill">
          <div class="card">
            <div class="skillImg">
              <img :src="skill.image" :alt="skill.name" class="skillImg1" />
            </div>
            <div class="card-info">
              <h2>{{ skill.name }}</h2>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe;
    },
    getSkills() {
      return this.$store.state.skills
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe');
    this.$store.dispatch('getSkills');
  },
};
</script>

<style scoped>
#hehe {
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-top: 2rem;
}
#oor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, p {
  text-align: center;
}

h1 {
  font-family: "Kranky", serif;
  font-weight: 400;
  font-size: 45px;
}

p {
  width: 80%;
  margin: 0 auto;
}
.col h2{
  text-align: center;
}
.skills{
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 2rem;
}
.skill-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-left: 12rem;
}

.skill .card {
  position: relative;
  overflow: hidden;
  background-color: transparent;
  border: none;
  text-align: center;
  justify-content: center;
}

.skillImg {
  width: 200px;
  height: 200px;
}

.skillImg1 {
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

.skill .card:hover .card-info {
  opacity: 1;
}
</style>
