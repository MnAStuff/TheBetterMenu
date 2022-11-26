import { Button } from "@mui/material";
import { Input } from "../components/Input";
import { LoginFormContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Icon, ScreenContainer } from "../styles/styles";
import logo from "../resources/logo.png";
import { useState } from "react";

interface ILoginData {
  login: string;
  password: string;
}

export function LoginScreen() {
  const navigate = useNavigate();
  const [state, setState] = useState<ILoginData>({
    login: "",
    password: "",
  });
  async function handleLogin() {
    const response = await fetch("http://172.16.4.85:5001/login", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    } else {
      const menu = (await response.json()).menu_id;
      navigate(`/owner/${parseInt(menu)}`);
    }
  }
  return (
    <ScreenContainer>
      <LoginFormContainer>
        <Icon src={logo} />
        <Input
          title={"Login"}
          onChange={(e: any) => {
            setState(
              Object.assign(state as ILoginData, {
                login: e?.target.value,
              })
            );
          }}
        />
        <Input
          title="Password"
          isPassword={true}
          onChange={(e: any) => {
            setState(
              Object.assign(state as ILoginData, {
                password: e?.target.value,
              })
            );
          }}
        />
        <Button variant="outlined" size="small" onClick={handleLogin}>
          {"Login"}
        </Button>
      </LoginFormContainer>
    </ScreenContainer>
  );
}
