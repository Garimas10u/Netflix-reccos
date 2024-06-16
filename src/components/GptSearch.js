import GptSearchBar from "./GptSearchBar"
import GptMovieSuggest from "./GptMovieSuggest"
import netbg from "../assets/bg.jpg"



const GptSearch = () => {
 
  return (
    <div>
        <div className="absolute m-0 p-0 box-border -z-10">
            <img className="h-screen w-screen object-cover" src={netbg}  alt="" />
        </div>
        <div className="pt-[35%] md:p-0 ">
          <GptSearchBar />
          <GptMovieSuggest/>
          
        </div>
        
       
    </div>
  )
}

export default GptSearch