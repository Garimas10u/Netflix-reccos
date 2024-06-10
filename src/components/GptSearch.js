import GptSearchBar from "./GptSearchBar"
import GptMovieSuggest from "./GptMovieSuggest"
import netbg from "../assets/bg.jpg"


const GptSearch = () => {
 
  return (
    <div>
        <div className="fixed -z-10 ">
            <img src={netbg}  alt="" />
        </div>
        <div className="pt-[35%] md:p-0">
          <GptSearchBar />
          <GptMovieSuggest/>
        </div>
       
    </div>
  )
}

export default GptSearch