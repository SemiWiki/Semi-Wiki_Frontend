import styled from "styled-components";
import colors_dark from "../../styles/color_table";
import { createGlobalStyle } from "styled-components";

export const GlobalMenuStyle = createGlobalStyle`
body{
  position: relative;
  background-color: ${colors_dark.gray[650]};
}
`;

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  width: 400px;
  height: 600px;
  margin-top: 40px;
  margin-right: 1000px;

  color: ${colors_dark.gray[100]};
`;

export const MainMenu = styled.div`
  width: 250px;
  height: 100%;
  padding: 20px 0;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background-color: ${colors_dark.gray[650]};
`;

export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-bottom: 25px;
  margin-bottom: 30px;
  border-bottom: 4px solid ${colors_dark.orange[200]};

  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: "Pretendard, sans-serif";
  font-weight: 500;
  font-size: 38px;
`;

export const Catagory = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 20px;
`;

export const CatagoryTitle = styled.div`
  margin-bottom: 12px;
  font-family: "Pretendard, sans-serif";
  font-size: 30px;
  font-weight: 500;
`;

export const CatagoryItem = styled.div`
  font-size: 20px;
  font-family: "Pretendard, sans-serif";
  font-weight: 500;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  padding-left: 20px;
  gap: 20px;
`;

export const ServiceTitle = styled.div`
  margin-bottom: 12px;
  font-family: "Pretendard, sans-serif";
  font-size: 30px;
  font-weight: 500;
`;

export const ServiceItem = styled.div`
  font-size: 20px;
  font-family: "Pretendard, sans-serif";
  font-weight: 500;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 150px;
  height: 100%;
  z-index: ${({ isClick }) => (isClick ? 1 : -1)};

  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25), 4px 0 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors_dark.gray[700]};
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  visibility: ${({ isClick }) => (isClick ? `visible` : `hidden`)};
  transform: ${({ isClick }) =>
    isClick ? `translateX(0%)` : `translateX(-100%)`};
  transition: transform 1s ease-in;
`;

export const SubCatagoryItem = styled.div`
  margin-bottom: 12px;
  font-family: "Pretendard, sans-serif";
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;
