import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {

  let [img, setImage] = useState(null)
  let [name, setName] = useState("hello")
  let [followers, setFollowers] = useState(0)

  const api = 'https://api.github.com/users/z0rrr0'

  function fetchData() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', api)
      xhr.onreadystatechange = function(){
        console.log(xhr.readyState); 
        if(xhr.readyState === 4) {
          const data = JSON.parse(this.responseText)
          setImage(data.avatar_url)
          setName(data.name)
          setFollowers(data.followers)
    }
  }
  xhr.send();
  }

  function deleteData() {
    setImage(null)
    setName("hello")
    setFollowers(0)
  }

  return (
    <>
    <div className='h-screen grid place-content-center items-center text-center'>
      <div>
        {img !== null && (
        <div className='w-70 mx-auto bg-slate-700 space-x-2 gap-2 my-2 flex flex-wrap items-center rounded'>
          <div>
            <img className='w-20 h-20 rounded' src={img} alt="" />
          </div>
          <div>
            <h1 className='text-3xl text-yellow-500'>{name}</h1>
            <p className="text-gray-600 rounded bg-amber-200">Followers: {followers}</p>
          </div>
        </div>
        )}
      </div>
      <div className='flex flex-row place-content-center justify-center'>
        <div className='w-35 mx-auto'>
          <button 
          className='w-full bg-blue-400 hover:bg-blue-800 border-r-1 border-r-black shadow-gray-400 hover:shadow-md' 
          onClick={
            function(){
              fetchData()
            }
          }>Fetch</button>
        </div>
        <div>
          <button 
          className='w-35 bg-blue-400 hover:bg-blue-800 border-l-1 border-l-black shadow-gray-400 hover:shadow-md'  
          onClick={
            function(){
              deleteData()
            }
          }>Delete</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
