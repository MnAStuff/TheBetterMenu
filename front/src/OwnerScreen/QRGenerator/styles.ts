import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

export const QRCodeContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export const InputContainer = styled.div`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 200px;
  height: 250px;
`;
