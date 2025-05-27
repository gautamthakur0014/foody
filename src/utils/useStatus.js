import { useState, useEffect } from "react";

const useStatus =()=>{
    const [stat, setstat]=useState(navigator.onLine);

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setstat(true);
        });
        window.addEventListener("offline", ()=>{
            setstat(false);
        });
        
    },[]);

// console.log(stat);

    return stat;
};

export default useStatus;