import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalMenuStyle,
  MenuContainer,
  MainMenu,
  TitleBox,
  Title,
  Catagory,
  CatagoryTitle,
  CatagoryItem,
  Service,
  ServiceTitle,
  ServiceItem,
  SubMenu,
  SubCatagoryItem,
} from "./menu.styles";

function Menu({ isMenuOpen, toggleMenu, handleCategoryToggle }) {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const accountId = localStorage.getItem("accountId");
  const menuRef = useRef(null);
  const categoryMap = {
    전공: [
      "프론트엔드",
      "백엔드",
      "안드로이드",
      "IOS",
      "임베디드",
      "정보보안",
      "인공지능",
      "디자인",
      "게임",
      "DevOps",
    ],
    동아리: ["전공동아리", "창체동아리", "자율동아리", "DMS"],
    기타: ["학교", "기숙사", "기타"],
  };

  const link = () => {
    window.open("https://naver.me/FAPaPAQs", "_blank", "width=600,height=750");
  };

  const handleCategoryClick = (category) => {
    toggleMenu();
    setItem(categoryMap[category]);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        toggleMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <GlobalMenuStyle />
      <MenuContainer ref={menuRef}>
        <MainMenu
          style={{
            borderRadius: isMenuOpen ? "24px 0 0 24px" : "24px",
          }}
        >
          <TitleBox>
            <Title>메뉴</Title>
          </TitleBox>
          <Catagory>
            <CatagoryTitle>카테고리</CatagoryTitle>
            {Object.keys(categoryMap).map((category) => (
              <CatagoryItem
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </CatagoryItem>
            ))}
          </Catagory>
          <Service>
            <ServiceTitle Router>서비스</ServiceTitle>
            <ServiceItem onClick={() => navigate(`/mypage/${accountId}/list`)}>
              내가 작성한 게시글
            </ServiceItem>
            <ServiceItem onClick={() => navigate("/postform")}>
              새 게시글 작성
            </ServiceItem>
            <ServiceItem onClick={link}>문의하기</ServiceItem>
          </Service>
        </MainMenu>
        <SubMenu isClick={isMenuOpen}>
          {item.map((itemName) => (
            <SubCatagoryItem
              key={itemName}
              onClick={() => {
                handleCategoryToggle(itemName);
                toggleMenu();
              }}
            >
              {itemName}
            </SubCatagoryItem>
          ))}
        </SubMenu>
      </MenuContainer>
    </>
  );
}

export default Menu;
