import React, { useContext, useRef } from 'react'
import "./Main.css"
import { MyContext } from '../../context/Context'
import assets from '../../assets/assets.js'

const Main = () => {

  const { onSent, Input, setInput, Recentprompt, setRecentprompt, clear, setclear, loading, setloading, result, setresult, Allprompt, setAllprompt, } = useContext(MyContext)

  const formatted = result.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\*/g, '<br />');
  
  return (
    <div className='Main'>
      <div className="navbar">
        <div className="gimini">Genimi</div>
        <img src={assets.github} alt="" />
      </div>
      {clear ?
        <div className='result'>
          <div className="question">
            <img src={assets.github} alt="" />
            <span>{Recentprompt}</span>
            </div>
          <div className='answer'>
            <img src={assets.Gemini} alt="" />
            {loading?<div className='loading'>
              <hr />
              <hr />
              <hr />
              </div>
              :
              <span dangerouslySetInnerHTML={{ __html: formatted }}></span>
            }
            </div>
        </div>
        :
        <div className="welcome"><span>Hello, Dev</span></div>
      }


      <div className="searchbox">
        <input onKeyDown={(e)=>{if(e.key === 'Enter'){onSent(Input)}}} type="text" placeholder='Ask Gemini' onChange={(e) => { setInput(e.target.value) }} value={Input} id="" />
        <div className="down">
          <div className="images">
            <div className='div1'><img src={assets.Plus} alt="" /></div>
            <div className='div2'><img src={assets.world} alt="" /><span>Deep Search</span></div>
            <div className='div3'><img src={assets.tab} alt="" /><span>Canvas</span></div>
          </div>
          <div className="voice">
            <div><img className='img1' src={assets.Microphone} alt="" /></div>
            <div onClick={Input ? onSent : null}><img className='img2' src={assets.forword} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
