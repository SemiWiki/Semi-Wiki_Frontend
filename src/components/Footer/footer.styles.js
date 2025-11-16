import styled from "styled-components";
import colors_dark from "../../styles/color_table";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors_dark.gray[700]};
  position: static;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 220px;
  box-shadow: 0 0 8px ${colors_dark.gray[500]};
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 130px;
`;
export const Member = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;
export const P = styled.a`
  color: ${colors_dark.gray[50]};
  font-size: 17px;
  margin: 5px 0;
`;
export const Img = styled.img`
  margin: 0 10px;
`;
