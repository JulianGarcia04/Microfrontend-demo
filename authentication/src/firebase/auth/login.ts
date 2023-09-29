import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "..";
import { UserData } from "./register";

const login = async (data: UserData) => {
  const { user } = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  );

  return user;
};

export default login;
