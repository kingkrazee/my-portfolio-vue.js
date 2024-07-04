<template>
    <section class="hehe">
        <!-- <div class="title">
            <h1>Resume</h1>
        </div> -->
        <div class="timeline-container">
          <div class="education-timeline">
          <div class="timeline-item" v-for="education in getEduInfo()" :key="education">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="card">
                <h3>{{ education.institution }}</h3>
                <h4>{{ education.description }}</h4>
                <p class="dates">{{ education.year }}</p>
                <p>{{ education.contact.name }}</p>
                <p>{{ education.contact.contactDetails }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="work-timeline">
          <div class="timeline-item" v-for="work in getWorkInfo()" :key="work">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="card">
                <h3>{{ work.placeOfWork }}</h3>
                <h4>{{ work.description }}</h4>
                <p class="dates">{{ work.year }}</p>
                <p>{{ work.name }}</p>
                <p>{{ work.cell }}</p>
                <p>{{ work.position }}</p>
              </div>
            </div>
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
    computed: {
      getEducation() {
        return this.$store.dispatch('getEducation');
      },
      getWork() {
        return this.$store.dispatch('getWork');
      }
    },
    mounted() {
      this.getEducation;
      this.getWork;
    }
  }
  </script>
  
  <style scoped>
  .hehe {
    background: rgb(228, 0, 0);
    background: linear-gradient(286deg, rgba(228, 0, 0, 1) 15%, rgba(255, 255, 0, 1) 100%);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .timeline-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal-width columns */
    grid-gap: 20px; /* Adjust gap between columns */
    max-width: 1200px;
  }
  
  .work-timeline,.education-timeline {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .work-timeline::before,.education-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 2px;
    background-color: #007bff;
    transform: translateX(-50%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    display: flex;
  }
  
  .timeline-marker {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #007bff;
    z-index: 1; /* Ensure marker is above content */
  }
  
  .timeline-content {
    flex: 1;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-left: 20px; /* Initial left margin */
    position: relative;
    z-index: 0; /* Ensure content is below marker */
  }
  
  .card {
    height: 100%; /* Ensure all cards take up full height */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribute content evenly */
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card h3,.card h4,.card p {
    margin: 0;
  }
  
  .card h3 {
    font-size: 18px;
    color: #333;
  }
  
  .card h4 {
    font-size: 16px;
    color: #666;
  }
  
  .card p {
    font-size: 14px;
    color: #888;
  }
  .work-timeline {
    /* Add animation to work timeline */
    animation: slideInFromRight 1s ease-out;
  }

 .education-timeline {
    /* Add animation to education timeline */
    animation: slideInFromLeft 1s ease-out;
  }

  /* Define animations */
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  </style>
  