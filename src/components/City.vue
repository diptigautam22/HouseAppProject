<template>
    <br/>
    <br/>
    <br/>
    <br/>
  <body class="imga">
    <br/>
    <b>We are available in Following city</b>


    <div class="imgrow">
        
        <div class="imgcolumn">
              <a href=""><img src="images\Almere.jpg"><span>Almere</span></a>
        </div>
       <div class="imgcolumn">
        <a href=""><img src="images\Breda.jpg" ><span>Breda</span></a>
        </div>
        <div class="imgcolumn">
        <a><img src="images\Eindhoven.jpg"><span>Eindhoven</span></a>
        </div>
         <div class="imgcolumn" >
        <a><img src="images\Enschede.jpg" ><span>Enschede</span></a>
        </div>
        <div class="imgcolumn">
        <a><img src="images\Groningen.jpg" ><span>Groningen</span></a>
        </div>
        </div>
    <div class="imgrow">
         <div class="imgcolumn">
        <a><img src="images\Haarlem.jpg" ><span>Almere</span></a>
        </div>
        <div class="imgcolumn">
        <a><img src="images\Nijmegen.jpg" ><span>Nijmegen</span></a>
        </div>
        <div class="imgcolumn">
        <a><img src="images\The Hague.jpg" ><span>The Hague</span></a>
        </div>
        <div class="imgcolumn">
        <a><img src="images\Tilburg.jpg" ><span>Tilburg</span></a>
        </div>
        <div class="imgcolumn">
        <a><img src="images\Utrecht.jpg" ><span>Utrecht</span></a>
        </div>
   </div>
   

  </body>
</template>
<script>
export default {
    name :'City'
    
}
</script>
<style>
.imga
{
    position: absolute;
    top:100px;
}
.imgrow
{
    
   margin-top: 40px;
    padding:30px;
     display:flex;
    
}
.imgcolumn
{
    flex:25%;
    padding: 30px;
    width: 200px;
    height: 200px;
    box-shadow: 2px 2px 2px 6px crimson;
}
.imgcolumn img
{
    width: 200px;
    height: 200px;
    border: 2px solid crimson;
    z-index: 1;


}

b
{
   
   font-size: 30px;
   text-align:center;
   position: absolute;
   left:40%;
   color: red;
}

</style>