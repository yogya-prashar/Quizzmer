import React, { useState } from 'react'
import QuizPage from './quizPage'

function Selection() {
    
    const [required,setRequired] = useState({})
    const [init,setInit] = useState(true)
    function help(event){
        event.preventDefault()
        setInit(prev => !prev)
    }

    function collect(event){
        const {id,value} = event.target
        setRequired(prev => ({
            ...prev,
            [id] : value
        }))
    }

  return (
    <>
    {
        init
        ? <form className='mt-20 font-semibold' onSubmit={help}>
        <h2 className='mb-8 ml-16 text-3xl text-slate-100'>Select Question Set</h2>
        <br />
        <label htmlFor="number" className='text-xl text-slate-100 ml-16'>Number of Questions</label>
        <br />
        <input type="number" id='number' name='number' className='mt-2 mb-6 ml-16 pl-2 w-48 ring-2 rounded-sm outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' onChange={collect} min={10} max={20} placeholder='Enter' required/>
        <br />
        <label htmlFor="category" className='text-xl text-slate-100 ml-16'>Category</label>
        <br />
        <select id="category" name='category' onChange={collect} className='mt-2 mb-6 ml-16 ring-2 rounded-sm outline-none' required>
            <option value="">--select option--</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        <br />
        <label htmlFor="difficulty" className='text-xl text-slate-100 ml-16'>Select Difficulty</label>
        <br />
        <select id="difficulty" name='difficulty' onChange={collect} className='mt-2 ml-16 ring-2 rounded-sm outline-none' required>
            <option value="">--select option--</option>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
		</select>
        <br />
        <div className='flex justify-center'>
        <button type='submit' className='text-xl text-slate-100 mt-16 border-solid border-2 border-blue-950 bg-blue-950 rounded-md w-56'>Show Questions</button>
        </div>
        </form>
        
        : <QuizPage
            onClick={help}
            required={required}
        />
    }
    </>
  )
}

export default Selection
