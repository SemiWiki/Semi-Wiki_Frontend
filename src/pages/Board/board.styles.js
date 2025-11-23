import styled from "styled-components";
import { colors_dark } from "../../styles/color_table.js";
import { createGlobalStyle } from "styled-components";

// 게시판 전체 컨테이너
export const BoardContainer = styled.div`
  position: relative;
  left: 140px;
  width: 1100px;
  height: auto;
  min-height: 742px;

  margin-top: 40px;

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 232px;
  padding-bottom: 50px;

  background: ${colors_dark.gray[650]};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

// 게시판 제목
export const BoardTitle = styled.h1`
  position: relative;
  max-width: 860px;
  width: auto;
  height: auto;
  min-height: 50px;
  bottom: 210px;
  margin-bottom: 50px;
  margin-left: 25px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;

  color: ${colors_dark.gray[100]};
`;

// 게시판 필터
export const Boardfiler = styled.div`
  display: flex;

  position: absolute;
  width: 250px;
  height: 62px;
  left: 28px;
  top: 100px;

  border-radius: 24px;
`;

// 게시판 필터 제목
export const Boardfilertitle = styled.h2`
  cursor: pointer;
  padding-bottom: 45px;
  position: relative;

  width: 85px;
  height: 38px;
  margin-left: 36px;
  margin-top: 12px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;

  color: ${colors_dark.gray[100]};

  &:first-child {
    margin-left: 24px;
  }

  &::after {
    content: "";
    background-color: ${({ $active }) =>
      $active ? colors_dark.orange[200] : "transparent"};

    position: absolute;
    width: 83px;
    height: 4px;
    left: 0px;
    bottom: -9px;

    border-radius: 30px;
    z-index: 1;
  }
`;

// 라인
export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  left: 0px;
  top: 162px;

  background: ${colors_dark.gray[450]};
`;

// 실제 콘텐츠 영역
export const Content = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 120px;
  justify-content: center;
  gap: 50px;
`;

// 새 게시글 작성
export const NewPostButton = styled.div`
  position: absolute;
  top: 34px;
  right: 68px;

  z-index: 20;

  width: fit-content;
  height: 38px;

  display: flex;
  align-items: center;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-decoration-line: underline;

  color: #ff9e3d;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors_dark.gray[650]};
  }
`;
