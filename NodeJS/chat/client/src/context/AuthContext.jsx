// импорты
import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  // экспорт модуля в котором сохраняются данные //
  const [user, setUser] = useState(null); // модуль для хранения данных о юзере (по умолчанию) //
  const [registerError, setRegisterError] = useState(null); // модуль для хранения данных об ошибке регистрации (по умолчанию) //
  const [isRegisterLoading, setIsRegisterLoading] = useState(false); // модуль для хранения данных об отправке запроса на регистрацию (по умолчанию) //
  const [registerInfo, setRegisterInfo] = useState({
    // модуль для хранения данных об отправке запроса на регистрацию (по умолчанию) //
    name: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null); // модуль для хранения данных об ошибке входа (по умолчанию) //
  const [isLoginLoading, setIsLoginLoading] = useState(false); // модуль для хранения данных об отправке запроса на вход (по умолчанию) //
  const [loginInfo, setLoginInfo] = useState({
    // модуль для хранения данных об входе (по умолчанию) //
    email: "",
    password: "",
  });

  console.log("user", user);
  console.log("loginInfo", loginInfo);

  useEffect(() => {
    // обновление данных о юзере //
    const user = localStorage.getItem("User"); // получение данных о юзере //

    setUser(JSON.parse(user)); // сохранение данных о юзере в хранилище //
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    // обновление данных об отправке запроса на регистраци
    setRegisterInfo(info); // сохранение данных об отправке запроса на регистраци
  }, []);
  const updateLoginInfo = useCallback((info) => {
    // обновление данных об отправке запроса на вход
    setLoginInfo(info); // сохранение данных об отправке запроса на вход
  }, []);

  const registerUser = useCallback(
    // отправка запроса на регистрацию
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseUrl}/users/register`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response)); // сохранение данных о юзере в хранилище
      setUser(response);
    },
    [registerInfo]
  );
  // function to login - отправка запроса на входa
  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/users/login`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);
      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [loginInfo]
  );

  const logoutUser = useCallback(() => {
    // очистка хранилища данных о юзере //
    localStorage.removeItem("User");
    setUser(null);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
