import { createContext, useReducer, ReactNode } from "react";

interface State {
  user: User | null;
}

interface User {
  message?: string;
  success?: boolean;
  token?: string;
  email?: string;
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
  console.log("Auth Context State : ", state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
};


