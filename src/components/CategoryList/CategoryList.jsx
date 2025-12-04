import "../../styles/reset.css";
import x from "/src/assets/category/x.svg";
import {
  CategoryListContainer,
  CategoryListTitle,
  CategoryItem,
  CheckboxLabel,
  HiddenCheckbox,
  Content,
  CategoryButton,
  CategoryDeleteIcon,
} from "./CategoryList.styles.js";

function CategoryList({ selectedCategories = [], onSelectedCategories }) {
  const categories = [
    "프론트엔드",
    "백엔드",
    "안드로이드",
    "iOS",
    "플러터",
    "임베디드",
    "정보보안",
    "인공지능",
    "디자인",
    "게임",
    "DevOps",
    "전공동아리",
    "창체동아리",
    "자율동아리",
    "DMS",
    "학생",
    "선생님",
    "기타",
    "일반교과",
    "전공교과",
    "기숙사",
  ];

  const handleCategoryClick = (category) => {
    if (onSelectedCategories) {
      onSelectedCategories(category);
    }
  };

  return (
    <Content>
      <CategoryListContainer>
        <CategoryListTitle>카테고리 추가</CategoryListTitle>

        <CategoryItem>
          {categories.map((category) => {
            const isChecked = selectedCategories.includes(category);
            return (
              <CheckboxLabel
                key={category}
                $check={isChecked}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category);
                }}
              >
                <HiddenCheckbox type="checkbox" checked={isChecked} readOnly />
                <CategoryButton $check={isChecked}>{category}</CategoryButton>
                {isChecked && <CategoryDeleteIcon src={x} />}
              </CheckboxLabel>
            );
          })}
        </CategoryItem>
      </CategoryListContainer>
    </Content>
  );
}

export default CategoryList;
