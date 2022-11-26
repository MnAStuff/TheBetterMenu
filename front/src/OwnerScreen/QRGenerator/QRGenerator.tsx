import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import {
  InputContainer,
  QRCodeContainer,
  QRWrapper,
  ScreenContainer,
} from "./styles";
import QRCode from "qrcode";
import { root } from "../../utils/root";
import { List } from "@mui/material";

export function QRGenerator() {
  const [state, setState] = useState({ tableNumber: 0, urls: [] as string[] });
  useEffect(() => {
    let urls: string[] = [];
    for (let i = 0; i < state.tableNumber; i++) {
      QRCode.toDataURL(root + `menu/${i.toString()}/1`)
        .then((url) => {
          urls.push(url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setState({ tableNumber: state.tableNumber, urls: urls });
  }, [state.tableNumber]);
  return (
    <ScreenContainer>
      <InputContainer>
        <Input
          title="Number of tables"
          onChange={(e: any) => {
            setState({
              tableNumber: parseInt(e.target.value),
              urls: state.urls,
            });
          }}
        />
      </InputContainer>
      <List
        sx={{
          width: "100%",
          maxWidth: window.innerWidth - 100,
          bgcolor: "background.paper",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <QRCodeContainer>
          {state.urls.map((url, idx) => (
            <QRWrapper className="qr">
              {idx}
              <img width={200} height={200} src={url} alt="" />
            </QRWrapper>
          ))}
        </QRCodeContainer>
      </List>
    </ScreenContainer>
  );
}
