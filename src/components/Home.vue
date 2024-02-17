<template>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="img1">
 <h1>Easy way to find a perfect property</h1>
 <p> We provide a complete service for the sale,purchase or rental for the real estate</p>
 <span>City</span>
 <input type="search" placeholder="Select your city" class="box">
 <span>Property Type</span>
 <input list="b" placeholder="Choose property type" class="box"> 
            <datalist id="b">
            <option value="Buy"></option>
            <option value="Rent"></option>
        </datalist>
        <span>Price Range</span>
 <input type="search" placeholder="Price Range" class="box">
 <button class="btn"><i class="fa fa-search"></i></button> 
</div>

</template>
<script>
export default{
    name: 'Home'
}
</script>
<style>
.img1
{

    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:100vh;
    background-size: cover;
    text-align: center;
    border-radius: 5px;
    background-image: url("depositphotos_3337567-stock-photo-red-house.jpg");
}
p{
    font-size: 20px;
    color: #2e23cb;
    
    
}
h1{
    padding-top: 15%;
    font-size: 40px;
    color:#5ea561;;
    
}
span{
    font-size: 18px;
    color: #4e870c;;
    font-family: 'Lucida Sans Semibold';
    
    
}
.box
{
    padding: 10px;
    border: 1px solid rgba(8, 4, 4, 0.2);
    border-radius: 10px;
    border-color:black;
    margin-left: 10px;

}
.btn
{
    width:60px;
    height:30px;
    margin-left: 50px;
}
</style>