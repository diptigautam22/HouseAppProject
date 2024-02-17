<template>
    <body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <h1>Contact US</h1>
        <P >If you have any work from me or any types of quries related house search, you can send me message from here. It's my pleasure to help you.</P>

    
    <div class="row">  
        <div class="column">
                
                <h3><i class="fa fa-home"> Address:</i></h3>
                <p>Surkhet, NP12</p>
                <p>Birendranagar 06</p>
                <h3><i class="fa fa-phone"> Phone:</i></h3>
                 <p>+0098 9893 5647</p>
                 <p>+0098 9893 5647</p>
                <h3><i class="fa fa-envelope"> Email:</i></h3>
                 <p>codinglab@gmail.com</p>
                 <p>info.codinglab@gmail.com</p>
        </div>
        <div class="column" >    
                <h2> Send us a message</h2>
                <span>Name</span>
                <input type="text" placeholder="Enter your name" ><br>
                <span>Email</span>
                <input type="text" placeholder="Enter your Email Address"><br>
                <textarea placeholder="Message"></textarea><br>
                <button>Submit</button>
           
        </div>
    </div>    
    </body>  
</template>
<script>
export default{
    name:'ContactUs'
}
</script>
<style>
.row
{
    display: flex;
}
.column
{
    flex: 50%;
    padding:10px;
    height:300px;
}
h1
{
    text-align: center;
    font-size: 35px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: darkcyan;
}
h2
{
    color: seagreen;
}
p
{
    margin-left: 200px;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    color:darkslateblue;
}
h3
{
    color:darkcyan;
    word-spacing: 30px;
    margin-left: 200px ;
}


input
{
    padding: 10px;
    border: 1px solid rgba(8, 4, 4, 0.2);
    border-radius: 10px;
    border-color:black;
    margin: 10px;
    margin-left: 100px;
}
textarea
{ width:500px;
    height:100px;
    background-color: #F0F1F8;

}
button
{
    margin: 20px;
    
}



</style>