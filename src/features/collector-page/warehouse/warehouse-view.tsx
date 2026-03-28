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
  Button,
} from "@mui/material";
import { themeConfig } from "@/core/config/theme-config";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import React from "react";

const KPI_CARDS = [
  {
    title: "TOTAL STOK GUDANG",
    value: "182,400 kg",
    sub: "6 gudang, 5 komoditas aktif",
    color: themeConfig.colors.primaryColors,
  },
  {
    title: "UTILISASI KAPASITAS",
    value: "68.4%",
    sub: "Dari 266,700 kg total kapasitas",
    color: "#F59E0B",
  },
  {
    title: "WRG AKTIF",
    value: "248",
    sub: "+12 WRG baru hari ini",
    color: "#10B981",
  },
  {
    title: "LOT RAWAN KADALUARSA",
    value: "3",
    sub: "Pending verifikasi fisik",
    color: "#EF4444",
  },
  {
    title: "LOT BELUM MASUK WRG",
    value: "5",
    sub: "12,400 kg • Penempatan di depot",
    color: "#8B5CF6",
  },
];

const WRG_TERBARU = [
  {
    id: "WRG-2024-0248",
    kom: "🌾 Beras",
    pet: "Budi Santoso",
    gdg: "GDG-01 Subang",
    brt: "2,000 kg",
    grade: "A",
    val: "Rp 32.8 Jt",
    status: "AKTIF",
    hash: "0x38a...1df1",
    gColor: "#10B981",
    sColor: "#10B981",
  },
  {
    id: "WRG-2024-0247",
    kom: "🌾 Beras",
    pet: "Agus Heriyanto",
    gdg: "GDG-02 Karawang",
    brt: "4,500 kg",
    grade: "B",
    val: "Rp 81.4 Jt",
    status: "DIJAMINKAN",
    hash: "0x7e2...f4a5",
    gColor: "#F59E0B",
    sColor: "#F59E0B",
  },
  {
    id: "WRG-2024-0246",
    kom: "🌽 Jagung",
    pet: "UD Makmur",
    gdg: "GDG-03 Indramayu",
    brt: "3,500 kg",
    grade: "A",
    val: "Rp 18.0 Jt",
    status: "AKTIF",
    hash: "0x9d1...c882",
    gColor: "#10B981",
    sColor: "#10B981",
  },
  {
    id: "WRG-2024-0245",
    kom: "🌾 Beras",
    pet: "KUD Sejahtera",
    gdg: "GDG-01 Subang",
    brt: "8,200 kg",
    grade: "A",
    val: "Rp 44.5 Jt",
    status: "DI TARIK",
    hash: "0xcf4...2522",
    gColor: "#10B981",
    sColor: themeConfig.colors.primaryColors,
  },
  {
    id: "WRG-2024-0244",
    kom: "🌱 Kedelai",
    pet: "Slamet Riyadi",
    gdg: "GDG-04 Cianjur",
    brt: "2,200 kg",
    grade: "A",
    val: "Rp 22.0 Jt",
    status: "DI TARIK",
    hash: "0xb2c...db41",
    gColor: "#10B981",
    sColor: themeConfig.colors.primaryColors,
  },
  {
    id: "WRG-2024-0243",
    kom: "🍅 Gabah",
    pet: "PT Agro Maju",
    gdg: "GDG-05 Cirebon",
    brt: "1,500 kg",
    grade: "A",
    val: "Rp 7.2 Jt",
    status: "AKTIF",
    hash: "0x1b5...1a4f",
    gColor: "#10B981",
    sColor: "#10B981",
  },
  {
    id: "WRG-2024-0242",
    kom: "🌽 Jagung",
    pet: "Mulyadi",
    gdg: "GDG-03 Indramayu",
    brt: "5,400 kg",
    grade: "B",
    val: "Rp 27.0 Jt",
    status: "AKTIF",
    hash: "0xfe3...7c83",
    gColor: "#F59E0B",
    sColor: "#10B981",
  },
  {
    id: "WRG-2024-0241",
    kom: "🌾 Beras",
    pet: "KUD Bersatu",
    gdg: "GDG-02 Karawang",
    brt: "1,800 kg",
    grade: "A",
    val: "Rp 28.8 Jt",
    status: "JATUH TEMPO",
    hash: "0x4a1...9a61",
    gColor: "#10B981",
    sColor: "#EF4444",
  },
  {
    id: "WRG-2024-0240",
    kom: "🍬 Gula",
    pet: "PG Rajawali",
    gdg: "GDG-06 Majalengka",
    brt: "4,000 kg",
    grade: "A",
    val: "Rp 62.0 Jt",
    status: "AKTIF",
    hash: "0x8cc...7a58",
    gColor: "#10B981",
    sColor: "#10B981",
  },
  {
    id: "WRG-2024-0239",
    kom: "🌾 Beras",
    pet: "Sugiono",
    gdg: "GDG-04 Cianjur",
    brt: "2,500 kg",
    grade: "A",
    val: "Rp 38.2 Jt",
    status: "JATUH TEMPO",
    hash: "0x5d9...e252",
    gColor: "#10B981",
    sColor: "#EF4444",
  },
];

export default function WarehouseView() {
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
          Smart Warehouse
        </Typography>
        <Typography color="#A1A1AA" variant="body1" maxWidth={600}>
          Monitor and manage warehouse capacities, real-time commodity stockpiles, 
          IoT environmental sensors, and electronic warehouse receipts (e-WR).
        </Typography>
      </Box>

      {/* Top Notification Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "rgba(239, 68, 68, 0.1)",
          borderLeft: `4px solid #EF4444`,
          p: 1.5,
          mb: 3,
          borderRadius: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <WarningAmberIcon sx={{ color: "#EF4444" }} />
          <Typography
            variant="body2"
            sx={{ color: "#EF4444", fontWeight: 600 }}
          >
            ALERT: GDG-03 Indramayu suhu ruang 31.8°C melebihi batas 28°C —
            risiko kerusakan komoditas gula. GDG-06 kapasitas 97% hampir penuh.
            Segera tindak lanjut.
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: "#EF4444", fontWeight: 700 }}
        >
          2 Alerts Aktif
        </Typography>
      </Box>

      {/* Top KPIs */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {KPI_CARDS.map((kpi, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={idx}>
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

      {/* Main Grid Layout - First Row */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Left Column (Stok per komoditas & Penerimaan) */}
        <Grid
          size={{ xs: 12, lg: 8 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* Stok Per Komoditas */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
            }}
          >
            <Box
              p={2}
              borderBottom={`1px solid ${borderColor}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
              >
                STOK PER KOMODITAS - SEMUA GUDANG
              </Typography>
              <Chip
                label="Real-Time IoT"
                size="small"
                sx={{
                  bgcolor: "rgba(16, 185, 129, 0.1)",
                  color: "#10B981",
                  fontSize: 10,
                  border: "1px solid #10B981",
                }}
              />
            </Box>
            <Box p={2}>
              <Grid container spacing={4}>
                {/* Beras */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.white, fontWeight: 600 }}
                  >
                    🌾 Beras
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
                  >
                    88,480{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      kg
                    </Typography>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    sx={{
                      height: 6,
                      mb: 0.5,
                      borderRadius: 3,
                      bgcolor: theme.colors.thirdBgColors,
                      "& .MuiLinearProgress-bar": {
                        bgcolor: theme.colors.primaryColors,
                      },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      15%
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      90% G
                    </Typography>
                  </Box>
                </Grid>
                {/* Jagung */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.white, fontWeight: 600 }}
                  >
                    🌽 Jagung
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#F59E0B", fontWeight: 700 }}
                  >
                    44,200{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      kg
                    </Typography>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={45}
                    sx={{
                      height: 6,
                      mb: 0.5,
                      borderRadius: 3,
                      bgcolor: theme.colors.thirdBgColors,
                      "& .MuiLinearProgress-bar": { bgcolor: "#F59E0B" },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      10%
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      90% G
                    </Typography>
                  </Box>
                </Grid>
                {/* Kedelai */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.white, fontWeight: 600 }}
                  >
                    🌱 Kedelai
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#10B981", fontWeight: 700 }}
                  >
                    21,600{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      kg
                    </Typography>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={25}
                    sx={{
                      height: 6,
                      mb: 0.5,
                      borderRadius: 3,
                      bgcolor: theme.colors.thirdBgColors,
                      "& .MuiLinearProgress-bar": { bgcolor: "#10B981" },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      0%
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      90% G
                    </Typography>
                  </Box>
                </Grid>
                {/* Gabah */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.white, fontWeight: 600 }}
                  >
                    🍅 Gabah
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#D946EF", fontWeight: 700 }}
                  >
                    20,100{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      kg
                    </Typography>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    sx={{
                      height: 6,
                      mb: 0.5,
                      borderRadius: 3,
                      bgcolor: theme.colors.thirdBgColors,
                      "& .MuiLinearProgress-bar": { bgcolor: "#D946EF" },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      0%
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      90% G
                    </Typography>
                  </Box>
                </Grid>
                {/* Gula */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.white, fontWeight: 600 }}
                  >
                    🍬 Gula
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#EF4444", fontWeight: 700 }}
                  >
                    3,475{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      kg
                    </Typography>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={5}
                    sx={{
                      height: 6,
                      mb: 0.5,
                      borderRadius: 3,
                      bgcolor: theme.colors.thirdBgColors,
                      "& .MuiLinearProgress-bar": { bgcolor: "#EF4444" },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      0%
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 9, color: tcOptions.color }}
                    >
                      90% G
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>

          {/* Penerimaan 7 Hari Terakhir */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              flexGrow: 1,
            }}
          >
            <Box p={2} borderBottom={`1px solid ${borderColor}`}>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.colors.fourGreenColors, fontWeight: 700 }}
              >
                PENERIMAAN 7 HARI TERAKHIR
              </Typography>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              height={100}
            >
              {/* Building block chart */}
              {[
                { v: 50, d: "Sen", c: "#10B981" },
                { v: 65, d: "Sel", c: "#10B981" },
                { v: 40, d: "Rab", c: "#10B981" },
                { v: 80, d: "Kam", c: "#10B981" },
                { v: 70, d: "Jum", c: "#10B981" },
                { v: 55, d: "Sab", c: "#F59E0B" },
                { v: 30, d: "Min", c: "#F59E0B" },
              ].map((b, i) => (
                <Box
                  key={i}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{ width: "13%" }}
                >
                  <Box
                    sx={{ width: "100%", height: `${b.v}%`, bgcolor: b.c }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ mt: 1, fontSize: 10, color: tcOptions.color }}
                  >
                    {b.d}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* Right Column (Kapasitas & Aktivitas) */}
        <Grid
          size={{ xs: 12, lg: 4 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* Kapasitas Gudang */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
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
                KAPASITAS GUDANG
              </Typography>
              <Typography variant="caption" sx={{ color: tcOptions.color }}>
                ENGAGE
              </Typography>
            </Box>
            <Box p={2}>
              {[
                {
                  n: "GDG-01 Subang",
                  p: 72,
                  v: "36,000 / 50,000 kg",
                  c: theme.colors.primaryColors,
                },
                {
                  n: "GDG-02 Karawang",
                  p: 82,
                  v: "40,500 / 50,000 kg",
                  c: "#10B981",
                },
                {
                  n: "GDG-03 Indramayu",
                  p: 98,
                  v: "49,000 / 50,000 kg",
                  c: "#EF4444",
                },
                {
                  n: "GDG-04 Cianjur",
                  p: 68,
                  v: "34,000 / 50,000 kg",
                  c: theme.colors.primaryColors,
                },
                {
                  n: "GDG-05 Cirebon",
                  p: 54,
                  v: "8,300 / 15,000 kg",
                  c: theme.colors.primaryColors,
                },
                {
                  n: "GDG-06 Majalengka",
                  p: 97,
                  v: "9,700 / 10,000 kg",
                  c: "#EF4444",
                },
              ].map((g, i) => (
                <Box key={i} mb={1.5}>
                  <Box display="flex" justifyContent="space-between" mb={0.5}>
                    <Typography
                      variant="caption"
                      sx={{ color: theme.colors.white, fontSize: 10 }}
                    >
                      {g.n}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: g.c, fontSize: 10 }}
                    >
                      {g.p}%{" "}
                      <Typography
                        component="span"
                        sx={{ color: tcOptions.color, fontSize: 10 }}
                      >
                        {g.v}
                      </Typography>
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={g.p}
                    sx={{
                      height: 4,
                      bgcolor: theme.colors.thirdBgColors,
                      "& .MuiLinearProgress-bar": { bgcolor: g.c },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Card>

          {/* Aktivitas Terbaru */}
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
                AKTIVITAS TERBARU
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
                  time: "14:29",
                  title: "WRG-2024-0248 diterbitkan on-chain",
                  desc: "Beras - 2,000 kg - Grade A - GDG-01",
                  dot: theme.colors.primaryColors,
                },
                {
                  time: "14:05",
                  title: "LOT-2024-089A tiba — Jagung 3,000 kg",
                  desc: "Mulyadi - GDG-03 - Pending verifikasi",
                  dot: "#F59E0B",
                },
                {
                  time: "13:30",
                  title: "SGD (BERAS) dikeluarkan — Depot-07",
                  desc: "DO-2024-0188 - 5,400 kg - Lunas",
                  dot: "#10B981",
                },
                {
                  time: "12:45",
                  title: "ALERT: GDG-03 suhu 31.8°C ⚠️",
                  desc: "Batas 28°C terlampaui - QC dinotifkan",
                  dot: "#EF4444",
                },
                {
                  time: "11:30",
                  title: "WRG-2024-0047 difraksionasi",
                  desc: "4,000 token ke wallet Agus Heriyanto",
                  dot: theme.colors.primaryColors,
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

      {/* Main Grid Layout - Second Row */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Sensor IOT */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              height: "100%",
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
                sx={{ color: theme.colors.fourGreenColors, fontWeight: 700 }}
              >
                SENSOR IOT - SUHU & KELEMBABAN
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#EF4444", fontWeight: 700 }}
              >
                1 Alert
              </Typography>
            </Box>
            <Box p={2}>
              <Grid container spacing={2}>
                {[
                  {
                    n: "GDG-01 - Subang",
                    t: "23.4°C",
                    h: "65.2%",
                    st: "Normal",
                  },
                  {
                    n: "GDG-02 - Karawang",
                    t: "24.8°C",
                    h: "67.8%",
                    st: "Normal",
                  },
                  {
                    n: "GDG-03 - Indramayu",
                    t: "31.8°C",
                    h: "71.2%",
                    st: "Alert",
                  },
                  {
                    n: "GDG-04 - Cianjur",
                    t: "22.1°C",
                    h: "63.4%",
                    st: "Normal",
                  },
                  {
                    n: "GDG-05 - Cirebon",
                    t: "26.0°C",
                    h: "68.9%",
                    st: "Normal",
                  },
                  {
                    n: "GDG-06 - Majalengka",
                    t: "28.2°C",
                    h: "70.1%",
                    st: "Warning",
                  },
                ].map((s, i) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                    <Box
                      sx={{
                        p: 1.5,
                        border: `1px solid ${s.st === "Normal" ? theme.colors.thirdBgColors : s.st === "Alert" ? "#EF4444" : "#F59E0B"}`,
                        bgcolor:
                          s.st === "Alert"
                            ? "rgba(239, 68, 68, 0.05)"
                            : s.st === "Warning"
                              ? "rgba(245, 158, 11, 0.05)"
                              : "transparent",
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: tcOptions.color, display: "block", mb: 1 }}
                      >
                        {s.n}
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <DeviceThermostatIcon
                            sx={{
                              color:
                                s.st === "Alert"
                                  ? "#EF4444"
                                  : s.st === "Warning"
                                    ? "#F59E0B"
                                    : theme.colors.primaryColors,
                              fontSize: 18,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color:
                                s.st === "Alert"
                                  ? "#EF4444"
                                  : s.st === "Warning"
                                    ? "#F59E0B"
                                    : theme.colors.primaryColors,
                              fontWeight: 700,
                            }}
                          >
                            {s.t}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <WaterDropIcon
                            sx={{ color: "#10B981", fontSize: 16 }}
                          />
                          <Typography
                            variant="body1"
                            sx={{ color: "#10B981", fontWeight: 700 }}
                          >
                            {s.h}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Card>
        </Grid>

        {/* Lot Pending Verifikasi */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
              height: "100%",
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
                sx={{ color: theme.colors.fourGreenColors, fontWeight: 700 }}
              >
                LOT PENDING VERIFIKASI
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#F59E0B", fontWeight: 700 }}
              >
                5 Pending
              </Typography>
            </Box>
            <Box p={2} display="flex" flexDirection="column" gap={1.5}>
              {[
                {
                  time: "10:45",
                  id: "GDG-03",
                  name: "Mulyadi",
                  kom: "🌽 Jagung - 3,500 kg",
                },
                {
                  time: "10:00",
                  id: "GDG-01",
                  name: "KUD Sejahtera",
                  kom: "🌱 Kedelai - 2,200 kg",
                },
                {
                  time: "09:15",
                  id: "GDG-04",
                  name: "Slamet Riyadi",
                  kom: "🌾 Beras - 1,800 kg",
                },
              ].map((v, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1.5}
                  sx={{ bgcolor: "rgba(255,255,255,0.02)", borderRadius: 1 }}
                >
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color, fontSize: 10 }}
                    >
                      {v.time} • {v.id}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.colors.white, fontWeight: 700 }}
                    >
                      {v.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      {v.kom}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#10B981",
                        color: "#fff",
                        fontSize: 9,
                        minWidth: "auto",
                        px: 2,
                        height: 24,
                        boxShadow: "none",
                        "&:hover": { bgcolor: "#059669" },
                      }}
                    >
                      Verifikasi
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: tcOptions.color,
                        borderColor: theme.colors.thirdBgColors,
                        fontSize: 9,
                        minWidth: "auto",
                        px: 1,
                        height: 24,
                      }}
                    >
                      Tolak
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* WRG Table */}
      <Card
        sx={{
          bgcolor: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: 1.5,
          boxShadow: "none",
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
            WRG (E-WR) - 10 TERBARU
          </Typography>
          <Box display="flex" gap={2}>
            <Typography
              variant="caption"
              sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
            >
              Buat Tiket WRG
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: tcOptions.color, cursor: "pointer" }}
            >
              Semua
            </Typography>
          </Box>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {[
                  "WRG ID",
                  "KOMODITAS",
                  "PETANI / KOPERATOR",
                  "GUDANG",
                  "BERAT (KG)",
                  "GRADE",
                  "NILAI (IDR)",
                  "STATUS",
                  "TX HASH",
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${borderColor}`,
                      fontSize: 10,
                      fontWeight: 700,
                      textAlign:
                        h === "GRADE" ||
                        h === "BERAT (KG)" ||
                        h === "NILAI (IDR)"
                          ? "right"
                          : "left",
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {WRG_TERBARU.map((row, idx) => (
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
                    {row.kom}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.pet}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.gdg}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                      textAlign: "right",
                      fontWeight: 600,
                    }}
                  >
                    {row.brt}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      textAlign: "right",
                    }}
                  >
                    <Chip
                      label={row.grade}
                      size="small"
                      sx={{
                        bgcolor: `rgba(${row.gColor === "#10B981" ? "16,185,129" : "245,158,11"}, 0.1)`,
                        color: row.gColor,
                        fontSize: 10,
                        fontWeight: 700,
                        height: 20,
                        borderRadius: 1,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#F59E0B",
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                      textAlign: "right",
                      fontWeight: 600,
                    }}
                  >
                    {row.val}
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: `1px solid ${theme.colors.bgColors}` }}
                  >
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        bgcolor: `rgba(${row.sColor === "#10B981" ? "16,185,129" : row.sColor === "#EF4444" ? "239,68,68" : row.sColor === "#F59E0B" ? "245,158,11" : "0,207,252"}, 0.1)`,
                        color: row.sColor,
                        fontSize: 9,
                        height: 20,
                        borderRadius: 1,
                        border: `1px solid ${row.sColor}`,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 10,
                    }}
                  >
                    {row.hash}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
