import { useContext, useState } from 'react'
import './Sidebar.css'
import { MyContext } from '../../context/Context'
import assets from '../../assets/assets.js'

const Sidebar = () => {

  const [expand, setexpand] = useState(false)

  const {Allprompt, setInput} = useContext(MyContext)

  return (
    <div className='sidebar'>
        <div className="top">
            <div className="menu">
                <img onClick={()=>{setexpand(!expand)}} src={assets.menu} alt="" />
                {expand?<img src={assets.search} alt="" />:null}
            </div>
            <div onClick={()=>{setInput("")}} className="chat">
                <img src={assets.newChat} alt="" />
               {expand?<p>New Chat</p>:null}
            </div>
            {expand?
            <div className="recent">
                <h4>Recent</h4>
                {Allprompt.map((Prompt)=>{  
                return <>
                <p onClick={()=>{setInput(Prompt)}}>{Prompt}</p>
                </>
                })}
            </div>
            :null}
        </div>
        <div className="bottom">
            <img src={assets.setting} alt="" />
            {expand?<p>Settings and help</p>:null}
        </div>
      
    </div>
  )
}

export default Sidebar
