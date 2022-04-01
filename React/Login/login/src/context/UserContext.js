import { createContext, useState } from "react";
import {useNavigate,Link} from 'react-router-dom'
import api from "../api";


import Loading from '../components/loading/Loading'
import Error from '../components/error/Error'

export const UserContext = createContext();

function UserProvider({children}){
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isAtualizar, setIsAtualizar] = useState(false)
  const [valuesUser, setValuesUser] = useState({})

  async function peoples(){
    try{
      const {data} = await api.get('/pessoa');
      setPeople(data);
      setLoading(false)
    }
    catch (error){
      console.log(error)
      setError(true)
      setLoading(false)
    }
  }
  

  return(
    <UserContext.Provider value={{people,peoples, loading, error,isAtualizar, setIsAtualizar,setValuesUser,valuesUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;