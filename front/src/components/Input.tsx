import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

type Props = {
  title: string;
  onChange?: any;
  isPassword?: boolean;
};

export function Input({ title, onChange, isPassword }: Props) {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel>{title}</InputLabel>
      <OutlinedInput
        label={title}
        id={title}
        type={isPassword ? "password" : ""}
        onChange={onChange ? onChange : () => {}}
      />
    </FormControl>
  );
}
