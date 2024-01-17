import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
  title: string;
};

export const HeaderDrawer = ({ open, onClose, onLogout, title }: Props) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { width: "70%" },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          {title}
        </Typography>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link
                href="/pedidos"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <ListItemText primary="Pedidos" />
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link
                href="/produtos"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <ListItemText primary="Produtos" />
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link
                href="/categorias"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <ListItemText primary="Categorias" />
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={onLogout}>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
