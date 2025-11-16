import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import {
  BoardContainer,
  BoardTitle,
  Boardfiler,
  Boardfilertitle,
  Content,
  Line,
  NewPostButton,
} from "../Board/board.styles.js";
import BoardList from "../../components/boardList/boardList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Menu from "../../components/menu/menu.jsx";
import { GlobalStyle } from "../Board/board.styles.js";
import pen from "../../assets/pen.svg";

function MyBoard() {
  const [activeFilter, setActiveFilter] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const pageSize = 10;
  const token = localStorage.getItem("accessToken");
  const accountId = localStorage.getItem("accountId");
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  console.log("현재 저장된 토큰:", token);
  console.log("현재 accountId:", accountId);

  const handleModifyClick = (accountId) => {
    navigate(`/mypage/${accountId}/list`);
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      setCurrentPage(1);
      return newCategories;
    });
  };

  useEffect(() => {
    if (!token || !accountId) return;

    const fetchTotalCount = async () => {
      try {
        const query = new URLSearchParams();
        selectedCategories.forEach((v) => query.append("categories", v));

        if (activeFilter)
          query.append(
            "orderBy",
            activeFilter === "최신순" ? "recent" : "like"
          );

        const res = await fetch(
          `${API_BASE}/user/${accountId}/count?${query.toString()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.status === 401) {
          alert("로그인이 필요합니다.");
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
          return;
        }

        const total = await res.json();
        setTotalPages(Math.max(1, Math.ceil(total / pageSize)));
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalCount();
  }, [token, accountId, selectedCategories, activeFilter, API_BASE]);

  return (
    <>
      <GlobalStyle />
      <Content>
        <Menu />
        <BoardContainer>
          <BoardTitle>내가 작성한 게시글</BoardTitle>

          <Boardfiler>
            {["최신순", "추천순"].map((filter) => (
              <Boardfilertitle
                key={filter}
                $active={activeFilter === filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
              >
                {filter}
              </Boardfilertitle>
            ))}
          </Boardfiler>

          <BoardList
            sort={activeFilter}
            page={currentPage}
            pageSize={pageSize}
            token={token}
            selectedCategories={selectedCategories}
            accountId={accountId}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            groupSize={10}
          />
        </BoardContainer>
      </Content>
    </>
  );
}

export default MyBoard;
