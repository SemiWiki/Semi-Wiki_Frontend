import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors_dark } from "../../styles/color_table.js";

// 게시판 아이템 컨테이너
export const BoardItemContainer = styled.div`
  display: flex;
  align-items: center;

  width: 964px;
  height: 53px;

  background: ${colors_dark.gray[650]};
  border-style: solid;
  border-color: ${colors_dark
    .gray[450]};
  border-radius: 0px;

  border-width: 0px 0px 1px 0px;

  padding: 0 12px;
`;

//링크 스타일
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  flex: 2;
  font-size: 24px;
  color: ${colors_dark.orange[200]};
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 게시판 제목
export const Title = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard";
  font-weight: 500;
`;

// 게시판 카테고리
export const Categories = styled.div`
  flex: 1.9;
  margin-left: 10px;
  display: flex;
  gap: 2px;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard";
  font-weight: 500;
`;

// 게시판 카테고리 태그
export const CategoryTag = styled.span`
  padding: 7px 5px;
  border: 1px solid
    ${colors_dark.gray[100]};
  border-radius: 8px;
  font-size: 24px;
  color: ${colors_dark.gray[100]};
`;

// 게시판 수정자
export const Modifier = styled.div`
  flex: 2;
  color: ${colors_dark.orange[100]};
  font-size: 24px;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard";
  font-weight: 500;
  line-height: 36px;
`;
