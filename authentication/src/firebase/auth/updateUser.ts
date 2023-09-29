import { updateProfile, User, UserInfo } from "firebase/auth";
import { auth } from "..";

const updateUser = async (currUser: User, payload: UserInfo) => {
  try {
    const update = await updateProfile(currUser, payload);
  } catch (error) {
    throw error;
  }
};

export default updateUser;
