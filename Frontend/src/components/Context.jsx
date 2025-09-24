import React, { useEffect } from 'react'

export let ContextData = React.createContext() 
    
const Context = ({children}) => {
    const [userType, setUserType] = React.useState(null)
    
    useEffect(() => {
        const storedUser = localStorage.getItem("userType");
        if (storedUser) {
          setUserType(JSON.parse(storedUser));
        }
      }, []);

  return (
      <ContextData
       value={{userType,setUserType}}
      >
          {children}
      </ContextData>
  )
}

export default Context