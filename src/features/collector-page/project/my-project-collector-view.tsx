"use client";

import { useState } from "react";
import { themeConfig } from "@/core/config/theme-config";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DownloadIcon from "@mui/icons-material/Download";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const farmersData = [
  {
    id: 1,
    name: "Sarah McAlister",
    company: "Green Valley Orchards",
    region: "Northern Plains",
    joined: "Oct 12, 2023",
    activeFeatures: 3,
    totalFeatures: 5,
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Julian Thorne",
    company: "Golden Ridge Co.",
    region: "Highland Valley",
    joined: "Nov 04, 2023",
    activeFeatures: 4,
    totalFeatures: 5,
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Coastal Hydroponics",
    region: "Coastal Delta",
    joined: "Jan 18, 2024",
    activeFeatures: 1,
    totalFeatures: 5,
    status: "PENDING",
  },
  {
    id: 4,
    name: "Samuel Miller",
    company: "Miller Wheat Co.",
    region: "Northern Plains",
    joined: "Sep 30, 2023",
    activeFeatures: 0,
    totalFeatures: 5,
    status: "INACTIVE",
  },
  {
    id: 5,
    name: "Olivia Kent",
    company: "Sunfall Ag Solutions",
    region: "Highland Valley",
    joined: "Dec 22, 2023",
    activeFeatures: 5,
    totalFeatures: 5,
    status: "ACTIVE",
  },
];

export default function MyProjectCollectorView() {
  const theme = themeConfig;
  const [page, setPage] = useState(1);

  // Helper colors mapping to dark theme project guidelines
  const textPrimary = theme.colors.white;
  const textSecondary = "#A1A1AA";
  const borderColors = theme.colors.thirdBgColors;

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ xs: "20px 16px 40px", md: "40px" }}
      maxWidth="1200px" // To match the design's bounded width
      margin="0 auto"
      width="100%"
      gap={4}
    >
      {/* Header section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={2}
      >
        <Box>
          <Typography
            variant="h1"
            color={theme.colors.primaryColors}
            fontWeight={700}
            sx={{ fontSize: { xs: 24, sm: 28, md: 36 }, mb: 1 }}
          >
            Farmer Directory
          </Typography>
          <Typography color={textSecondary} variant="body1" maxWidth={600}>
            Comprehensive database of active agricultural partners across all
            managed regions. Track engagement and harvest readiness.
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              color: textPrimary,
              borderColor: borderColors,
              bgcolor: theme.colors.secondaryBgColors,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": { borderColor: theme.colors.primaryColors },
            }}
          >
            All Regions
          </Button>
          <Button
            variant="outlined"
            startIcon={<AccountTreeIcon />}
            sx={{
              color: textPrimary,
              borderColor: borderColors,
              bgcolor: theme.colors.secondaryBgColors,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": { borderColor: theme.colors.primaryColors },
            }}
          >
            All Statuses
          </Button>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3}>
        {[
          {
            label: "TOTAL FARMERS",
            value: "1,284",
            subtext: "+12% this month",
            subIcon: <TrendingUpIcon sx={{ fontSize: 16 }} />,
            subColor: theme.colors.primaryColors,
          },
          {
            label: "ACTIVE ACREAGE",
            value: "42.5k",
            subtext: "Hectares under management",
            subIcon: null,
            subColor: textSecondary,
          },
          {
            label: "PENDING SYNC",
            value: "18",
            subtext: "Awaiting field visit",
            subIcon: <WarningAmberIcon sx={{ fontSize: 16 }} />,
            subColor: "#F59E0B",
          },
          {
            label: "YIELD EFFICIENCY",
            value: "94.2%",
            subtext: "Historical Average",
            subIcon: null,
            subColor: theme.colors.primaryColors,
          },
        ].map((stat, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <Card
              sx={{
                bgcolor: theme.colors.secondaryBgColors,
                border: `1px solid ${borderColors}`,
                borderRadius: 3,
                boxShadow: "none",
              }}
            >
              <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
                <Typography
                  variant="caption"
                  color={textSecondary}
                  fontWeight={600}
                  letterSpacing={0.5}
                  sx={{ display: "block", mb: 1 }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="h4"
                  color={textPrimary}
                  fontWeight={700}
                  sx={{ mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Box display="flex" alignItems="center" gap={0.5}>
                  {stat.subIcon && (
                    <Box color={stat.subColor} display="flex">
                      {stat.subIcon}
                    </Box>
                  )}
                  <Typography
                    variant="body2"
                    color={stat.subColor}
                    fontWeight={500}
                  >
                    {stat.subtext}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Table */}
      <Box
        sx={{
          bgcolor: theme.colors.secondaryBgColors,
          border: `1px solid ${borderColors}`,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow sx={{ borderBottom: `1px solid ${borderColors}` }}>
                {[
                  "FARMER NAME",
                  "REGION",
                  "DATE JOINED",
                  "FEATURES",
                  "STATUS",
                ].map((col) => (
                  <TableCell
                    key={col}
                    sx={{
                      color: textSecondary,
                      borderBottom: "none",
                      fontSize: 12,
                      fontWeight: 600,
                      py: 2.5,
                    }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {farmersData.map((row) => {
                const isInactive = row.status === "INACTIVE";
                const opacity = isInactive ? 0.5 : 1;

                return (
                  <TableRow
                    key={row.id}
                    sx={{
                      borderBottom: `1px solid ${borderColors}`,
                      "&:last-child": { borderBottom: 0 },
                    }}
                  >
                    <TableCell sx={{ borderBottom: "none", py: 2 }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        sx={{ opacity }}
                      >
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: theme.colors.fourGreenColors,
                            color: textPrimary,
                            fontSize: 14,
                          }}
                        >
                          {row.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                        <Box>
                          <Typography
                            color={textPrimary}
                            fontWeight={600}
                            fontSize={14}
                          >
                            {row.name}
                          </Typography>
                          <Typography color={textSecondary} fontSize={12}>
                            {row.company}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ color: textPrimary, borderBottom: "none", opacity }}
                    >
                      {row.region}
                    </TableCell>
                    <TableCell
                      sx={{ color: textPrimary, borderBottom: "none", opacity }}
                    >
                      {row.joined}
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={1.5}
                        sx={{ opacity }}
                      >
                        <Box display="flex" gap={0.5}>
                          {Array.from({ length: row.totalFeatures }).map(
                            (_, i) => (
                              <Box
                                key={i}
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  bgcolor:
                                    i < row.activeFeatures
                                      ? theme.colors.primaryColors
                                      : borderColors,
                                }}
                              />
                            ),
                          )}
                        </Box>
                        <Typography color={textSecondary} fontSize={12}>
                          {row.activeFeatures}/{row.totalFeatures} Active
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Chip
                        label={row.status}
                        size="small"
                        sx={{
                          height: 24,
                          fontSize: 11,
                          fontWeight: 700,
                          bgcolor:
                            row.status === "ACTIVE"
                              ? "rgba(44, 255, 158, 0.15)"
                              : row.status === "PENDING"
                                ? "rgba(245, 158, 11, 0.15)"
                                : theme.colors.thirdBgColors,
                          color:
                            row.status === "ACTIVE"
                              ? theme.colors.primaryColors
                              : row.status === "PENDING"
                                ? "#F59E0B"
                                : textSecondary,
                          borderRadius: 1,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Details */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          p={3}
          gap={{ xs: 2, sm: 0 }}
          borderTop={`1px solid ${borderColors}`}
        >
          <Typography color={textSecondary} variant="body2">
            Showing{" "}
            <Box component="span" fontWeight={600} color={textPrimary}>
              5
            </Box>{" "}
            of{" "}
            <Box component="span" fontWeight={600} color={textPrimary}>
              1,284
            </Box>{" "}
            farmers
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton size="small" sx={{ color: textSecondary }}>
              <ChevronLeftIcon />
            </IconButton>
            <Button
              size="small"
              sx={{
                minWidth: 32,
                width: 32,
                height: 32,
                p: 0,
                borderRadius: 1.5,
                bgcolor: theme.colors.fourGreenColors,
                color: textPrimary,
              }}
            >
              1
            </Button>
            <Button
              size="small"
              sx={{
                minWidth: 32,
                width: 32,
                height: 32,
                p: 0,
                borderRadius: 1.5,
                color: textSecondary,
                "&:hover": { bgcolor: borderColors },
              }}
            >
              2
            </Button>
            <Button
              size="small"
              sx={{
                minWidth: 32,
                width: 32,
                height: 32,
                p: 0,
                borderRadius: 1.5,
                color: textSecondary,
                "&:hover": { bgcolor: borderColors },
              }}
            >
              3
            </Button>
            <Typography color={textSecondary} sx={{ mx: 0.5 }}>
              ...
            </Typography>
            <Button
              size="small"
              sx={{
                minWidth: 32,
                width: 32,
                height: 32,
                p: 0,
                borderRadius: 1.5,
                color: textSecondary,
                "&:hover": { bgcolor: borderColors },
              }}
            >
              256
            </Button>
            <IconButton size="small" sx={{ color: textSecondary }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Export Section */}
      <Box
        sx={{
          bgcolor: theme.colors.secondaryBgColors,
          border: `1px solid ${borderColors}`,
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box display="flex" gap={2} alignItems="center">
          <Avatar
            sx={{
              bgcolor: theme.colors.fourGreenColors,
              color: theme.colors.primaryColors,
              width: 48,
              height: 48,
            }}
          >
            <DownloadIcon />
          </Avatar>
          <Box>
            <Typography
              color={textPrimary}
              fontWeight={600}
              fontSize={16}
              mb={0.5}
            >
              Export Farmer Dataset
            </Typography>
            <Typography color={textSecondary} variant="body2">
              Generate a custom CSV or PDF report including all feature counts
              and regional metadata.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap={2} flexWrap="wrap">
          <Button
            variant="outlined"
            onClick={() => setPage((p) => p)} // Just to use state
            sx={{
              color: textPrimary,
              borderColor: borderColors,
              borderRadius: 2,
              px: 3,
              textTransform: "none",
              "&:hover": { borderColor: theme.colors.primaryColors },
            }}
          >
            CSV Format
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.fourGreenColors,
              color: textPrimary,
              borderRadius: 2,
              px: 3,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: theme.colors.primaryColors,
                color: theme.colors.bgColors,
              },
            }}
          >
            Export Report
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
