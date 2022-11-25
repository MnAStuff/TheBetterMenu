import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 5px 5px 30px lightgray;
  width: 100%;
  height: 200px;
  padding: 10px;
`;

export const Name = styled.span`
  width: 200px;
  font-size: 36px;
`;

export const Description = styled.span`
  width: 100%;
  font-size: 24px;
`;

export const CardHeader = styled.span`
  display: flex;
  flex-direction: row;
`;

export const CardContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
