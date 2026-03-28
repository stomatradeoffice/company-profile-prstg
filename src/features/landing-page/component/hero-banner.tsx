"use client";

import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import { ReactNode } from "react";

interface TabItem {
    label: string;
    active: boolean;
}

interface HeroBannerProps {
    badgeText: string;
    heading: ReactNode;
    secheading: string;
    subheading: string;
    // mobileBackgroundImage: string;
    desktopBackgroundImage: string;
    tabItems: TabItem[];
}

import { useLandingPageActions } from "../context/landing-page-context";

export default function HeroBanner({
    badgeText,
    heading,
    secheading,
    subheading,
    // mobileBackgroundImage,
    desktopBackgroundImage,
    tabItems,
}: HeroBannerProps) {
    const { handleConnectWallet } = useLandingPageActions();
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Background Image - Mobile */}
            {/* <Box sx={{ display: { xs: "block", md: "none" }, position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src={mobileBackgroundImage}
                    alt="Banner Background"
                    fill
                    priority
                    style={{ objectPosition: "center" }}
                    sizes="100vw"
                />
            </Box> */}

            {/* Background Image - Desktop */}
            <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src={desktopBackgroundImage}
                    alt="Banner Background"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="100vw"
                />
            </Box>

            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(to bottom, rgba(10,10,10,0.4), transparent, #0A0A0A)",
                }}
            />

            {/* Content */}
            <Stack
                alignItems="center"
                spacing={3}
                sx={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    px: 3,
                    pt: 12,
                    pb: 8,
                    maxWidth: "56rem",
                    mx: "auto",
                }}
            >
                {/* Announcement Badge */}
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: "9999px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(4px)",
                        px: 2.5,
                        py: 0.75,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#00CFFC",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        {badgeText}
                    </Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "2.25rem", sm: "3rem", lg: "3.75rem" },
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "white",
                    }}
                >
                    {heading}
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: "1.25rem", sm: "2rem", lg: "2.75rem" },
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "rgba(255,255,255,0.5)",
                    }}
                >
                    {secheading}
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.125rem" },
                        color: "rgba(255,255,255,0.5)",
                        maxWidth: "36rem",
                        fontWeight: 300,
                    }}
                >
                    {subheading}
                </Typography>

                {/* Tab Pills */}
                <Box
                    sx={{
                        mt: 2,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1.5,
                        backgroundColor: "rgba(10,10,10,0.5)",
                        border: "1px solid rgba(0,207,252,0.25)",
                        borderRadius: "9999px",
                        backdropFilter: "blur(16px)",
                        boxShadow: "0 0 32px rgba(0,207,252,0.08), inset 0 0 24px rgba(0,207,252,0.04)",
                        p: "6px",
                    }}
                >
                    {tabItems.map((tab) => (
                        <Box
                            key={tab.label}
                            onClick={handleConnectWallet}
                            sx={{
                                px: { xs: 3.5, sm: 5 },
                                py: { xs: 1.25, sm: 1.5 },
                                borderRadius: "9999px",
                                cursor: "pointer",
                                border: tab.active ? "none" : "1px solid rgba(0,207,252,0.5)",
                                backgroundColor: tab.active ? "var(--primary-colors)" : "rgba(255,255,255,0.03)",
                                color: tab.active ? "#0A0A0A" : "rgba(255,255,255,0.85)",
                                fontWeight: tab.active ? 700 : 500,
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                letterSpacing: "0.02em",
                                fontFamily: "Space Grotesk, sans-serif",
                                transition: "all 0.25s",
                                userSelect: "none",
                                boxShadow: tab.active ? "0 0 20px rgba(0,207,252,0.35)" : "none",
                                "&:hover": {
                                    backgroundColor: tab.active ? "var(--third-colors)" : "rgba(0,207,252,0.1)",
                                    borderColor: tab.active ? "transparent" : "rgba(0,207,252,0.8)",
                                    color: tab.active ? "#0A0A0A" : "#00CFFC",
                                    boxShadow: tab.active ? "0 0 28px rgba(0,207,252,0.45)" : "none",
                                },
                            }}
                        >
                            {tab.label}
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
}
