import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/store/data';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libraryes: [ ]
  },
  mutations: {
            // записываем в state полученную информацию
            libraryes(state,data){                 
             state.libraryes = data
             },
  },
  actions: {
     // Получение всех элементов из json файла
     libraryes({commit}){
      if (data){       
        console.log(data)
      }
       
     commit('libraryes',data)
  },
},
  getters: {
    libraryes(state){
    return state.libraryes;
    }
  }
})
