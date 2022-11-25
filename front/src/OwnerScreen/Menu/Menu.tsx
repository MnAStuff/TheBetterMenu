import { List } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import { MenuContainer } from "./styles";
import { MenuItem } from "./MenuItem/MenuItem";
import { Item } from "../../types/Item";
import { Category } from "./Category/Category";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";

const someDish: Item = {
  name: "Borsch",
  description:
    // eslint-disable-next-line no-multi-str
    " a tasty russian soup  a tasty russian soup  \
    a tasty russian soup  a tasty russian soup  a \
    tasty russian soup  a tasty russian soup  a tasty\
     russian soup  a tasty russian soup  a tasty russian\
      soup  a tasty russian soup  a tasty russian soup",
  price: 1400,
};

export function Menu() {
  return (
    <MenuContainer>
      <List
        sx={{
          width: "100%",
          maxWidth: window.innerWidth - 100,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Menu
          </ListSubheader>
        }
      >
        <Category name="Soups">
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
        </Category>
        <Category name="Meats">
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
        </Category>
        <Category name="drinks">
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
          <MenuItem {...someDish} />
        </Category>
      </List>
    </MenuContainer>
  );
}
