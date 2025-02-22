import CheckUserAuth from "./check-user-auth";

const CompanyProfile = {
  async init() {
    CheckUserAuth.checkLoginState();
  },
};

export default CompanyProfile;
