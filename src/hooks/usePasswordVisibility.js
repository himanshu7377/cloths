import { useState } from "react";


function usePasswordVisibility(){

    const [showPassword,setShowPassword]=useState(false)

    const toggle=()=>{
        setShowPassword(!showPassword)
    }

    return [showPassword,toggle]

}

export default usePasswordVisibility