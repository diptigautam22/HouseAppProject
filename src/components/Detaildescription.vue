<template>
    <body>
  
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" >
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous' rel="stylesheet">
   
  
    <br/>
    <br/>
    
        <br />
  
        <br />
        <br />
        
    
          <div class="a"><router-link to="/houeses">Go to Back</router-link></div>
          <div class="detailcity" v-for="house in houses">
            <p class="detailimg">
              <img v-if="house.image" v-bind:src="house.image" class="imgdetail" >
            </p>
            <div class="detailicon">
              <p class=" icon1"><strong>{{ house.location.street}}</strong> &nbsp <strong> {{ house.location.houseNumber }}</strong>
            
            <i class="material-icons" style="font-size:30px;color:red; margin-left: 300px">delete</i>
            <i class="fa fa-edit" style="font-size:30px;color:red;position: absolute;margin-left: 30px"></i>
  
          
            </p>
              <p class="fas fa-map-marker-alt"><small>{{ house.location.zip }}</small> &nbsp <small>{{ house.location.city }}</small></p>
              <p><i>${{ house.price }}</i><i class="fa fa-square-o"><span>{{ house.size }}</span></i>
                <i><span class="fa fa-building">{{ house.createdAt }}</span></i>
             </p>
              <p><i class="fa fa-bed"><span>{{ house.rooms.bathrooms }}</span></i>
              <i class="fa fa-bath"><span>{{ house.rooms.bedrooms }}</span></i>
              <i><span class="fa fa-garage">{{ house.hasGarage }}</span></i>
              
            </p>
            <p>{{ house.description }}</p>
          </div>
          
          </div>
          
      
    </body>
  </template>
  <script>
  
   import axios from 'axios';
  
   export default{
      name: 'Detaildescription',
      data(){
           return{
             houses:[],
             
             
             
            
            };
          },
          mounted() {
            this.fetchhousedata();
            
          
          },
        methods: 
          {
           
  
             async fetchhousedata()
              {
                  const apiurl='https://api.intern.d-tt.nl/api/houses/'+this.$route.params.id;
                  const apikey='e32NSYlCc-iK04MrgfuJHL6DXO1sjWyh';   
                  const response=await axios.get(apiurl, {
                                       headers: {
                                        'Content-Type': 'application/json',
                                        'X-Api-Key': apikey,
                                       },
                                       });
                      this.houses=response.data;                 
                              
              },
              
  
  
            
          },
            };
             
          
  
   
  </script>
  <style>
  .a{
    margin-left: 100px;
  }
  .detailcity
  {
    color:black;
    font-size:20px;
    margin: 10px;
  }
  .detailicon
  {
    

  }

  .imgdetail
  {
    width: 600px;
    height: 400px;
    border: 5px solid grey;
    text-align: center;

  }
  .icon1
  {
    font-size:30px;
    color: black;
  }
  
  
  </style>