import { useRouter } from "next/router";
import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext(undefined);

const initialState = {
  userInfo: {},
  isAuth: false,
  userRole: false,
  authToken: false
};

const ACTIONS = {
  AUTH: "auth",
  DEAUTH: "deAuth",
  AUTHCHECK: "check",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.AUTH:
      return {
        ...state,
        isAuth: true,
        userRole: action.payload.userRole,
        userInfo: action.payload.userInfo,
      };

    case ACTIONS.DEAUTH:
      return {
        ...initialState,
      };

    case ACTIONS.AUTHCHECK:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        userInfo: action.payload.userInfo,
      };
    default:
      return state;
  }
}

function AuthContextProvider({ children }) {


  const [state, dispatch] = useReducer(reducer, initialState);

  const router = useRouter()

  useEffect(() => {
    state.isAuth !== false ? setLocally({ ...state }) : reAuthorize();
  }, [state.token || state.authInfo]);

  const setLocally = (userInfo,isAuth,userRole) => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    localStorage.setItem("userRole", JSON.stringify(userRole));
    localStorage.setItem("userInfo", JSON.stringify({ ...userInfo }));
  };

  const removeLocally = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userRole");
  };

  const authorize = (userInfo,userRole) => {
    setLocally(userInfo,true,userRole);
    dispatch({ type: ACTIONS.AUTH, payload: {userInfo,userRole} });
  };

  const reAuthorize = () => {
    const authStateString = localStorage.getItem("isAuth");
    const isAuth = authStateString ? JSON.parse(authStateString) : false;

    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = isAuth ? JSON.parse(userInfoString) : {};

    const userRoleString = localStorage.getItem("userRole");
    const userRole = isAuth ? JSON.parse(userRoleString) : false;

    const exposed = {
      userInfo,
      isAuth,
      userRole
    };

    dispatch({ type: ACTIONS.AUTHCHECK, payload: { ...exposed } });
  };

  const deAuthorize = () => {
    router.push('/')
    removeLocally();
    removeCookies('jwt')
    dispatch({ type: ACTIONS.DEAUTH });
  };

  const exposed = {
    // Actions
    ACTIONS,

    // Functions
    authorize,
    deAuthorize,

    // States
    ...state,
  };

  return (
    <AuthContext.Provider value={{ ...exposed }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
