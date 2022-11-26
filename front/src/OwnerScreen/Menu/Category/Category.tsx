import { ReactNode, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategoryContainer, CategoryCard } from "./styles";

type Props = {
  children: ReactNode[] | ReactNode;
  name: string;
};

export function Category({ children, name }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CategoryContainer>
        <CategoryCard>{name}</CategoryCard>
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
