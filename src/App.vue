<template>
<div id = 'App'>
<router-view></router-view>
</div>
  
</template>

<script>
export default {
  name: 'App',
  

}
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
</style>
