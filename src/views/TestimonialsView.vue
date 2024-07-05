<template>
    <section class="hehe">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button v-for="(testimonials, index) in getTestInfo()" :key="index"
                    type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index"
                    :class="{ 'active': index === 0 }" :aria-current="index === 0" :aria-label="`Slide ${index + 1}`"></button>
          </div>
          <!-- Placeholder for loading state -->
          <div v-if="!$store.state.testimonials">
            Loading testimonials...
          </div>
          <div class="carousel-inner">
            <div v-for="(testimonial, index) in getTestInfo()" :key="index"
                 :class="['carousel-item', { 'active': index === 0 }]">
              <div class="d-flex justify-content-center align-items-center">
                <div :class="`card-deck col-sm ardcay-style${index + 1}`">
                  <div class="ardcay">
                    <div class="ardcay-body">
                      <img id="theImg" :src="testimonial.image" alt="Image1">
                      <h5 class="ardcay-title">{{ testimonial.name }}</h5>
                      <p class="ardcay-text">{{ testimonial.message }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </section>
  </template>
  <script>
  //   import { computed, onMounted } from 'vue'
  // import { useStore } from 'vuex'
  //     const store = useStore()
  //     const testimonials = computed(() => store.state.testimonials )
  //     onMounted(() => {
  //       setTimeout(()=>{
  //         store.dispatch('fetchTestimonials')
  //       }, 1000)
  //     })
  export default {
    methods:{
        getTestInfo(){
            return this.$store.state.testimonials
        }
    },
    computed: {
        getTestimonial(){
            return this.$store.dispatch('getTestimonials')
        }

    },
    mounted() {
        this.getTestimonial
    }
  }
</script>
     
<style scoped>
/*Testimonial Styling*/
.hehe{
    background: rgb(228,0,0);
background: linear-gradient(286deg, rgba(228,0,0,1) 15%, rgba(255,255,0,1) 100%);
background-repeat: no-repeat;
height: 110vh;
}
.card-deck{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem;
    width: 50%;
    transition: all .5s;
    &:hover {
        transform: scale(1.2);
        color: white;
    }
}
#theImg{
    height: 100px;
    width: 100px;
    margin-left: 12rem;
}
.ardcay {
    width: 550px;
    height: 450px;
    border: 3px solid #fff;
    border-radius: 30px;
    box-shadow: .3vw .2vw .2vw silver, .1vw 0.1vw .5vw silver;
}
.ardcay-body {
    padding: 20px;
}
.ardcay-title {
    font-size: 1.5em;
    color: var(--secondary);
    font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align:center;
  margin-top: 1rem;
}
.ardcay-text {
    color: var(--secondary);
    font-size: 1rem;
    font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
    width:100%;
  text-align:center;
    padding-left: 0px;
    margin-left: 0%;
}
#ardcay-style1{
    margin-left: -18rem;
}
#ardcay-style2{
    margin-left: -18rem;
}
#ardcay-style3{
    margin-left: -18rem;
}
#ardcay-style4{
    margin-left: -18rem;
}
#ardcay-style5{
    margin-left: -18rem;
}
/*Testimonial-Image*/
img[alt='Image1'] {
    height: 70px;
    width: 70px;
    border-radius: 20px;
    border: 2px solid #FFEBB2;
    object-fit: cover;
    &:hover {
        transform: scale(1.2);
        height: 100px;
        width:100px;
        margin: 8px;
    }
   
}
@media screen and (max-width: 300px) {
.ardcay {
    width: 550px;
    height: auto;
    border: 3px solid #fff;
    border-radius: 30px;
    box-shadow: .3vw .2vw .2vw silver, .1vw 0.1vw .5vw silver;
}
}
</style>