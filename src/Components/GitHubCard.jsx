import { useMemo } from "react"
import { propAtom } from "../atoms/atom"
import { useRecoilValue } from "recoil"

export default function GitHubCard(prop){
    prop = useRecoilValue(propAtom)
        
    let date = useMemo(()=>{
        let current = new Date(prop.created_at)
        const monthArray = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
            current = current.getDate()+" " + monthArray[current.getMonth()] +" " + current.getFullYear();
            return current;
    },[prop.created_at])

    return(
       <>
        <div className="w-screen h-screen bg-zinc-700  flex justify-center items-center" >
        <div className="flex flex-col  justify-center w-96 border-gray-950 bg-white items-center">
            <div className="bg-yellow-200 w-96 h-48  border relative">
            <img src={prop.avatar_url} className="rounded-full absolute top-24 left-32 w-32 h-32" alt="Image" />
            </div>
            <div className=" w-96 h-44 border-b-zinc-950 flex flex-col justify-center items-center pt-10">
                <h1 className=" font-bold text-2xl font-serif "><a href={`${prop.blog}`}>{prop.name}</a> <span className="opacity-50 text-xl"></span></h1>
                <h3 className="opacity-50 font-sans" ><a href={`https://github.com/${prop.login} `} target="_blank">{prop.login}</a></h3>
                <h3 className="opacity-1 font-sans" >{date}</h3>
            </div>
            <div className=" w-96 h-40 border flex fle-row justify-evenly pt-5">
                <div>
                    <h1 className=" font-bold text-2xl font-serif " >{prop.followers}</h1>
                    <h3 className="opacity-50 font-sans">Followers</h3>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl font-serif ">{prop.following}</h1>
                    <h3 className="opacity-50 font-sans">Following</h3>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl font-serif ">{prop.public_repos}</h1>
                    <h3 className="opacity-50 font-sans">Repos</h3>
                </div>
            </div>
            <div className=" w-96 h-46 border flex flex-col justify-evenly pt-5">
                <div className="flex flex-row justify-start  items-center">
                    <h1 className=" font-bold text-4xl font-serif m-5" ><i className="fa-solid fa-location-dot"></i></h1>
                    <h3 className="opacity-60 font-sans">{prop.location?prop.location:"Not Available"}</h3>
                </div>
                <div className="flex flex-row justify-start  items-center">
                    <h1 className=" font-bold text-4xl font-serif m-5"><i className="fa-brands fa-square-x-twitter"></i></h1>
                    <h3 className="opacity-60 font-sans"><a target="_blank" href={`https://x.com/${prop.twitter_username}`}>{prop.twitter_username?prop.twitter_username:"Not Available"}</a></h3>
                </div>
                <div className="flex flex-row justify-start  items-center">
                    <h1 className=" font-bold text-4xl font-serif m-5"><i className="fa-solid fa-building"></i></h1>
                    <h3 className="opacity-60 text-l font-sans">{!prop.company?"Not Available":prop.company}</h3>
                </div>
            </div>
        </div>
        </div>
       </>
    )
}