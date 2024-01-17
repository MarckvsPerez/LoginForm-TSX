import { ReactNode } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { MenuDesktop } from "../Components/Menu/MenuDesktop";
import { MenuMobil } from "../Components/Menu/MenuMobil";

export function WebLayout({ children }: { children: ReactNode }) {
    const isDesktop = useMediaQuery('(min-width: 500px)');

    return (
        <>
            {isDesktop ? (
                <MenuDesktop>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        {children}
                    </Box>
                </MenuDesktop>
            ) : (
                <MenuMobil>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        {children}
                    </Box>
                </MenuMobil>
            )}
        </>
    );
}
