import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "./config";

const Callback = () => {
  const location = useLocation();
  const { code } = querystring.parse(location.search);

  useEffect(() => {
    if (code) {
      axios({
        method: "post",
        url: "https://accounts.spotify.com/api/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          grant_type: "authorization_code",
          code,
          redirect_uri: config.redirectUri,
          client_id: config.clientId,
          client_secret: config.clientSecret,
        },
      }).then((response) => {
        const { access_token, refresh_token } = response.data;
        // Store access_token and refresh_token in your state or context for future use
      });
    }
  }, [code]);

  return <div>Logging in...</div>;
};

export default Callback;
