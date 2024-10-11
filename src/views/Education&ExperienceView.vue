<template>
  <section class="experience-education">
    <div class="container">
      <h2 class="section-title">Education</h2>
      <div class="card-container">
        <div class="card" v-for="education in getEduInfo()" :key="education">
          <h3>{{ education.institution }}</h3>
          <p class="description">{{ education.description }}</p>
          <p class="dates">{{ education.year }}</p>
          <p><strong>Contact:</strong> {{ education.contact.name }} - {{ education.contact.cellDetails }}</p>
        </div>
      </div>

      <h2 class="section-title">Experience</h2>
      <div class="card-container">
        <div class="card" v-for="work in getWorkInfo()" :key="work">
          <h3>{{ work.placeOfWork }}</h3>
          <p class="description">{{ work.description }}</p>
          <p class="dates">{{ work.year }}</p>
          <p><strong>Position:</strong> {{ work.contact.position }}</p>
          <p><strong>Contact:</strong> {{ work.contact.name }} - {{ work.contact.cell }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getEduInfo() {
      return this.$store.state.education;
    },
    getWorkInfo() {
      return this.$store.state.work;
    }
  },
  mounted() {
    this.$store.dispatch('getEducation');
    this.$store.dispatch('getWork');
  }
}
</script>

<style scoped>
.experience-education {
 margin-top: 2rem;
 margin-bottom: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 45px;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
  font-family: "Kranky", serif;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #ffee38;
}

.card .description {
  font-size: 16px;
  margin-bottom: 10px;
  color: #ffffff;
}

.card .dates {
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 10px;
}

.card p {
  margin: 0;
}

.card p strong {
  font-weight: 600;
  color: #ffffff;
}
</style>
