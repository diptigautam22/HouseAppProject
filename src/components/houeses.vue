<template>
  <body>


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" >
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 

  <br/>
  <br/>
    <div>
      <br />

      <br />
      <br />
      <header>
        <div class="hlist">
          <input v-model="city1" name="city" placeholder="Enter value city"/>
          <button v-on:click="searchdata">Search</button>
          <button class="rotl"><router-link to="/createlist">Create New List</router-link></button>
        
        </div>   
          
      
      
      </header>
        <div v-for="house in houses" :key="house.id">

        <div class="hour">
          <div class="houimg">
            <img v-if="house.image" v-bind:src="house.image" class="imgurl" >
            <p><router-link :to="'/Detaildescription/'+ house.id">Go To Detail</router-link></p>
          </div>
          <div class="houimg">
            <p><strong>{{ house.location.street}}</strong> &nbsp <strong> {{ house.location.houseNumber }}</strong></p>
            <p>${{ house.price }}</p>
            <p><small>{{ house.location.zip }}</small> &nbsp <small>{{ house.location.city }}</small></p>
            <p><i class="fa fa-bed"><span >{{ house.rooms.bathrooms }}</span></i>
            <i class="fa fa-bath"><span>{{ house.rooms.bedrooms }}</span></i>
            <i class="fa fa-square-o"><span>{{ house.size }}</span></i>
          </p>
        </div>
        <div class="houimg">
          <i class="material-icons" style="font-size:30px;color:red; margin-left: 300px">delete</i>
          <i class="fa fa-edit" style="font-size:30px;color:red;position: absolute;margin-left: 30px"></i>

        </div>


        </div>
        </div>
        

    </div>
  </body>
</template>
<script>

 import axios from 'axios';

 export default{
    name:'houeses',
    data(){
         return{
           houses:[],
           city1:'',
           id:'',
           
          
          };
        },
        mounted() {
          this.fetchhousedata();
          
          
        
        },
      methods: 
        {
         

           async fetchhousedata()
            {
                const apiurl='https://api.intern.d-tt.nl/api/houses';
                const apikey='e32NSYlCc-iK04MrgfuJHL6DXO1sjWyh';   
                const response=await axios.get(apiurl, {
                                     headers: {
                                      'Content-Type': 'application/json',
                                      'X-Api-Key': apikey,
                                     },
                                     });
                    this.houses=response.data;                 
                            
            },
           async searchdata()
            { 
              const apiurl='https://api.intern.d-tt.nl/api/houses';
                const apikey='e32NSYlCc-iK04MrgfuJHL6DXO1sjWyh';   
                const response=await axios.get(apiurl, {
                                     headers: {
                                      'Content-Type': 'application/json',
                                      'X-Api-Key': apikey,
                                     },
                                     });
                    this.houses=response.data;        
              const fliterdata=this.houses.filter(item=>item.location.city==this.city1);
                
                if(fliterdata.length>0)
                {
                  this.houses=fliterdata;
                  console.warn(this.houses);
                }
                else
                {
                 this.$router.push('/emptyimg');
                }
              
                
            
                  
               },


          
        },
          };
           
        

 
</script>
<style>

.rotl
{
  margin-left: 100px;
  

}

.hlist
{
  text-align: center;
  
  
  
}
.hlist input
{
  height:10px;
    width:300px;
    padding:15px;
    outline: none;
    border: 1px solid grey;
    
    
}
.hlist button
{
  width: 100px;
  height: 40px;
  background-color: red;
  border-color: white;
}
  .hour
  {
    display: flex;
     margin: 50px;
     border: 1px inset gray;
     box-shadow: 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: 19px;
     padding: 50px;
    
    
     
     
     
     
     
    
  }
  .hlist p,i,span{
    color: gray;
  }
  .houimg span
  {
    color:gray;
  }
.ha
{
  position:absolute;
  top:180px;
}
.imgurl
{
  margin-left: 200px;
  width:200px;
  height: 200px;
  border: 3px solid gray;
  
  
}

</style>