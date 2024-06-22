import { useEffect, useState } from 'react';


const useLocalStorage = ({ initialValue}) => {
    
    const [storedValue, setStoredValue] =useState(() =>{
        try {
            const item = window.localStorage.getItem("theme");
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(()=>{
        try {
            const valueToStore =
              typeof storedValue === 'function'
                ? storedValue(storedValue)
                : storedValue;
           window.localStorage.setItem("theme", JSON.stringify(valueToStore));
          } catch (error) {
            console.log(error);
          }
    },["theme", storedValue])

    return [storedValue, setStoredValue];
}

export default useLocalStorage