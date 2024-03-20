import { createContext, useReducer, ReactNode, useEffect } from "react";

interface State {
  user: User | null;
}

export interface User {
  message?: string;
  success?: boolean;
  token?: string;
  email?: string;
  role?: string;
}

interface Action {
  type: string;
  payload?: unknown;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const initialState: State = {
  user: null,
};

export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload as User };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user: User = JSON.parse(userString);
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("Auth Context State : ", state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
