import styled from "styled-components";
import colors_dark from "../../styles/color_table";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px;
  padding: 0 160px;
  height: 88px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px;
`;
export const Button = styled.button`
  border: none;
  background: none;
  position: absolute;
  left: 20px;
  width: 32px;
  height: 32px;
`;
export const Input = styled.input`
  border: 1px solid ${colors_dark.gray[500]};
  background-color: ${colors_dark.gray[550]};
  border-radius: 30px;
  font-family: "Pretendard", sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding: 10px 65px;
  color: ${colors_dark.gray[100]};
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;
`;

export const H2 = styled.p`
  margin-left: 10px;
  font-size: 31px;
  font-weight: 500;
  color: ${colors_dark.orange[200]};
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2;
  margin-bottom: 4px;
`;
