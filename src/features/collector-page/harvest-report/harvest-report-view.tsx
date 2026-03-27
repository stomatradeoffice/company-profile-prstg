"use client";

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
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function HarvestReportView() {
  const theme = themeConfig;

  // Dark theme color mappings
  const textPrimary = theme.colors.white;
  const textSecondary = "#A1A1AA";
  const borderColors = theme.colors.thirdBgColors;
  const cardBg = theme.colors.secondaryBgColors;

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ xs: "100px 20px 40px", md: "40px" }}
      maxWidth="1400px" // Bounded layout standard
      margin="0 auto"
      width="100%"
      gap={4}
      position="relative" // For the FAB
    >
      {/* Header section */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={2}>
        <Box>
          <Typography
            variant="h1"
            color={theme.colors.primaryColors}
            fontWeight={700}
            sx={{ fontSize: { xs: 26, sm: 32, md: 40 }, mb: 1 }}
          >
            Regional Harvest Overview
          </Typography>
          <Typography variant="body1" color={textSecondary} fontWeight={500}>
            Aggregated data across 12 sectors for the current cycle.
          </Typography>
        </Box>

        <Box display="flex" bgcolor={theme.colors.bgColors} borderRadius={2} p={0.5} border={`1px solid ${borderColors}`}>
          <Button
            sx={{
              color: textSecondary,
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 1.5,
              px: 3,
            }}
          >
            2024 Season
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.fourGreenColors,
              color: textPrimary,
              borderRadius: 1.5,
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              boxShadow: "none",
              "&:hover": { bgcolor: theme.colors.primaryColors, color: theme.colors.bgColors },
            }}
          >
            2025 Season
          </Button>
        </Box>
      </Box>

      {/* Top 3 Stats Cards */}
      <Grid container spacing={3}>
        {/* TOTAL REGIONAL YIELD */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: "100%" }}>
            <CardContent sx={{ p: 4, "&:last-child": { pb: 4 } }}>
              <Typography variant="caption" color={textSecondary} fontWeight={700} letterSpacing={0.5} display="block" mb={2}>
                TOTAL REGIONAL YIELD
              </Typography>
              <Box display="flex" alignItems="baseline" gap={1} mb={3}>
                <Typography variant="h2" color={textPrimary} fontWeight={700} sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, lineHeight: 1 }}>
                  14,208
                </Typography>
                <Typography variant="h6" color={textSecondary} fontWeight={600}>
                  kg
                </Typography>
              </Box>
              <Chip
                icon={<TrendingUpIcon sx={{ fontSize: "16px !important", color: `${theme.colors.bgColors} !important` }} />}
                label="+12.4% vs last season"
                size="small"
                sx={{
                  bgcolor: theme.colors.primaryColors,
                  color: theme.colors.bgColors,
                  fontWeight: 700,
                  fontSize: 13,
                  py: 1,
                  px: 0.5,
                  borderRadius: 2,
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* AVERAGE CROP QUALITY */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: "100%" }}>
            <CardContent sx={{ p: 4, "&:last-child": { pb: 4 } }}>
              <Typography variant="caption" color={textSecondary} fontWeight={700} letterSpacing={0.5} display="block" mb={3}>
                AVERAGE CROP QUALITY
              </Typography>
              <Box display="flex" alignItems="center" gap={3} mb={3}>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={80}
                    thickness={5}
                    sx={{ color: theme.colors.thirdBgColors, position: "absolute", left: 0 }}
                  />
                  <CircularProgress
                    variant="determinate"
                    value={82}
                    size={80}
                    thickness={5}
                    sx={{ color: theme.colors.fourGreenColors }}
                  />
                  <Box
                    top={0} left={0} bottom={0} right={0} position="absolute"
                    display="flex" alignItems="center" justifyContent="center"
                  >
                    <Typography variant="h5" component="div" color={textPrimary} fontWeight={700}>
                      A
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h4" color={textPrimary} fontWeight={700}>
                    82%
                  </Typography>
                  <Typography variant="body2" color={textSecondary} fontWeight={500}>
                    Grade A Premium
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={3}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box width={8} height={8} borderRadius="50%" bgcolor={theme.colors.fourGreenColors} />
                  <Typography variant="caption" color={textSecondary} fontWeight={700}>GRADE A</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box width={8} height={8} borderRadius="50%" bgcolor={borderColors} />
                  <Typography variant="caption" color={textSecondary} fontWeight={700}>GRADE B+</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* MARKET VALUE ESTIMATE */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: theme.colors.fourGreenColors, borderRadius: 3, boxShadow: "none", height: "100%" }}>
            <CardContent sx={{ p: 4, "&:last-child": { pb: 4 }, height: "100%", display: "flex", flexDirection: "column" }}>
              <Typography variant="caption" color="rgba(255,255,255,0.7)" fontWeight={700} letterSpacing={0.5} display="block" mb={3}>
                MARKET VALUE ESTIMATE
              </Typography>
              <Box display="flex" alignItems="flex-start" mb={4}>
                <Typography variant="h6" color="rgba(255,255,255,0.7)" sx={{ mt: 1, mr: 1, fontWeight: 600 }}>$</Typography>
                <Typography variant="h2" color={theme.colors.white} fontWeight={700} sx={{ fontSize: { xs: "3rem", md: "3.5rem" }, lineHeight: 1 }}>
                  248,500
                </Typography>
              </Box>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: "auto",
                  color: theme.colors.white,
                  borderColor: "rgba(255,255,255,0.3)",
                  borderWidth: 2,
                  "&:hover": { borderColor: theme.colors.white, bgcolor: "rgba(255,255,255,0.1)", borderWidth: 2 },
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1,
                  borderRadius: 2,
                  width: "fit-content",
                }}
              >
                View Market Trends
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Middle Section: Chart & Density Map */}
      <Grid container spacing={3}>
        {/* Yield by Crop (Bar Chart Representation) */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: "100%" }}>
            <CardContent sx={{ p: 4, "&:last-child": { pb: 4 }, display: "flex", flexDirection: "column", height: "100%" }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={4}>
                <Typography variant="h6" color={textPrimary} fontWeight={700}>
                  Yield by Crop
                </Typography>
                <Box display="flex" gap={3}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box width={12} height={12} borderRadius={0.5} bgcolor={theme.colors.fourGreenColors} />
                    <Typography variant="caption" color={textSecondary} fontWeight={700}>COFFEE</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box width={12} height={12} borderRadius={0.5} bgcolor="#8D6E63" />
                    <Typography variant="caption" color={textSecondary} fontWeight={700}>TEA</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box width={12} height={12} borderRadius={0.5} bgcolor="#D84315" />
                    <Typography variant="caption" color={textSecondary} fontWeight={700}>MAIZE</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Chart Placeholder */}
              <Box position="relative" flexGrow={1} minHeight={250} display="flex" flexDirection="column" justifyContent="flex-end">
                {/* Horizontal Grid Lines */}
                {[0, 1, 2, 3].map((_, i) => (
                  <Box key={i} position="absolute" left={0} right={0} bottom={`${i * 33}%`} borderBottom={`1px dashed ${theme.colors.thirdBgColors}`} />
                ))}
                
                {/* X Axis Labels & Mock Bars */}
                <Box display="flex" justifyContent="space-around" position="relative" zIndex={1} width="100%">
                  {['SECTOR A', 'SECTOR B', 'SECTOR C', 'SECTOR D'].map((sector, i) => (
                    <Box key={sector} display="flex" flexDirection="column" alignItems="center" width="20%">
                      <Box display="flex" alignItems="flex-end" justifyContent="center" gap={1} height={200} mb={3} width="100%">
                         <Box width={{ xs: 8, md: 16 }} height={`${40 + (i * 15)}%`} bgcolor={theme.colors.fourGreenColors} borderRadius="4px 4px 0 0" />
                         <Box width={{ xs: 8, md: 16 }} height={`${30 + (i % 2 === 0 ? 20 : 0)}%`} bgcolor="#8D6E63" borderRadius="4px 4px 0 0" />
                         <Box width={{ xs: 8, md: 16 }} height={`${60 - (i * 10)}%`} bgcolor="#D84315" borderRadius="4px 4px 0 0" />
                      </Box>
                      <Typography variant="caption" color={textSecondary} fontWeight={700} letterSpacing={0.5}>
                        {sector}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Regional Density */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: "100%" }}>
            <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "100%" }}>
              <Typography variant="h6" color={textPrimary} fontWeight={700} mb={0.5}>
                Regional Density
              </Typography>
              <Typography variant="body2" color={textSecondary} fontWeight={500} mb={3}>
                Top performing harvest zones
              </Typography>

              {/* Map/Terrain Mock */}
              <Box
                position="relative"
                flexGrow={1}
                minHeight={200}
                borderRadius={3}
                mb={3}
                sx={{
                  bgcolor: theme.colors.thirdBgColors,
                  backgroundImage: `radial-gradient(circle at 30% 30%, ${theme.colors.fourGreenColors} 0%, transparent 40%),
                                    radial-gradient(circle at 70% 60%, rgba(216, 67, 21, 0.4) 0%, transparent 50%)`,
                  overflow: 'hidden'
                }}
              >
                {/* Zoom Controls */}
                <Box position="absolute" right={12} top={12} display="flex" flexDirection="column" gap={1}>
                  <IconButton size="small" sx={{ bgcolor: "rgba(0,0,0,0.4)", color: theme.colors.white, "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ bgcolor: "rgba(0,0,0,0.4)", color: theme.colors.white, "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              {/* Progress Detail */}
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color={textPrimary} fontWeight={600}>Central Valley</Typography>
                <Typography variant="body2" color={textPrimary} fontWeight={700}>High</Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={85} 
                sx={{ 
                  height: 6, 
                  borderRadius: 3, 
                  bgcolor: theme.colors.thirdBgColors,
                  '& .MuiLinearProgress-bar': { bgcolor: theme.colors.fourGreenColors }
                }} 
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Harvests Table */}
      <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none" }}>
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={4}>
            <Typography variant="h5" color={textPrimary} fontWeight={700}>
              Recent Harvests
            </Typography>
            <Box display="flex" gap={1} alignItems="center" sx={{ cursor: 'pointer' }}>
              <Typography variant="body2" color={textPrimary} fontWeight={600}>
                Export CSV
              </Typography>
              <DownloadIcon fontSize="small" sx={{ color: textSecondary }} />
            </Box>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "rgba(255,255,255,0.02)" }}>
                  {['FARMER NAME', 'CROP TYPE', 'YIELD (KG)', 'QUALITY', 'STATUS', ''].map((col, index) => (
                    <TableCell key={index} sx={{ color: textSecondary, borderBottom: `1px solid ${borderColors}`, fontSize: 11, fontWeight: 700, py: 2 }}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Row 1 */}
                <TableRow sx={{ borderBottom: `1px solid ${borderColors}` }}>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar sx={{ bgcolor: theme.colors.thirdBgColors, color: textSecondary, width: 36, height: 36, fontSize: 13, fontWeight: 700 }}>
                        EM
                      </Avatar>
                      <Typography color={textPrimary} fontWeight={600} fontSize={14}>Elias Mwangi</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: textSecondary, borderBottom: "none", py: 2 }}>
                    Arabica Coffee
                  </TableCell>
                  <TableCell sx={{ color: textPrimary, borderBottom: "none", fontWeight: 700, py: 2 }}>
                    1,240
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Chip label="GRADE A" size="small" sx={{ bgcolor: "rgba(44, 255, 158, 0.15)", color: theme.colors.primaryColors, fontWeight: 700, fontSize: 11, borderRadius: 1 }} />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Box width={8} height={8} borderRadius="50%" bgcolor={theme.colors.fourGreenColors} />
                      <Typography color={textSecondary} fontSize={13} fontWeight={500}>In Storage</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2, textAlign: "right" }}>
                     <IconButton size="small" sx={{ color: textSecondary }}><MoreVertIcon /></IconButton>
                  </TableCell>
                </TableRow>

                {/* Row 2 */}
                <TableRow sx={{ borderBottom: `1px solid ${borderColors}` }}>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar sx={{ bgcolor: theme.colors.thirdBgColors, color: textSecondary, width: 36, height: 36, fontSize: 13, fontWeight: 700 }}>
                        SO
                      </Avatar>
                      <Typography color={textPrimary} fontWeight={600} fontSize={14}>Sara Obura</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: textSecondary, borderBottom: "none", py: 2 }}>
                    Black Tea
                  </TableCell>
                  <TableCell sx={{ color: textPrimary, borderBottom: "none", fontWeight: 700, py: 2 }}>
                    890
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Chip label="GRADE B+" size="small" sx={{ bgcolor: theme.colors.thirdBgColors, color: textSecondary, fontWeight: 700, fontSize: 11, borderRadius: 1 }} />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Box width={8} height={8} borderRadius="50%" bgcolor="#F59E0B" />
                      <Typography color={textSecondary} fontSize={13} fontWeight={500}>Processing</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2, textAlign: "right" }}>
                     <IconButton size="small" sx={{ color: textSecondary }}><MoreVertIcon /></IconButton>
                  </TableCell>
                </TableRow>

                {/* Row 3 */}
                <TableRow sx={{ borderBottom: "none" }}>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar sx={{ bgcolor: theme.colors.thirdBgColors, color: textSecondary, width: 36, height: 36, fontSize: 13, fontWeight: 700 }}>
                        KK
                      </Avatar>
                      <Typography color={textPrimary} fontWeight={600} fontSize={14}>Kofi Koranteng</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: textSecondary, borderBottom: "none", py: 2 }}>
                    Yellow Maize
                  </TableCell>
                  <TableCell sx={{ color: textPrimary, borderBottom: "none", fontWeight: 700, py: 2 }}>
                    3,120
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Chip label="GRADE A" size="small" sx={{ bgcolor: "rgba(44, 255, 158, 0.15)", color: theme.colors.primaryColors, fontWeight: 700, fontSize: 11, borderRadius: 1 }} />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2 }}>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Box width={8} height={8} borderRadius="50%" bgcolor={borderColors} />
                      <Typography color={textSecondary} fontSize={13} fontWeight={500}>Sold</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 2, textAlign: "right" }}>
                     <IconButton size="small" sx={{ color: textSecondary }}><MoreVertIcon /></IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            fullWidth
            sx={{
              py: 2.5,
              borderRadius: "0 0 12px 12px",
              bgcolor: "rgba(255,255,255,0.02)",
              color: textPrimary,
              textTransform: "none",
              fontWeight: 600,
              borderTop: `1px solid ${borderColors}`,
              "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
            }}
          >
            View All Harvest Data
          </Button>
        </CardContent>
      </Card>

      {/* Floating Action Button (FAB) */}
      <Box position="absolute" right={{ xs: 20, md: -25 }} bottom={{ xs: 20, md: 240 }} zIndex={10}>
        <IconButton
          sx={{
            bgcolor: theme.colors.fourGreenColors,
            color: theme.colors.white,
            width: 56,
            height: 56,
            boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
            "&:hover": { bgcolor: theme.colors.primaryColors, color: theme.colors.bgColors },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>

    </Box>
  );
}
