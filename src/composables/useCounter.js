import {ref, computed} from "vue";
import {useStore} from "vuex";

export default function useCounter() {
    const store = useStore();
    const counter = computed({
        get: ()=> store.state.counter,
        set: (inputValue) => store.commit("setValue", inputValue)
    });

    const increment = ()=> {
        store.commit("increment");
    };
    const decrement = ()=> {
        store.commit("decrement");
    };
    const inputValue = ref(null);

    const setValue = ()=> {
        store.commit("setValue", inputValue);
    };
    const reset = ()=> {
        store.commit("reset");
    };
    return{
        counter,
        inputValue,
        setValue,
        increment,
        decrement,
        reset
    };
    
}

