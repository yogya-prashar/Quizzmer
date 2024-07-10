import React, { useEffect, useState } from 'react'
import Data from './data'
import QuesBank from './quesBank'

function QuizPage(props) {

    const data = Data(props.required)
    const [initial,setInitial] = useState(true)
    const [optSheet, setOptSheet] = useState([])
    const [choosed,setChoosed] = useState(() => {
        const newArray = []
            for (let i = 0; i < props.required.number; i++) {
                newArray.push("")
            }
        return newArray
    })
    const [style,setStyle] = useState(() => {
        const newArray = []
            for (let i = 0; i < props.required.number; i++) {
                newArray.push(helpStyle("", ""))
            }
        return newArray
    })

    function helpStyle(right, selected){
        return {
            right : right,
            selected : selected
        }
    }

    useEffect(() => {
        function shuffle(newArray){
            const num = Math.floor(Math.random() * 4)
            const temp = newArray[3]
            newArray[3] = newArray[num]
            newArray[num] = temp
            return newArray
        }

        setOptSheet(prev => data.map((item) => {
            const newArray = shuffle([...item.incorrect_answers, item.correct_answer])

            return{
                question : item.question,
                answer : newArray
            }
        }))
    }, [data])

    function updateAns(event,itr){
        setChoosed((prev) => prev.map((item,i) => {
            if(i === itr)
            return event.target.value
            else return item
        }))
    }

    const grid = optSheet.map((item,itr) => {
        return <QuesBank
            question = {item.question}
            answer = {item.answer}
            onClick = {(event) => updateAns(event,itr)}
            style = {style[itr]}
            key={itr}
        />
    })

    const [corr, setCorr] = useState(0)
    let count = 0
    
    function help(event){
        event.preventDefault()
        for (const i of choosed) {
            if(!i){
                alert("every question is compulsory to attempt")
                return;
            }
        }
        setInitial(prev => false)
        setStyle((prev) => prev.map((item,i) =>{
            if(data[i].correct_answer === choosed[i]){
                count++;
            }
            return {
            right : data[i].correct_answer,
            selected : choosed[i]
        }}))
        
        setCorr(prev => count)
    }
    
    

  return (
    <>
    <form onSubmit={help}>
       <div>
        {grid}
       </div>
       {initial 
       ? <button type="submit" className='ml-16 mt-10 mb-20 w-1/5 h-10 text-slate-100 text-xl font-bold border-solid border-2 border-blue-950 bg-blue-950 rounded-3xl'>Check Answers</button>
       : <div className='ml-16 mt-8 text-slate-100 font-bold'>
            <p className='text-lg'>You Scored {corr} / {props.required.number} </p>
            <button className='mt-8 mb-20 w-1/5 h-10 text-slate-100 text-xl font-bold border-solid border-2 border-blue-950 bg-blue-950 rounded-3xl' onClick={props.onClick}>Play Again</button>
         </div>
       }
       
    </form>
    </>
  )
}

export default QuizPage