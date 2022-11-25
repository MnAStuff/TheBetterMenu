import { Button } from "@mui/material";
import { Input } from "../components/Input";
import { LoginScreenContainer, LoginFormContainer } from "./styles";

function handleLogin() {}

export function LoginScreen() {
  return (
    <LoginScreenContainer>
      <LoginFormContainer>
        <Input title={"Login"} />
        <Input title="Password" />
        <Button variant="outlined" size="small" onClick={handleLogin}>
          {"Login"}
        </Button>
      </LoginFormContainer>
    </LoginScreenContainer>
  );
}
