import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "..";

export interface UserData {
  email: string;
  password: string;
}

const SignIn = async ({ email, password }: UserData) => {
  const createUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user = createUser.user;

  return user;
};

export default SignIn;
