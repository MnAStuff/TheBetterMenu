import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

type Props = {
  title: string;
  onChange?: any;
};

export function Input({ title, onChange }: Props) {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel>{title}</InputLabel>
      <OutlinedInput
        label={title}
        id={title}
        onChange={onChange ? onChange : () => {}}
      />
    </FormControl>
  );
}
