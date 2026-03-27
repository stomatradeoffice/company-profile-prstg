import { imageConfig } from "@/core/config/images-config";

export const landingPageData = {
    navItems: [
        { label: "Ecosystem", href: "#discover" },
        { label: "Network", href: "#features" },
        { label: "Governance", href: "#ecosystem" },
        { label: "Docs", href: "#my-stom" },
    ],
    heroBannerData: {
        badgeText: "DYNAMIC ECONOMY V2.0",
        heading: "Blockchain Ecosystem for the Global Food Economy",
        secheading: "Real World Assets. On-Chain. Forever",
        subheading: "Prestige tokenizes physical food commodities into tradeable, collateralizable blockchain assets - connecting farmers, investors, depots, and consumers through a single transparent protocol on Polygon PoS.",
        mobileBackgroundImage: imageConfig.background.mobile.bgBannerMobile,
        desktopBackgroundImage: imageConfig.background.desktop.bgBannerDesktop,
    },
    solvingProblemData: {
        header: {
            logoSrc: "Prestige Chain",
            heading: "Let’s make sustainable agriculture easy for you.",
            subheading: "Revolutionizing farming through decentralization.",
        },
        bentoCards: [
            { id: "agriculture-revenue", title: "Agriculture Revenue", description: "Supports farmers through profit-sharing models and direct yield optimization on-chain.", imageSrc: imageConfig.icon.agricultureIcon },
            { id: "asset-tokenization", title: "Asset Tokenization Fees", description: "Convert real-world assets into digital tokens with institutional grade security and liquidity.", imageSrc: imageConfig.icon.assetTokenIcon },
            { id: "commodity-transactions", title: "Commodity Transactions", description: "Streamlined trading processes for physical goods with instant settlement layers.", imageSrc: imageConfig.icon.commodityTransactionsIcon },
            { id: "retail-depot", title: "Retail Depot Licensing", description: "Licensing for retail depots, enabling localized distribution networks across the ecosystem.", imageSrc: imageConfig.icon.retailDepotIcon },
            { id: "commodity-listing", title: "Commodity Listing Fees", description: "Gain global visibility for producers through our verified marketplace listing protocol.", imageSrc: imageConfig.icon.commodityListingIcon },
            { id: "commodity-trading", title: "Commodity Trading Fees", description: "Efficient buying and selling with low-latency execution and deep liquidity pools.", imageSrc: imageConfig.icon.commodityTradingIcon },
            { id: "nft-membership", title: "NFT Membership Sales", description: "Exclusive access to premium tiers and governance through strategic NFT ownership.", imageSrc: imageConfig.icon.nftMemberIcon },
            { id: "warehouse-receipt", title: "Warehouse Receipt Fees", description: "Secure storage verification and proof-of-reserves for physical commodity backings.", imageSrc: imageConfig.icon.warehouseIcon },
            { id: "aggregator-registration", title: "Aggregator Registration", description: "Third-party aggregator connection allowing seamless integration of external dApps.", imageSrc: imageConfig.icon.aggregatorIcon },
            { id: "exchange-trading", title: "Exchange Trading Fees", description: "Optimized asset exchange via our proprietary AMM and order-book hybrid system.", imageSrc: imageConfig.icon.exchangeTradingIcon },
            { id: "margin-fees", title: "Margin Fees", description: "Leverage for commodity trading, with automated risk management and liquidation.", imageSrc: imageConfig.icon.marginFeeIcon },
            { id: "cashback-rewards", title: "Cashback Rewards", description: "Incentives for participation and loyalty rewards distributed to active network users.", imageSrc: imageConfig.icon.cashbackRewardsIcon },
            { id: "data-analytics", title: "Data & Analytics", description: "Advanced insights and real-time market telemetry for institutional decision making.", imageSrc: imageConfig.icon.dataAnalyticsIcon },
            { id: "distribution-fees", title: "Distribution Fees", description: "Global producer-to-market connection optimized via decentralized logistics routing.", imageSrc: imageConfig.icon.distributionFeeIcon },
            { id: "insurance-premiums", title: "Insurance Premiums", description: "Risk protection services for cargo, crop, and smart contract failure protocols.", imageSrc: imageConfig.icon.insurancePremiumIcon },
            { id: "carbon-credit", title: "Carbon Credit Program", description: "Trade verified carbon credits and support verified reforestation initiatives globally.", imageSrc: imageConfig.icon.carbonCreditIcon },
            { id: "wallet-pro", title: "Wallet Pro Subscription", description: "Advanced wallet tools including multi-sig, auto-compounding, and tax reporting.", imageSrc: imageConfig.icon.walletProIcon },
            { id: "stablecoin-systems", title: "Stablecoin Systems", description: "Low-volatility transaction layer backed by a diverse basket of physical commodities.", imageSrc: imageConfig.icon.stablecoinIcon },
            { id: "ecosystem-financing", title: "Ecosystem Financing", description: "Project development support through decentralized grant programs and seed funding.", imageSrc: imageConfig.icon.ecosystemIcon },
            { id: "cross-border", title: "Cross-Border Settlements", description: "Fast international settlements bypassing legacy SWIFT delays and high conversion fees.", imageSrc: imageConfig.icon.crossBorderIcon },
        ],
    },
    growthData: {
        badgeText: "Prestige Token",
        heading: "Growth with Prestige Chain",
        description: "Through decentralized finance (DeFi) protocols, we dismantle traditional agricultural monopolies, enabling a community-driven network where farmers and global investors can interact securely and seamlessly without central authorities",
        mobileBackgroundImage: imageConfig.background.mobile.bgMobile,
        desktopBackgroundImage: imageConfig.background.desktop.bgDesktop,
    },
    footerData: {
        newsletter: {
            heading: "Let's connect and create a positive impact together.",
            privacyText: "Your privacy is our ultimate priority. Prestige Ledger secures your personal data and will never share it without your consent. Read our Privacy Policy to learn more.",
            bgImage: imageConfig.background.desktop.bgDesktop,
        },
        brand: {
            description: "Our holistic approach integrates technology, sustainability, and community to create a future where agriculture works hand-in-hand with nature.",
        },
        socialLinks: [
            { icon: "discord", href: "#", label: "Discord" },
            { icon: "instagram", href: "#", label: "Instagram" },
            { icon: "telegram", href: "#", label: "Telegram" },
            { icon: "x", href: "#", label: "X" },
            { icon: "linkedin", href: "#", label: "LinkedIn" },
        ],
        linkColumns: [
            { title: "Discover", links: [{ label: "About us", href: "#" }, { label: "Features", href: "#" }, { label: "Community", href: "#" }, { label: "Ecosystem", href: "#" }] },
            { title: "Resources", links: [{ label: "Whitepaper", href: "#" }, { label: "Staking", href: "#" }, { label: "Prestige Token", href: "#" }, { label: "Partners", href: "#" }] },
            { title: "Our Communities", links: [{ label: "Become a Validator", href: "#" }, { label: "Event", href: "#" }, { label: "FAQ", href: "#" }] },
        ],
        contactItems: [
            { icon: "phone", label: "+123 456 7890", href: "tel:+1234567890" },
            { icon: "email", label: "prestige.ledger@gmail.com", href: "mailto:prestige.ledger@gmail.com" },
        ],
        copyrightText: "© 2026 Prestige Ledger. All rights reserved.",
        legalLinks: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Use", href: "#" },
            { label: "Legal", href: "#" },
            { label: "Site Map", href: "#" },
        ],
    },
    logoSrc: "Prestige Ledger",
};
