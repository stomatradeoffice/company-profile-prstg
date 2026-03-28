"use client";

import {
  Box,
  Card,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  LinearProgress,
} from "@mui/material";
import { themeConfig } from "@/core/config/theme-config";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import React from "react";

const KPI_CARDS = [
  {
    title: "ARMADA AKTIF",
    value: "18",
    sub: "12 di perjalanan",
    color: "#F59E0B",
  },
  {
    title: "PENGIRIMAN AKTIF",
    value: "12",
    sub: "11 transit sekarang",
    color: themeConfig.colors.primaryColors,
  },
  {
    title: "KONEKSI KEND. (OK)",
    value: "8",
    sub: "87.5% OK On-Line",
    color: "#10B981",
  },
  {
    title: "ALERT / DELAY",
    value: "2",
    sub: "Tindakan diperlukan",
    color: "#EF4444",
  },
  {
    title: "VOLUME HARI INI",
    value: "84.2 ton",
    sub: "9 truk + 3 selesai",
    color: "#F59E0B",
  },
  {
    title: "FEE OTO (YTD)",
    value: "Rp 18.4 Jt",
    sub: "2% dari nilai muatan",
    color: "#10B981",
  },
];

const PENGIRIMAN_AKTIF = [
  {
    id: "DO-2024-0188",
    ken: "TRK-001",
    drv: "Ahmad F.",
    rute: "GDG-01 ➔ Depot-07",
    kom: "🌾 Beras",
    vol: "5.400 kg",
    brg: "07:00",
    eta: "11:00",
    fee: "Rp 650 Rb",
    status: "On Time",
    sColor: "#10B981",
  },
  {
    id: "DO-2024-0189",
    ken: "TRK-002",
    drv: "Budi P.",
    rute: "GDG-02 ➔ Depot-12",
    kom: "🌽 Jagung",
    vol: "5.400 kg",
    brg: "07:30",
    eta: "09:30",
    fee: "Rp 550 Rb",
    status: "On Time",
    sColor: "#10B981",
  },
  {
    id: "DO-2024-0190",
    ken: "TRK-004",
    drv: "Fajar S.",
    rute: "GDG-02 ➔ Depot-01",
    kom: "🌾 Beras",
    vol: "8.000 kg",
    brg: "08:00",
    eta: "13:00",
    fee: "Rp 1.15 Jt",
    status: "On Time",
    sColor: "#10B981",
  },
  {
    id: "DO-2024-0191",
    ken: "TRK-005",
    drv: "Gunawan P.",
    rute: "GDG-03 ➔ Depot-07",
    kom: "🌱 Kedelai",
    vol: "3.400 kg",
    brg: "08:30",
    eta: "09:30",
    fee: "Rp 1.25 Jt",
    status: "On Time",
    sColor: "#10B981",
  },
  {
    id: "DO-2024-0192",
    ken: "TRK-007",
    drv: "Hendra W.",
    rute: "GDG-04 ➔ Depot-09",
    kom: "🍅 Gabah",
    vol: "4.200 kg",
    brg: "09:00",
    eta: "12:00",
    fee: "Rp 300 Rb",
    status: "On Time",
    sColor: "#10B981",
  },
  {
    id: "DO-2024-0193",
    ken: "TRK-008",
    drv: "Irfan M.",
    rute: "GDG-03 ➔ Depot-01",
    kom: "🌽 Jagung",
    vol: "4.000 kg",
    brg: "05:00",
    eta: "A Delay",
    fee: "Rp 480 Rb",
    status: "DELAY 2.5 JAM",
    sColor: "#EF4444",
  },
  {
    id: "DO-2024-0194",
    ken: "TRK-011",
    drv: "Kurnia S.",
    rute: "GDG-06 ➔ Depot-07",
    kom: "🌾 Beras",
    vol: "7.200 kg",
    brg: "04:00",
    eta: "13:00",
    fee: "Rp 1.05 Jt",
    status: "On Time",
    sColor: "#10B981",
  },
  {
    id: "DO-2024-0195",
    ken: "TRK-013",
    drv: "Lukman H.",
    rute: "GDG-05 ➔ Depot-03",
    kom: "🍬 Gula",
    vol: "3.800 kg",
    brg: "07:00",
    eta: "10:15",
    status: "Sedikit Delay",
    sColor: "#F59E0B",
  },
];

export default function LogisticView() {
  const theme = themeConfig;
  const tcOptions = { color: "#A1A1AA" }; // Text Secondary
  const borderColor = theme.colors.fourGreenColors;
  const bg = theme.colors.bgColors;
  const cardBg = theme.colors.secondaryBgColors;

  return (
    <Box
      sx={{
        bgcolor: bg,
        minHeight: "100vh",
        p: { xs: 2, md: 3 },
        color: theme.colors.white,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Box
        sx={{
          paddingBottom: 1.5,
        }}
      >
        <Typography
          variant="h1"
          color={theme.colors.primaryColors}
          fontWeight={700}
          sx={{ fontSize: { xs: 24, sm: 28, md: 36 }, mb: 1 }}
        >
          Fleet & Logistics
        </Typography>
        <Typography color="#A1A1AA" variant="body1" maxWidth={600}>
          Monitor real-time fleet activity, shipping routes, delivery statuses, and
          overall logistics performance across all operations.
        </Typography>
      </Box>

      {/* Top Notification Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 1, sm: 2 },
          bgcolor: "rgba(239, 68, 68, 0.1)",
          borderLeft: `4px solid #EF4444`,
          p: 1.5,
          mb: 3,
          borderRadius: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <WarningAmberIcon sx={{ color: "#EF4444", display: { xs: "none", sm: "block" } }} />
          <Typography
            variant="body2"
            sx={{ color: "#EF4444", fontWeight: 600, fontSize: { xs: 12, sm: 14 } }}
          >
            TRK-008 — delay 2.5 jam, driver tidak terhubung 4G menit, muatan
            4,000 kg Jagung dari GDG-03. TRK-025 — ban bocor Tol Cipali KM-88,
            rescue ETA 25 menit.
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: tcOptions.color, fontWeight: 700 }}
        >
          2 Alerts
        </Typography>
      </Box>

      {/* Top KPIs */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {KPI_CARDS.map((kpi, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 2 }} key={idx}>
            <Card
              sx={{
                bgcolor: cardBg,
                border: `1px solid ${borderColor}`,
                borderRadius: 1.5,
                height: "100%",
                boxShadow: "none",
              }}
            >
              <Box p={1.5}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    color: theme.colors.fourGreenColors,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 1,
                    letterSpacing: 0,
                  }}
                >
                  {kpi.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: kpi.color, fontWeight: 700, mb: 0.5 }}
                >
                  {kpi.value}
                </Typography>
                <Typography variant="caption" sx={{ color: tcOptions.color }}>
                  {kpi.sub}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Grid Layout */}
      <Grid container spacing={2}>
        {/* Left Column (Fleet Map, Bottom Info) */}
        <Grid
          size={{ xs: 12, lg: 9 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* Live Fleet Map Section Placeholder */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              p={2}
              borderBottom={`1px solid ${borderColor}`}
              display="flex"
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
              >
                LIVE FLEET MAP - KORIDOR JAWA BARAT
              </Typography>
              <Typography variant="caption" sx={{ color: "#10B981" }}>
                • 18 Kendaraan - 87% Online
              </Typography>
            </Box>
            <Box
              p={3}
              flexGrow={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              sx={{ minHeight: { xs: "200px", md: "350px" }, overflow: "hidden" }}
            >
              {/* Map Mockup via HTML/CSS positioning */}

              {/* Paths (Dashed Lines) */}
              <svg
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              >
                {/* Yellow Route */}
                <path
                  d="M 150 100 Q 300 100, 450 150 T 700 100"
                  fill="transparent"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity={0.6}
                />
                {/* Green Route */}
                <path
                  d="M 250 250 Q 400 300, 550 250 T 800 200"
                  fill="transparent"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity={0.6}
                />
              </svg>

              {/* Nodes and Vehicles */}
              <Box
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "15%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Chip
                  label="GDG-01"
                  sx={{
                    bgcolor: "rgba(245, 158, 11, 0.2)",
                    color: "#F59E0B",
                    border: "1px solid #F59E0B",
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "30%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <LocalShippingIcon sx={{ color: "#F59E0B" }} />
                <Typography variant="caption" display="block" color="#F59E0B">
                  TRK-001
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "35%",
                  left: "45%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Chip
                  label="GDG-02"
                  sx={{
                    bgcolor: "rgba(245, 158, 11, 0.2)",
                    color: "#F59E0B",
                    border: "1px solid #F59E0B",
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "55%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <LocalShippingIcon sx={{ color: "#F59E0B" }} />
                <Typography variant="caption" display="block" color="#F59E0B">
                  TRK-004
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "70%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Chip
                  label="GDG-03"
                  sx={{
                    bgcolor: "rgba(245, 158, 11, 0.2)",
                    color: "#F59E0B",
                    border: "1px solid #F59E0B",
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "80%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <LocalShippingIcon sx={{ color: "#EF4444" }} />
                <Typography variant="caption" display="block" color="#EF4444">
                  TRK-008 ⚠️
                </Typography>
              </Box>

              {/* Green Route Nodes */}
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "25%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Chip
                  label="GDG-04"
                  sx={{
                    bgcolor: "rgba(16, 185, 129, 0.2)",
                    color: "#10B981",
                    border: "1px solid #10B981",
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "70%",
                  left: "35%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <LocalShippingIcon sx={{ color: "#10B981" }} />
                <Typography variant="caption" display="block" color="#10B981">
                  TRK-007
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "55%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Chip
                  label="GDG-05"
                  sx={{
                    bgcolor: "rgba(16, 185, 129, 0.2)",
                    color: "#10B981",
                    border: "1px solid #10B981",
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "75%",
                  left: "70%",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Chip
                  label="GDG-06"
                  sx={{
                    bgcolor: "rgba(16, 185, 129, 0.2)",
                    color: "#10B981",
                    border: "1px solid #10B981",
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>

            <Box
              p={1}
              pl={2}
              display="flex"
              gap={3}
              borderTop={`1px solid ${borderColor}`}
            >
              <Typography
                variant="caption"
                sx={{ color: tcOptions.color, fontSize: 10 }}
              >
                ● Truk Berjalan
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: tcOptions.color, fontSize: 10 }}
              >
                ● Alert / Delay
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: tcOptions.color, fontSize: 10 }}
              >
                ● Gudang
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: tcOptions.color, fontSize: 10 }}
              >
                ● Depot Tujuan
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Right Sidebar */}
        <Grid
          size={{ xs: 12, lg: 3 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* Status Armada */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
            }}
          >
            <Box p={1.5} borderBottom={`1px solid ${borderColor}`}>
              <Typography
                variant="overline"
                sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
              >
                STATUS ARMADA
              </Typography>
            </Box>
            <Box p={2} display="flex" gap={2} alignItems="center">
              <Box
                position="relative"
                width={60}
                height={60}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: `6px solid ${theme.colors.thirdBgColors}`,
                    borderTopColor: theme.colors.primaryColors,
                    borderRightColor: "#F59E0B",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: theme.colors.white, fontWeight: 700 }}
                >
                  18
                </Typography>
              </Box>
              <Box flexGrow={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: tcOptions.color }}>
                    ■ Di Jalan
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
                  >
                    12
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: tcOptions.color }}>
                    ■ Standby
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#10B981", fontWeight: 700 }}
                  >
                    4
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: tcOptions.color }}>
                    ■ Maintenance
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#EF4444", fontWeight: 700 }}
                  >
                    2
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* 2 Alert Aktif */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid #EF4444`,
              borderRadius: 1.5,
              boxShadow: "none",
            }}
          >
            <Box p={1.5} borderBottom={`1px solid ${borderColor}`}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#EF4444", fontWeight: 700 }}
              >
                2 ALERT AKTIF
              </Typography>
            </Box>
            <Box p={2} display="flex" flexDirection="column" gap={1.5}>
              <Box
                p={1.5}
                sx={{
                  bgcolor: "rgba(239, 68, 68, 0.05)",
                  borderLeft: `3px solid #EF4444`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#EF4444", fontWeight: 600, display: "block" }}
                >
                  TRK-008 • Delay 2.5 Jam
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.colors.white, fontWeight: 700 }}
                >
                  GDG-03 → Depot-01 — Macet
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: tcOptions.color, display: "block", mb: 1 }}
                >
                  Driver unreachable 40 menit - 4,000 kg Jagung
                </Typography>
                <Chip
                  label="Hubungi Driver"
                  size="small"
                  sx={{
                    bgcolor: "#EF4444",
                    color: theme.colors.white,
                    fontSize: 9,
                    height: 20,
                    borderRadius: 0.5,
                  }}
                />
              </Box>
              <Box
                p={1.5}
                sx={{
                  bgcolor: "rgba(245, 158, 11, 0.05)",
                  borderLeft: `3px solid #F59E0B`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#F59E0B", fontWeight: 600, display: "block" }}
                >
                  TRK-025 • Ban Bocor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.colors.white, fontWeight: 700 }}
                >
                  Tol Cipali KM 88
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: tcOptions.color, display: "block", mb: 1 }}
                >
                  Rescue ETA 25 menit - 2,000 kg Beras diamankan
                </Typography>
                <Chip
                  label="Kirim Rescue"
                  size="small"
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #F59E0B",
                    color: "#F59E0B",
                    fontSize: 9,
                    height: 20,
                    borderRadius: 0.5,
                  }}
                />
              </Box>
            </Box>
          </Card>

          {/* Live Activity */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              flexGrow: 1,
            }}
          >
            <Box
              p={1.5}
              borderBottom={`1px solid ${borderColor}`}
              display="flex"
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
              >
                LIVE ACTIVITY
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
              >
                Semua
              </Typography>
            </Box>
            <Box p={2} position="relative">
              <Box
                position="absolute"
                left={16}
                top={16}
                bottom={16}
                width={2}
                bgcolor={theme.colors.thirdBgColors}
              />

              {[
                {
                  time: "09:42",
                  title: "DO-2024-0182 P03 Terkonfirmasi",
                  desc: "TRK-002 - Depot-12 - PO3 Terkumpulkan",
                  dot: theme.colors.primaryColors,
                },
                {
                  time: "09:15",
                  title: "TRK-008 DELAY - Driver unreachable",
                  desc: "GDG-03 - Muatan: 4,000 kg Jagung",
                  dot: "#EF4444",
                },
                {
                  time: "09:10",
                  title: "TRK-013 Ban Bocor - Cipali KM 88",
                  desc: "Rescue ETA 25 mnt - 2,000 kg Beras",
                  dot: "#F59E0B",
                },
                {
                  time: "08:21",
                  title: "DO-2024-0190 Berangkat dari GDG-02",
                  desc: "TRK-004 - Muatan: 8,000 kg Beras",
                  dot: "#10B981",
                },
              ].map((act, i) => (
                <Box key={i} position="relative" pl={3} mb={2.5}>
                  <Box
                    position="absolute"
                    left={-5}
                    top={4}
                    width={10}
                    height={10}
                    borderRadius="50%"
                    bgcolor={act.dot}
                    border={`2px solid ${cardBg}`}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.colors.white,
                        fontWeight: 600,
                        fontSize: 11,
                      }}
                    >
                      {act.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color, fontSize: 10 }}
                    >
                      {act.time}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: tcOptions.color,
                      fontSize: 10,
                      display: "block",
                    }}
                  >
                    {act.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Pengiriman Aktif Table */}
      <Card
        sx={{
          bgcolor: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: 1.5,
          boxShadow: "none",
          mt: 2,
        }}
      >
        <Box p={2} borderBottom={`1px solid ${borderColor}`}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
          >
            PENGIRIMAN AKTIF - 25/03/2024
          </Typography>
        </Box>
        <TableContainer>
          <Table size="small" sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                {[
                  "DO ID",
                  "KENDARAAN",
                  "DRIVER",
                  "RUTE",
                  "KOMODITAS",
                  "VOLUME (KG)",
                  "BERANGKAT",
                  "ETA",
                  "FEE OTO",
                  "STATUS",
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${borderColor}`,
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {PENGIRIMAN_AKTIF.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.ken}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.drv}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.rute}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.kom}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.vol}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.brg}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.eta}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.fee}
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: `1px solid ${theme.colors.bgColors}` }}
                  >
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        bgcolor: `rgba(${row.sColor === "#10B981" ? "16,185,129" : row.sColor === "#EF4444" ? "239,68,68" : "245,158,11"}, 0.1)`,
                        color: row.sColor,
                        fontSize: 9,
                        height: 20,
                        borderRadius: 1,
                        border: `1px solid ${row.sColor}`,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Bottom Charts Row */}
      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        {/* Volume 7 Hari */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Box p={2}>
              <Typography
                variant="overline"
                display="block"
                sx={{
                  color: theme.colors.fourGreenColors,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                VOLUME 7 HARI (TON)
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#F59E0B", fontWeight: 700, mb: 0.5 }}
              >
                84.2 ton
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.colors.primaryColors }}
              >
                +12.5% minggu lalu
              </Typography>
              <Box
                display="flex"
                alignItems="flex-end"
                gap={1}
                height={60}
                mt={2}
              >
                {[30, 40, 35, 60, 45, 80, 50].map((h, i) => (
                  <Box
                    key={i}
                    sx={{ flexGrow: 1, height: `${h}%`, bgcolor: "#F59E0B" }}
                  />
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* On-Time Rate */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Box p={2}>
              <Typography
                variant="overline"
                display="block"
                sx={{
                  color: theme.colors.fourGreenColors,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                ON-TIME RATE
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#10B981", fontWeight: 700, mb: 0.5 }}
              >
                87.5%
              </Typography>
              <Typography variant="caption" sx={{ color: tcOptions.color }}>
                Dari 142 delivery on-time
              </Typography>
              <Box mt={2}>
                <Box display="flex" justifyContent="space-between" mb={0.5}>
                  <Typography variant="caption" sx={{ color: tcOptions.color }}>
                    On-Time
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#10B981" }}>
                    87.5%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={87.5}
                  sx={{
                    height: 4,
                    bgcolor: theme.colors.thirdBgColors,
                    "& .MuiLinearProgress-bar": { bgcolor: "#10B981" },
                  }}
                />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt={1}
                  mb={0.5}
                >
                  <Typography variant="caption" sx={{ color: tcOptions.color }}>
                    Delay {">"} 1 Jam
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#F59E0B" }}>
                    8.2%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={8.2}
                  sx={{
                    height: 4,
                    bgcolor: theme.colors.thirdBgColors,
                    "& .MuiLinearProgress-bar": { bgcolor: "#F59E0B" },
                  }}
                />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt={1}
                  mb={0.5}
                >
                  <Typography variant="caption" sx={{ color: tcOptions.color }}>
                    Delay {">"} 3 Jam
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#EF4444" }}>
                    4.3%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={4.3}
                  sx={{
                    height: 4,
                    bgcolor: theme.colors.thirdBgColors,
                    "& .MuiLinearProgress-bar": { bgcolor: "#EF4444" },
                  }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Rute Terpadat */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Box p={2}>
              <Typography
                variant="overline"
                display="block"
                sx={{
                  color: theme.colors.fourGreenColors,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                RUTE TERPADAT
              </Typography>
              <Box mt={2}>
                {[
                  { r: "GDG-03 → Depot-01", v: "34 trip", w: "80%" },
                  { r: "GDG-01 → Depot-07", v: "22 trip", w: "50%" },
                  { r: "GDG-04 → Depot-12", v: "15 trip", w: "30%" },
                ].map((rt, i) => (
                  <Box key={i} mb={1.5}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography
                        variant="caption"
                        sx={{ color: theme.colors.white, fontSize: 10 }}
                      >
                        {rt.r}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#F59E0B", fontSize: 10 }}
                      >
                        {rt.v}
                      </Typography>
                    </Box>
                    <Box
                      mt={0.5}
                      sx={{ width: rt.w, height: 4, bgcolor: "#F59E0B" }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Fee OTO Revenue */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Box p={2}>
              <Typography
                variant="overline"
                display="block"
                sx={{
                  color: theme.colors.fourGreenColors,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                FEE OTO REVENUE
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#10B981", fontWeight: 700, mb: 0.5 }}
              >
                Rp 18.4 Jt
              </Typography>
              <Typography variant="caption" sx={{ color: tcOptions.color }}>
                March 2024 - YTD
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                mt={1.5}
                borderBottom={`1px dashed ${theme.colors.thirdBgColors}`}
                pb={0.5}
              >
                <Typography variant="caption" sx={{ color: tcOptions.color }}>
                  Volume MTD
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.colors.white }}
                >
                  1,040 ton
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mt={0.5}
                borderBottom={`1px dashed ${theme.colors.thirdBgColors}`}
                pb={0.5}
              >
                <Typography variant="caption" sx={{ color: tcOptions.color }}>
                  Total Trip
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.colors.white }}
                >
                  142 trips
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mt={0.5}
                borderBottom={`1px dashed ${theme.colors.thirdBgColors}`}
                pb={0.5}
              >
                <Typography variant="caption" sx={{ color: tcOptions.color }}>
                  Avg/Trip
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.colors.primaryColors }}
                >
                  Rp 129 Rb
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={0.5}>
                <Typography variant="caption" sx={{ color: tcOptions.color }}>
                  On-Chain TX
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.colors.white }}
                >
                  142 events
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
