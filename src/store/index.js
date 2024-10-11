import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null,
    projects: null,
    skills: null,
    education: null,
    work: null,
    testimonials: null,
  },
  mutations: {
    setAboutMe(state, info) {
      state.aboutMe = info
  },
  setProjects(state, info) {
    state.projects = info
},
  setSkills(state, info){
    state.skills = info
  },
  setEducation(state, info) {
    state.education = info
  },
  setWork(state, info) {
    state.work = info
  },
  setTestimonials(state, info) {
    state.testimonials = info
  }
},
actions: {
  async getAboutMe(context){
    let fetchedData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
    let oor = await fetchedData.json();
    console.log(oor);
    let {AboutMe} = oor
    context.commit('setAboutMe',AboutMe)
  },
  async getProjects(context){
    let projectData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
    let project = await projectData.json();
    console.log(project); 
    let {projects} = project
    context.commit('setProjects',projects)
},
 async getSkills(context){
  let skillData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
  let skill = await skillData.json();
  console.log(skill);
  let {skills} = skill
  context.commit('setSkills',skills)
  },
  async getEducation(context){
    let educationData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
    let educations = await educationData.json();
    console.log(educations);
    let {education} = educations
    context.commit('setEducation',education)
  },
  async getWork(context){
    let workData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
    let work = await workData.json();
    console.log(work);
    let {workExp} = work
    context.commit('setWork', workExp)
  },
  async getTestimonials(context){
    let testimonialsData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
    let testimonial = await testimonialsData.json();
    console.log(testimonial.testimonials);
    let {testimonials} = testimonial
    context.commit('setTestimonials', testimonials)
  }
},
})
