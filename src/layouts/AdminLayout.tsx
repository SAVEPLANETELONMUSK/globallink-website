	mport { ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Button,
} from "@mui/material";

import PublicIcon from "@mui/icons-material/Public";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 270;

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {

  function logout() {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  }

  return (
    <Box sx={{ display: "flex" }}>

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "#071B3B",
        }}
      >
        <Toolbar>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            fontWeight="bold"
          >
            GlobalLink Control Center
          </Typography>

          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={logout}
          >
            Logout
          </Button>

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#071B3B",
            color: "#fff",
          },
        }}
      >

        <Toolbar>

          <PublicIcon
            sx={{
              color: "#29B6F6",
              mr: 1,
            }}
          />

          <Typography
            variant="h6"
            fontWeight="bold"
          >
            GlobalLink
          </Typography>

        </Toolbar>

        <Divider />

        <List>

          <ListItemButton
            component={Link}
            to="/admin/dashboard"
          >
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/admin/create"
          >
            <ListItemIcon>
              <AddBoxIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Create Shipment" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/admin/update"
          >
            <ListItemIcon>
              <LocalShippingIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Update Shipment" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/admin/shipments"
          >
            <ListItemIcon>
              <LocalShippingIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="All Shipments" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Customers" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <SupportAgentIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Agents" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <WarehouseIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Warehouses" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>

            <ListItemText primary="Settings" />
          </ListItemButton>

        </List>

      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F5F7FB",
          minHeight: "100vh",
          mt: 8,
          p: 4,
        }}
      >
        {children}
      </Box>

    </Box>
  );
}
