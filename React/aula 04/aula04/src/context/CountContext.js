import { createContext, useState } from "react";

export const CountContext = createContext();

function CountProvider({children}){
  const[count, setCount] = useState(0);
  const [name, setName] = useState();
  return(
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}
export default CountProvider;