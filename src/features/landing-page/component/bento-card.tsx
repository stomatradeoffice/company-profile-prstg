
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface BentoCardProps {
    title: string;
    description?: string;
    imageSrc?: string;
    onClick?: () => void;
}

export default function BentoCard({
    title,
    description,
    imageSrc,
    onClick,
}: BentoCardProps) {
    const isClickable = !!onClick;

    return (
        <Box
            onClick={onClick}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "rgba(255,255,255,0.03)",
                p: 2.5,
                minHeight: 160,
                cursor: isClickable ? "pointer" : "default",
                transition: "border-color 0.2s, background-color 0.2s",
                "&:hover": {
                    borderColor: "rgba(255,255,255,0.14)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                },
            }}
        >
            {/* Icon */}
            {imageSrc && (
                <Box
                    sx={{
                        width: 44,
                        height: 44,
                        flexShrink: 0,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.12)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ position: "relative", width: 24, height: 24 }}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="24px"
                        />
                    </Box>
                </Box>
            )}

            {/* Title */}
            <Typography
                sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.4,
                }}
            >
                {title}
            </Typography>

            {/* Description */}
            {description && (
                <Typography
                    sx={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.6,
                        fontWeight: 300,
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
}
