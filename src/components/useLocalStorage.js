import { useState } from "react"
import { jsx } from "react/jsx-runtime";

function useLocalStorage(key, initialValue){
    const[value, setValue]=useState(()=>{
         try{
            const storedValue=localStorage.getItem(key)
           return storedValue? JSON.parse(storedValue) : initialValue
        }catch{
            return initialValue;
        }
    })

    const setStoredValue=(newValue)=>{
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, setStoredValue]
}
