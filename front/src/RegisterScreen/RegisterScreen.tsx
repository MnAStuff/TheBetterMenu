import { Button } from "@mui/material";
import { useState } from "react";
import { Input } from "../components/Input";
import { isValidEmail } from "../utils/isValidEmail";
import { RegisterScreenContainer, RegisterFormContainer } from "./styles";
import { Icon } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import logo from "../resources/logo.png";

const fieldIDs = ["Login", "Password", "Email"];

interface IRegisterData {
  Login: string;
  Password: string;
  Email: string;
}

function isValidRegisterData(state: IRegisterData | undefined) {
  if (!isValidEmail(state?.Email)) {
    throw new Error("Invalid parameters");
  }
  return true;
}

export function RegisterScreen() {
  const navigate = useNavigate();
  const [state, setState] = useState<IRegisterData | undefined>({
    Login: "",
    Password: "",
    Email: "",
  });
  async function handleRegister() {
    if (isValidRegisterData(state)) {
      const response = await fetch("https://localhost", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    }
  }
  return (
    <RegisterScreenContainer>
      <RegisterFormContainer>
        <Icon src={logo} />
        {fieldIDs.map((name: string) => (
          <Input
            title={name}
            onChange={(e: any) => {
              setState(
                Object.assign(state as IRegisterData, {
                  [name]: e?.target.value,
                })
              );
            }}
          />
        ))}
        <Button
          variant="outlined"
          size="small"
          onClick={handleRegister.bind(null, state)}
        >
          {"Login"}
        </Button>
      </RegisterFormContainer>
    </RegisterScreenContainer>
  );
}
