"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface CenturyBannerProps {
    imageSrc: string;
}

export default function CenturyBanner({ imageSrc }: CenturyBannerProps) {
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
                minHeight: { md: 360 },
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
            <Stack
                spacing={3}
                sx={{
                    flex: "0 0 auto",
                    width: { xs: "100%", md: "44%" },
                    px: { xs: 4, md: 7 },
                    py: { xs: 6, md: 7 },
                    justifyContent: "center",
                }}
            >
                {/* Heading */}
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
                            lineHeight: 1.05,
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            color: "white",
                        }}
                    >
                        Build for the
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
                            lineHeight: 1.05,
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            color: "#00CFFC",
                        }}
                    >
                        Next Century
                    </Typography>
                </Box>

                {/* Description */}
                <Typography
                    sx={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        lineHeight: 1.75,
                        maxWidth: "28rem",
                    }}
                >
                    The Agrotech is not just a platform; it&apos;s a living digital organism.
                    Our layered revenue model ensures that every participant, from the smallholder
                    farmer to the global institutional trader, benefits from the collective growth
                    of the network.
                </Typography>

                {/* CTA Buttons */}
                <Stack direction="row" spacing={2}>
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
                            px: 3,
                            py: 1.25,
                            boxShadow: "none",
                            "&:hover": { backgroundColor: "#33DAFF", boxShadow: "none" },
                            transition: "all 0.3s",
                        }}
                    >
                        Explore Docs
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
                            px: 3,
                            py: 1.25,
                            "&:hover": {
                                borderColor: "rgba(255,255,255,0.5)",
                                backgroundColor: "rgba(255,255,255,0.05)",
                            },
                            transition: "all 0.3s",
                        }}
                    >
                        View Whitepaper
                    </Button>
                </Stack>
            </Stack>

            {/* Right: Century Image */}
            <Box
                sx={{
                    position: "relative",
                    flex: 1,
                    minHeight: { xs: 280, md: "auto" },
                }}
            >
                <Image
                    src={imageSrc}
                    alt="Build for the Next Century"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, 56vw"
                />
                {/* Right fade gradient */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to right, #0A1A12 0%, transparent 30%)",
                    }}
                />
            </Box>
        </Box>
    );
}
