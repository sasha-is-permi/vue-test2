<!-- Страница авторизации полизователя.
     Валидация формы осуществляется с помощью 
     пакета validate
     ( установка: npm install vuelidate --save-- ) 
    npm i --save-dev @types/vuelidate 
     
     -->

<template>
<div> 
  <h2 class="form-header"> Введите ваши данные для авторизации: </h2>
  


 <form 
 @submit.prevent="onSubmit"
 name="form"
 action="#"
 method="post"
 enctype="multipart/form-data"
    >
        <fieldset>
            <div class=form-wrapper>
             <div class="form-line">
                <label for="name">Ваше имя:</label>
           <!-- Вызов собственного валидатора  name при потере фокуса
         (  @blur="$v.name.$touch()")
         -->             
               
                <input 
                id="name"
                type="text"
                name="name"
                :class="{'is-invalid': $v.name.$error}"
                @blur="$v.name.$touch()"
                v-model="name"
                 />
            </div>
           <div class="invalid-feedback" v-if="!$v.name.required">Требуется ввести имя</div>  
            <div class="form-line">
                <label for="email">Ваш email:</label>
          
         <!-- Вызов собственного валидатора  email при потере фокуса
         (  @blur="$v.email.$touch()")
         -->     
          <input
          type="email"
          id="email"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
          name="e-mail" 
        >
            </div>
        <div class="invalid-feedback" v-if="!$v.email.required">Требуется ввести email</div>
        <div class="invalid-feedback" v-if="!$v.email.email">В этом поле должен быть email</div>      
            <div class="form-line">
                <label for="password">Ваш пароль:</label>
                
        <!-- Вызов собственного валидатора  password при потере фокуса
         (  @blur="$v.password.$touch()" )
         -->        

                <input 
                id="password" 
                type="password"
                name="password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
                @blur="$v.password.$touch()"
                v-model="password"
                />
            </div>
         <div class="invalid-feedback" v-if="!$v.password.required">Требуется ввести пароль!</div>
            <div class="form-file" >
                <label id="file1-label" for="file">Файл:</label>
                <input id="file1" type="file" name="file" />
            </div>    
            </div>
        </fieldset>
        <div class="reset-submit">
            <input id="reset1" type="reset" value="Сбросить" />
            <!-- Валидация при нажатии кнопочки submit 
            При нажатии на кнопку вызываем метод onSubmit()
            Кнопка отключена пока валидация не прошла 
            -->
            <input
            color="primary"
            :disabled="$v.$invalid"
             id="submit1" 
             type="submit" 
             name="submit" 
             value="Отправить" 
             />
        </div>
    </form>
     </div> 

  


</template>

<script>
// импортируем валидаторы стандартные, на их основе 
// делаем собственные валидаторы в validations:
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    data () {
    return {
      email: '',
      password: '',
      name:''
    }
  },
  methods: {
    onSubmit () {
     // Добавление данных в локальное хранилище localStorage
     // В окне консоли- вкладка Applications (или Resources)
     // Там можно увидеть сохраненные данные через localStorage
     
     // Объект для дальнейшей записи в localStorage
     // Авторизация идет по e-mail и password
     let User= {
     name: this.name,
     password:this.password,
     email:this.email
     }

    // существует ли email, который заводится из формы, в localStorage 
    let emailExist   = false;
    let passwordTrue = false;

    // Перебор уже существующих значений в localStorage 
    for(let i=0; i<localStorage.length; i++) {
 
    // Получаем по ключу записанный в localStorage объект
    let userLocalStorage0 = localStorage.getItem ( localStorage.key(i) );
    
    

    console.log('User',User);

    console.log('userLocalStorage0',userLocalStorage0); 

    console.log('TypeofuserLocalStorage0',typeof(userLocalStorage0)); 

    let isJSON = true;

   
   try {
     JSON.parse(userLocalStorage0);
    } catch (e) {
      console.log('строка не в формате JSON:',userLocalStorage0);
      isJSON = false;
    }  

   // Если строка их хранища не в формате JSON- 
   // переходим на начало цикла, пропускаем данное значение
   if  (isJSON === false) continue;
      
      // А если в формате JSON- применяем функцию parse
    let   userLocalStorage = JSON.parse(userLocalStorage0);
   
   // Если уже существует такой пользователь в localStorage- 
     // ставим флаг "не добавлять пользователя"
     if (userLocalStorage.email === User.email) {
        emailExist = true; console.log("email true")
     if (User.password === userLocalStorage.password)  {
                   passwordTrue = true;  console.log("password true")
          }       
        
        }

    }     
    
        // Нового пользователя сохраняем localStorage
    if (emailExist === false) {      
     // Сохраняем введенный объект в формате JSON 
     // Ключ уникальности в localStorage-  по  email 
    localStorage.setItem(User.email,JSON.stringify(User))
  //  alert('Объект сохранен в localStorage***')
    }
      else {
    // Если введен правильный e-mail, но не правильный пароль  
    if ((emailExist) && (!passwordTrue)) {
       alert('Пользователь с таким email существует и для него введен неправильный пароль. Ведите другой email или пароль! ')
    }
    
    // Если введен правильный e-mail, и правильный пароль  
    if ((emailExist) && (passwordTrue)) {
      this.$router.push('/main')
    }
           }

  }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15)
    }
  }

}

</script>

<style lang="scss">

$color-header : #42b983;
$margin-10: 10px;
$margin-50: 50px; 

.form-header { 
color: $color-header;
text-align:center;
}

body{
/* background-image: url(bg-01.jpg); */
background-size: 100%; 
}



.form-wrapper {
     width: 300px;
     margin: 20px auto;
     font-size: 16px;
}


.form-line {
   margin-top: $margin-10;
   display: flex;
   justify-content: space-between;
}

.form-file {
   margin-top: $margin-50;
   display: flex;
   justify-content: space-between;
}

.reset-submit{
   /* по центру */ 
   margin-top: $margin-10 ;
   display: flex;
   justify-content: center;
}


#reset1{
margin-right:$margin-10;
}

#file1{
   margin-left: 20px; 
}

// При ошибочном e-mail-
// выделить его цветом
.is-invalid{
    color: red;
}

// Сообщение об ошибочном e-mail
.invalid-feedback{
    color:darkgreen
}

</style>





