import { Box, Grid } from "@mui/material";
import Navbar from "./component/navbar";
import HeroBanner from "./component/hero-banner";
import StatCard from "./component/stat-card";
import SectionHeader from "./component/section-header";
import BentoCard from "./component/bento-card";
import NftPromoBanner from "./component/nft-promo-banner";
import StablecoinPromoBanner from "./component/stablecoin-promo-banner";
import CashbackNftBanner from "./component/cashback-nft-banner";
import CenturyBanner from "./component/century-banner";
import CtaBanner from "./component/cta-banner";
import Footer from "./component/footer";
import RoleDialog from "./component/role-dialog";
import { imageConfig } from "@/core/config/images-config";

import { LandingPageProvider } from "./context/landing-page-context";
import { landingPageData } from "./constants/landing-page-data";

export default function LandingPageView() {
    const {
        navItems,
        heroBannerData,
        solvingProblemData,
        growthData,
        footerData,
        logoSrc,
    } = landingPageData;

    return (
        <LandingPageProvider>
            {/* Outer frame — creates space between content and viewport edges */}
            <Box sx={{ backgroundColor: "#000", p: { xs: 1, md: 1.5 }, minHeight: "100vh" }}>
            {/* Inner framed container with rounded corners */}
            <Box sx={{
                position: "relative",
                backgroundColor: "var(--bg-colors)",
                borderRadius: "12px",
                overflow: "clip",
                border: "1px solid rgba(255,255,255,0.06)",
            }}>
                {/* Banner Section */}
                <Box component="section" id="banner">
                    {/* Navbar */}
                    <Navbar
                        logoSrc={logoSrc}
                        navItems={navItems}
                        ctaLabel="Connect"
                        activeHref={navItems[0]?.href}
                    />

                    {/* Hero Banner */}
                    <HeroBanner
                        badgeText={heroBannerData.badgeText}
                        heading={heroBannerData.heading}
                        secheading={heroBannerData.secheading}
                        subheading={heroBannerData.subheading}
                        // mobileBackgroundImage={heroBannerData.mobileBackgroundImage}
                        desktopBackgroundImage={heroBannerData.desktopBackgroundImage}
                        tabItems={heroBannerData.tabItems}
                    />

                </Box>

                {/* Solving Problem Section */}
                <Box
                    component="section"
                    id="solving-problem"
                    sx={{
                        px: { xs: 3, lg: 8 },
                        py: { xs: 8, lg: 12 },
                    }}
                >
                    <Box sx={{ maxWidth: "72rem", mx: "auto" }}>
                        {/* Section Header */}
                        <SectionHeader
                            logoSrc={solvingProblemData.header.logoSrc}
                            heading={solvingProblemData.header.heading}
                            subheading={solvingProblemData.header.subheading}
                        />

                        {/* Bento Grid */}
                        {/* <Grid container spacing={1.5} columns={10} sx={{ mb: 4 }}>
                            {solvingProblemData.bentoCards.map((card) => (
                                <Grid key={card.id} size={{ xs: 10, sm: 5, md: 2 }}>
                                    <BentoCard
                                        title={card.title}
                                        description={card.description}
                                        imageSrc={card.imageSrc}
                                    />
                                </Grid>
                            ))}
                        </Grid> */}

                        {/* NFT Promo Banner */}
                        <NftPromoBanner imageSrc={imageConfig.icon.nftClaimIcon} />

                        {/* Stablecoin Promo Banner */}
                        <Box sx={{ mt: 6 }}>
                            <StablecoinPromoBanner
                                stakingImageSrc={imageConfig.icon.stakingIcon}
                                userImageSrc={imageConfig.icon.userIcon}
                            />
                        </Box>

                        {/* Cashback NFT Banner */}
                        <Box sx={{ mt: 6 }}>
                            <CashbackNftBanner imageSrc={imageConfig.icon.nftRewardIcon} />
                        </Box>


                        {/* Century Banner */}
                        <Box sx={{ mt: 6 }}>
                            <CenturyBanner imageSrc={imageConfig.icon.centuryIcon} />
                        </Box>
                    </Box>
                </Box>

                {/* Growth with Stomatrade Section */}
                {/* <Box component="section" id="growth-with-stomatrade">
                    <CtaBanner
                        badgeText={growthData.badgeText}
                        heading={growthData.heading}
                        description={growthData.description}
                        // mobileBackgroundImage={growthData.mobileBackgroundImage}
                        desktopBackgroundImage={growthData.desktopBackgroundImage}
                    />
                </Box> */}

                {/* Footer Section */}
                <Box component="section" id="footer">
                    <Footer
                        logoSrc={logoSrc}
                        socialLinks={footerData.socialLinks}
                        linkColumns={footerData.linkColumns}
                        copyrightText={footerData.copyrightText}
                    />
                </Box>

                <RoleDialog />
            </Box>
            </Box>
        </LandingPageProvider>
    );
}
