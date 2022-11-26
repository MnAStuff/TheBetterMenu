import { Input } from "../../../components/Input";
import { CategoryCard, CategoryContainer } from "../Category/styles";

export function CategoryCreator() {
  return (
    <>
      <CategoryContainer>
        <CategoryCard><Input title="Category name"></CategoryCard>
        <div style={{ margin: 30 }}>
          {isOpen ? (
            <ExpandLessIcon onClick={handleClick} />
          ) : (
            <ExpandMoreIcon onClick={handleClick} />
          )}
        </div>
      </CategoryContainer>
      {isOpen && children}
    </>
  );
}
