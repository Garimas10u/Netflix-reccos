import GptSearchBar from "./GptSearchBar"
import GptMovieSuggest from "./GptMovieSuggest"
import netbg from "../assets/bg.jpg"


const GptSearch = () => {
 
  return (
    <div>
        <div   className="absolute -z-10">
            <img src={netbg} alt="" />
        </div>
        <GptSearchBar />
       <GptMovieSuggest/>
    </div>
  )
}

export default GptSearch