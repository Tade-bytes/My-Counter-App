<template>
  <NavBars class='navLinks'/>
  <h1>Counter App</h1>
  <div class = "count">
    <center>
      <h2>
        {{counter}}
      </h2>
      <button class = "btn" @click="increment">Increment</button>
      <button class = "btn" @click="decrement">Decrement</button>
      <button class = "btn" @click="reset">Reset</button>
      <input type= 'number' v-model="inputValue"/>
      <button :disabled="inputValue === null" class = "btn" @click="setValue(inputValue)">Set value</button>
    
    </center>
  </div>
</template>

<script>
import NavBars from './NavBars.vue'
import useCounter from "@/composables/useCounter.js";
export default {

  setup(){
    const { counter, inputValue, setValue, increment, decrement, reset} = useCounter();
    return{
      counter,
      inputValue, 
      setValue, 
      increment, 
      decrement, 
      reset,
    };
  },
  components: {
    NavBars,

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  margin-top: 60px;
}
.count{
  box-sizing: border-box;
  border: 4px solid;
  text-align: center;
  border-radius: 10%;
  color: green;
  margin: 50px 300px;
  width: 60%;
  align-items: center;
  padding: 20px 20px
}
.count:hover{
  background: green;
  color: white;
}
.btn{
  margin: 4px 6px;
  padding: 4px 2px;
  width: 90px;
  height: 40px;
  color: white;
  border: none;
  background: green;
  border-radius: 4%;
  padding: 4px 0px; 

}
.btn:hover{
  width: 90px;
  background: white;
  color: green;
 
}
h1{
  background: white;
  color: green;
  font-size: 40px;
  font-family: sans;
}
.navLinks{
  display: flex;
  padding: 2% 6%;
  justify-content: space-between;
  align-items: center;
  color: green;
  margin: 8px;
  border: 8px solid rgb(0, 104, 0);
  border-radius: 10px;
  text-decoration: none;
}
</style>
