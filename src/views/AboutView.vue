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
        <ul>
        <li><i class="bi bi-tools"></i> Critical Thinking </li>
        <li><i class="bi bi-puzzle-fill"></i> Creative Thinking </li>
        <li><i class="bi bi-person-bounding-box"></i> Leadership </li>
        <li><i class="bi bi-people-fill"></i> Teamwork </li>
        <li><i class="bi bi-chat-heart"></i> Communication </li>
      </ul>
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
.oor{
  animation: grow 0.5s forwards;
  transform: scale(0.5);
  transition: transform 0.5s, box-shadow 0.5s;
}
.aboutImg ul {
  list-style: none;
  display: grid;
  justify-content: center;
  margin-top: 1rem;
}

.aboutImg li {
  font-size: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer; 
  transition: transform 0.5s ease; 
}

.aboutImg li i {
  font-size: 30px;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  60% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

.aboutImg li:hover {
  animation: shake 0.5s ease-in-out;
}

.aboutImg li:hover i {
  animation: shake 0.5s ease-in-out;
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
/* For 360px screens */
@media (max-width: 360px) {
  #hehe {
    padding: 1rem;
    grid-template-columns: 1fr; /* Single column */
  }

  .skill-container {
    margin-left: 0;
    grid-template-columns: 1fr; /* Single column */
  }

  .skillImg, .skillImg1 {
    width: 120px; /* Smaller icon size */
    height: 120px;
  }

  .card-info {
    width: 120px;
    height: 120px;
  }

  h1 {
    font-size: 20px;
  }

  p {
    width: 90%;
  }
}

/* For 480px screens */
@media (max-width: 480px) {
  #hehe {
    padding: 1rem;
    grid-template-columns: 1fr; /* Single column */
  }

  .skill-container {
    margin-left: 0;
    grid-template-columns: 1fr; /* Single column */
  }

  .skillImg, .skillImg1 {
    width: 150px; /* Smaller icon size */
    height: 150px;
  }

  .card-info {
    width: 150px;
    height: 150px;
  }

  h1 {
    font-size: 25px;
  }

  p {
    width: 90%;
  }
}

/* For 1400px screens */
@media (max-width: 1400px) {

  .skill-container {
    margin-left: 5rem;
    grid-template-columns: repeat(3, 1fr); /* 3 columns for large screens */
  }

  .skillImg, .skillImg1 {
    width: 220px;
    height: 220px;
  }

  .card-info {
    width: 220px;
    height: 220px;
  }

  h1 {
    font-size: 35px;
  }

  p {
    width: 80%;
  }
}

</style>
