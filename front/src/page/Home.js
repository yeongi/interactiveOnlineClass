import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const curState = useSelector((state) => state);

  console.log(curState);

  return (
    <div>
      <h1>홈페이지</h1>
      <h1>유저 정보 </h1>
      <Link to={"log"}>로그인</Link>
      <Link to={"signup"}>회원가입</Link>
      <div>
        <li>이름 : {curState.name}</li>
        <li>교수 : {curState.isProf === true ? "yes" : "no"}</li>
        <li>번호 : {curState.num}</li>
      </div>
      {!curState.isLogIn && <div></div>}
    </div>
  );
};

export default Home;
