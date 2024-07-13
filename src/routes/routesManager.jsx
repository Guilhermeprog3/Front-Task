import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo, useContext ,useState } from 'react';
import { RoutesPath } from './routespath';
import ResponsiveAppBar from '../componentes/navbar'
import { MessageProvider } from '../componentes/contexts';
import { AuthContext } from ".././context/authContext";
import { useEffect } from 'react';
import axios from "axios";

export const RouterManager = () => {
  const [userDados, setUserDados] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/usuario/${user}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
          }
        });
        setUserDados(response.data); 
      } catch (error) {
        console.error('Erro ao buscar usuario:', error);
      }
    };

    fetchUser();
  }, [user]); 

  const routes = useMemo(
    () =>
      Object.keys(RoutesPath).map((path) => {
        const RouteComponent = RoutesPath[path];
        return (
          <Route
            key={path}
            path={path}
            element={<RouteComponent />}
          />
        );
      }),
    []
  );
  return (
    <MessageProvider>
    <BrowserRouter>
    <ResponsiveAppBar avatar={userDados.avatar}/>
      <Routes>{routes}</Routes>
    </BrowserRouter>
    </MessageProvider>
  );
};