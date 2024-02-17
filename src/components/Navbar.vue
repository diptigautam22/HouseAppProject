<template>
  <nav>
    <img src="images\img_logo_dtt@3x.png" class="logo">
      <ul>
          
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/ContactUs">CONTACT</router-link></li>
          <li><router-link to="/AboutUs">ABOUT</router-link></li>
          <li><router-link to="/City">CITY</router-link></li>
          <li><router-link to="/houeses">HOUSES</router-link></li>
          
      </ul>
  </nav>
  <router-view></router-view>
  
</template>
<script>
export default {
  name:'Navbar',
  


}

</script>
<style>
nav{
    background-color:white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;

}
nav ul
{
  margin-left:200px;
}
nav li{
  display:inline;
  width:100px;
  height: 100px;
  color:rgb(21, 66, 8);
  background-color: rgb(252, 37, 37);
  padding: 20px;
  margin-left: 100px;
  
}
li:hover
{
  cursor: pointer;
  background-color: white;
  color:green;
  border:1px solid black;
}
.logo{
    max-width: 5%;
    height:5vh;
    position: absolute;
    left: 0;
    padding:20px;
 }

</style>