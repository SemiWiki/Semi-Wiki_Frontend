import styled from "styled-components";
import colors_dark from "../../styles/color_table.js";

//목차 글
export const TOCContents = styled.ul`
  color: ${colors_dark.gray[100]};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  margin-top: 28px;
  margin-left: 30px;
`;

export const TOCsubContents = styled.ul`
  display: flex;
  flex-direction: column;

  margin-left: 15px;
`;
