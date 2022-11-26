import { Restaurant } from "../types/Restaurant";
import {
  MenuBook,
  Menu as MenuIcon,
  TableBar,
  ViewList,
  QrCode2,
} from "@mui/icons-material/";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Box, IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Menu } from "./Menu/Menu";
import { DrawerIconContainer } from "./styles";
import { QRGenerator } from "./QRGenerator/QRGenerator";

type Props = {
  restaurants: Restaurant[];
};

const drawerWidth = 240;

interface DrawerIconProps {
  icon: any;
  title: string;
  onClick: any;
}
function DrawerIcon({ icon, title, onClick }: DrawerIconProps) {
  return (
    <DrawerIconContainer onClick={onClick}>
      {title}
      {icon}
    </DrawerIconContainer>
  );
}

export function OwnerScreen() {
  const [state, setState] = useState({
    open: false,
    option: 0,
  });
  const handleDrawerOpen = () => {
    setState({ open: true, option: state.option });
  };
  const handleDrawerClose = () => {
    setState({ open: false, option: state.option });
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={state.open}
        sx={{ width: drawerWidth, flexShrink: 0, minWidth: "200px" }}
      >
        <DrawerIcon
          title="Tables"
          onClick={() => setState({ open: false, option: 0 })}
          icon={<TableBar color="primary" />}
        />
        <DrawerIcon
          title="Menu"
          onClick={() => setState({ open: false, option: 1 })}
          icon={<MenuBook color="primary" />}
        />
        <DrawerIcon
          title="Events"
          onClick={() => setState({ open: false, option: 2 })}
          icon={<ViewList color="primary" />}
        />
        <DrawerIcon
          title="Qr Codes"
          onClick={() => setState({ open: false, option: 3 })}
          icon={<QrCode2 color="primary" />}
        />
      </Drawer>
      {state.option === 3 && <QRGenerator />}
      {state.option === 1 && <Menu />}
    </Box>
  );
}
