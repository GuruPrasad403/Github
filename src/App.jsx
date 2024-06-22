import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import GitHubCard from './Components/GitHubCard'
import SearchBar from './Components/SearchBar'
import { propAtom } from './atoms/atom'
// Log the object to the console


function App() {

  return (
    <RecoilRoot>
      
    <SearchBar />
<Suspense fallback={<div className='flex flex-col w-screen p-52 h-screen  justify-start items-center'>
    <div className='loader'> </div> 
    <h1 className='text-2xl'>Loading</h1>
    </div>} >
<GitHubCard />
</Suspense>    
    </RecoilRoot>
  )
}

export default App


