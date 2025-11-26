import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Board from "./pages/Board/board";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signup.jsx";
import PostDetail from "./pages/PostDetail/PostDetail.jsx";
import PostForm from "./pages/PostForm/PostForm.jsx";
import PostEditForm from "./pages/PostEditForm/PostEditForm.jsx";
import MyBoard from "./pages/Write Board/writeboard.jsx";
import { createGlobalStyle } from "styled-components";
import { GlobalEditorStyle } from "./pages/PostForm/PostForm.styles.js";
import { showAlerts } from "./alert.jsx";
import {
  startTokenAutoReissue,
  stopTokenAutoReissue,
} from "./pages/Login/Reissue.jsx";
import "./styles/pretendard.css";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const accountId = localStorage.getItem("accountId");

    if (accessToken && refreshToken && accountId) {
      startTokenAutoReissue();
    }

    return () => {
      stopTokenAutoReissue();
    };
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("viewedAlerts")) {
      showAlerts();
    }
  }, []);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");

    // 화면 너비 감지 (노트북으로 추정되는 구간: 1024px ~ 1600px)
    const isLaptop = window.innerWidth >= 1024 && window.innerWidth <= 1600;

    if (isLaptop && !hasVisited) {
      alert(
        "이 웹사이트는 PC 환경에 최적화되어 있습니다.\n화면 비율 조정을 권장드립니다. \n(65% ~ 90% 사이 권장)"
      );
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1280) setIsBlocked(true);
      else setIsBlocked(false);
    };

    // 초기 체크
    checkScreenSize();

    // 창 크기 변경 시 체크
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isBlocked) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8d7da",
          lineHeight: "1.5",
          color: "#721c24",
          fontSize: "2vw",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        화면 크기가 작아 접속할 수 없습니다.
        <br />
        PC 환경에서 접속해 주세요.
      </div>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Board searchTerm={searchTerm} />
            </Layout>
          }
        />
        <Route
          path="/board/:id"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <PostDetail />
            </Layout>
          }
        />
        <Route
          path="/mypage/:accountId/list"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <MyBoard />
            </Layout>
          }
        />
        <Route
          path="/postform"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <GlobalEditorStyle />
              <PostForm />
            </Layout>
          }
        />
        <Route
          path="/posteditform/:id"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <GlobalEditorStyle />
              <PostEditForm />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
