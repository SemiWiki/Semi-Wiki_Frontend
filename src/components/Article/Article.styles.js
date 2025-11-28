import styled from "styled-components";
import { colors_dark } from "../../styles/color_table.js";
import { createGlobalStyle } from "styled-components";

//전체를 감싸는 래퍼
export const Wrapper = styled.div`
  padding: 16px 0 0 ${(props) => (props.depth === 0 ? "24px" : "0px")};
  width: 964px;
`;

//본문 위쪽 래퍼
export const ArticleTopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

//숫자
export const Number = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 29px;
  margin-left: 20px;

  color: ${colors_dark.orange[100]};

  margin-right: 5px;
`;

//제목
export const Title = styled.h2`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;

  color: ${colors_dark.gray[100]};
`;

export const ArticleContentWrapper = styled.div`
  margin: 0 auto;
`;

export const ArticleContent = styled.div`
  border-top: 3px solid ${colors_dark.gray[100]};
  /* margin-top: 20px; */
  margin-bottom: 40px;
  padding-top: 20px;
  padding-left: 24px;
`;

//글로벌 스타일
export const GlobalViewerStyle = createGlobalStyle`
  /* 전체 마크다운 루트 */
  .toastui-editor-contents {
    color: ${colors_dark.gray[100]} !important;
    font-family: 'Pretendard' !important;
    font-size: 18px !important;
    line-height: 1.7 !important;
    word-break: keep-all;
  }

  .toastui-editor-contents * {
    color: ${colors_dark.gray[100]} !important;
    font-family: 'Pretendard' !important;
  }

  /* 제목 */
  .toastui-editor-contents h1 {
    font-size: 2rem !important;
    font-weight: 700 !important;
    margin: 1.5rem 0 0.6rem !important;
  }
  .toastui-editor-contents h2 {
    font-size: 1.6rem !important;
    font-weight: 700 !important;
    margin: 1.3rem 0 0.5rem !important;
  }
  .toastui-editor-contents h3 {
    font-size: 1.3rem !important;
    font-weight: 700 !important;
    margin: 1.1rem 0 0.4rem !important;
  }
  .toastui-editor-contents h4 {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    margin: 1rem 0 0.4rem !important;
  }
  .toastui-editor-contents h5 {
    font-size: 1rem !important;
    font-weight: 600 !important;
    margin: 0.9rem 0 0.3rem !important;
  }
  .toastui-editor-contents h6 {
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    margin: 0.8rem 0 0.3rem !important;
  }

  /* 단락 */
  .toastui-editor-contents p {
    /* margin: 0 0 -10px !important; */
    font-size: 18px !important;
  }

  /* 블록 인용문 */
  .toastui-editor-contents blockquote {
    border-left: 4px solid rgba(255,255,255,0.3) !important;
    background: rgba(255,255,255,0.08) !important;
    color: ${colors_dark.gray[100]} !important;
    border-radius: 6px !important;
    margin: 0.3rem 0 !important;
    font-style: 'Pretendard' !important;
    padding: 0.5rem 1rem !important;
  }

  /* 리스트 */
  .toastui-editor-contents ol {
    padding-left: 1.7rem !important;
  }
  .toastui-editor-contents ol li {
    white-space: nowrap !important;
  }

  /* 코드 블록 */
  .toastui-editor-contents pre {
    background: rgba(255,255,255,0.1) !important;
  }

  /* 인라인 코드 */
  .toastui-editor-contents code {
    background: rgba(255,255,255,0.1) !important;
    padding: 2px 4px !important;
    border-radius: 4px !important;
    font-size: 0.95rem !important;
  }

  /* 테이블 */
  .toastui-editor-contents table {
    width: auto !important;

  }
  .toastui-editor-contents th,
  .toastui-editor-contents td {
    border: 1px solid rgba(255,255,255,0.2) !important;
    text-align: left !important;
    font-size: 0.95rem !important;
  }
  .toastui-editor-contents th {
    background: rgba(255,255,255,0.1) !important;
    font-weight: 600 !important;
  }

  /* 수평선 */
  .toastui-editor-contents hr {
    border: none !important;
    border-top: 1px solid rgba(255,255,255,0.2) !important;
    margin: 1rem 0 !important;
  }

  /* 체크리스트 */
  .toastui-editor-contents li.task-list-item {
    margin-left: -1.2rem !important;
    pointer-events: none !important;
  }

  /* 강조 / 기울임 / 취소선 */
  .toastui-editor-contents strong {
    font-weight: 700 !important;
  }
  .toastui-editor-contents em {
    /* font-style: italic !important; */
  }
  .toastui-editor-contents del {
    text-decoration: line-through !important;
  }
  .toastui-editor-contents a {
    color: #1e90ff;
    text-decoration: underline;
  }

`;
