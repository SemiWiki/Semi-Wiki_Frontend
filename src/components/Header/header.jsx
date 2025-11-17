import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Div,
  SearchBox,
  Button,
  Input,
  LinkBox,
  H2,
} from "./header.styles";
import logo from "../../assets/logo/logo.svg";
import user from "../../assets/user.svg";
import searchIcon from "../../assets/search_icon.png";

function Header({ onSearch }) {
  const [inputValue, setInputValue] = useState(""); // 내부 입력 상태
  const accountId = localStorage.getItem("accountId");

  const handleSearch = () => {
    onSearch(inputValue); // 상위(App)의 상태 업데이트
  };

  function handlePageChange() {
    if (localStorage.getItem("accountId")) {
      if (confirm("로그아웃 하시겠습니까?")) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accountId");
        document.cookie = "accessTokenNumber=; expires=0; path=/";
        window.location.href = "/";
      }
    } else {
      window.location.href = "/login";
    }
  }

  function handleLogoClick() {
    window.location.reload();
    window.location.href = "/";
  }

  return (
    <Container>
      <LinkBox onClick={handleLogoClick}>
        <img src={logo} alt="Logo" style={{ width: "231px", height: "72px" }} />
      </LinkBox>

      <Div>
        <SearchBox>
          <Button onClick={handleSearch}>
            <img
              src={searchIcon}
              alt="icon"
              style={{ width: "auto", height: "100%" }}
            />
          </Button>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              onSearch(value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </SearchBox>

        <LinkBox onClick={handlePageChange}>
          <img
            src={user}
            alt="user"
            style={{ width: "48px", height: "48px" }}
          />
          <H2>{accountId}</H2>
        </LinkBox>
      </Div>
    </Container>
  );
}

export default Header;
