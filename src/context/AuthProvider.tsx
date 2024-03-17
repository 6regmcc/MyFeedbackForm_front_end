import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export type User = {
  email: string;
  accessToken: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

// @ts-ignore
// @ts-ignore
const defaultState = {
  user: {
    email: "",
    accessToken: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  setUser: (user: User) => {},
} as UserContextInterface;

type UserProvideProps = {
  children: ReactNode;
};

export const AuthContext = createContext({ defaultState });

export default function AuthProvider({ children }: UserProvideProps) {
  const [user, setUser] = useState<User>({
    email: "",
    accessToken: "",
  });

  // @ts-ignore
  return (
    // @ts-ignore
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
