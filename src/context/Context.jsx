import { createContext, useState, useEffect } from "react";
import main from "../config/Gemini";

export const MyContext = createContext();

const ContextProvider = (props) => {

    const [Input, setInput] = useState("")
    const [Recentprompt, setRecentprompt] = useState("")
    const [clear, setclear] = useState(false)
    const [loading, setloading] = useState(false)
    const [result, setresult] = useState("")
    const [Allprompt, setAllprompt] = useState([])


    const onSent = async (prompt) => {
        setclear(true)
        setRecentprompt(Input)
        setloading(true)
        let Data = await main(Input)
        if (!Allprompt.includes(Input)) {
            setAllprompt([...Allprompt, Input]);
        }
        setloading(false)
        setInput("")
        setresult(Data)
        console.log(Data)
    }

    const contextValue = {
        onSent,
        Input,
        setInput,
        Recentprompt,
        setRecentprompt,
        clear,
        setclear,
        loading,
        setloading,
        result,
        setresult,
        Allprompt,
        setAllprompt,

    }

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}

export default ContextProvider