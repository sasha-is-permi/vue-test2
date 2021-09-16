<template>
    <div class="articles">
       <div class="search">
        <span> Поиск по словам, встречающихся в статье: </span>
        <input type="text" v-model="articleSearch"/>
        </div>
        <h2 class="header">Статьи:</h2>
        <div class="text">
        <p class="article"  v-for="article in articles" :key="article.date">
              <router-link 
        :to="{name:'Article' ,params:{article:article}}"    
        >   {{article.date}} {{article.author.name}} &nbsp;&nbsp;&nbsp; {{article.theme}} &nbsp;&nbsp;&nbsp; {{article.content.substring(0,50)+"..."}} </router-link>
        </p>  
       <div class="link">
     <router-link class="red " to="/">  Вернуться к авторизации  </router-link> 
    </div> 
        </div>
    </div>
</template>


<script>
   export default{
       data() {
         return{
           articleSearch:""    
         }
       },
           
              computed: {           
              articles() {
                  let articles2 = this.$store.getters.articles;
                  console.log("articles", articles2)
                
                  articles2 = articles2.filter(item => {
                  return item.content.toUpperCase().indexOf(this.articleSearch.toUpperCase())!==-1;
                    })

                  console.log("articles2", articles2)
                    return articles2;
            }
            }
                
                }

                
            

 

</script>

<style scoped>
  .search{
  width:350px;
  margin: 0 auto;
  font-size:22px;
  }
  .text{
  width:60%;
  margin: 0 auto;
  font-size:22px;
  }
  .header{
    text-align: center;
  }

  .link{
  margin: 0 auto;
  width:250px;
  font-size:22px;
}

</style>