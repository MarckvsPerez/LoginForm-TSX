import { ReactNode } from "react";
import { Box, Drawer, CssBaseline, Toolbar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Header } from "../Header/Header";

const drawerWidth = 240;

export function MenuDesktop({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header />
            <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" } }} >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {["All mail", "Trash", "Spam"].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            {children}
        </Box>
    );
}
