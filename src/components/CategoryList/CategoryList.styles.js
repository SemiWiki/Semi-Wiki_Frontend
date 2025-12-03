import styled from "styled-components";
import { colors_dark } from "../../styles/color_table.js";

// 카테고리 리스트 컨테이너
export const CategoryListContainer = styled.div`
  width: 300px;
  height: 470px;
  padding: 20px;

  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  background: ${colors_dark.gray[650]};
`;

// 카테고리 리스트 제목
export const CategoryListTitle = styled.h1`
  width: fit-content;
  height: 43px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;

  color: ${colors_dark.gray[100]};
`;

// 카테고리 아이템을 감싸는 영역
export const CategoryItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;
  height: 370px;
`;

// 체크박스 레이블
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;

  color: ${({ $check }) => ($check ? colors_dark.gray[50] : colors_dark.orange[100])};

  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 600;

  cursor: pointer;
  user-select: none;

  transition: 0.1s;
`;

// 숨겨진 기본 체크박스
export const HiddenCheckbox = styled.input`
  display: none;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;

// 카테고리 추가 버튼
export const CategoryButton = styled.div`
  width: fit-content;
  height: 37px;

  padding: 9px 6px;

  background-color: ${({ $check }) => ($check ? colors_dark.orange[100] : "transparent")};
  border: 1px solid rgba(255, 158, 61, 0.5);
  border-radius: 8px;

  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 500;
`;

// 카테고리 삭제 아이콘
export const CategoryDeleteIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  right: 10px;
  bottom: 20px;
  margin-right: -10px;
`;
