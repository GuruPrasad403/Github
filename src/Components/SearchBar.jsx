import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/atom";
import { useRecoilState } from "recoil";
import { useRef } from "react";



export default function SearchBar(){
    const [searchValue, setValue] =  useRecoilState(userAtom)
    const refernce = useRef();
        
    return(
        <>
        <div className="flex flex-cols justify-center items-center">
                <h1 className=" font-semibold  font-sans text-5xl  mb-0 pt-10">DevFinder</h1>
        </div>
        <div className="flex flex-cols justify-center items-center h-36">
            <input
            type="text"
            ref={refernce}
            placeholder="Search Your Github Account"
            className="border border-zinc-800 w-8/12 sm:w-4/12 rounded p-2  focus:outline-none focus:ring-2 focus:ring-blue-600"
            onChange={()=> refernce.current.value}
        />
        <button
            type="submit"
            className="bg-yellow-200 text-black rounded-r-lg p-2 px-4 ml-0.5 border-zinc-800 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 "
            onClick={()=>{
                console.log(refernce.current.placeholder)
                if(!refernce.current.value){
                    refernce.current.placeholder="Please Enter the Vaild User Name"
                    refernce.current.classList.add("placeholder:text-red-800")
                    setValue("guruprasad403")
                }
                else setValue(refernce.current.value) 
            }}
            >
            Search
        </button>
        </div>
        </>
    )
}