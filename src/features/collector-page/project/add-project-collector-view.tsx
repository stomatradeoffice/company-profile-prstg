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
  Divider,
} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PieChartIcon from "@mui/icons-material/PieChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function AddProjectCollectorView() {
  const theme = themeConfig;

  // Colors mapping for dark theme
  const textPrimary = theme.colors.white;
  const textSecondary = "#A1A1AA";
  const borderColors = theme.colors.thirdBgColors;
  const cardBg = theme.colors.secondaryBgColors;

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ xs: "20px 16px 40px", md: "40px" }}
      maxWidth="1400px" // Bounded width similar to the other view
      margin="0 auto"
      width="100%"
      gap={4}
    >
      {/* Header section */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={2}>
        <Box>
          <Typography variant="overline" color={textSecondary} fontWeight={600} letterSpacing={1}>
            LEDGER / DISBURSEMENTS
          </Typography>
          <Typography
            variant="h1"
            color={theme.colors.primaryColors}
            fontWeight={700}
            sx={{ fontSize: { xs: 24, sm: 28, md: 36 }, mt: 0.5 }}
          >
            Milestone Disbursements
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            sx={{
              color: textPrimary,
              borderColor: borderColors,
              bgcolor: cardBg,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { borderColor: theme.colors.primaryColors },
            }}
          >
            Export Report
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.fourGreenColors,
              color: textPrimary,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "none",
              "&:hover": { bgcolor: theme.colors.primaryColors, color: theme.colors.bgColors },
            }}
          >
            Batch Process
          </Button>
        </Box>
      </Box>

      {/* Stats Cards Row */}
      <Grid container spacing={3}>
        {/* TOTAL DISBURSED */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: '100%' }}>
            <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                <Typography variant="caption" color={textSecondary} fontWeight={600} letterSpacing={0.5}>
                  TOTAL DISBURSED
                </Typography>
                <Box bgcolor="rgba(44, 255, 158, 0.15)" p={0.5} borderRadius={1} color={theme.colors.primaryColors} display="flex">
                  <ReceiptIcon fontSize="small" />
                </Box>
              </Box>
              <Typography variant="h3" color={textPrimary} fontWeight={700} sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                $2,840,000
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <TimelineIcon sx={{ fontSize: 16, color: theme.colors.primaryColors }} />
                <Typography variant="body2" color={theme.colors.primaryColors} fontWeight={600}>
                  +12.5% vs last quarter
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* PENDING MILESTONES */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: '100%' }}>
            <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                <Typography variant="caption" color={textSecondary} fontWeight={600} letterSpacing={0.5}>
                  PENDING MILESTONES
                </Typography>
                <Box bgcolor="rgba(245, 158, 11, 0.15)" p={0.5} borderRadius={1} color="#F59E0B" display="flex">
                  <AccessTimeIcon fontSize="small" />
                </Box>
              </Box>
              <Typography variant="h3" color={textPrimary} fontWeight={700} sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                42
              </Typography>
              <Typography variant="body2" color={textSecondary} fontWeight={500}>
                Active verification required
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* FUND UTILIZATION */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", height: '100%' }}>
            <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                <Typography variant="caption" color={textSecondary} fontWeight={600} letterSpacing={0.5}>
                  FUND UTILIZATION
                </Typography>
                <Box bgcolor="rgba(44, 255, 158, 0.15)" p={0.5} borderRadius={1} color={theme.colors.primaryColors} display="flex">
                  <PieChartIcon fontSize="small" />
                </Box>
              </Box>
              <Typography variant="h3" color={textPrimary} fontWeight={700} sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                84.2%
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={84.2} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4, 
                  bgcolor: theme.colors.thirdBgColors,
                  '& .MuiLinearProgress-bar': { bgcolor: theme.colors.fourGreenColors }
                }} 
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content Area */}
      <Grid container spacing={3}>
        {/* Left Column (Recent Disbursements & Bottom Cards) */}
        <Grid size={{ xs: 12, lg: 8 }} display="flex" flexDirection="column" gap={3}>
          
          {/* Recent Disbursements Card */}
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none" }}>
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <Typography variant="h6" color={textPrimary} fontWeight={600}>
                  Recent Disbursements
                </Typography>
                <Typography variant="body2" color={theme.colors.fourGreenColors} fontWeight={600} sx={{ cursor: 'pointer' }}>
                  View All Transactions
                </Typography>
              </Box>
              
              <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow sx={{ borderBottom: `1px solid ${borderColors}` }}>
                      {['FARMER / PROJECT', 'MILESTONE', 'AMOUNT', 'STATUS'].map((col) => (
                        <TableCell key={col} sx={{ color: textSecondary, borderBottom: "none", fontSize: 12, fontWeight: 600, py: 2 }}>
                          {col}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Row 1 */}
                    <TableRow sx={{ borderBottom: `1px solid ${borderColors}` }}>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar sx={{ bgcolor: theme.colors.thirdBgColors, color: theme.colors.primaryColors, width: 40, height: 40 }}>
                            G
                          </Avatar>
                          <Box>
                            <Typography color={textPrimary} fontWeight={600} fontSize={14}>Green Valley Coop</Typography>
                            <Typography color={textSecondary} fontSize={12}>ID: #DISB-9021</Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Typography color={textPrimary} fontWeight={600} fontSize={14}>Seed Procurement</Typography>
                        <Typography color={textSecondary} fontSize={12}>Oct 12, 2023</Typography>
                      </TableCell>
                      <TableCell sx={{ color: textPrimary, borderBottom: "none", fontWeight: 700 }}>
                        $45,200.00
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Chip label="COMPLETED" size="small" sx={{ bgcolor: 'rgba(44, 255, 158, 0.15)', color: theme.colors.primaryColors, fontWeight: 700, fontSize: 11, borderRadius: 1 }} />
                      </TableCell>
                    </TableRow>

                    {/* Row 2 */}
                    <TableRow sx={{ borderBottom: `1px solid ${borderColors}` }}>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar sx={{ bgcolor: theme.colors.thirdBgColors, color: textSecondary, width: 40, height: 40 }}>
                            S
                          </Avatar>
                          <Box>
                            <Typography color={textPrimary} fontWeight={600} fontSize={14}>Sun-Drenched Acres</Typography>
                            <Typography color={textSecondary} fontSize={12}>ID: #DISB-9025</Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Typography color={textPrimary} fontWeight={600} fontSize={14}>Irrigation Install</Typography>
                        <Typography color={textSecondary} fontSize={12}>Processing</Typography>
                      </TableCell>
                      <TableCell sx={{ color: textPrimary, borderBottom: "none", fontWeight: 700 }}>
                        $128,000.00
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Chip label="PROCESSING" size="small" sx={{ bgcolor: theme.colors.thirdBgColors, color: textSecondary, fontWeight: 700, fontSize: 11, borderRadius: 1 }} />
                      </TableCell>
                    </TableRow>

                    {/* Row 3 */}
                    <TableRow sx={{ borderBottom: "none" }}>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar sx={{ bgcolor: theme.colors.fourGreenColors, color: theme.colors.white, width: 40, height: 40 }}>
                            N
                          </Avatar>
                          <Box>
                            <Typography color={textPrimary} fontWeight={600} fontSize={14}>North Ridge Orchards</Typography>
                            <Typography color={textSecondary} fontSize={12}>ID: #DISB-8994</Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Typography color={textPrimary} fontWeight={600} fontSize={14}>Pest Management</Typography>
                        <Typography color={textSecondary} fontSize={12}>Scheduled for Oct 20</Typography>
                      </TableCell>
                      <TableCell sx={{ color: textPrimary, borderBottom: "none", fontWeight: 700 }}>
                        $12,450.00
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Chip label="SCHEDULED" size="small" sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', fontWeight: 700, fontSize: 11, borderRadius: 1 }} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Bottom Two Cards */}
          <Grid container spacing={3}>
            {/* Verification Queue */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ bgcolor: theme.colors.thirdBgColors, borderRadius: 3, boxShadow: "none", height: '100%', position: 'relative', overflow: 'hidden' }}>
                <CardContent sx={{ p: 4, zIndex: 1, position: 'relative' }}>
                  <Typography variant="h6" color={textPrimary} fontWeight={700} mb={1}>
                    Verification Queue
                  </Typography>
                  <Typography variant="body2" color={textSecondary} mb={4}>
                    3 field reports awaiting manager approval for final milestone release.
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer', mt: 'auto' }}>
                    <Typography color={theme.colors.primaryColors} fontWeight={600}>
                      Go to Approval Center
                    </Typography>
                    <ArrowForwardIcon sx={{ color: theme.colors.primaryColors, fontSize: 18 }} />
                  </Box>
                </CardContent>
                <CheckCircleOutlineIcon sx={{ position: 'absolute', right: -20, bottom: -20, fontSize: 140, color: 'rgba(255,255,255,0.05)' }} />
              </Card>
            </Grid>

            {/* Projected Outflow */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ bgcolor: theme.colors.fourGreenColors, borderRadius: 3, boxShadow: "none", height: '100%' }}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" color={theme.colors.white} fontWeight={700} mb={1}>
                    Projected Outflow
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)" mb={4}>
                    Expect $350k in disbursements across next 14 days based on current crop cycles.
                  </Typography>
                  
                  {/* Simple Bar Chart Mock */}
                  <Box display="flex" alignItems="flex-end" gap={1} height={60} mt="auto">
                    <Box sx={{ width: '20%', height: '20%', bgcolor: 'rgba(255,255,255,0.3)', borderRadius: '4px 4px 0 0' }} />
                    <Box sx={{ width: '20%', height: '40%', bgcolor: 'rgba(255,255,255,0.5)', borderRadius: '4px 4px 0 0' }} />
                    <Box sx={{ width: '20%', height: '30%', bgcolor: 'rgba(255,255,255,0.4)', borderRadius: '4px 4px 0 0' }} />
                    <Box sx={{ width: '20%', height: '80%', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '4px 4px 0 0' }} />
                    <Box sx={{ width: '20%', height: '100%', bgcolor: theme.colors.white, borderRadius: '4px 4px 0 0' }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column (Upcoming Milestones & Success Rate) */}
        <Grid size={{ xs: 12, lg: 4 }} display="flex" flexDirection="column" gap={3}>
          {/* Upcoming Milestones */}
          <Card sx={{ bgcolor: cardBg, border: `1px solid ${borderColors}`, borderRadius: 3, boxShadow: "none", flexGrow: 1 }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h6" color={textPrimary} fontWeight={700}>
                  Upcoming<br/>Milestones
                </Typography>
                <CalendarMonthIcon sx={{ color: textSecondary }} />
              </Box>

              {/* Timeline Items */}
              <Box position="relative">
                {/* Vertical Line */}
                <Box position="absolute" left={5} top={10} bottom={20} width={2} bgcolor={theme.colors.fourGreenColors} />

                {/* Item 1 */}
                <Box position="relative" pl={4} mb={4}>
                  <Box position="absolute" left={0} top={4} width={12} height={12} borderRadius="50%" bgcolor={theme.colors.primaryColors} border={`3px solid ${cardBg}`} />
                  <Typography variant="caption" color={theme.colors.fourGreenColors} fontWeight={700} sx={{ display: 'block', mb: 0.5 }}>
                    OCT 24 • HARVEST PREP
                  </Typography>
                  <Typography variant="subtitle1" color={textPrimary} fontWeight={600} mb={0.5}>
                    Blueberry Ridge Estates
                  </Typography>
                  <Typography variant="body2" color={textSecondary} mb={2}>
                    Milestone 4: Storage unit refrigeration check & personnel onboarding.
                  </Typography>
                  <Box display="flex" gap={2} alignItems="center">
                    <Typography color={textPrimary} fontWeight={700}>$18,000.00</Typography>
                    <Chip label="Pre-Auth" size="small" sx={{ bgcolor: theme.colors.white, color: theme.colors.bgColors, fontWeight: 700, fontSize: 11 }} />
                  </Box>
                </Box>

                {/* Item 2 */}
                <Box position="relative" pl={4} mb={4}>
                  <Box position="absolute" left={0} top={4} width={12} height={12} borderRadius="50%" bgcolor={theme.colors.thirdBgColors} border={`3px solid ${cardBg}`} />
                  <Typography variant="caption" color={textSecondary} fontWeight={700} sx={{ display: 'block', mb: 0.5 }}>
                    NOV 02 • SOIL ENRICHMENT
                  </Typography>
                  <Typography variant="subtitle1" color={textPrimary} fontWeight={600} mb={0.5}>
                    Highland Grain Collective
                  </Typography>
                  <Typography variant="body2" color={textSecondary} mb={2}>
                    Milestone 2: Application of organic nitrogen compound across North sector.
                  </Typography>
                  <Box display="flex" gap={2} alignItems="center">
                    <Typography color={textPrimary} fontWeight={700}>$22,500.00</Typography>
                    <Typography color={textSecondary} variant="caption" fontWeight={600}>Pending report</Typography>
                  </Box>
                </Box>

                {/* Item 3 */}
                <Box position="relative" pl={4} mb={4}>
                  <Box position="absolute" left={0} top={4} width={12} height={12} borderRadius="50%" bgcolor={theme.colors.thirdBgColors} border={`3px solid ${cardBg}`} />
                  <Typography variant="caption" color={textSecondary} fontWeight={700} sx={{ display: 'block', mb: 0.5 }}>
                    NOV 15 • TECH INTEGRATION
                  </Typography>
                  <Typography variant="subtitle1" color={textPrimary} fontWeight={600} mb={0.5}>
                    Root & Leaf Vertical Farms
                  </Typography>
                  <Typography variant="body2" color={textSecondary}>
                    Milestone 1: IoT sensor array deployment for real-time nutrient monitoring.
                  </Typography>
                </Box>
              </Box>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: textPrimary,
                  borderColor: borderColors,
                  borderStyle: 'dashed',
                  borderWidth: 2,
                  bgcolor: 'transparent',
                  borderRadius: 2,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { borderColor: theme.colors.primaryColors, bgcolor: 'rgba(44, 255, 158, 0.05)' },
                }}
              >
                Schedule Manual Disbursement
              </Button>
            </CardContent>
          </Card>

          {/* Milestone Success Rate */}
          <Card sx={{ bgcolor: theme.colors.thirdBgColors, borderRadius: 3, boxShadow: "none" }}>
            <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
              <Typography variant="subtitle2" color={textPrimary} fontWeight={600} mb={2}>
                Milestone Success Rate
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                {/* Circular Progress Mock */}
                <Box position="relative" display="inline-flex">
                  <Avatar sx={{ width: 64, height: 64, bgcolor: 'transparent', border: `4px solid ${theme.colors.fourGreenColors}`, color: textPrimary, fontWeight: 700 }}>
                    92%
                  </Avatar>
                </Box>
                <Typography variant="body2" color={textSecondary} sx={{ flex: 1 }}>
                  Excellent performance across 140+ individual project phases this year.
                </Typography>
              </Box>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Box>
  );
}

