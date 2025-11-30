import styled from "styled-components";
import { colors_dark } from "../../styles/color_table.js";
import { createGlobalStyle } from "styled-components";

// 버튼 숨김
export const HiddenButton = styled.button`
  display: none;
`;

//수정 버튼
export const Modify = styled.div`
  position: absolute;
  top: 16px;
  right: 170px;
  padding: 15.5px 12px;

  width: 56px;
  height: 60px;

  background: ${colors_dark.gray[650]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  cursor: pointer;
`;

// 추천 레이블
export const LoveLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 133px;
  height: 60px;

  background: ${colors_dark.gray[650]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  img {
    position: absolute;
    margin-left: 16.8px;

    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

//추천 카운트
export const Lovecount = styled.span`
  margin-left: 54px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  color: ${colors_dark.orange[100]};
  user-select: none;
`;

//상단 컨테이너
export const Topcontainer = styled.div`
  position: relative;
  margin-top: 67px;
  padding: 16px 12px;

  width: 1044px;
  min-height: 160px;
  height: auto;

  background: ${colors_dark.gray[650]};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

// 제목
export const Posttitle = styled.h1`
  max-width: 800px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;

  margin-bottom: 20px;

  color: ${colors_dark.gray[100]};
`;

// 카테고리 제목
export const CategoryTitle = styled.h2`
  width: 130px;
  height: 38px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;

  color: ${colors_dark.gray[100]};
`;

// 카테고리 래퍼
export const Categorywrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

//카테고리 태그 컨테이너
export const Categorycontainer = styled.div`
  width: 1044px;
  height: 53px;

  border-radius: 24px;

  cursor: default;
`;

export const Categories = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 10px;
  margin-left: 15px;
`;

//카테코리 태그
export const CategoryTag = styled.span`
  padding: 10px 7px;
  border: 1px solid ${colors_dark.gray[100]};
  border-radius: 8px;
  font-size: 18px;
  color: ${colors_dark.gray[100]};

  font-family: "Pretendard";
  font-weight: 500;
`;

//목차
export const TableOfContentscontainer = styled.div`
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 40px;
  min-width: 200px;
  width: auto;
  min-height: 164px;
  height: auto;

  padding-bottom: 16px;
  padding-right: 30px;

  bottom: 180px;

  background: ${colors_dark.gray[650]};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

//목차 제목
export const TableOfContentsTitle = styled.h2`
  position: relative;
  width: 42px;
  height: 21px;
  left: 12px;
  top: 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 21px;

  color: ${colors_dark.gray[100]};
`;

//본문 컨테이너
export const Contentcontainer = styled.div`
  width: 1044px;
  min-height: 639px;

  padding-bottom: 40px;

  background: ${colors_dark.gray[650]};
  border-radius: 24px;

  font-family: "Pretendard";
  font-weight: 600;

  background: ${colors_dark.gray[650]};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

// 게시판 컨테이너
export const BoardContainer = styled.div`
  position: relative;
  width: 1100px;
  height: auto;
  min-height: 742px;

  margin-left: 140px;

  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 50px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors_dark.gray[650]};
  }
`;
