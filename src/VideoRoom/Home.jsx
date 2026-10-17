
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home(){

  let [input,setInput] = useState("")
  let navigate = useNavigate ()
  function JoinRoom(){
    if(input.trim()){
    navigate(`/room/${input}`)
    }
  }
  return(
    <>
    <div className="box">
      <input type="text" id="roomID" placeholder="Room ID" value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button id="joinBtn" onClick={JoinRoom}>Join</button>

    </div>
    </>
  )
}

export default Home