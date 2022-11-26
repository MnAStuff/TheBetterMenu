import { Button } from "@mui/material";
import { useState } from "react";
import { Input } from "../components/Input";
import { isValidEmail } from "../utils/isValidEmail";
import { RegisterFormContainer } from "./styles";
import { Icon, ScreenContainer } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import logo from "../resources/logo.png";

const fieldIDs = ["Login", "Password", "Email"];

interface IRegisterData {
  login: string;
  password: string;
  email: string;
}

function isValidRegisterData(state: IRegisterData | undefined) {
  if (!isValidEmail(state?.email)) {
    throw new Error("Invalid parameters");
  }
  return true;
}

export function RegisterScreen() {
  const navigate = useNavigate();
  const [state, setState] = useState<IRegisterData | undefined>({
    login: "",
    password: "",
    email: "",
  });
  async function handleRegister() {
    if (isValidRegisterData(state)) {
      const response = await fetch("http://172.16.4.85:5001/registration", {
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
        navigate("/owner");
      }
    }
  }
  return (
    <ScreenContainer>
      <RegisterFormContainer>
        <Icon src={logo} />
        {fieldIDs.map((name: string) => (
          <Input
            title={name}
            isPassword={name === "Password" ? true : false}
            onChange={(e: any) => {
              setState(
                Object.assign(state as IRegisterData, {
                  [name.toLowerCase()]: e?.target.value,
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
    </ScreenContainer>
  );
}
