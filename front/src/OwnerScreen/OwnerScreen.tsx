import { Restaurant } from "../types/Restaurant";
import {
  MenuBook,
  Menu as MenuIcon,
  TableBar,
  ViewList,
} from "@mui/icons-material/";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Box, IconButton, Toolbar } from "@mui/material";
import QRCode from "qrcode";
import AppBar from "@mui/material/AppBar";
import { Menu } from "./Menu/Menu";

type Props = {
  restaurants: Restaurant[];
};

const drawerWidth = 240;

export function OwnerScreen() {
  const [state, setState] = useState({
    open: false,
    qr: "",
  });
  const handleDrawerOpen = () => {
    setState(Object.assign(state, { open: true }));
  };
  const handleDrawerClose = () => {
    setState(Object.assign(state, { open: !state.open }));
  };
  QRCode.toDataURL("http://172.16.4.85:5001/menu/1")
    .then((url) => {
      setState(Object.assign(state, { qr: url }));
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(state);
  return (
    <Box onClick={handleDrawerClose}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu />
      <Drawer
        variant="persistent"
        open={state.open}
        sx={{ width: drawerWidth, flexShrink: 0 }}
      >
        <img src={state.qr}></img>
        <MenuBook color="primary" />
        <TableBar color="primary" />
        <ViewList color="primary" />
      </Drawer>
    </Box>
  );
}
