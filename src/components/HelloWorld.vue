<template>
  <div class="hello">
    <NavBars class= "navLinks"/>
    <div class="hello">
    <h1> Welcome to My Counter Application</h1>
    <h3>What it does?</h3>
    <p>This counter application was created using the vue.js Javascript framework,<br> It exhibit an increment, decrement, reset and set value features. Vuex was used for state management. </p>
  </div>
  </div>
    
</template>

<script>
import NavBars from './NavBars.vue'
export default {
  name: 'HelloWorld',
  components: {
    NavBars,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  transform: translate(-50%,-50%);
  animation: mh1 5s infinite;
}
h3{
  margin: 40px 0 0;
}
p{
  font-size: 24px;
}
@keyframes mh1{
  from {
    transform: translateX(100%);
  }
  50%{transform: translate(0%);

  }
  to {
    transform: translateX(-100%);
  }
  
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
