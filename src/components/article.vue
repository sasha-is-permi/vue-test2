<template>
<div class="border">
   <h2 class="text-center"> {{theme}} &nbsp;&nbsp;&nbsp;  {{date}}</h2>
    <div class="text" v-html="content"></div>
    <div class="link">
     <router-link class="red " to="/Main">  Вернуться к списку статей   </router-link> 
    </div> 
 </div>   
</template>

<script>
export default{
 data(){   
 return{
 date:     this.$route.params.article.date || " " ,
 theme: this.$route.params.article.theme || " ",
 content:  this.$route.params.article.content || " " 

 }
 }
}
</script>

<style scoped>

.red{
    color:#c00;
}


.text-center{
  text-align: center;
}

.text{
  width:60%;
  margin: 0 auto;
  font-size:22px;
}

.link{
  margin: 0 auto;
  width:250px;
  font-size:22px;
}

.border{
  width:98%;
  height:80%;
  margin: 0 auto;
  border: 1px solid black; 

}

</style>