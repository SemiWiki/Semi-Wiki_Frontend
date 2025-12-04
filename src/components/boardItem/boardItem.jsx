import "../../styles/reset.css";
import colors from "../../styles/color";
import { BoardItemContainer, Title, Categories, CategoryTag, Modifier, LinkStyle } from "./boardItem.styles";

function BoardItem({ id, title, categories = [], modifier }) {
  return (
    <BoardItemContainer>
      <LinkStyle to={`/board/${id}`} style={{ textDecoration: "none" }}>
        <Title>{title}</Title>
      </LinkStyle>
      <Categories>
        {categories.length <= 2 ? (
          categories.map((category, index) => <CategoryTag key={index}>{category}</CategoryTag>)
        ) : (
          <>
            {categories.slice(0, 2).map((category) => (
              <CategoryTag key={category}>{category}</CategoryTag>
            ))}
            <span
              style={{
                padding: "7px 5px",
                fontSize: "24px",
                color: colors.gray[50],
                whiteSpace: "nowrap",
              }}
            >
              ...
            </span>
          </>
        )}
      </Categories>

      <Modifier>{modifier}</Modifier>
    </BoardItemContainer>
  );
}

export default BoardItem;
