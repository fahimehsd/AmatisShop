import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = `http://localhost:3002`;

export const instance = axios.create({
  baseURL,
  timeout: 15000
});

// instance.defaults.headers.token = Cookies.get('token');
if (localStorage.getItem("token")) {
  instance.interceptors.request.use(
    (config) => {
      const authToken = localStorage.getItem("token");
      if (authToken !== undefined) {
        config.headers.token = authToken;
        config.timeout = 800000;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.request.use(
    (config) => {
      const authToken = localStorage.getItem("token");
      if (authToken !== undefined) {
        config.headers.token = authToken;
        config.timeout = 800000;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const {
        response: { status },
        config
      } = error;

      if (status === 401 && config.url !== "/auth/refresh-token") {
        if (config.url.startsWith("/products") && config.method === "get") {
          localStorage.removeItem("token");
          config.headers.token = undefined;

          instance.defaults.headers.refreshToken =
            localStorage.getItem("refresh_token");

          instance.post("/auth/refresh-token").then(({ data }) => {
            const { accessToken } = data;
            localStorage.setItem("token", accessToken);
            window.location.reload();
          });

          return instance(config);
        }

        localStorage.removeItem("token");

        instance.defaults.headers.refreshToken =
          localStorage.getItem("refresh_token");

        instance.post("/auth/refresh-token").then(({ data }) => {
          const { accessToken } = data;
          localStorage.setItem("token", accessToken);
          window.location.reload();
        });
      } else if (config.url === "/auth/refresh-token") {
        localStorage.removeItem("refresh_token");
        window.location.href = "/auth";
      } else {
        return Promise.reject(error);
      }
    }
  );
}
