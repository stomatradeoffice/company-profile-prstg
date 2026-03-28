"use client";

import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { themeConfig } from "@/core/config/theme-config";
import { SIDEBAR_WIDTH } from "./collector-sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";

export interface CollectorNavbarProps {
  handleDisconnect: () => void;
  handleDrawerToggle?: () => void;
}

export default function CollectorNavbar({
  handleDisconnect,
  handleDrawerToggle,
}: CollectorNavbarProps) {
  const theme = themeConfig;

  const { isDisconnected } = useAccount();

  useEffect(() => {
    if (isDisconnected) {
      handleDisconnect();
    }
  }, [isDisconnected, handleDisconnect]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { md: `${SIDEBAR_WIDTH}px` },
        backgroundColor: theme.colors.bgColors,
        borderBottom: `1px solid ${theme.colors.secondaryBgColors}`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "56px !important",
        }}
      >
        <Box sx={{ display: { md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: theme.colors.primaryColors }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />

        <ConnectButton.Custom>
          {({
            openConnectModal,
            account,
            chain,
            mounted,
            openAccountModal,
          }) => {
            const connected = mounted && account && chain;

            return (
              <Box>
                {connected ? (
                  <Button
                    onClick={() => openAccountModal()}
                    variant="outlined"
                    sx={{
                      borderRadius: "9999px",
                      borderColor: theme.colors.primaryColors,
                      color: theme.colors.primaryColors,
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "0.85rem",
                      px: 3,
                      py: 0.8,
                      "&:hover": {
                        backgroundColor: theme.colors.primaryColors,
                        borderColor: theme.colors.primaryColors,
                        color: theme.colors.bgColors,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {account.displayName}
                  </Button>
                ) : (
                  <Button
                    onClick={openConnectModal}
                    variant="outlined"
                    sx={{
                      borderRadius: "9999px",
                      borderColor: theme.colors.primaryColors,
                      color: theme.colors.primaryColors,
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "0.85rem",
                      px: 3,
                      py: 0.8,
                      "&:hover": {
                        backgroundColor: theme.colors.primaryColors,
                        borderColor: theme.colors.primaryColors,
                        color: theme.colors.bgColors,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Connect Wallet
                  </Button>
                )}
              </Box>
            );
          }}
        </ConnectButton.Custom>
      </Toolbar>
    </AppBar>
  );
}
