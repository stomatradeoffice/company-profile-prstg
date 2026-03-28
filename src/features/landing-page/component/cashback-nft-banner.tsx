"use client";

import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

interface CashbackNftBannerProps {
    imageSrc: string;
}

const tiers = [
    { label: "Tier 02", value: "Rp. 100.000" },
    { label: "Tier 03", value: "Rp. 50.000" },
    { label: "Tier 04", value: "Rp. 25.000" },
    { label: "Tier 05", value: "Rp. 25.000" },
];

export default function CashbackNftBanner({ imageSrc }: CashbackNftBannerProps) {
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#0A1A12",
                border: "1px solid rgba(0,207,252,0.15)",
                boxShadow: "inset 4px 0 24px rgba(0,207,252,0.08), 0 0 40px rgba(0,207,252,0.04)",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
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

            {/* Left: NFT Image only */}
            <Box
                sx={{
                    position: "relative",
                    flexShrink: 0,
                    width: { xs: "100%", md: "42%" },
                    minHeight: { xs: 260, md: "auto" },
                }}
            >
                <Image
                    src={imageSrc}
                    alt="NFT Reward"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, 42vw"
                />
            </Box>

            {/* Right: Cashback tiers */}
            <Box
                sx={{
                    flex: 1,
                    px: { xs: 4, md: 6 },
                    py: { xs: 5, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: "2rem", md: "2.75rem" },
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "#00CFFC",
                        lineHeight: 1.1,
                    }}
                >
                    Cashback NFT
                </Typography>

                {/* Top Tier — highlighted */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: "10px",
                        backgroundColor: "rgba(0,207,252,0.08)",
                        border: "1px solid rgba(0,207,252,0.2)",
                        px: 3,
                        py: 1.75,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography sx={{ color: "#00CFFC", fontWeight: 800, fontSize: "1.1rem" }}>01</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: 500 }}>
                            Top Tier Reward
                        </Typography>
                    </Box>
                    <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                        Rp. 150.000
                    </Typography>
                </Box>

                {/* Other tiers — 2x2 grid */}
                <Grid container spacing={1.5}>
                    {tiers.map((tier) => (
                        <Grid key={tier.label} size={{ xs: 6 }}>
                            <Box
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    px: 2.5,
                                    py: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0.75,
                                }}
                            >
                                <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 500 }}>
                                    {tier.label}
                                </Typography>
                                <Typography sx={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>
                                    {tier.value}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
