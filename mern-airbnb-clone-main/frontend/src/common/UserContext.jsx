import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
  const [ user, setUser ] = useState(null);
  const [ ready, setReady ] = useState(false);
  const [ places, setPlaces]  = useState("");
  useEffect(() => {
    if (!user) {
      axios.get('/profile')
        .then(({data}) => {
          setUser(data);
          setReady(true);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{user, setUser, ready, places, setPlaces}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider