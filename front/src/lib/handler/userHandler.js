import User from "../api/userApi";

const SUCCESS = 200;
const FAIL = 500;

const userHandler = {
  signUp: () => {},

  login: async (user) => {
    try {
      let apiResult = await User.login(user);

      const { status } = apiResult;

      //로그인 로직 처리

      if (status === SUCCESS) {
        return true;
      }
    } catch (error) {
      console.log("Login Fail");
      return false;
    }
  },

  logout: () => {},
};

export default userHandler;