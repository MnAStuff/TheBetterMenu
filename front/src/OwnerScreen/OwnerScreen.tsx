import { Restaurant } from "../types/Restaurant";
import {
  MenuBook,
  Menu as MenuIcon,
  TableBar,
  ViewList,
} from "@mui/icons-material/";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { Box, IconButton, Toolbar } from "@mui/material";
import QRCode from "qrcode";
import AppBar from "@mui/material/AppBar";
import { Menu } from "./Menu/Menu";
import { root } from "../utils/root";

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
    setState({ open: true, qr: state.qr });
  };
  const handleDrawerClose = () => {
    setState({ open: false, qr: state.qr });
  };
  useEffect(() => {
    QRCode.toDataURL(root + "menu/1")
      .then((url) => {
        setState({ open: state.open, qr: url });
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(1);
  }, []);
  return (
    <Box onClick={handleDrawerClose}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon color="inherit" onClick={handleDrawerOpen} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu />
      <Drawer
        variant="persistent"
        open={state.open}
        sx={{ width: drawerWidth, flexShrink: 0 }}
      >
        <img src={state.qr} alt=""></img>
        <MenuBook color="primary" />
        <TableBar color="primary" />
        <ViewList color="primary" />
      </Drawer>
    </Box>
  );
}
