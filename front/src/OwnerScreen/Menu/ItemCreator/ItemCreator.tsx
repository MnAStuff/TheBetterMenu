import { Button } from "@mui/material";
import { useState } from "react";
import { Input } from "../../../components/Input";
import { CategoryCard } from "../Category/styles";
import { CreatorContainer } from "./styles";
import { Item } from "../../../types/Item";

export function ItemCreator() {
  const [state, setState] = useState({} as Item);
  const menuId = window.location.href.split("/").slice(-1)[0];
  async function handleNewCategory() {
    console.log(JSON.stringify(Object.assign(state, { menu_id: menuId })));
    const response = await fetch("http://172.16.4.85:5001/dish", {
      method: "POST",
      body: JSON.stringify(Object.assign(state, { menu_id: menuId })),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
  }
  return (
    <CreatorContainer>
      <CategoryCard>
        <Input
          title="Dish name"
          onChange={(e: any) => {
            setState(
              Object.assign(state as Item & { category: string }, {
                name: e?.target.value,
              })
            );
          }}
        />
        <Input
          title="Description"
          onChange={(e: any) => {
            setState(
              Object.assign(state as Item & { category: string }, {
                description: e?.target.value,
              })
            );
          }}
        />
        <Input
          title="Price"
          onChange={(e: any) => {
            setState(
              Object.assign(state as Item & { category: string }, {
                price: e?.target.value,
              })
            );
          }}
        />
        <Input
          title="Image url (optional)"
          onChange={(e: any) => {
            setState(
              Object.assign(state as Item & { category: string }, {
                image: e?.target.value,
              })
            );
          }}
        />
        <Input
          title="Category"
          onChange={(e: any) => {
            setState(
              Object.assign(state as Item & { category: string }, {
                category: e?.target.value,
              })
            );
          }}
        />
        <Button variant="outlined" size="large" onClick={handleNewCategory}>
          Submit{}
        </Button>
      </CategoryCard>
    </CreatorContainer>
  );
}
