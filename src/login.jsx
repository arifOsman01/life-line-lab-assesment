import React, { useState, useEffect } from "react";
import { getFriendList } from "./services";
const crypto = require("crypto");
const CryptoJS = require("crypto-js");
const SHA256 = require("crypto-js/sha256");

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    getListing();
  }, []);

  const getListing = () => {
    getFriendList().then((res) => {
      if (res.results) setUser({ ...res.results[0].login });
    });
  };

  const hashPwd = (pwd) => {
    // var hmac = crypto.createHmac("sha256", salt);
    // return hmac.update(pwd).digest("hex");
    // let hash = CryptoJS.SHA256(pwd);
    // let base6 = hash.toString(CryptoJS.enc.Base64);
    // let hex = hash.toString(CryptoJS.enc.Hex);
    // console.log("hmmm", base6, hex);
    // var key256Bits = CryptoJS.PBKDF2(pwd, salt, {
    //   keySize: 256 / 32,
    // }).toString();
    // console.log("hmmm", salt, pwd);
    // var algo = CryptoJS.algo.SHA256.create();
    // algo.update(pwd, "utf-8");
    // algo.update(CryptoJS.SHA256(salt), "utf-8");
    // var hash = algo.finalize().toString(CryptoJS.enc.Hex);
    // console.log(hash);
    var hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(pwd));
    var hashInBase64 = CryptoJS.enc.Hex.stringify(hash);
    return hashInBase64.toString("hex");
    return hash;
  };

  const onSubmit = (param) => {
    let inserted = CryptoJS.SHA256(param.password + user.salt).toString();
    if (param.username === user.username && inserted === user.sha256) {
      console.log("masok");
      setToken(inserted);
    }
  };

  console.log("pass", password);
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button
            // type="submit"
            onClick={() => onSubmit({ username, password })}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
