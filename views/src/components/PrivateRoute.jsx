import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { testSession } from "../modules/fetch";

export const tokenDecodedContext = createContext();

function PrivateRoute({
  children,
  ...rest
}) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [TokenDecodedState, setTokenDecodedState] = useState()

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await testSession() // memanggil test session di fetch untuk menjalankan testSession di backend dengan middleware yg sudah dibuat
        if (response.status[1] === 'Success') {
          setTokenDecodedState(response.tokenDecoded) // mengirim hasil decoded dari token ke halaman yg di private dengan ReactContext
          setIsLogin(true);
        } else {
          navigate("/login");
        }
      } catch (error) {

        // toast yang dikirim ke halaman login jika sesi login berakhir
        const successMessage = error.message;
        window.localStorage.setItem('toastMessage', successMessage);
        window.localStorage.removeItem('token');
        console.error('Error checking login status:', error);
        navigate("/login");
      }
    };

    checkLoginStatus();
  }, [navigate]);


  return (
    <div>
      <tokenDecodedContext.Provider value={{ TokenDecodedState, setTokenDecodedState }}>
        {isLogin ? (
          children
        ) : (
          <></>
        )}
      </tokenDecodedContext.Provider>
    </div>
  );
}

export default PrivateRoute