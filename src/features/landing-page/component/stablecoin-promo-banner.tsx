"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface StablecoinPromoBannerProps {
    stakingImageSrc: string;
    userImageSrc: string;
}

export default function StablecoinPromoBanner({ stakingImageSrc, userImageSrc }: StablecoinPromoBannerProps) {
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#0A1A12",
                border: "1px solid rgba(0,207,252,0.15)",
                boxShadow: "inset 4px 0 24px rgba(0,207,252,0.08), 0 0 40px rgba(0,207,252,0.04)",
                px: { xs: 4, md: 8 },
                pt: { xs: 6, md: 8 },
                pb: 0,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: { xs: 4, md: 2 },
                minHeight: { md: 340 },
            }}
        >
            {/* Left glow accent */}
            <Box
                sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: "linear-gradient(to bottom, transparent, #00CFFC, transparent)",
                }}
            />

            {/* Left: Text content */}
            <Stack spacing={3} sx={{ flex: 1, maxWidth: { md: "45%" }, pb: { xs: 0, md: 8 } }}>
                {/* Badge */}
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        width: "fit-content",
                        borderRadius: "9999px",
                        border: "1px solid rgba(0,207,252,0.4)",
                        px: 2,
                        py: 0.5,
                    }}
                >
                    <Typography
                        sx={{
                            color: "#00CFFC",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}
                    >
                        The Future of Liquidity
                    </Typography>
                </Box>

                {/* Heading */}
                <Stack spacing={0}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
                            lineHeight: 1.0,
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            color: "white",
                        }}
                    >
                        Stablecoin
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
                            lineHeight: 1.0,
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            color: "#00CFFC",
                        }}
                    >
                        1:1 KG
                    </Typography>
                </Stack>

                {/* Subtext */}
                <Typography
                    sx={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                    }}
                >
                    Commodity Price Conversion
                </Typography>

                {/* CTA Buttons */}
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        variant="contained"
                        endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
                        sx={{
                            borderRadius: "9999px",
                            backgroundColor: "#00CFFC",
                            color: "#0A0A0A",
                            fontWeight: 700,
                            fontSize: "0.875rem",
                            textTransform: "none",
                            px: 3.5,
                            py: 1.25,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#33DAFF",
                                boxShadow: "none",
                            },
                            transition: "all 0.3s",
                        }}
                    >
                        Start Invest
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: "9999px",
                            borderColor: "rgba(255,255,255,0.25)",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textTransform: "none",
                            px: 3.5,
                            py: 1.25,
                            "&:hover": {
                                borderColor: "rgba(255,255,255,0.5)",
                                backgroundColor: "rgba(255,255,255,0.05)",
                            },
                            transition: "all 0.3s",
                        }}
                    >
                        Learn More
                    </Button>
                </Stack>

                {/* User social proof */}
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                        sx={{
                            position: "relative",
                            width: 60,
                            height: 28,
                            flexShrink: 0,
                        }}
                    >
                        {[0, 1, 2].map((i) => (
                            <Box
                                key={i}
                                sx={{
                                    position: "absolute",
                                    left: i * 16,
                                    top: 0,
                                    width: 28,
                                    height: 28,
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    border: "2px solid #0A1A12",
                                }}
                            >
                                <Image
                                    src={userImageSrc}
                                    alt="user"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="28px"
                                />
                            </Box>
                        ))}
                    </Box>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.8rem",
                            fontWeight: 400,
                        }}
                    >
                        Join{" "}
                        <Box component="span" sx={{ color: "white", fontWeight: 600 }}>
                            50K+
                        </Box>{" "}
                        traders globally
                    </Typography>
                </Stack>
            </Stack>

            {/* Right: Staking/Phone Image */}
            <Box
                sx={{
                    position: "relative",
                    flexShrink: 0,
                    width: { xs: "100%", md: "52%" },
                    height: { xs: 280, md: 380 },
                    alignSelf: "flex-end",
                }}
            >
                <Image
                    src={stakingImageSrc}
                    alt="Stablecoin App"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom center" }}
                    sizes="(max-width: 768px) 100vw, 52vw"
                />
            </Box>
        </Box>
    );
}
