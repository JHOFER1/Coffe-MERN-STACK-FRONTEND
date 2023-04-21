import {useState, useEffect} from 'react';
import axios from 'axios';
let globalIsLoggedIn = false;

export const useAuth =()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(globalIsLoggedIn);
    useEffect(() =>{
        async function checkAuth() {
            try {
                const res = await axios.get('/nosignin');
                globalIsLoggedIn = res.data;
                setIsLoggedIn(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        checkAuth();
},[]);

    return isLoggedIn;
};
export const useIsLoggedIn =()=> globalIsLoggedIn;
