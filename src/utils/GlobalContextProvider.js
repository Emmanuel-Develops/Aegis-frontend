import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  // showModal: false,
  userDetails: {},
  // testVehicleData: "123456789",
  // isLoggedIn: false,
  // onLogout: () => {},
  // onLogin: (email, password) => {},
});

export const GlobalContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testVehicleData] = useState("123456789");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }

    return () => {
      localStorage.setItem("isLoggedIn", "0");
      setIsLoggedIn(false);
    };
  }, []);

  const handleModalClose = () => setShowModal(false);

  const handleLogin = async (email, password) => {
    let response = await fetch(
      "https://aigis-backend-api.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        redirect: "follow",
      }
    );
    if (response.status === 200) {
      setIsLoggedIn(true);
      response = await response.json();
      let result = await response.userDetails;
      localStorage.setItem("isLoggedIn", "1");
      setUserInfo(result);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  const handleUserdetails = (info) => {
    setUserInfo(info);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        showModal: showModal,
        userInfo: userInfo,
        testVehicleData: testVehicleData,
        setShowModal: setShowModal,
        handleModalClose: handleModalClose,
        onLogin: handleLogin,
        onLogout: handleLogout,
        handleUserdetails: handleUserdetails,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
