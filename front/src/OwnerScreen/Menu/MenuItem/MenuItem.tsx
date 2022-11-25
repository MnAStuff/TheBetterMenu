import { ListItemButton } from "@mui/material";
import img from "../../../resources/chicken_square1.png";
import { Item } from "../../../types/Item";
import {
  MenuItemContainer,
  Name,
  Description,
  CardHeader,
  CardContainer,
  Image,
} from "./styles";

export function MenuItem({ name, description, price, image }: Item) {
  return (
    <ListItemButton>
      <MenuItemContainer>
        <CardContainer>
          <CardHeader>
            <Name>{`${name} ${price.toString()}`}</Name>
          </CardHeader>
          <Description>{description}</Description>
        </CardContainer>
        <Image src={img} />
      </MenuItemContainer>
    </ListItemButton>
  );
}
