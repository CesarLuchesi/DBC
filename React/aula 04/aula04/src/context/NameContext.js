import React, {createContext, useState} from 'react';

export const NameContext = createContext();

function NameProvider({children}){
const [name, setName] = useState('gdsgsdgs');
return(
  <NameContext.Provider value={{name, setName}}>
    {children}
  </NameContext.Provider>
)
}
export default NameProvider;
