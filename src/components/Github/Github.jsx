import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData] = useState([])


    useEffect(()=>{
        fetch('https://api.github.com/users/kanishkmunot')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>Github followers: {data.followers}
     <img className='text-center mt-3 mb-2' src = {data.avatar_url} width={300} />
     </div>
     
  )
}


export default Github;