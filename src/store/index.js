import Vue from 'vue'
import Vuex from 'vuex'
//import data from '@/store/data';
/*
На этой странице выводятся карточки (статьи), в которой находиться дата добавления, 
фотография, тема статьи, 
контент не более 25 символов и если контента больше показать “...”,
 автора статьи (Имя автора).
*/
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   articles: [
    ,
    {
      date:'09.09.2021',
      theme:'Животные',
      content:` Хамелеоны могут двигать глазами в разных направлениях одновременно.  <br/><br/> 

      2 Белка – лучший садовник. Миллионы деревьев вырастают потому, что белки забывают, куда спрятали семечки.
      
      3 Зуб слона  может весить до девяти килограмм! <br/><br/>
      
      4 У млекопитающих кровь красная, у насекомых жёлтая, у омаров синяя. <br/><br/>
      
      5 В среднем коровы какают 16 раз в день. <br/><br/>
      
      6  Муравьи никогда не спят. Вместо этого, они «отдыхают» по восемь минут “отдохнуть” два раза в день. Отдых королевы муравьев занимает  90 минут в день. <br/><br/>
      
      7. Басенджи – единственная собака, которая не может лаять. <br/><br/>
      
      8. Только половина мозга дельфина спит. Вторая половина в то время  бодрствует, и следит за окружающей обстановкой. <br/><br/>
      
      9. Блоха может передвигаться только прыжками, мышцы её лапок устроены, как катапульты. Они накапливают энергию и “выстреливают” блоху в прыжок. <br/><br/>
      
      10. Глаз гигантского кальмара размером с баскетбольный мяч. <br/><br/>
      
      11. Бегемоты рожают под водой, чтобы защитить своих детей от падения! <br/><br/>
      
      12. У лебедя более 25000 перьев на  теле. <br/><br/>
      
      13.  Электрический угорь может вырабатывать  энергию , способную зажечь 12 лампочек. <br/><br/>
      
      14. Змеи  видят -через веки. <br/><br/>
      
      15. Крысы могут смеяться если их пощекотать. <br/><br/>
      
      16. Крот может выкопать тоннель длиной до 300 метров, за одну ночь. <br/><br/>
      
       17 Из-за своей постоянной улыбки, квокка известен считается самым  счастливым животным. <br/><br/>
      
      18 Морские котики  могут задерживать дыхание на два часа. <br/><br/>
      
      19. Когда устрицам необходимо размножаться, они  могут менять свой пол. <br/><br/>
      
      20. Вороны настолько умны, что они любят проказничать! Они даже могут подкрасться к собаке сзади и играя хватать ее клювом за хвост. <br/><br/>
      
      21. Жирафы не имеют голосовых связок, поэтому они не могут “говорить!” <br/><br/>
      
      22. Горбатые киты издают самый громкий звук любого млекопитающего, он  может быть слышан за 20 километров! <br/><br/>
      
      23. Лошади имеют хорошую память, они могут  помнить вещи, людей, которых они встречали, а также навыки которыми владели несколько лет назад. <br/><br/>
      
       24. Зебры бегут зигзагами, чтобы спастись от хищников. <br/><br/>
      
      25 Божьи Коровки могут убирать за собой еду. <br/><br/>
      
      26. У нарвала цвет кожи зависит от его возраста: чем светлее кожа, тем старше нарвала. <br/><br/>
      
      27. У коал отпечатки пальцев похожи на  человеческие. <br/><br/>
      
      28. Все сурикаты  имеют обязанности в  группе, в которой  живут. <br/><br/>
      
      29. Крокодилы не могут высовывать язык! <br/><br/>
      
      30. Когда обезьяны-пауки  встречаются, то они обнимают  друг друга. <br/><br/>
      
      31. Кошки имеют 32 мышцы в каждом из своем ухе. <br/><br/>
      
      32. Летучие мыши являются единственными млекопитающими которые могут летать? <br/><br/>
      
      33. Белые медведи-левши. <br/><br/>
      
      34. У золотой рыбки память 3 секунды <br/><br/>
      
      35. Даже после того, как медуза умерла, она все еще может ужалить. <br/><br/>
      
      36. Навозные жуки могут переносить на себе грузы в 50 раз превышающие его массу тела . <br/><br/>
      
      37. Сердце креветки находится в голове. <br/><br/>
      
      38. Улитка может спать три года подряд. <br/><br/>
      
      39. Щеки бурундука могут  растягиваться от орешек и еды в три раза больше чем его голова. <br/><br/>
      
      40 У тигра не только полосатая шкура, но и тело тоже. <br/><br/>
      
      41 Морские коньки плавают “держась за руки”, это они связывают вместе свои хвосты. <br/><br/>
      
      42. Глаз у страуса больше, чем размер его мозга. <br/><br/>
      
      43. Волки могут съесть 20 кг мяса за один прием пищи. <br/><br/>
      
      44. Бабочки пробуют пищу ногами. <br/><br/>
      
      45. Беркут может летать со скоростью свыше 250 км/час. <br/><br/>
      
      46. Яд лягушки – стрелка может убить 2200 человек. <br/><br/>
      
      47. Львы не могут рычать, пока им не исполнится 2 года. <br/><br/>
      
      48. Скунсы может распылить защитную вонь в радиусе 10 метров. <br/><br/>
      
      49. Акулы жили раньше  чем динозавры! Окаменелости акул  датируются 450 миллионов лет. <br/><br/>
      
      50. В отличие от большинства видов кошек, оцелоты отлично плавают. <br/><br/>
      
      51. Луговые собаки живут в норах, которые имеют отдельную ванную комнату, детскую зону и зону для отдыха. <br/><br/>
      
      52. Рыба-парусник является самой быстрой рыбой и достигает скорости 115 км/час. <br/><br/>
      
      53 Самец – пингвин  “предлагает” руку и сердце самке, даря ей камень. Если она принимает его, то кладет   этот подарок в свое гнездо. <br/><br/>
      
      54 Павлин считается самой красивой птицей среди курообразных. Павлин — очень близкий родственник петуха. <br/><br/>
      
      55.  Новорождённый слонёнок весит около 100 килограммов. <br/><br/>
      
      56. Сурки свистят , когда им угрожает опасность. <br/><br/>
      
      57. Императорские пингвины могут нырять на глубину до 500 метров и способны задерживать дыхание на 18 минут. <br/><br/>
      
      58. В Индии 50 миллионов обезьян. <br/><br/>
      
      59. Мухи жужжат нотой ФА. <br/><br/>
      
      60. Синий Кит весит как три слона. <br/><br/>
      
      61. Гиббоны имеют самые длинные руки среди  всех приматов. <br/><br/>
      
      62 У коз частая  отрыжка. <br/><br/>
      
      63. У зубатки вкусовые рецепторы по всему телу. <br/><br/>
      
      64. Брызгун может поражать добычу плевком с расстояния  1,5 метров. <br/><br/>
      
      65. У вомбат какашки квадратной формы. <br/><br/>
      
      66 Ламы не имеют копыт. <br/><br/>
      
      67. Детеныши - дикобразы когда рождаются имеют мягкие иголки ,  которые затвердевают через несколько дней. <br/><br/>
      
      68. Верблюд может обходиться без воды две недели. <br/><br/>
      
      69. Лось имеет очень чувствительные рога. <br/><br/>
      
      70. Гекконы иногда едят свои хвосты, после потери. <br/><br/>
      
      71. В течение жизни хлопотливая пчёлка производит одну двенадцатую чайной ложечки мёда. <br/><br/>
      
      72. Скорость размножения крыс так велика, что при благоприятных обстоятельствах 2 крысы могли бы дать потомство в 1 миллион крыс в течение полутора лет. <br/><br/>
      
      73. Некоторые мотыльки могут вырастать размером с ладонь взрослого человека. <br/><br/>
      
      74. Детеныши шакала  рождаются под землей. <br/><br/>
      
      75. Кузнечик может прыгать на расстояние в 20 раз превышающее  длину его тела. <br/><br/>       
      
      76  У фламинго , их красивый цвет получается  от водорослей, диатомеи и мелких ракообразных, которых они едят, и которые богаты каротином. <br/><br/>
      
      77. По черепахи можно распознать по звуку: самцы ворчат, самки шипят. <br/><br/>
      
      78 Бойцовая рыбка может выжить без воды в течение нескольких часов. <br/><br/>
      
      79 Стрекозы могут летать в любом направлении – вперёд, назад и в стороны. Это самые быстрые летающие насекомые, их скорость достигает почти 100 километров в час. <br/><br/>
      
      80 Голубые киты – самые крупные животные на Земле. <br/><br/>
      
      81 Сфотографировать живого гигантского кальмара люди сумели только в 2006 году. Живут эти полутонные чудовища на глубине от 200 метров до километра. <br/><br/>
      
      82 Жужжание пчелы производится четырьмя крыльями, которые делают по 11 400 взмахов в минуту. Скорость полёта пчелы – 25 километров в час. <br/><br/>
      
      83 Азиатский гигантский шершень кусается больнее всех насекомых. У нас он встречается в Приморском крае. <br/><br/>
      
      84. Паук Тарантул может жить без пищи два года. <br/><br/>
      
      85. Раненый или напуганный опоссум падает мёртвым, у него стекленеют глаза, изо рта течёт пена, а из анальных желёз источается зловоние. После того, как опасность минует, опоссум оживает и выздоравливает. <br/><br/>
      
      86. В Ирландии, Исландии, Гренландии и Антарктиде нет змей. <br/><br/>
      
      87. Гуси любят чернику! <br/><br/>
      
      88. Серебряные муравьи пустыни  Сахары могут жить при температуре до 158 градусов. <br/><br/>
      
      89. В козьем молоке в 5 раз меньше жира, чем в коровьем. Коровье молоко усваивается час, козье – 20 минут <br/><br/>
      
      90. Скорпионы светятся в темноте. <br/><br/>
      
      91. Чайки могут пить соленую воду. У них есть специальные железы, которые удаляют лишнюю  соль из организма. <br/><br/>
      
      92 Красные панды используют свой пушистый хвост в качестве одеяла, чтобы согреться. <br/><br/>
      
      93. Единственная собака, у которой язык не розовый – чау-чау <br/><br/>
      
      94. Японские макаки научились покупать товары из торговых автоматов. <br/><br/>
      
      95 В отличие от сухопутных черепах, морские  не втягивают головы в панцирь. <br/><br/>
      
      96. Эму не могут ходить назад. <br/><br/>
      
      97. Губки создают свои собственные специальные химические вещества, выделяемые в воде для защиты от хищников. <br/><br/>
      
      98. Мыши имеют больше костей, чем у человека:  около 230. У человека их 206 . <br/><br/>
      
      99 В среднем курица откладывает 190 яиц в год <br/><br/>
      
      100. Если начнут драться лев и белый медведь, то победит белый медведь <br/><br/> `,
      author:{email:'sasha-is-permi',name:"Александр"}  
      },  
    {     
   date:'10.09.2021',
   theme:'Морские обитатели',
   content:`Морские обитатели и интересные факты о них. Подводный мир
  Все недоступное зачаровывает. А что может быть дальше от человека, чем океанское дно? Морские обитатели так непохожи на земных существ. О них очень хочется узнать побольше.
  Чем питаются? Как живут и защищаются? Так много всего того, что очень хочется знать.  
  Смотря на поверхность воды, трудно представить то многообразие жизни, которое скрывается внизу. А ведь это не только животные, рыбы и растения. `,
   author:{email:'sasha-is-permi',name:"Александр"}  
   },
   {
    date:'11.09.2021',
    theme:'Птицы',
    content:`Все Мы часто гуляем по городу, смотрим по сторонам, афиши, витрины и тд. Гуляем по паркам и аллеям... 
    И мало замечаем тех, кто живет с нами рядом. Летает, прыгает, поет песни, которые теряются в шуме города,
     а вспоминаем мы о них только в те моменты, когда хочется куда то убежать или отвлечься... <br/><br/>
        Помню в детстве, смотря по ТВ передачи о животных,
       всегда задавался вопросом- зачем показывать нам Африку, с её слонами, обезьянами и пр. покажите нашу природу,
        наших животных, птиц, тех которые нас окружают и о которых мы так мало знаем и видим. Увидишь порой на дереве птицу и не можешь сказать-
         а кто это, что за птица .. Города наши ныне постепенно теряют зеленые насаждения и тем не менее, птицы в них живут. Расчистка земель для 
         городского развития разрушает их разнообразие. Его поддержание важно для благополучия и людей и птиц. Деревья и открытое пространство исчезают
          и потому птицы вынуждены приспосабливаться к новой среде. Большие площади земли должны быть оставлены нетронутыми при планировании новых городских территорий. 
          Парки и открытые пространства приютят птиц и различных животных. В среднем популяция городских птиц несколько выросла за последние три десятилетия. Встречаются
           в городе постоянные обитатели города и птицы-мигранты.

`,
    author:{email:'sasha-is-permi',name:"Александр"}  
    }]
  },
  mutations: {
            // записываем в state полученную информацию
            articles(state,data){                 
             state.articles = data
             },
  },
  actions: {
     // Получение всех элементов из json файла
     articles({commit}){
      if (data){       
        console.log(data)
      }
       
     commit('articles',data)
  },
},
  getters: {
    articles(state){
    return state.articles;
    }
  }
})
