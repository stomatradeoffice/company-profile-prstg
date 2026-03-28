"use client";

import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Avatar,
  Chip,
  IconButton,
  Divider,
  LinearProgress,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { themeConfig } from "@/core/config/theme-config";
import useUserProfile from "./hook/use-user-profile";
import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";
import QrDialog from "./component/qr-dialog";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HistoryIcon from "@mui/icons-material/History";
import SortIcon from "@mui/icons-material/Sort";

export default function UserProfileCollectorView() {
  const theme = themeConfig;

  // Dark theme color mappings
  const textPrimary = theme.colors.white;
  const textSecondary = "#A1A1AA";
  const borderColors = theme.colors.thirdBgColors;
  const cardBg = theme.colors.secondaryBgColors;

  const { userData, isLoading, address, isQrOpen, openQrCode, closeQrCode } =
    useUserProfile();

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <LoadingScreen />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ xs: "20px 16px 40px", md: "40px" }}
      maxWidth="1400px"
      margin="0 auto"
      width="100%"
      gap={4}
    >
      {/* Top Identity Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        gap={4}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={4}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          {/* Profile Picture with Edit Icon */}
          <Box position="relative">
            <Avatar
              variant="rounded"
              src={imageConfig.icon.profileIcon}
              sx={{
                width: 160,
                height: 160,
                borderRadius: 4,
                border: `1px solid ${borderColors}`,
              }}
            />
            <IconButton
              onClick={openQrCode} // Reusing QR trigger here as a secondary utility
              sx={{
                position: "absolute",
                bottom: -15,
                right: -15,
                bgcolor: theme.colors.fourGreenColors,
                color: theme.colors.white,
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                width: 40,
                height: 40,
                "&:hover": {
                  bgcolor: theme.colors.primaryColors,
                  color: theme.colors.bgColors,
                },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* User Details */}
          <Box
            display="flex"
            flexDirection="column"
            pt={1}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              mb={1}
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Chip
                label="VERIFIED MANAGER"
                size="small"
                sx={{
                  bgcolor: "rgba(44, 255, 158, 0.15)",
                  color: theme.colors.primaryColors,
                  fontWeight: 800,
                  fontSize: 11,
                  borderRadius: 1,
                }}
              />
              <Typography
                variant="body2"
                color={textSecondary}
                fontWeight={600}
              >
                • ID:{" "}
                {userData?.contractAddress?.substring(0, 10) || "RM-8842-X"}
              </Typography>
            </Box>

            <Typography
              variant="h2"
              color={theme.colors.primaryColors}
              fontWeight={700}
              sx={{ fontSize: { xs: 32, md: 40 }, mb: 1, lineHeight: 1 }}
            >
              {userData?.fullname || "Alex Sterling"}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              mb={2}
              justifyContent={{ xs: "center", sm: "flex-start" }}
              flexWrap="wrap"
            >
              <Typography variant="h6" color={textSecondary} fontWeight={600}>
                Senior Regional Manager
              </Typography>
              <Typography variant="h6" color={borderColors} fontWeight={400}>
                /
              </Typography>
              <Typography variant="h6" color={textSecondary} fontWeight={600}>
                Northern Plains Sector
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={3}
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Box display="flex" alignItems="center" gap={0.5}>
                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: textSecondary }}
                />
                <Typography
                  variant="body2"
                  color={textSecondary}
                  fontWeight={500}
                >
                  Bismarck, North Dakota
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <CalendarTodayIcon
                  fontSize="small"
                  sx={{ color: textSecondary }}
                />
                <Typography
                  variant="body2"
                  color={textSecondary}
                  fontWeight={500}
                >
                  Tenure: 6.4 Years
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          display="flex"
          gap={2}
          mt={{ xs: 2, md: 0 }}
          width={{ xs: "100%", md: "auto" }}
        >
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: textPrimary,
              borderColor: borderColors,
              bgcolor: cardBg,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 1 },
              "&:hover": { borderColor: theme.colors.primaryColors },
            }}
          >
            Download Resume
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: theme.colors.fourGreenColors,
              color: textPrimary,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "none",
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 1 },
              "&:hover": {
                bgcolor: theme.colors.primaryColors,
                color: theme.colors.bgColors,
              },
            }}
          >
            Update Credentials
          </Button>
        </Box>
      </Box>

      {/* Summary Stats Cards */}
      <Grid container spacing={3}>
        {/* ACTIVE FARMERS MANAGED */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColors}`,
              borderRadius: 3,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="caption"
                color={textSecondary}
                fontWeight={700}
                letterSpacing={0.5}
                display="block"
                mb={2}
              >
                ACTIVE FARMERS MANAGED
              </Typography>
              <Box display="flex" alignItems="baseline" gap={1.5} mb={3}>
                <Typography
                  variant="h2"
                  color={textPrimary}
                  fontWeight={700}
                  sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, lineHeight: 1 }}
                >
                  284
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.colors.primaryColors}
                  fontWeight={600}
                >
                  +12% vs last Q
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  height: 4,
                  borderRadius: 2,
                  bgcolor: theme.colors.thirdBgColors,
                  "& .MuiLinearProgress-bar": {
                    bgcolor: theme.colors.fourGreenColors,
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* REGIONAL YIELD AVERAGE */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColors}`,
              borderRadius: 3,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="caption"
                color={textSecondary}
                fontWeight={700}
                letterSpacing={0.5}
                display="block"
                mb={2}
              >
                REGIONAL YIELD AVERAGE
              </Typography>
              <Box display="flex" alignItems="baseline" gap={1.5} mb={3}>
                <Typography
                  variant="h2"
                  color={theme.colors.fourGreenColors}
                  fontWeight={700}
                  sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, lineHeight: 1 }}
                >
                  94%
                </Typography>
                <Typography variant="body2" color="#D84315" fontWeight={600}>
                  Optimal Range
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={94}
                sx={{
                  height: 4,
                  borderRadius: 2,
                  bgcolor: theme.colors.thirdBgColors,
                  "& .MuiLinearProgress-bar": { bgcolor: "#D84315" },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* MILESTONES APPROVED */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${borderColors}`,
              borderRadius: 3,
              boxShadow: "none",
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="caption"
                color={textSecondary}
                fontWeight={700}
                letterSpacing={0.5}
                display="block"
                mb={2}
              >
                MILESTONES APPROVED
              </Typography>
              <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                <Typography
                  variant="h2"
                  color={textPrimary}
                  fontWeight={700}
                  sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, lineHeight: 1 }}
                >
                  1,200
                </Typography>
                <CheckCircleIcon
                  sx={{ color: theme.colors.primaryColors, fontSize: 32 }}
                />
              </Box>
              <Typography
                variant="body2"
                color={textSecondary}
                fontStyle="italic"
              >
                Top 5% performer in Central Hub
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Bottom Section */}
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid
          size={{ xs: 12, lg: 7 }}
          display="flex"
          flexDirection="column"
          gap={4}
        >
          {/* Contact Information */}
          <Card
            sx={{
              bgcolor: theme.colors.thirdBgColors,
              borderRadius: 3,
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
              >
                <Typography
                  variant="h6"
                  color={theme.colors.primaryColors}
                  fontWeight={700}
                >
                  Contact Information
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ cursor: "pointer" }}
                >
                  <SortIcon
                    sx={{ color: textPrimary, transform: "scaleX(-1)" }}
                    fontSize="small"
                  />
                  <Typography
                    variant="body2"
                    color={textPrimary}
                    fontWeight={700}
                  >
                    Edit Details
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    fontWeight={700}
                    letterSpacing={0.5}
                    display="block"
                    mb={0.5}
                  >
                    EMAIL ADDRESS
                  </Typography>
                  <Typography
                    variant="body1"
                    color={textPrimary}
                    fontWeight={600}
                  >
                    a.sterling@terraformaledger.com
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    fontWeight={700}
                    letterSpacing={0.5}
                    display="block"
                    mb={0.5}
                  >
                    PHONE NUMBER
                  </Typography>
                  <Typography
                    variant="body1"
                    color={textPrimary}
                    fontWeight={600}
                  >
                    +1 (701) 555-0198
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    fontWeight={700}
                    letterSpacing={0.5}
                    display="block"
                    mb={0.5}
                  >
                    OFFICE ADDRESS
                  </Typography>
                  <Typography
                    variant="body1"
                    color={textPrimary}
                    fontWeight={600}
                  >
                    Central Management Hub, Ste 402, 1200 Prairie Sky Way,
                    <br />
                    Bismarck, ND 58501
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Assigned Geographic Sectors */}
          <Box>
            <Typography
              variant="h5"
              color={theme.colors.primaryColors}
              fontWeight={700}
              mb={3}
            >
              Assigned Geographic Sectors
            </Typography>
            <Grid container spacing={3}>
              {/* Sector 1 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    bgcolor: cardBg,
                    border: `1px solid ${borderColors}`,
                    borderRadius: 3,
                    boxShadow: "none",
                    height: "100%",
                  }}
                >
                  <CardContent
                    sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}
                  >
                    {/* Placeholder Map Icon/Shape */}
                    <Box
                      width={80}
                      height={80}
                      borderRadius={2}
                      bgcolor={theme.colors.thirdBgColors}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Box
                        border="1px solid rgba(255,255,255,0.1)"
                        width="60%"
                        height="60%"
                        borderRadius="50%"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        color={theme.colors.primaryColors}
                        fontWeight={700}
                        mb={0.5}
                      >
                        Northern Zone 4A
                      </Typography>
                      <Typography
                        variant="caption"
                        color={textSecondary}
                        fontWeight={600}
                        display="block"
                        mb={1.5}
                      >
                        142 FARMERS • 4.2K ACRES
                      </Typography>
                      <Chip
                        label="HIGH PERFORMANCE"
                        size="small"
                        sx={{
                          bgcolor: "rgba(44, 255, 158, 0.15)",
                          color: theme.colors.primaryColors,
                          fontWeight: 800,
                          fontSize: 9,
                          borderRadius: 1,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Sector 2 */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    bgcolor: cardBg,
                    border: `1px solid ${borderColors}`,
                    borderRadius: 3,
                    boxShadow: "none",
                    height: "100%",
                  }}
                >
                  <CardContent
                    sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}
                  >
                    {/* Placeholder Map Shape */}
                    <Box
                      width={80}
                      height={80}
                      borderRadius={2}
                      bgcolor="transparent"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Box
                        bgcolor={theme.colors.thirdBgColors}
                        width="80%"
                        height="70%"
                        borderRadius={"40% 60% 70% 30% / 40% 50% 60% 50%"}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        color={theme.colors.fourGreenColors}
                        fontWeight={700}
                        mb={0.5}
                      >
                        West Plateau
                      </Typography>
                      <Typography
                        variant="caption"
                        color={textSecondary}
                        fontWeight={600}
                        display="block"
                        mb={1.5}
                      >
                        142 FARMERS • 3.8K ACRES
                      </Typography>
                      <Chip
                        label="DELAYED REPORTS"
                        size="small"
                        sx={{
                          bgcolor: "rgba(216, 67, 21, 0.15)",
                          color: "#D84315",
                          fontWeight: 800,
                          fontSize: 9,
                          borderRadius: 1,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Column - Personal Activity Log */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Card
            sx={{
              bgcolor: theme.colors.thirdBgColors,
              borderRadius: 3,
              boxShadow: "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
              >
                <Typography
                  variant="h6"
                  color={theme.colors.primaryColors}
                  fontWeight={700}
                >
                  Personal Activity Log
                </Typography>
                <HistoryIcon sx={{ color: textSecondary }} />
              </Box>

              {/* Timeline Items */}
              <Box position="relative">
                {/* Vertical Line */}
                <Box
                  position="absolute"
                  left={5}
                  top={10}
                  bottom={20}
                  width={2}
                  bgcolor={borderColors}
                />

                {/* Item 1 */}
                <Box position="relative" pl={4} mb={4}>
                  <Box
                    position="absolute"
                    left={0}
                    top={4}
                    width={12}
                    height={12}
                    borderRadius="50%"
                    bgcolor={theme.colors.primaryColors}
                    border={`3px solid ${theme.colors.thirdBgColors}`}
                  />
                  <Typography
                    variant="body2"
                    color={textPrimary}
                    fontWeight={600}
                    mb={0.5}
                  >
                    Approved disbursement for{" "}
                    <Box component="span" color={theme.colors.primaryColors}>
                      Samuel Okonjo
                    </Box>
                  </Typography>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                    mb={1.5}
                  >
                    <HistoryIcon sx={{ fontSize: 12 }} /> Today at 11:42 AM
                  </Typography>
                  <Box
                    bgcolor={cardBg}
                    borderRadius={2}
                    p={2}
                    border={`1px solid ${borderColors}`}
                  >
                    <Typography
                      variant="caption"
                      color={textSecondary}
                      display="block"
                    >
                      Verified Q3 Harvest Metrics for Wheat Sector A. Milestone
                      4 of 5.
                    </Typography>
                  </Box>
                </Box>

                {/* Item 2 */}
                <Box position="relative" pl={4} mb={4}>
                  <Box
                    position="absolute"
                    left={0}
                    top={4}
                    width={12}
                    height={12}
                    borderRadius="50%"
                    bgcolor={borderColors}
                    border={`3px solid ${theme.colors.thirdBgColors}`}
                  />
                  <Typography
                    variant="body2"
                    color={textPrimary}
                    fontWeight={600}
                    mb={0.5}
                  >
                    Updated Harvest Report for{" "}
                    <Box component="span" color={theme.colors.fourGreenColors}>
                      Zone 4A
                    </Box>
                  </Typography>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                  >
                    <HistoryIcon sx={{ fontSize: 12 }} /> Yesterday at 4:15 PM
                  </Typography>
                </Box>

                {/* Item 3 */}
                <Box position="relative" pl={4} mb={4}>
                  <Box
                    position="absolute"
                    left={0}
                    top={4}
                    width={12}
                    height={12}
                    borderRadius="50%"
                    bgcolor={borderColors}
                    border={`3px solid ${theme.colors.thirdBgColors}`}
                  />
                  <Typography
                    variant="body2"
                    color={textPrimary}
                    fontWeight={600}
                    mb={0.5}
                  >
                    Onboarded{" "}
                    <Box component="span" color={theme.colors.fourGreenColors}>
                      Prairie Vista Farms
                    </Box>
                  </Typography>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                    mb={1}
                  >
                    <HistoryIcon sx={{ fontSize: 12 }} /> Oct 24, 2023
                  </Typography>
                  <Box display="flex" gap={1}>
                    <Chip
                      label="NEW_ENTITY"
                      size="small"
                      sx={{
                        bgcolor: theme.colors.fourGreenColors,
                        color: theme.colors.white,
                        fontWeight: 800,
                        fontSize: 10,
                        borderRadius: 1,
                      }}
                    />
                    <Chip
                      label="WEST_SECTOR"
                      size="small"
                      sx={{
                        bgcolor: cardBg,
                        color: textSecondary,
                        fontWeight: 800,
                        fontSize: 10,
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>

                {/* Item 4 */}
                <Box position="relative" pl={4}>
                  <Box
                    position="absolute"
                    left={0}
                    top={4}
                    width={12}
                    height={12}
                    borderRadius="50%"
                    bgcolor={borderColors}
                    border={`3px solid ${theme.colors.thirdBgColors}`}
                  />
                  <Typography
                    variant="body2"
                    color={textPrimary}
                    fontWeight={600}
                    mb={0.5}
                  >
                    System Login from New IP (Hub 01)
                  </Typography>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                  >
                    <HistoryIcon sx={{ fontSize: 12 }} /> Oct 23, 2023
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            <Button
              fullWidth
              sx={{
                py: 2.5,
                borderRadius: "0 0 12px 12px",
                bgcolor: cardBg,
                color: textPrimary,
                textTransform: "none",
                fontWeight: 600,
                borderTop: `1px solid ${borderColors}`,
                "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
              }}
            >
              VIEW FULL HISTORY LOG
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Maintain QR Modal */}
      <QrDialog
        walletAddress={address ?? ""}
        open={isQrOpen}
        onClose={closeQrCode}
      />
    </Box>
  );
}
