import {atom} from 'recoil'

export const CrcicketQuestion = atom({
  key : " Crcicket",
  default : [
    {
      id : 1 ,
      Qusetion :" How many players are in a cricket team?",
      Option : [
        { Option : 10 , isCorrect : false , isSelect : false},
        { Option : 11 , isCorrect : true, isSelect : false},
        { Option : 8 , isCorrect : false ,isSelect : false},
        { Option : 12 , isCorrect : false , isSelect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :" What does IPL stand for?",
      Option : [
        { Option : "Iconic Premiere League" , isCorrect : false},
        { Option : "Indoor Premiere League" , isCorrect : false},
        { Option : "Indian Premiere League", isCorrect : true},
        { Option : "Internation Premiere League", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :" Who is the fastest bowler in the world?",
      Option : [
        { Option : "MOHD SAMI" , isCorrect : false},
        { Option : "SOHAIB AKHTAR" , isCorrect : true},
        { Option : "KULDEEP YADAV", isCorrect : false},
        { Option : "IRFAN PATHAN", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"Where will the 2023 Cricket World Cup be hosted?",
      Option : [
        { Option : "Australia" , isCorrect : false},
        { Option : "England" , isCorrect : false},
        { Option : "India", isCorrect : true},
        { Option : "South Africa", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :" A century is a score of ______ or more",
      Option : [
        { Option : "100" , isCorrect : true},
        { Option : "50" , isCorrect : false},
        { Option : "200", isCorrect : false},
        { Option : "150", isCorrect : false}
      ]
    }
  ]

})