"use client";

import { AppBar, Toolbar, Box, Button, Stack, Typography } from "@mui/material";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoSrc: string;
  navItems: NavItem[];
  ctaLabel: string;
  activeHref?: string;
}

import { useLandingPageActions } from "../context/landing-page-context";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function Navbar({
  logoSrc,
  navItems,
  ctaLabel,
  activeHref,
}: NavbarProps) {
  const { handleConnectWallet, handleNavItemClick } = useLandingPageActions();
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected) {
      handleConnectWallet();
    }
  }, [isConnected, address, handleConnectWallet]);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "rgba(10, 10, 10, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 3, lg: 8 },
          py: 1,
        }}
      >
        {/* Logo */}
        <Box
          onClick={() => handleNavItemClick("/")}
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#00CFFC",
              fontWeight: 800,
              letterSpacing: "0.5px",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontFamily: "Space Grotesk, sans-serif",
              lineHeight: 1,
            }}
          >
            Prestige Chain
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Button
                key={item.href}
                onClick={() => handleNavItemClick(item.href)}
                sx={{
                  color: isActive
                    ? "var(--primary-colors)"
                    : "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 600 : 500,
                  textTransform: "none",
                  "&:hover": {
                    color: "var(--primary-colors)",
                    backgroundColor: "transparent",
                  },
                  transition: "color 0.3s",
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Stack>

        {/* Right Side: Mainnet pill + CTA Button */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              px: 2,
              py: 0.5,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Mainnet
            </Typography>
          </Box>

          <ConnectButton.Custom>
            {({ openConnectModal }) => {
              return (
                <Button
                  onClick={openConnectModal}
                  variant="contained"
                  sx={{
                    borderRadius: "9999px",
                    backgroundColor: "var(--primary-colors)",
                    color: "#0A0A0A",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    px: 3,
                    py: 0.75,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "var(--third-colors)",
                      boxShadow: "none",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  {ctaLabel}
                </Button>
              );
            }}
          </ConnectButton.Custom>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
