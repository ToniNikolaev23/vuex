import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return{
            counter: 0,
            isLoggedIn: false
        }
    },
    mutations: {
        increment(state){
            state.counter++;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        },
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
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
        login(context){
            context.commit('setAuth', {isAuth: true})
        },
        logout(context){
            context.commit('setAuth', {isAuth: false})
        }
    },
    getters: {
        finalCounter(state){
            return state.counter * 2;
        },
        normaliziedCounter(_,getters){
            if(getters.finalCounter < 0){
                return 0
            }

            if(getters.finalCounter > 100){
                return 100
            }

            return getters.finalCounter
        },
        userIsAuth(state){
            return state.isLoggedIn
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
