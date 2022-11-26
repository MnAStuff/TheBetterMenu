import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { InputContainer, QRCodeContainer, ScreenContainer } from "./styles";
import QRCode from "qrcode";
import { root } from "../../utils/root";

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
      <QRCodeContainer>
        {state.urls.map((url) => (
          <img width={200} height={200} src={url} alt="" />
        ))}
      </QRCodeContainer>
    </ScreenContainer>
  );
}
