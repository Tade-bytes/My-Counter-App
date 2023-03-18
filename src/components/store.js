import { createStore } from "vuex";

const initial = 0;
const store = createStore({
    state: {
        counter: initial,
    },
    mutations:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        reset(state){
            state.counter = initial;
        },
        setValue(state, payload){
            state.counter = payload;
        },
        }
    
});

export default store;