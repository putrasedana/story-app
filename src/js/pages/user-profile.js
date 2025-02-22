import CheckUserAuth from "./check-user-auth";

const UserProfile = {
  async init() {
    CheckUserAuth.checkLoginState();
  },
};

export default UserProfile;
