import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    loading:false,
    error:null
  },
  user:{
id:'sdadasdasd',
registered:['dssadadsa']
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    },
    setLoading(state,payload){
      state.loading = payload
    },
    setError(state,payload){
      state.error = payload
    },
    clearError(state){
      state.error = null
    }
  },
  actions: {
    signUserUp({commit},payload){
      commit('setLoading' ,true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.senha)
      .then(
         user => {
           commit('setLoading' ,false)
           const newUser = {
             id:user.uid,
             registered:[],
             
           }
           commit('setUser',newUser)
        }
     )
     .catch(
       error => {
        commit('setLoading' ,false)
        commit('setError' ,error)
         console.log(error)
       }
     )
    },
    signUserIn({commit},payload){
      commit('setLoading' ,true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.senha)
      .then(
        user => {
          commit('setLoading' ,false)
          const newUser = {
            id:user.uid,
            registered:[],
          }
          commit('setUser',newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading' ,false)
          commit('setError' ,error)
          console.log(error)
        }      
      )
    },
    clearError({commit}){
      commit('clearError')
    }

  },
  modules: {
  },
  getters:{
    user(state){
      return state.user
    },
    loading(state){
      return state.loading
    },
    error(state){
      return state.error
    }
  }
})
