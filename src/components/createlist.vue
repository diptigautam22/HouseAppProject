<template>
    <br/>
    <br/>
    
    
    
<div class="heads">
    
    <form class="addform">
        <h4>Create New List</h4>
            <div class="addcol">
            <label> Street Name*:</label>
            <input type="text" v-model="housesData.street" name="street" placeholder="Enter your street name" required>
            </div>
            <div class="addcol1">
                <label> House Number*:</label>
                <input type="text" placeholder="Enter your Houseno." v-model="housesData.houseNumber" name="houseNumber" required>
                
                <label> Addition(optional):</label>
                    <input type="number" v-model="housesData.houseNumberAddition"  name="houseNumberAddition" placeholder="eg A">
                    
                </div>
                <div class="addcol">
            <label> Postal Code*:</label>
            <input type="text" v-model="housesData.zip" name="zip" placeholder="e.g. 1000 AA" required>
            </div>
            <div class="addcol">
            <label> City*:</label>
            <input type="text"  v-model="housesData.city" name="city" placeholder="e.g. Utrect" required>
            </div>
            <div class="addcol">
            <label> Price*:</label>
            <input type="text" v-model="housesData.price" name="price" placeholder="e.g 441500" required>
            </div>
            <div class="addcol">
            
                <label> Size*:</label>
                <input type="text"  v-model="housesData.size" name="size" placeholder="e.g. 16m" required>
                
                
                    <label> Garage</label>
                     <select name="hasGarage" v-model="housesData.hasGarage">
                            <option>---select option--</option>
                            <option>Yes</option>
                            <option>No</option>
                            
                        </select>
                    
                </div>
                <div class="addcol">
                
                <label> Bedrooms*:</label>
                <input type="text"  v-model="housesData.bedrooms" name="bedrooms" placeholder="Enter your Houseno." required>
                
                
                    <label> Bathrooms*:</label>
                    <input type="number" v-model="housesData.bathrooms" name="bathrooms" placeholder="eg 3" required>
                    </div>
                
                <div class="addcol">
            <label> Construction Date*:</label>
            <input type="date" v-model="housesData.createdAt" name="createdAt" placeholder="e.g 441500" required>
            </div>
            <div class="addcol">
            <label> Description*:</label>
            <input type="textbox" placeholder="e.g 441500" v-model="housesData.description" name="description" required>
            </div>
        <button type="button" v-on:click="addhouse">Sumbit</button>




</form>
</div>
</template>
<script>

 import axios from 'axios';

 export default{

    name:'createlist',
      data() {
 return{
            housesData: {
            street:'',
            city:'',
            size:'',
            bedrooms:'',
            bathrooms:'',
            description:'',
            price:'',
            zip:'',
            houseNumber:'',
            houseNumberAddition:'',
            createdAt:'',
            hasGarage:''

            }

        };

    },
    
    methods:{
       async addhouse()
        {
            
            const datatosend={ 
                              price:this.housesData.price,
                              
                               
                            }; 
                                
                            
                const apiurl='https://api.intern.d-tt.nl/api/houses';
                 const apikey='e32NSYlCc-iK04MrgfuJHL6DXO1sjWyh';   
             let result=   await axios.post(apiurl, datatosend,{ 
                                      headers: {
                                       'Content-Type': 'application/json',
                                       'X-Api-Key': apikey,
                                      } 
                                      

                                    }); 
                            
        }

    },
   
 };
 </script>
 <style>
 h4{
    text-align: center;
    font-size: 30px;
    color:brown;
 }
 .addcol1
 {
    
    
    display:flex;
flex-wrap: wrap;
flex-direction: column; 



    
      
 }
 .heads
 {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:100%;
    background-size: cover;
    border-radius: 5px;
    background-image: url("img_background@3x.png");
    
 }
 .addform{
    
    max-width: 700px;
    width:100%;
    border-radius: 6px;
    padding:30px;
    margin-top: 16px;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); 
    
}
.addcol
{
    
 display:flex;
flex-wrap: wrap;
flex-direction: column;

}
.addform input{
    height:50px;
    width:200px;
    padding:0 15px;
    outline: none;
    border: 1px solid grey;
    
    margin-left:0px;
    

}
.addform label
{
    font-size:18px;
    font-weight:500px;
    color:darkolivegreen;
    padding-bottom: 15px;
    padding-top:15px;
}
.addform select{
    height:30px;
    width:200px;
    padding-left: 20px;
    outline: none;
    border: 1px solid grey;
}  
.addform button{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    max-width:200px;
    width:100%;
    background-color: darkslategray;
    border: none;
    outline:none;
    color: white;
    border-radius: 5px;
    transition: all 0.3s linear;
    cursor: pointer;
}
 </style>