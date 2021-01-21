export default {
    increment(context){
        setTimeout(function(){
            context.commit('increment')
        })    
    },
    increase(context, payload){
        setTimeout(function(){
            context.commit('increase', payload)
        }, 2000)
    },
}