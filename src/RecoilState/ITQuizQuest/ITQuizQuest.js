import {atom} from 'recoil'

export const ITQuestion = atom({
  key : "IT",
  default : [
    {
      id : 1 ,
      Qusetion :"JavaScript is synchronous or asynchoronus?",
      Option : [
        { Option : "Asynchronous" , isCorrect : false},
        { Option : " Synchronous" , isCorrect : true},
        { Option : "Both" , isCorrect : false},
        { Option : "None" , isCorrect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :" Who invented JavaScript?",
      Option : [
        { Option : "Bill Gates" , isCorrect : false},
        { Option : "Bjarne Stroustrup" , isCorrect : false},
        { Option : " Brendan Eich", isCorrect : true},
        { Option : "James Gosling", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :"Who invented React JS?",
      Option : [
        { Option : "Guido van Rossum" , isCorrect : false},
        { Option : "Jordan Walke" , isCorrect : true},
        { Option : "Anders Hejlsberg", isCorrect : false},
        { Option : "Rasmus Lerdorf", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"What does CSS stand for?",
      Option : [
        { Option : "Creative Style Sheets" , isCorrect : false},
        { Option : "Colorful Style Sheets" , isCorrect : false},
        { Option : "Cascading Style Sheets", isCorrect : true},
        { Option : "Computer Style Sheets", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :"Inside which HTML element do we put the JavaScript?",
      Option : [
        { Option : " <script>" , isCorrect : true},
        { Option : "<scripting>" , isCorrect : false},
        { Option : "<javascript>", isCorrect : false},
        { Option : "<js>", isCorrect : false}
      ]
    }
  ]

})