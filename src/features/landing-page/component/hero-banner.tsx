"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { ReactNode } from "react";

interface HeroBannerProps {
    badgeText: string;
    heading: ReactNode;
    secheading: string;
    subheading: string;
    // mobileBackgroundImage: string;
    desktopBackgroundImage: string;
    primaryButtonLabel: string;
    secondaryButtonLabel?: string;
}

import { useLandingPageActions } from "../context/landing-page-context";

export default function HeroBanner({
    badgeText,
    heading,
    secheading,
    subheading,
    // mobileBackgroundImage,
    desktopBackgroundImage,
    primaryButtonLabel,
    secondaryButtonLabel 
}: HeroBannerProps) {
    const { handleConnectWallet, handleLearnMore } = useLandingPageActions();
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

                {/* CTA Buttons */}
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button
                        onClick={handleConnectWallet}
                        variant="contained"
                        endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
                        sx={{
                            borderRadius: "0.75rem",
                            backgroundColor: "var(--primary-colors)",
                            color: "#0A0A0A",
                            fontWeight: 700,
                            fontSize: "0.875rem",
                            textTransform: "none",
                            px: 3.5,
                            py: 1.25,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "var(--third-colors)",
                                boxShadow: "none",
                            },
                            transition: "all 0.3s",
                        }}
                    >
                        {primaryButtonLabel}
                    </Button>
                    {secondaryButtonLabel && (
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "0.75rem",
                                borderColor: "rgba(255,255,255,0.2)",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: "white",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                textTransform: "none",
                                px: 3.5,
                                py: 1.25,
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    borderColor: "rgba(255,255,255,0.3)",
                                },
                                transition: "all 0.3s",
                            }}
                        >
                            {secondaryButtonLabel}
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Box>
    );
}
