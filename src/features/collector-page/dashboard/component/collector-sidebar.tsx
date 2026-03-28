"use client";

import { useMemo } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { themeConfig } from "@/core/config/theme-config";
import { imageConfig } from "@/core/config/images-config";
import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/core/config/routes";

export const SIDEBAR_WIDTH = 220;

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export default function CollectorSidebar() {
  const theme = themeConfig;
  const { address } = useAccount();
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = useMemo(
    () => [
      // {
      //   label: "Home",
      //   icon: <HomeIcon />,
      //   path: routes.collector.home(),
      // },
      {
        label: "Farmer Tracking",
        icon: <AgricultureOutlinedIcon />,
        path: routes.collector.myProject(),
      },
      {
        label: "Logistic",
        icon: <LocalShippingOutlinedIcon />,
        path: routes.collector.logistic(),
      },
      {
        label: "Insurance",
        icon: <ShieldOutlinedIcon />,
        path: routes.collector.insurance(),
      },
      {
        label: "Warehouse",
        icon: <WarehouseOutlinedIcon />,
        path: routes.collector.warehouse(),
      },
      {
        label: "Receipts",
        icon: <ReceiptLongOutlinedIcon />,
        path: routes.collector.receipts(),
      },
      {
        label: "Milestone Disburshment",
        icon: <AccountBalanceWalletOutlinedIcon />,
        path: routes.collector.addProject(),
      },
      {
        label: "Harvest Report",
        icon: <DescriptionOutlinedIcon />,
        path: routes.collector.harvestReport(),
      },
      {
        label: "User Profile",
        icon: <PersonOutlineOutlinedIcon />,
        path: routes.collector.userProfile(),
      },
    ],
    [],
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          backgroundColor: theme.colors.bgColors,
          borderRight: `1px solid ${theme.colors.secondaryBgColors}`,
          color: theme.colors.white,
          paddingTop: "16px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          pb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#00CFFC",
            fontWeight: 800,
            letterSpacing: "0.5px",
            fontSize: { xs: "1.25rem", md: "12" },
            fontFamily: "Space Grotesk, sans-serif",
            lineHeight: 1,
          }}
        >
          Prestige Ledger
        </Typography>
      </Box>

      {/* User Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          pb: 3,
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: theme.colors.secondaryBgColors,
            fontSize: 14,
          }}
        >
          CP
        </Avatar>
        <Box width={120}>
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{ color: theme.colors.white, fontSize: 13, lineHeight: 1.3 }}
          >
            Collector Pro
          </Typography>
          <Typography
            variant="caption"
            noWrap
            sx={{
              color: theme.colors.white,
              fontSize: 11,
              width: "100%",
              display: "block",
            }}
          >
            {address}
          </Typography>
        </Box>
      </Box>

      {/* Navigation Items */}
      <List sx={{ px: 1 }}>
        {navItems.map((item) => {
          // Check if current pathname starts with item path
          // Using exact match for generic paths, or startsWith for nested paths
          const isActive =
            pathname === item.path ||
            (pathname?.startsWith(item.path + "/") ?? false);

          return (
            <ListItemButton
              key={item.path}
              onClick={() => router.push(item.path)}
              sx={{
                borderRadius: "8px",
                mb: 0.5,
                px: 1.5,
                py: 1,
                borderLeft: isActive
                  ? `3px solid ${theme.colors.primaryColors}`
                  : "3px solid transparent",
                backgroundColor: isActive
                  ? theme.colors.fourGreenColors
                  : "transparent",
                color: isActive
                  ? theme.colors.primaryColors
                  : theme.colors.white,
                "&:hover": {
                  backgroundColor: isActive
                    ? theme.colors.fourGreenColors
                    : theme.colors.secondaryBgColors,
                },
                transition: "all 0.2s ease",
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive
                    ? theme.colors.primaryColors
                    : theme.colors.white,
                  minWidth: 36,
                  "& .MuiSvgIcon-root": { fontSize: 20 },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
