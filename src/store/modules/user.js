
export default {
    namespaced: true,
    state: {
        value: 0,
    },
    getters:{
        fetch_value: (state) => state.value
    },
    mutations:{
        increase: function(state){
            state.value +=1;
          },
       
    },
    actions:{
        increment: function({commit}){
            commit("increase")
          },
       
    }
}