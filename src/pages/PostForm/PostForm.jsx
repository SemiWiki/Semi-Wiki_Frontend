import React, { useState, useEffect, useRef, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import CategoryList from "../../components/CategoryList/CategoryList";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor-plugin-chart";
import { GlobalStyle } from "../Board/board.styles";
import {
  GlobalEditorStyle,
  FormContainer,
  FormLayout,
  FormMain,
  TitleContainer,
  TitleInput,
  CategoryContainer,
  SectionTitle,
  CategoryInput,
  BodyContainer,
  StyledBodyWrapper,
  SubmitButton,
  Categories,
  CategoryTag,
} from "./PostForm.styles";

function PostForm() {
  const [title, setTitle] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // 선택한 전공들 상태
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkItem, setCheckItem] = useState({}); // 카테고리 체크 상태

  const editorRef = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const accountId = localStorage.getItem("accountId");
  const CONTAINS_FORBIDDEN_CHARS_REGEX = /[~!@#$%^&*()_+|<>?:{}]/;

  // 체크박스 변경 핸들러
  const handleCheckboxChange = useCallback(
    (category) => {
      setCheckItem((prev) => {
        // 3개 초과 선택 방지
        const isAlreadyChecked = prev[category];
        if (!isAlreadyChecked && selectedCategories.length >= 3) {
          alert("카테고리는 3개까지만 선택할 수 있습니다.");
          return prev;
        }

        const newCheckItem = { ...prev, [category]: !isAlreadyChecked };
        setSelectedCategories(
          Object.keys(newCheckItem).filter((key) => newCheckItem[key])
        );
        return newCheckItem;
      });
    },
    [selectedCategories]
  );

  const onUploadImage = async (blob, callback) => {
    try {
      if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/login");
        return;
      }

      if (typeof blob === "string") {
        if (blob.startsWith("http://") || blob.startsWith("https://")) {
          alert("외부 이미지 URL은 업로드할 수 없습니다.");
          return;
        }
      }

      const formData = new FormData();
      formData.append("image", blob, blob.name || "upload.png");

      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/notice-board/image`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      let imageUrl = await response.text();
      callback(imageUrl, blob.name);
    } catch (error) {
      alert("이미지 업로드 실패");
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    if (CONTAINS_FORBIDDEN_CHARS_REGEX.test(title)) {
      alert("제목에 특수문자가 포함될 수 없습니다.");
      return;
    }
    setLoading(true);
    setError("");

    const editorInstance = editorRef.current.getInstance();
    let htmlBody = editorInstance.getHTML();

    htmlBody = htmlBody.replace(
      /<pre><code([\s\S]*?)<\/code><\/pre>/g,
      (match) => {
        return match
          .replace(/\r\n/g, "\n")
          .replace(/\n{2,}/g, "\n")
          .replace(/<br\s*\/?>/g, "");
      }
    );

    const postData = {
      title: title,
      categories: selectedCategories,
      contents: htmlBody,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/notice-board/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );

      const responseMessage = await response.text();

      if (!response.ok) {
        switch (response.status) {
          case 400:
            if (responseMessage == "no title")
              throw new Error("제목을 입력해주세요.");
            if (responseMessage == "duplicate title")
              throw new Error("동일한 제목의 게시글이 이미 존재합니다.");
            if (responseMessage == "there's no category")
              throw new Error("카테고리를 선택해주세요.");
            if (responseMessage == "over run category")
              throw new Error("카테고리는 3개까지만 선택할 수 있습니다.");
            if (responseMessage == "no header")
              throw new Error("헤더를 입력해주세요.");
            throw new Error(
              "요청 정보가 잘못되었습니다. 입력 내용을 확인해 주세요."
            );
          case 401:
            localStorage.removeItem("accessToken");
            alert("로그인이 필요합니다.");
            window.location.href = "/login";
          case 404:
            throw new Error("요청하신 페이지를 찾을 수 없습니다.");
          case 500:
            throw new Error(
              "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
            );
          default:
            throw new Error(
              `알 수 없는 오류가 발생했습니다. (HTTP ${response.status})`
            );
        }
      }
      navigate(`/mypage/${accountId}/list`);
    } catch (error) {
      alert(error.message);
      console.error("게시글 생성 에러:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalEditorStyle />
      <GlobalStyle />
      <FormContainer>
        <FormLayout>
          <form onSubmit={handleSubmit}>
            <FormMain>
              <TitleContainer>
                <TitleInput
                  name="title"
                  type="text"
                  placeholder="제목을 입력해주세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </TitleContainer>

              <CategoryContainer>
                <SectionTitle>카테고리</SectionTitle>
                <CategoryInput>
                  {selectedCategories.length > 0 ? (
                    <Categories>
                      {selectedCategories.map((category) => (
                        <CategoryTag key={category}>{category}</CategoryTag>
                      ))}
                    </Categories>
                  ) : (
                    "카테고리를 선택해주세요"
                  )}
                </CategoryInput>
              </CategoryContainer>

              <BodyContainer>
                <SectionTitle>본문</SectionTitle>
                <StyledBodyWrapper>
                  <Editor
                    ref={editorRef}
                    initialEditType="wysiwyg"
                    height="577px"
                    initialValue=" "
                    placeholder="본문을 추가해주세요"
                    hooks={{
                      addImageBlobHook: onUploadImage,
                    }}
                    previewStyle="none"
                    hideModeSwitch={true} // 모드 전환 버튼 숨기기
                    useCommandShortcut={false} // 단축키 비활성화
                  />
                </StyledBodyWrapper>
              </BodyContainer>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? "생성 중..." : "완료"}
              </SubmitButton>
            </FormMain>
          </form>
          <CategoryList
            selectedCategories={selectedCategories}
            onSelectedCategories={handleCheckboxChange}
          />
        </FormLayout>
      </FormContainer>
    </>
  );
}

export default PostForm;
