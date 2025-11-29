import { useState, useEffect } from "react";
import {
  BoardListContainer,
  BoardListTitle,
  BoardListCategory,
  BoardListModifier,
  BoardListHeader,
  Line,
} from "./boardList.styles";
import BoardItem from "../../components/boardItem/boardItem.jsx";
import { colors_dark } from "../../styles/color_table.js";

function BoardList({
  sort,
  page,
  pageSize = 10,
  token,
  selectedCategories = [],
  searchTerm = "",
  accountId,
  setCurrentPage,
}) {
  const [items, setItems] = useState([]);
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const query = new URLSearchParams();

        if (selectedCategories.length > 0)
          query.append("categories", selectedCategories[0]);
        if (searchTerm) query.append("keyword", searchTerm);

        query.append("orderBy", sort === "최신순" ? "recent" : "like");
        query.append("offset", page - 1);
        query.append("limit", pageSize);

        const url = accountId
          ? `${API_BASE}/user/${accountId}/list?${query.toString()}`
          : `${API_BASE}/notice-board/list?${query.toString()}`;

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            alert("로그인이 필요합니다.");
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
            return;
          }
          setItems([]);
          return;
        }

        const data = await res.json();

        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setItems([]);
      }
    };

    fetchList();
  }, [
    page,
    sort,
    pageSize,
    token,
    selectedCategories,
    searchTerm,
    API_BASE,
    accountId,
  ]);

  return (
    <BoardListContainer>
      <BoardListHeader>
        <BoardListTitle>제목</BoardListTitle>
        <BoardListCategory>카테고리</BoardListCategory>
        <BoardListModifier>수정자</BoardListModifier>
      </BoardListHeader>
      <Line />

      {items.length === 0 ? (
        <p
          style={{
            fontSize: "35px",
            color: colors_dark.gray[200],
            fontFamily: "Pretendard",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "200px",
          }}
        >
          게시글이 없습니다.
        </p>
      ) : (
        items.map((post) => (
          <BoardItem
            key={post.id}
            id={post.id}
            title={post.title}
            categories={post.categories}
            modifier={post.userPreview?.accountId || "알 수 없음"}
            $check={post.checked}
          />
        ))
      )}
    </BoardListContainer>
  );
}

export default BoardList;
