<template>
    <div class='err'>
    <h3>Error 404</h3>
    <p>Page Not Found</p>
    <router-link class='routeLink' to= '/'>Return to Home</router-link>
    
    </div>
</template>
<style>
h3{
font-size: 45px;
  font-weight: 300;
  color: red;
}
p{
    font-size: 23px;
}
.err{
  width: 100%;
  margin-top: 300px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 10px 0 20px 0 rgba(0,0,0, 0.2);
  color:green;
  
}

</style>