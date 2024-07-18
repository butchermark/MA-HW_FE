import { ApiClient } from "../apiClient/apiClient";
import { config } from "../config";

const apiClient = ApiClient.getInstance();

export const registerUser = async (
  userEmail: string,
  userPassword: string,
  setIsReload: any,
  setCreatingUser: any
) => {
  await apiClient
    .post(`${config.apiBaseUrl}/auth/registration`, {
      email: userEmail,
      password: userPassword,
    })
    .then((res) => {
      setIsReload(true);
      setCreatingUser(false);
    });
};

export const signUser = async (
  email: string,
  password: string,
  setAccessToken: React.Dispatch<React.SetStateAction<string>>,
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>,
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  await apiClient
    .post(`${config.apiBaseUrl}/auth/signin`, {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("accessToken", res.data.tokens.accessToken);
        localStorage.setItem("refreshToken", res.data.tokens.refreshToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setAccessToken(res.data.tokens.accessToken);
        setRefreshToken(res.data.tokens.refreshToken);
        setIsSubmit(true);
      }
    })
    .catch((err) => {
      setIsSubmit(false);
      setIsLogin(false);
      console.error("Error during user login:", err);
    });
};
