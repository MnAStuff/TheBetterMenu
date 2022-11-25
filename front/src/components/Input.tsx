import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

type Props = {
  title: string;
};

export function Input({ title }: Props) {
  console.log(title);
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel>{title}</InputLabel>
      <OutlinedInput label={title} />
    </FormControl>
  );
}
