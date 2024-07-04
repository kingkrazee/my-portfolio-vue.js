import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null,
    projects: null,
    skills: null,
  },
  getters: {
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
  }
},
  modules: {
  }
})
