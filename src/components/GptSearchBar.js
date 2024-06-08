import React from 'react'
import lang from "../utils/langConst"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {


  const langKey=useSelector(store=> store.config.lang)

  return (

    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-2/3 grid grid-cols-12 '>
            <input 
            type="text" className='p-2 m-2 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='col-span-3 m-3 py-2 px-4 bg-red-700 text-white'>{lang[langKey].search}</button>
        </form>

    </div>
  )
}

export default GptSearchBar