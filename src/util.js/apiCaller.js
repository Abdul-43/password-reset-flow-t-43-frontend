import axios from "axios";

const apiCaller = async (type, body, authorizationToken = null) => {
  try {
    const result = await axios.post(
      `https://password-reset-h7b5.onrender.com/user/${type}`,
      body,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return result;
  } catch (e) {
    return e.response;
  }
};
export default apiCaller;
