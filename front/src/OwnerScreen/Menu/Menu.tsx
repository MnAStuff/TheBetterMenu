import { List } from "@mui/material";
import { MenuContainer } from "./styles";
import { MenuItem } from "./MenuItem/MenuItem";
import { Item } from "../../types/Item";
import { Category } from "./Category/Category";
import { useEffect, useState } from "react";

async function getMenu(url: string) {
  const menuRaw = await fetch(url).then(async (res) => res.json());
  return menuRaw.dishes;
}

interface SS {
  categoryNames: string[];
  dishes: Item[][];
}

export function Menu() {
  const [state, setState] = useState({ categoryNames: [], dishes: [] } as SS);
  const menuId = window.location.href.split("/").slice(-1)[0];
  useEffect(() => {
    getMenu("http://172.16.4.85:5001/menu/" + menuId).then((res) => {
      state.categoryNames = Object.keys(res) as string[];
      state.dishes = state.categoryNames.map((name) => {
        return res[name as keyof typeof res];
      });
      setState({
        categoryNames: Object.keys(res) as string[],
        dishes: state.categoryNames.map((name) => {
          return res[name as keyof typeof res];
        }),
      });
    });
  }, []);

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
      >
        {state.categoryNames.map((name, idx) => (
          <Category name={name}>
            {state?.dishes[idx].map((item) => (
              <MenuItem {...item} />
            ))}
          </Category>
        ))}
      </List>
    </MenuContainer>
  );
}
