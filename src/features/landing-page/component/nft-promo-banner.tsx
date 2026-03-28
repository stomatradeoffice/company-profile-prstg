"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack } from "@mui/material";

interface NftPromoBannerProps {
    imageSrc: string;
}

export default function NftPromoBanner({ imageSrc }: NftPromoBannerProps) {
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
                py: { xs: 6, md: 8 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
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
            <Stack spacing={3} sx={{ flex: 1, maxWidth: { md: "50%" } }}>
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
                        Limited Promotion
                    </Typography>
                </Box>

                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        lineHeight: 1.1,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        color: "white",
                    }}
                >
                    Cashback Purchase{" "}
                    <Box component="span" sx={{ color: "#00CFFC" }}>
                        NFT
                    </Box>
                </Typography>

                {/* Description */}
                <Stack spacing={0.5}>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.85)",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                        }}
                    >
                        Blessings Shared, Get Rp150.000 Cashback!
                    </Typography>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.85rem",
                            fontWeight: 300,
                            lineHeight: 1.6,
                        }}
                    >
                        Simply recommend this &quot;Magic Card&quot; to your friend and enjoy your bonus immediately.
                    </Typography>
                </Stack>

                {/* CTA Button */}
                <Box>
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: "9999px",
                            borderColor: "#00CFFC",
                            color: "#00CFFC",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            textTransform: "none",
                            px: 4,
                            py: 1.25,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            width: "fit-content",
                            "&:hover": {
                                backgroundColor: "rgba(0,207,252,0.1)",
                                borderColor: "#00CFFC",
                            },
                            transition: "all 0.3s",
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#00CFFC",
                                flexShrink: 0,
                            }}
                        />
                        Claim Now!
                    </Button>
                </Box>
            </Stack>

            {/* Right: NFT Image */}
            <Box
                sx={{
                    position: "relative",
                    flexShrink: 0,
                    width: { xs: 220, md: 320 },
                    height: { xs: 260, md: 360 },
                }}
            >
                <Image
                    src={imageSrc}
                    alt="NFT Claim Card"
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="220px, 320px"
                />
            </Box>
        </Box>
    );
}
