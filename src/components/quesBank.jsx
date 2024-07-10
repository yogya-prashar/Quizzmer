import React, { useEffect, useState } from 'react'
import './style.css'

function QuesBank(props) {
    
    function setStyle(value){
        if(value === props.style.right){
            return{
                color : "green"
            }
        }
        else if(value === props.style.selected){
            return{
                color : "red"
            }
        }
        else{
            return{
                color : "black"
            }
        }
    }

    return (
    <>
        <section className='mt-20 ml-16 mr-16 text-slate-100 font-semibold'>
            <h3 className='text-xl mb-4'> {props.question} </h3>
            <div className='flex justify-between items-center text-center'>
            <div className='border-2 border-solid rounded-3xl border-blue-950 px-1 py-2 mx-1 bg-blue-200 w-1/5'>
                    <input id={props.answer[0]} type="radio" value={props.answer[0]} name={props.question} onClick={props.onClick} className='hidden'/>
                    <label htmlFor={props.answer[0]} style={setStyle(props.answer[0])} className=''> {props.answer[0]} </label>
                </div>
                <div className='border-2 border-solid rounded-3xl border-blue-950 px-1 py-2 mx-1 bg-blue-200 w-1/5'>
                    <input id={props.answer[1]} type="radio" value={props.answer[1]} name={props.question} onClick={props.onClick} className='hidden'/>
                    <label htmlFor={props.answer[1]} style={setStyle(props.answer[1])} className=''> {props.answer[1]} </label>
                </div>
                <div className='border-2 border-solid rounded-3xl border-blue-950 px-1 py-2 mx-1 bg-blue-200 w-1/5'>
                    <input id={props.answer[2]} type="radio" value={props.answer[2]} name={props.question} onClick={props.onClick} className='hidden'/>
                    <label htmlFor={props.answer[2]} style={setStyle(props.answer[2])}> {props.answer[2]} </label>
                </div>
                <div className='border-2 border-solid rounded-3xl border-blue-950 px-1 py-2 mx-1 bg-blue-200 w-1/5'>
                    <input id={props.answer[3]} type="radio" value={props.answer[3]} name={props.question} onClick={props.onClick} className='hidden'/>
                    <label htmlFor={props.answer[3]} style={setStyle(props.answer[3])}> {props.answer[3]} </label>
                </div>
            </div>
        </section>
    </>
  )
}

export default QuesBank