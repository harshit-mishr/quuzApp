import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import {ITQuestion} from '../../RecoilState/ITQuizQuest/ITQuizQuest'
import style from './IT.module.css'
export default function ITPage(){
  const[count , setCount]=useState(0)
  const[result , setResult]=useState("")


  const [correctAnswer , setCorrectAnswer] = useState(0)
  const[show , setShow]=useState(false)
  const question = useRecoilValue(ITQuestion)
  // console.log(question,"data ara hai recoil se is page mai")
  
  function next(){
   setCount(count + 1)
  }

  function countCorrectAnswer(x){
   console.log(x,"i am slected option")
   
   if(x.isCorrect === true){
     setCorrectAnswer(correctAnswer+2)
     console.log(correctAnswer+2 , "points of answer")
    }
   
  }

  function submit(){
    setShow(true)
    if(correctAnswer < 6){
      setResult("FAIL")
 
    }else{
      setResult("PASS")
 
    }
  }


  return(
    <>
    <div className={style.wrapper}>
    <h1 className={style.Link}>Back To <Link to='/'><span >Home</span></Link> Page</h1>
    {show ? 
      <>
      {result=== "FAIL" ? <p className={style.score}>Better Luck Next Time</p> : "" }
      {result=== "PASS" ?<p className={style.score} style={{color: "red", textShadow:"0.1rem 0.1rem black"}}>Congratulation You Are Genius</p> : "" }
    <p className={style.score}>Your Score Is <span className={style.Home}>{correctAnswer}</span> And You Are {result}</p>
    </> :
    <div  className={style.box}>
    <h3 className={style.Question}>{question[count].Qusetion}</h3>
    <div className={style.option}>
    <span  className={style.option}>{question[count].Option.map(x=><button  className={ style.btn }  onClick={()=>countCorrectAnswer(x)}>{x.Option}</button>)}</span>
    {count===4 ? <button className={style.Next} onClick={submit}>Submit</button> :
    <button className={style.Next} onClick={next}>Next</button>
}
</div>

    </div>
}
   

</div>
</>
  )
}