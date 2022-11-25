import { Table } from "./Table";
import { Category } from "./Category";

export type Restaurant = {
  name: string;
  tables: Table[];
  menu: Category[];
};
