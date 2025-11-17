import styled from "styled-components";
import colors_dark from "../../styles/color_table";
import { Editor } from "@toast-ui/react-editor";
import { createGlobalStyle } from "styled-components";

export const FormContainer = styled.div`
  min-height: 100vh;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${colors_dark.gray[650]};
`;

export const FormLayout = styled.div`
  display: flex;
  gap: 40px;
  padding: 24px;
  margin: 0 auto;
`;

export const FormMain = styled.div`
  width: 1100px;
  min-height: 998px;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors_dark.gray[650]};
  border-radius: 24px;

  padding: 25px;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  color: white;

  font-size: 40px;
  font-weight: 500;
  font-family: "Pretendard";

  &::placeholder {
    color: ${colors_dark.gray[350]};
    font-size: 40px;
    font-weight: 500;
    font-family: "Pretendard";
  }

  &:focus {
    outline: none;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;

export const CategoryInput = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 50px;

  background-color: transparent;
  border: 1px solid ${colors_dark.gray[350]};
  border-radius: 24px;

  color: ${colors_dark.gray[250]};
  font-size: 20px;
  font-family: "Pretendard";

  padding: 0 18px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledBodyWrapper = styled.div`
  width: 100%;
  min-height: 577px;
`;

export const GlobalEditorStyle = createGlobalStyle`
  .toastui-editor-defaultUI {
    background-color: ${colors_dark.gray[650]};
    border: 1px solid ${colors_dark.gray[350]};
    border-radius: 24px;
  }

  .toastui-editor-main {
    border: none !important;
    border-radius: 0 0 24px 24px !important;
    background-color: ${colors_dark.gray[650]} !important;
  }

  .toastui-editor-ww-container{
    border: none !important;
    background-color: transparent !important;
  }

  /* 툴바 스타일 */
  .toastui-editor-defaultUI-toolbar:not(#_) {
    background-color: ${colors_dark.gray[100]};
    border: none;
    border-radius: 24px 24px 0 0;
  }

  /* 본문 입력값 */
  .toastui-editor-contents h1,
  .toastui-editor-contents h2,
  .toastui-editor-contents h3,
  .toastui-editor-contents h4,
  .toastui-editor-contents h5,
  .toastui-editor-contents h6,
  .toastui-editor-contents p {
    color: ${colors_dark.gray[350]} !important;
    font-family: "Pretendard";

    margin: 0;
  }

  .placeholder.ProseMirror-widget:not(#_){
    color: ${colors_dark.gray[350]};
    font-size: 20px;
  }
`;

export const SubmitButton = styled.button`
  width: 1044px;
  align-self: center;

  background-color: transparent;
  border: none;
  border-radius: 8px;

  color: ${colors_dark.gray[100]};
  font-size: 30px;
  font-weight: 500;

  padding: 16px 32px;
  cursor: pointer;

  &:hover {
    color: ${colors_dark.gray[100]};
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CategoryTag = styled.span`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid ${colors_dark.orange[100]};

  color: ${colors_dark.orange[100]};
  font-size: 18px;
  font-weight: 500;
  font-family: "Pretendard";

  padding: 4px 4px 6px 4px;
`;
