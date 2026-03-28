"use client";

import React from "react";
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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const WRG_DATA = [
  {
    resi: "WRG-2024-0248",
    kom: "🌾 Beras Premium",
    pet: "Budi Santoso",
    gdg: "GDG-01 - Subang",
    brt: "3.400 kg",
    grade: "A",
    tkn: "3.400 sBERAS",
    nilai: "Rp 32,4 Jt",
    sts: "AKTIF",
    hash: "0x38a...1df1",
  },
  {
    resi: "WRG-2024-0247",
    kom: "🌾 Beras Medium",
    pet: "Agus Heriyanto",
    gdg: "GDG-02 - Karawang",
    brt: "4.500 kg",
    grade: "B",
    tkn: "4.500 sBERAS",
    nilai: "Rp 42,4 Jt",
    sts: "Dijaminkan",
    hash: "0x7e2...f4a5",
  },
  {
    resi: "WRG-2024-0246",
    kom: "🌽 Jagung Kering",
    pet: "UD Makmur",
    gdg: "GDG-03 - Indramayu",
    brt: "2.400 kg",
    grade: "A",
    tkn: "2.400 jJAGUNG",
    nilai: "Rp 18,0 Jt",
    sts: "AKTIF",
    hash: "0x9d1...c882",
  },
  {
    resi: "WRG-2024-0245",
    kom: "🌾 Beras Premium",
    pet: "Koperasi KUD",
    gdg: "GDG-01 - Subang",
    brt: "3.200 kg",
    grade: "A",
    tkn: "3.200 sBERAS",
    nilai: "Rp 44,5 Jt",
    sts: "Di Tarik",
    hash: "0xcf4...2522",
  },
  {
    resi: "WRG-2024-0244",
    kom: "🌱 Kedelai Lokal",
    pet: "KUD Sejahtera",
    gdg: "GDG-04 - Cianjur",
    brt: "2.200 kg",
    grade: "A",
    tkn: "2.200 kKEDELAI",
    nilai: "Rp 28,4 Jt",
    sts: "Di Tarik",
    hash: "0xb2c...db41",
  },
  {
    resi: "WRG-2024-0243",
    kom: "🍅 Gabah KG",
    pet: "Slamet Riyadi",
    gdg: "GDG-05 - Cirebon",
    brt: "1.500 kg",
    grade: "B",
    tkn: "1.500 gGABAH",
    nilai: "Rp 7,2 Jt",
    sts: "AKTIF",
    hash: "0x1b5...1a4f",
  },
  {
    resi: "WRG-2024-0242",
    kom: "🌽 Jagung Kering",
    pet: "PT Agro Maju",
    gdg: "GDG-03 - Indramayu",
    brt: "5.400 kg",
    grade: "A",
    tkn: "5.400 jJAGUNG",
    nilai: "Rp 27,0 Jt",
    sts: "AKTIF",
    hash: "0xfe3...7c83",
  },
  {
    resi: "WRG-2024-0241",
    kom: "🌾 Beras Medium",
    pet: "Sugiono",
    gdg: "GDG-02 - Karawang",
    brt: "1.600 kg",
    grade: "B",
    tkn: "1.600 sBERAS",
    nilai: "Rp 28,6 Jt",
    sts: "Dijaminkan",
    hash: "0x4a1...9a61",
  },
  {
    resi: "WRG-2024-0240",
    kom: "🍬 Gula Pasir",
    pet: "PG Rajawali",
    gdg: "GDG-06 - Majalengka",
    brt: "4.000 kg",
    grade: "A",
    tkn: "4.000 gGULA",
    nilai: "Rp 62,0 Jt",
    sts: "AKTIF",
    hash: "0x8cc...7a58",
  },
  {
    resi: "WRG-2024-0239",
    kom: "🍅 Gabah KGP",
    pet: "Slamet Riyadi",
    gdg: "GDG-05 - Cirebon",
    brt: "1.800 kg",
    grade: "C",
    tkn: "1.800 gGABAH",
    nilai: "Rp 7,2 Jt",
    sts: "Jatuh Tempo",
    hash: "0x5d9...e252",
  },
];

export default function WarehouseReceiptView() {
  const theme = themeConfig;
  const tcOptions = { color: "#A1A1AA" };
  const borderColor = theme.colors.thirdBgColors;
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
          Warehouse Receipts
        </Typography>
        <Typography color="#A1A1AA" variant="body1" maxWidth={600}>
          Manage the issuance, fractionalization, and redemption of Electronic
          Warehouse Receipts (e-WRG) powered by blockchain. Track active receipts, 
          commodity grades, collateralized assets, and real-time on-chain activities.
        </Typography>
      </Box>

      {/* Top Alert Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 1, sm: 2 },
          bgcolor: cardBg,
          border: `1px solid ${borderColor}`,
          borderLeft: `3px solid ${theme.colors.fourGreenColors}`,
          p: 1.5,
          mb: 2,
          borderRadius: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <InfoOutlinedIcon
            sx={{ color: theme.colors.thirdColors, fontSize: 18, display: { xs: "none", sm: "block" } }}
          />
          <Typography
            variant="body2"
            sx={{ color: theme.colors.thirdColors, fontSize: { xs: 11, sm: 13 } }}
          >
            Sistem Gudang Resi Agrotech aktif — Semua transaksi masuk dan keluar
            dicatat permanen di Polygon POS — Setiap lot yang diverifikasi
            diterbitkan sebagai WRG NFT ERC-721.
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: "#10B981", fontWeight: 700, whiteSpace: "nowrap" }}
        >
          248 WRG Aktif On-Chain
        </Typography>
      </Box>

      {/* KPI Cards Row */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderTop: `2px solid ${theme.colors.primaryColors}`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                display: "block",
                mb: 1,
                fontWeight: 700,
              }}
            >
              TOTAL STOK GUDANG
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.colors.primaryColors,
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              182.400{" "}
              <Typography component="span" sx={{ fontSize: 14 }}>
                kg
              </Typography>
            </Typography>
            <Typography variant="caption" sx={{ color: tcOptions.color }}>
              5 komoditas - 6 gudang
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderTop: `2px solid #F59E0B`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                display: "block",
                mb: 1,
                fontWeight: 700,
              }}
            >
              NILAI STOK (IDR)
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#F59E0B", fontWeight: 700, mb: 0.5 }}
            >
              RP 2,63 M
            </Typography>
            <Typography variant="caption" sx={{ color: tcOptions.color }}>
              Potensi LTV 78% tersedia
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderTop: `2px solid #3B82F6`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                display: "block",
                mb: 1,
                fontWeight: 700,
              }}
            >
              WRG AKTIF
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#3B82F6", fontWeight: 700, mb: 0.5 }}
            >
              248
            </Typography>
            <Typography variant="caption" sx={{ color: "#10B981" }}>
              + 12 Hari ini
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderTop: `2px solid #8B5CF6`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                display: "block",
                mb: 1,
                fontWeight: 700,
              }}
            >
              KAPASITAS TERPAKAI
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: theme.colors.white, fontWeight: 700, mb: 0.5 }}
            >
              68.4%
            </Typography>
            <Typography variant="caption" sx={{ color: tcOptions.color }}>
              Dari 256.700 kg kapasitas
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderTop: `2px solid #EF4444`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                display: "block",
                mb: 1,
                fontWeight: 700,
              }}
            >
              HARI JATUH TEMPO
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: theme.colors.white, fontWeight: 700, mb: 0.5 }}
            >
              7
            </Typography>
            <Typography variant="caption" sx={{ color: "#EF4444" }}>
              4 Perlu Tindakan
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content Area Grid */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Left Column (Bar charts) */}
        <Grid
          size={{ xs: 12, lg: 8 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* STOK PER KOMODITAS */}
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
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: tcOptions.color }}
              >
                STOK PER KOMODITAS
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
              >
                Real-time Detail →
              </Typography>
            </Box>
            <Box p={3}>
              {[
                {
                  name: "Beras",
                  val: 55,
                  color: "#10B981",
                  qty: "88.480 kg",
                  per: "55%",
                },
                {
                  name: "Jagung",
                  val: 45,
                  color: "#F59E0B",
                  qty: "44.200 kg",
                  per: "45%",
                },
                {
                  name: "Kedelai",
                  val: 30,
                  color: "#3B82F6",
                  qty: "21.600 kg",
                  per: "30%",
                },
                {
                  name: "Gabah",
                  val: 28,
                  color: "#8B5CF6",
                  qty: "20.100 kg",
                  per: "28%",
                },
                {
                  name: "Gula",
                  val: 12,
                  color: "#EF4444",
                  qty: "8.000 kg",
                  per: "12%",
                },
              ].map((k, i) => (
                <Box
                  key={i}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  mb={1.5}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      width: 80,
                      color: theme.colors.white,
                      fontWeight: 600,
                    }}
                  >
                    {k.name}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={k.val}
                      sx={{
                        height: 6,
                        borderRadius: 2,
                        bgcolor: theme.colors.thirdBgColors,
                        "& .MuiLinearProgress-bar": { bgcolor: k.color },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: k.color,
                      minWidth: 120,
                      textAlign: "right",
                      fontWeight: 600,
                    }}
                  >
                    {k.per} -{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ color: theme.colors.white }}
                    >
                      {k.qty}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>

          {/* PENERIMAAN 7 HARI TERAKHIR */}
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
                variant="caption"
                sx={{ fontWeight: 700, color: tcOptions.color }}
              >
                PENERIMAAN 7 HARI TERAKHIR (TON)
              </Typography>
            </Box>
            <Box
              p={2}
              height={120}
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
            >
              {[
                { val: 60, col: "#10B981", day: "Sen" },
                { val: 65, col: "#10B981", day: "Sel" },
                { val: 40, col: "#10B981", day: "Rab" },
                { val: 80, col: "#10B981", day: "Kam" },
                { val: 75, col: "#10B981", day: "Jum" },
                { val: 90, col: "#10B981", day: "Sab" },
                { val: 50, col: "#F59E0B", day: "Min" },
              ].map((b, i) => (
                <Box
                  key={i}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{ width: "12%", height: "100%" }}
                >
                  <Box
                    sx={{
                      mt: "auto",
                      width: "100%",
                      height: `${b.val}%`,
                      bgcolor: b.col,
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: tcOptions.color, mt: 1, fontSize: 10 }}
                  >
                    {b.day}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* Right Column (Kapasitas & Activities) */}
        <Grid
          size={{ xs: 12, lg: 4 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {/* KAPASITAS GUDANG */}
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
                variant="caption"
                sx={{ fontWeight: 700, color: tcOptions.color }}
              >
                KAPASITAS GUDANG
              </Typography>
            </Box>
            <Box p={2}>
              {[
                {
                  n: "GDG-01 - Subang",
                  v: 72,
                  l: "72% - 36.000 / 50.000 kg",
                  c: "#10B981",
                },
                {
                  n: "GDG-02 - Karawang",
                  v: 82,
                  l: "82% - 41.000 / 50.000 kg",
                  c: "#10B981",
                },
                {
                  n: "GDG-03 - Indramayu",
                  v: 91,
                  l: "91% - 45.500 / 50.000 kg",
                  c: "#F59E0B",
                },
                {
                  n: "GDG-04 - Cianjur",
                  v: 68,
                  l: "68% - 34.000 / 50.000 kg",
                  c: "#10B981",
                },
                {
                  n: "GDG-05 - Cirebon",
                  v: 54,
                  l: "54% - 8.100 / 15.000 kg",
                  c: "#10B981",
                },
                {
                  n: "GDG-06 - Majalengka",
                  v: 97,
                  l: "97% - 9.700 / 10.000 kg",
                  c: "#EF4444",
                },
              ].map((g, i) => (
                <Box key={i} mb={1.5}>
                  <Box display="flex" justifyContent="space-between" mb={0.5}>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color, fontSize: 10 }}
                    >
                      {g.n}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: theme.colors.white, fontSize: 10 }}
                    >
                      {g.l}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={g.v}
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

          {/* AKTIVITAS TERBARU */}
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
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: tcOptions.color }}
              >
                AKTIVITAS TERBARU
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
              >
                Semua →
              </Typography>
            </Box>
            <Box p={2} position="relative">
              <Box
                position="absolute"
                left={18}
                top={16}
                bottom={16}
                width={2}
                bgcolor={theme.colors.thirdBgColors}
              />
              {[
                {
                  t: "14:20",
                  tl: "WRG-2024-0248 diterbitkan on-chain",
                  d: "Cetak - 3.400 kg - Grade A - GDG-01",
                  c: "#10B981",
                },
                {
                  t: "14:15",
                  tl: "Penerimaan Jagung 3.800 kg",
                  d: "Petani: Mulyadi - GDG-03 - Pending realisasi",
                  c: "#F59E0B",
                },
                {
                  t: "13:42",
                  tl: "Redemption 800 BERAS diproses",
                  d: "DO-07 Dimensi - Pengambilan Fisik",
                  c: "#3B82F6",
                },
                {
                  t: "12:30",
                  tl: "Alert: GDG-06 kapasitas 97%",
                  d: "Disarankan mengarahkan pengiriman ke Cirebon",
                  c: "#EF4444",
                },
                {
                  t: "11:10",
                  tl: "WRG-2024-0247 difraksionasi",
                  d: "4.500 sBERAS didistribusikan ke wallet petani",
                  c: "#10B981",
                },
              ].map((a, i) => (
                <Box key={i} position="relative" pl={3.5} mb={2}>
                  <Box
                    position="absolute"
                    left={-3}
                    top={4}
                    width={10}
                    height={10}
                    borderRadius="50%"
                    bgcolor={a.c}
                    border={`2px solid ${cardBg}`}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.colors.white,
                        fontWeight: 700,
                        fontSize: 11,
                      }}
                    >
                      {a.tl}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: tcOptions.color, fontSize: 10 }}
                    >
                      {a.t}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: tcOptions.color,
                      display: "block",
                      fontSize: 10,
                    }}
                  >
                    {a.d}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Table Section */}
      <Card
        sx={{
          bgcolor: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: 1.5,
          boxShadow: "none",
          mb: 2,
        }}
      >
        <Box
          p={2}
          borderBottom={`1px solid ${borderColor}`}
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, color: tcOptions.color }}
          >
            WRG AKTIF - 10 TERBARU
          </Typography>
          <Box display="flex" gap={2}>
            <Typography
              variant="caption"
              sx={{ color: "#10B981", fontWeight: 700 }}
            >
              128 Total Unit
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: theme.colors.primaryColors, cursor: "pointer" }}
            >
              Lihat Semua →
            </Typography>
          </Box>
        </Box>
        <TableContainer>
          <Table size="small" sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                {[
                  "NO. RESI WRG",
                  "KOMODITAS",
                  "PETANI / KOPERATOR",
                  "GUDANG",
                  "BERAT (KG)",
                  "GRADE",
                  "TOKEN",
                  "NILAI / UNIT",
                  "STATUS",
                  "TX HASH",
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      color: tcOptions.color,
                      fontSize: 9,
                      fontWeight: 700,
                      borderBottom: `1px solid ${borderColor}`,
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {WRG_DATA.map((r, i) => (
                <TableRow key={i}>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                      fontWeight: 600,
                    }}
                  >
                    {r.resi}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                    }}
                  >
                    {r.kom}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                    }}
                  >
                    {r.pet}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                    }}
                  >
                    {r.gdg}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.white,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                      fontWeight: 700,
                    }}
                  >
                    {r.brt}
                  </TableCell>
                  <TableCell sx={{ borderBottom: `1px solid ${borderColor}` }}>
                    <Chip
                      label={r.grade}
                      size="small"
                      sx={{
                        bgcolor:
                          r.grade === "A"
                            ? "rgba(16, 185, 129, 0.1)"
                            : r.grade === "B"
                              ? "rgba(59, 130, 246, 0.1)"
                              : "rgba(245, 158, 11, 0.1)",
                        color:
                          r.grade === "A"
                            ? "#10B981"
                            : r.grade === "B"
                              ? "#3B82F6"
                              : "#F59E0B",
                        fontSize: 10,
                        height: 20,
                        borderRadius: 1,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.colors.primaryColors,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                    }}
                  >
                    {r.tkn}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#F59E0B",
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                      fontWeight: 700,
                    }}
                  >
                    {r.nilai}
                  </TableCell>
                  <TableCell sx={{ borderBottom: `1px solid ${borderColor}` }}>
                    <Chip
                      label={r.sts}
                      size="small"
                      sx={{
                        bgcolor: "transparent",
                        border: `1px solid ${r.sts === "AKTIF" ? "#10B981" : r.sts === "Dijaminkan" ? "#F59E0B" : r.sts === "Di Tarik" ? "#3B82F6" : "#EF4444"}`,
                        color:
                          r.sts === "AKTIF"
                            ? "#10B981"
                            : r.sts === "Dijaminkan"
                              ? "#F59E0B"
                              : r.sts === "Di Tarik"
                                ? "#3B82F6"
                                : "#EF4444",
                        fontSize: 9,
                        height: 18,
                        borderRadius: 0.5,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: tcOptions.color,
                      fontSize: 10,
                      borderBottom: `1px solid ${borderColor}`,
                    }}
                  >
                    {r.hash}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Bottom Metrics Row */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: tcOptions.color, fontWeight: 700, mb: 1 }}
            >
              KUALITAS RATA-RATA
            </Typography>
            <Box textAlign="center" mt="auto">
              <Typography
                variant="h3"
                sx={{ color: "#10B981", fontWeight: 700 }}
              >
                A
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: tcOptions.color, display: "block" }}
              >
                GRADE DOMINAN
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#F59E0B", fontWeight: 700, mb: 1 }}
            >
              12,4%
            </Typography>
            <Typography variant="caption" sx={{ color: tcOptions.color }}>
              KADAR AIR RATA
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#3B82F6", fontWeight: 700, mb: 1 }}
            >
              98,2%
            </Typography>
            <Typography variant="caption" sx={{ color: tcOptions.color }}>
              BEBAS KOTORAN
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                fontWeight: 700,
                mb: 2,
                display: "block",
              }}
            >
              SUHU & KELEMBABAN RATA
            </Typography>
            <Box display="flex" justifyContent="space-between" mt="auto">
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: tcOptions.color,
                    display: "block",
                    fontSize: 10,
                  }}
                >
                  SUHU
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
                >
                  24.2°C
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: 2,
                    bgcolor: theme.colors.primaryColors,
                    mt: 0.5,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: tcOptions.color,
                    display: "block",
                    fontSize: 10,
                  }}
                >
                  KELEMBABAN
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#F59E0B", fontWeight: 700 }}
                >
                  68.5%
                </Typography>
                <Box
                  sx={{ width: "100%", height: 2, bgcolor: "#F59E0B", mt: 0.5 }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: tcOptions.color,
                    display: "block",
                    fontSize: 10,
                  }}
                >
                  SUHU GDG-06 MAX
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#EF4444", fontWeight: 700 }}
                >
                  31.8°C
                </Typography>
                <Box
                  sx={{ width: "100%", height: 2, bgcolor: "#EF4444", mt: 0.5 }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 1.5,
              p: 2,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: tcOptions.color,
                fontWeight: 700,
                mb: 2,
                display: "block",
              }}
            >
              REVENUE WRG BULAN INI
            </Typography>
            <Box display="flex" justifyContent="space-between" mt="auto">
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ color: theme.colors.primaryColors, fontWeight: 700 }}
                >
                  RP 3,8M
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: tcOptions.color, fontSize: 10 }}
                >
                  FEE TERCATAT: QY
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ color: "#F59E0B", fontWeight: 700 }}
                >
                  RP 0,5M
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: tcOptions.color, fontSize: 10 }}
                >
                  FEE POTENSI (LTV)
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ color: "#3B82F6", fontWeight: 700 }}
                >
                  248
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: tcOptions.color, fontSize: 10 }}
                >
                  NFT DITERBITKAN
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
