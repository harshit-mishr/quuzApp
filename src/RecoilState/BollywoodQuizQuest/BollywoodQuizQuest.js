import {atom} from 'recoil'

export const BollywoodQuestion = atom({
  key : "Bollywood",
  default : [
    {
      id : 1 ,
      Qusetion :" Which Bollywood actor was honoured with the 24th Crystal Award at the world Economic Forum meeting in january 2018?",
      Option : [
        { Option : "Shahrukh Khan" , isCorrect : true},
        { Option : " Aamir Khan" , isCorrect : false},
        { Option : "Salman Khan" , isCorrect : false},
        { Option : "Saif Ali Khan" , isCorrect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :" Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2022?",
      Option : [
        { Option : "Rajkummar Rao" , isCorrect : false},
        { Option : "Manoj Bajpayee" , isCorrect : false},
        { Option : " Pankaj Tripathi", isCorrect : true},
        { Option : "Nawazuddin Siddiqui", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :" Which Bollywood celebrity is the brand ambassador for the Chinese smartphone firm Tecno?",
      Option : [
        { Option : "Amitabh Bachan" , isCorrect : false},
        { Option : "Ayushmann Khurana" , isCorrect : true},
        { Option : "Shah Rukh Khan", isCorrect : false},
        { Option : "Vidyut Jamwal", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"Pritam Chakraborty signed his first song in Bollywood along with a friend. The friend is–",
      Option : [
        { Option : "Abhijit Bhattacharya" , isCorrect : false},
        { Option : "Shaan" , isCorrect : false},
        { Option : "Jeet Ganguli", isCorrect : true},
        { Option : "Kumar Sanu", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :"Who was known as the King of Bollywood Music?",
      Option : [
        { Option : " Rahul Dev Burman" , isCorrect : true},
        { Option : "Kishore Kumar" , isCorrect : false},
        { Option : "Sachin Dev Burman", isCorrect : false},
        { Option : "Muhammad Rafi", isCorrect : false}
      ]
    }
  ]

})