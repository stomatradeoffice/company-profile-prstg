"use client";

import { Box, Typography, Stack, IconButton, Grid } from "@mui/material";

interface FooterLinkColumn {
    title: string;
    links: { label: string; href: string }[];
}

interface SocialLink {
    icon: string;
    href: string;
    label: string;
}

interface FooterProps {
    logoSrc: string;
    socialLinks: SocialLink[];
    linkColumns: FooterLinkColumn[];
    copyrightText: string;
}

const socialIcons: Record<string, React.ReactNode> = {
    discord: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    ),
    telegram: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
    ),
    x: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    linkedin: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
};

export default function Footer({
    logoSrc,
    socialLinks,
    linkColumns,
    copyrightText,
}: FooterProps) {
    return (
        <Box
            component="footer"
            sx={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "var(--bg-colors)",
            }}
        >
            {/* ── Link Columns ── */}
            <Box sx={{ px: { xs: 3, lg: 8 }, pt: { xs: 8, lg: 10 }, pb: { xs: 6, lg: 8 } }}>
                <Grid container spacing={4} sx={{ maxWidth: "72rem", mx: "auto" }}>
                    {linkColumns.map((col) => (
                        <Grid key={col.title} size={{ xs: 6, sm: 3, md: 3 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    color: "rgba(255,255,255,0.4)",
                                    mb: 3,
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {col.title}
                            </Typography>
                            <Stack spacing={2}>
                                {col.links.map((link) => (
                                    <Typography
                                        key={link.label}
                                        component="a"
                                        href={link.href}
                                        variant="body2"
                                        sx={{
                                            color: "rgba(255,255,255,0.65)",
                                            fontSize: "0.875rem",
                                            fontWeight: 400,
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                            "&:hover": { color: "var(--primary-colors)" },
                                        }}
                                    >
                                        {link.label}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ── Bottom Bar ── */}
            <Box
                sx={{
                    px: { xs: 3, lg: 8 },
                    py: 3,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ maxWidth: "72rem", mx: "auto" }}
                >
                    {/* Logo */}
                    <Typography
                        sx={{
                            color: "#00CFFC",
                            fontWeight: 800,
                            fontSize: "1.125rem",
                            fontFamily: "Space Grotesk, sans-serif",
                            letterSpacing: "0.5px",
                        }}
                    >
                        {logoSrc}
                    </Typography>

                    {/* Copyright */}
                    <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", textAlign: "center" }}
                    >
                        {copyrightText}
                    </Typography>

                    {/* Social Icons */}
                    <Stack direction="row" spacing={0.5}>
                        {socialLinks.map((s) => (
                            <IconButton
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener"
                                aria-label={s.label}
                                size="small"
                                sx={{
                                    color: "rgba(255,255,255,0.4)",
                                    "&:hover": { color: "var(--primary-colors)" },
                                }}
                            >
                                {socialIcons[s.icon] ?? null}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}
