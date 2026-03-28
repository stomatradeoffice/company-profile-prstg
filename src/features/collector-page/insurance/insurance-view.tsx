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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";

const KPI_CARDS = [
  {
    title: "TOTAL POLIS AKTIF",
    value: "42",
    sub: "Seluruh komoditas",
    color: themeConfig.colors.primaryColors,
  },
  {
    title: "TOTAL NILAI TANGGUNGAN (TSI)",
    value: "Rp 24.8 M",
    sub: "Nilai pertanggungan",
    color: "#F59E0B",
  },
  {
    title: "PREMI DITERIMA (MTD)",
    value: "Rp 744 Rb",
    sub: "38 x Polis MTD Rp",
    color: "#10B981",
  },
  {
    title: "KLAIM TERTUNDA",
    value: "3",
    sub: "Total Rp 1.8M Aktif Klaim",
    color: "#EF4444",
  },
  {
    title: "LOSS RATIO (YTD)",
    value: "38.2%",
    sub: "Batas L. 100%",
    color: "#10B981",
  },
];

const POLIS_BARU = [
  {
    id: "POL-2024-0042",
    ter: "PT Agro Nusantara",
    komo: "🌾 Beras",
    tsi: "2,400,000",
    premi: "72,000",
    berlaku: "27/02/2024",
    status: "Aktif",
  },
  {
    id: "POL-2024-0041",
    ter: "Budi Santoso",
    komo: "🌾 Beras",
    tsi: "840,000",
    premi: "25,200",
    berlaku: "26/02/2024",
    status: "Aktif",
  },
  {
    id: "POL-2024-0040",
    ter: "Agus Heriyanto",
    komo: "🌽 Jagung",
    tsi: "1,040,000",
    premi: "32,100",
    berlaku: "25/02/2024",
    status: "Aktif",
  },
  {
    id: "POL-2024-0039",
    ter: "KUD Bersatu",
    komo: "🌱 Kedelai",
    tsi: "750,000",
    premi: "22,500",
    berlaku: "24/02/2024",
    status: "Aktif",
  },
  {
    id: "POL-2024-0038",
    ter: "PT Agro Nusantara",
    komo: "🌾 Beras",
    tsi: "2,400,000",
    premi: "72,000",
    berlaku: "24/02/2024",
    status: "Aktif",
  },
];

const KLAIM_AKTIF = [
  {
    id: "CLM-2024-0018",
    ter: "Budi Santoso",
    jenis: "Banjir Rob",
    nilai: "Rp 756.000",
    sts: "Menunggu",
  },
  {
    id: "CLM-2024-0019",
    ter: "Agus Heriyanto",
    jenis: "Kekeringan",
    nilai: "Rp 626.000",
    sts: "Menunggu",
  },
  {
    id: "CLM-2024-0017",
    ter: "KUD Bersatu",
    jenis: "Kekeringan",
    nilai: "Rp 378.000",
    sts: "Disetujui",
  },
];

const TX_ONCHAIN = [
  {
    hash: "0x8a1c...d452",
    event: "Polis Terbit",
    id: "POL-2024-0042",
    ter: "PT Agro Nusantara",
    amt: "Rp 72,000",
    trigger: "Admin",
    block: "458,167,344",
    date: "14:29",
    status: "Confirmed",
  },
  {
    hash: "0xb4a9...0b11",
    event: "Oracle Trigger",
    id: "CLM-2024-0015",
    ter: "Budi Santoso",
    amt: "Rp 756,000",
    trigger: "Chainlink Oracle",
    block: "458,167,311",
    date: "14:05",
    status: "Confirmed",
  },
  {
    hash: "0x3c2a...4b02",
    event: "Klaim Disetujui",
    id: "CLM-2024-0017",
    ter: "KUD Bersatu",
    amt: "Rp 378,000",
    trigger: "Smart Contract",
    block: "458,162,128",
    date: "13:30",
    status: "Confirmed",
  },
  {
    hash: "0xfe1f...7c83",
    event: "Polis Dikredit",
    id: "POL-2024-0039",
    ter: "KUD Bersatu",
    amt: "Rp 22,500",
    trigger: "Tertanggung",
    block: "458,159,621",
    date: "10:15",
    status: "Confirmed",
  },
  {
    hash: "0x53ca...49b1",
    event: "Klaim Dibayar",
    id: "CLM-2024-0015",
    ter: "Slamet Riyadi",
    amt: "Rp 294,000",
    trigger: "Smart Contract",
    block: "458,144,112",
    date: "09:14",
    status: "Confirmed",
  },
];

export default function InsuranceView() {
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
          Agricultural Insurance
        </Typography>
        <Typography color="#A1A1AA" variant="body1" maxWidth={600}>
          Manage and monitor active agricultural insurance policies, premium
          collections, loss ratios, and smart contract-based claim settlements.
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
          bgcolor: "rgba(245, 158, 11, 0.1)",
          borderLeft: `4px solid #F59E0B`,
          p: 1.5,
          mb: 3,
          borderRadius: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <WarningAmberIcon sx={{ color: "#F59E0B", display: { xs: "none", sm: "block" } }} />
          <Typography
            variant="body2"
            sx={{ color: "#F59E0B", fontWeight: 600, fontSize: { xs: 12, sm: 14 } }}
          >
            Oracle cuaca mendeteksi potensi banjir di Indramayu 5 hari ke depan.
            8 polis aktif di zona GOG-03 dengan TSI total Rp 4.2M. Notifikasi
            dikirim ke pemegang polis. Pemantauan intensif aktif.
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: "#F59E0B", fontWeight: 700, whiteSpace: "nowrap" }}
        >
          Early Warning Aktif
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
              <Box p={2}>
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
        {/* Left Column (Portofolio, Polis Baru, Charts) */}
        <Grid
          size={{ xs: 12, lg: 8 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* Portofolio Pertanggungan */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              boxShadow: "none",
            }}
          >
            <Box p={2} borderBottom={`1px solid ${borderColor}`}>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
              >
                PORTOFOLIO PERTANGGUNGAN
              </Typography>
            </Box>
            <Box
              p={3}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={4}
              alignItems="center"
            >
              {/* Doughnut Chart Mock */}
              <Box
                position="relative"
                width={120}
                height={120}
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
                    border: `10px solid ${theme.colors.thirdBgColors}`,
                    borderTopColor: theme.colors.primaryColors,
                    borderRightColor: "#F59E0B",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{ color: theme.colors.white, fontWeight: 700 }}
                >
                  42
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    color: tcOptions.color,
                  }}
                >
                  Polis
                </Typography>
              </Box>

              <Box flexGrow={1} width="100%">
                {[
                  {
                    label: "Beras",
                    val: 55,
                    color: theme.colors.primaryColors,
                  },
                  { label: "Jagung", val: 25, color: "#F59E0B" },
                  { label: "Kedelai", val: 15, color: "#10B981" },
                  { label: "Bawang", val: 5, color: "#8B5CF6" },
                ].map((item, idx) => (
                  <Box key={idx} mb={1.5}>
                    <Box display="flex" justifyContent="space-between" mb={0.5}>
                      <Typography
                        variant="caption"
                        sx={{ color: tcOptions.color, fontWeight: 600 }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: theme.colors.white }}
                      >
                        {item.val}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.val}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: theme.colors.thirdBgColors,
                        "& .MuiLinearProgress-bar": { bgcolor: item.color },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>

          {/* Polis Baru Table */}
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
                POLIS BARU - 7 HARI TERAKHIR
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
              >
                Semua
              </Typography>
            </Box>
            <TableContainer>
              <Table size="small" sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    {[
                      "POLIS ID",
                      "TERTANGGUNG",
                      "KOMODITAS",
                      "TSI (IDR)",
                      "PREMI",
                      "BERLAKU",
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
                  {POLIS_BARU.map((row, idx) => (
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
                        {row.ter}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.colors.white,
                          borderBottom: `1px solid ${theme.colors.bgColors}`,
                          fontSize: 11,
                        }}
                      >
                        {row.komo}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#F59E0B",
                          borderBottom: `1px solid ${theme.colors.bgColors}`,
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                      >
                        {row.tsi}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.colors.primaryColors,
                          borderBottom: `1px solid ${theme.colors.bgColors}`,
                          fontSize: 11,
                        }}
                      >
                        {row.premi}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: tcOptions.color,
                          borderBottom: `1px solid ${theme.colors.bgColors}`,
                          fontSize: 11,
                        }}
                      >
                        {row.berlaku}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: `1px solid ${theme.colors.bgColors}`,
                        }}
                      >
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            bgcolor: "rgba(16, 185, 129, 0.1)",
                            color: "#10B981",
                            fontSize: 9,
                            height: 20,
                            borderRadius: 1,
                            border: "1px solid #10B981",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>

          {/* Bottom Left row (Premi vs Klaim, Jenis Risiko, Pendapatan) */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
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
                    sx={{
                      color: theme.colors.primaryColors,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    PREMI VS KLAIM (6 BLN)
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#10B981", mt: 1, mb: 0 }}
                  >
                    Loss Ratio 38.2%
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: tcOptions.color, mb: 2, display: "block" }}
                  >
                    Profitabilitas sangat sehat
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="flex-end"
                    justifyContent="space-between"
                    height={80}
                    mt={2}
                  >
                    {[40, 30, 60, 50, 80, 50].map((h, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: "12%",
                          height: `${h}%`,
                          bgcolor: theme.colors.fourGreenColors,
                        }}
                      />
                    ))}
                  </Box>
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                      <Typography
                        key={m}
                        variant="caption"
                        sx={{ color: tcOptions.color, fontSize: 9 }}
                      >
                        {m}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
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
                    sx={{
                      color: theme.colors.primaryColors,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    JENIS RISIKO KLAIM
                  </Typography>
                  <Box mt={2}>
                    {[
                      {
                        l: "Banjir",
                        w: "65%",
                        c: theme.colors.primaryColors,
                        n: "15",
                      },
                      { l: "Kekeringan", w: "25%", c: "#F59E0B", n: "6" },
                      { l: "Hama / Penyakit", w: "8%", c: "#10B981", n: "2" },
                      { l: "Angin/Topan", w: "2%", c: "#8B5CF6", n: "1" },
                    ].map((idx, i) => (
                      <Box key={i} mb={1}>
                        <Box display="flex" justifyContent="space-between">
                          <Typography
                            variant="caption"
                            sx={{ color: tcOptions.color, fontSize: 10 }}
                          >
                            {idx.l}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: tcOptions.color, fontSize: 10 }}
                          >
                            {idx.n} Klaim
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: idx.w,
                            height: 4,
                            bgcolor: idx.c,
                            mt: 0.5,
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
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
                    sx={{
                      color: theme.colors.primaryColors,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    PENDAPATAN Q1 (YTD)
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#10B981", mt: 1, fontWeight: 700 }}
                  >
                    Rp 37.2 Rb
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: tcOptions.color, display: "block", mb: 2 }}
                  >
                    Net profit driven by Fee Q1
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom={`1px dashed ${theme.colors.thirdBgColors}`}
                    pb={0.5}
                    mb={0.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: theme.colors.white }}
                    >
                      Total Premi MTD
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.colors.primaryColors,
                        fontWeight: 700,
                      }}
                    >
                      Rp 744 Rb
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom={`1px dashed ${theme.colors.thirdBgColors}`}
                    pb={0.5}
                    mb={0.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: theme.colors.white }}
                    >
                      Klaim Dibayar YTD
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#EF4444", fontWeight: 700 }}
                    >
                      Rp 284 Rb
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom={`1px dashed ${theme.colors.thirdBgColors}`}
                    pb={0.5}
                    mb={0.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: theme.colors.white }}
                    >
                      Fee OTO (5%)
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#10B981", fontWeight: 700 }}
                    >
                      Rp 37.2 Rb
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column (Klaim Aktif, Oracle, Aktivitas) */}
        <Grid
          size={{ xs: 12, lg: 4 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* Klaim Aktif */}
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid #EF4444`,
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
                sx={{ color: "#EF4444", fontWeight: 700 }}
              >
                KLAIM AKTIF
              </Typography>
              <Typography variant="caption" sx={{ color: "#EF4444" }}>
                3 Pending
              </Typography>
            </Box>
            <Box p={2} display="flex" flexDirection="column" gap={2}>
              {KLAIM_AKTIF.map((k, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1.5}
                  sx={{
                    bgcolor: "rgba(239, 68, 68, 0.05)",
                    borderLeft: `3px solid #EF4444`,
                  }}
                >
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "#EF4444", display: "block" }}
                    >
                      {k.id}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.colors.white, fontWeight: 600 }}
                    >
                      {k.ter} —{" "}
                      <Box component="span" sx={{ color: tcOptions.color }}>
                        {k.jenis}
                      </Box>
                    </Typography>
                  </Box>
                  <Box textAlign="right">
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#EF4444", fontWeight: 700 }}
                    >
                      {k.nilai}
                    </Typography>
                    <Chip
                      label={k.sts}
                      size="small"
                      sx={{
                        bgcolor: "transparent",
                        color: k.sts === "Disetujui" ? "#10B981" : "#F59E0B",
                        fontSize: 9,
                        height: 18,
                        border: `1px solid ${k.sts === "Disetujui" ? "#10B981" : "#F59E0B"}`,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>

          {/* Oracle Cuaca Live */}
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
                ORACLE CUACA - LIVE
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#10B981", fontSize: 10 }}
              >
                Chainlink On-Chain
              </Typography>
            </Box>
            <Box p={2} display="flex" flexDirection="column" gap={2.5}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" gap={1.5}>
                  <ThunderstormIcon sx={{ color: "#EF4444" }} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.colors.white, fontWeight: 700 }}
                    >
                      Indramayu — BANJIR WASPADA
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      Curah Hujan 180mm/6hari - GOG-03 zona risiko
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#EF4444",
                    fontWeight: 700,
                    textAlign: "right",
                    display: "block",
                  }}
                >
                  TINGGI
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: tcOptions.color,
                      fontWeight: 400,
                      fontSize: 9,
                    }}
                  >
                    8 polis berisiko
                  </Box>
                </Typography>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" gap={1.5}>
                  <WbSunnyIcon sx={{ color: "#10B981" }} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.colors.white, fontWeight: 700 }}
                    >
                      Subang — Normal
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      Suhu 28°C - Kelembaban 72%
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#10B981",
                    fontWeight: 700,
                    textAlign: "right",
                    display: "block",
                  }}
                >
                  RENDAH
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: tcOptions.color,
                      fontWeight: 400,
                      fontSize: 9,
                    }}
                  >
                    12 polis aman
                  </Box>
                </Typography>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" gap={1.5}>
                  <WbSunnyIcon sx={{ color: "#F59E0B" }} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.colors.white, fontWeight: 700 }}
                    >
                      Karawang — Kekeringan Ringan
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color }}
                    >
                      7 hari tanpa hujan - Monitor level
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#F59E0B",
                    fontWeight: 700,
                    textAlign: "right",
                    display: "block",
                  }}
                >
                  SEDANG
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: tcOptions.color,
                      fontWeight: 400,
                      fontSize: 9,
                    }}
                  >
                    4 polis monitor
                  </Box>
                </Typography>
              </Box>
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
                AKTIVITAS TERBARU
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
              >
                Semua{" "}
                <ArrowForwardIosIcon
                  sx={{ fontSize: 8, verticalAlign: "middle" }}
                />
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
                  title: "Polis POL-2024-0042 diterbitkan on-chain",
                  desc: "PT Agro Nusantara - TSI Rp 2.4M - Tx Details",
                  dot: theme.colors.primaryColors,
                },
                {
                  time: "14:05",
                  title: "Oracle Trigger: CLM-2024-0018 auto-created",
                  desc: "GOG-03 Indramayu - Banjir > 150mm/hari",
                  dot: "#F59E0B",
                },
                {
                  time: "13:58",
                  title: "Early Warning: GOG-03 Banjir Level 2",
                  desc: "Notifikasi dikirim ke 8 pemegang polis",
                  dot: "#EF4444",
                },
                {
                  time: "13:30",
                  title: "Klaim CLM-2024-0017 Dibayar Rp 378,000",
                  desc: "KUD Bersatu - USDC to wallet 0x3c2a...a8d1",
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

      {/* Bottom Full Width Table - Transaksi Asuransi On-Chain */}
      <Card
        sx={{
          bgcolor: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: 1.5,
          boxShadow: "none",
          mt: 2,
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
            TRANSAKSI ASURANSI ON-CHAIN
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
          >
            Polygon PoS
          </Typography>
        </Box>
        <TableContainer>
          <Table size="small" sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                {[
                  "TX HASH",
                  "EVENT",
                  "POLIS ID",
                  "TERTANGGUNG",
                  "AMOUNT (IDR)",
                  "TRIGGERED BY",
                  "BLOCK",
                  "DATE",
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
              {TX_ONCHAIN.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.hash}
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: `1px solid ${theme.colors.bgColors}` }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color:
                          row.event.includes("Oracle") ||
                          row.event.includes("Disetujui")
                            ? "#F59E0B"
                            : row.event.includes("Terbit")
                              ? theme.colors.primaryColors
                              : "#10B981",
                        fontSize: 10,
                        fontWeight: 600,
                        border: `1px solid`,
                        p: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {row.event}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
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
                    {row.ter}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#F59E0B",
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {row.amt}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.trigger}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.block}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      borderBottom: `1px solid ${theme.colors.bgColors}`,
                      fontSize: 11,
                    }}
                  >
                    {row.date}
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: `1px solid ${theme.colors.bgColors}` }}
                  >
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        bgcolor: "rgba(16, 185, 129, 0.1)",
                        color: "#10B981",
                        fontSize: 9,
                        height: 20,
                        borderRadius: 1,
                        border: "1px solid #10B981",
                      }}
                    />
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
