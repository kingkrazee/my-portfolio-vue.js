import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state, info) {
      state.aboutMe = info
  },
},
actions: {
  async getAboutMe(context){
    let fetchedData = await fetch('https://kingkrazee.github.io/first-api/data/data.json');
    let oor = await fetchedData.json();
    console.log(oor);
    let {AboutMe} = oor
    context.commit('setAboutMe',AboutMe)
  }
},
  modules: {
  }
})
