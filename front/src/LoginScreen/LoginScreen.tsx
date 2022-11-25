import { Button } from "@mui/material";
import { Input } from "../components/Input";
import { LoginScreenContainer, LoginFormContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Icon } from "../styles/styles";
import logo from "../resources/logo.png";

export function LoginScreen() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/owner");
  }
  return (
    <LoginScreenContainer>
      <LoginFormContainer>
        <Icon src={logo} />
        <Input title={"Login"} />
        <Input title="Password" />
        <Button variant="outlined" size="small" onClick={handleLogin}>
          {"Login"}
        </Button>
      </LoginFormContainer>
    </LoginScreenContainer>
  );
}
