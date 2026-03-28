"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { themeConfig } from "@/core/config/theme-config";
import CollectorSidebar, { SIDEBAR_WIDTH } from "./component/collector-sidebar";
import CollectorNavbar from "./component/collector-navbar";
import { useDashboardCollector } from "./hooks/use-dashboard-collector";

export default function DashboardCollectorView({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = themeConfig;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { handleDisconnectWallet } = useDashboardCollector();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <CollectorSidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: theme.colors.bgColors,
          minHeight: "100vh",
          width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` }
        }}
      >
        {/* Navbar */}
        <CollectorNavbar 
          handleDisconnect={handleDisconnectWallet} 
          handleDrawerToggle={handleDrawerToggle}
        />

        {/* Page Content */}
        <Box sx={{ pt: { xs: "72px", md: "82px" }, px: { xs: "16px", md: "32px" }, pb: 3, color: theme.colors.white }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
