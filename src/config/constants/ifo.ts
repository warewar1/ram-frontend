import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'trustnft',
    address: '0x8F87424743074290a4682231B9e671C4b1c120a6', // Leave empty for "Coming Soon!"
    isActive: true,
    isLinear: true,
    name: 'TrustNFT',
    subTitle: `Decentralized NFT Loans & Marketplace`,
    description: `TrustNFT's platform uses AI and big data to accurately evaluate NFTs and unlock their potential for use as loan collateral. Users can combine DeFi with NFTs to earn yield on selected NFT-backed loans. TrustNFT addresses major problems in the NFT ecosystem, including low liquidity, investment risk, and monetization of assets.`,
    launchDate: 'February 3rd',
    launchTime: '1:00 UTC',
    saleAmount: '30,000,000 TRUSTNFT',
    raiseAmount: '$525,000',
    vestingTime: '3 Months',
    projectSiteUrl: 'https://trustnft.org/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'TRUSTNFT',
    tokenDecimals: 18,
    releaseBlockNumber: 14911408, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: 'stz',
    address: '0xa526477bBf22643bE96D02Ebf3934BA1721059f3', // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: '99Starz',
    subTitle: `The World's Biggest NFT Yield Ecosystem`,
    description: `99Starz is creating a results-driven, cross-chain GameFi ecosystem that will allow game studios, gamers, and collectors alike to participate and win in different ways together. Through their unique GameFi guild model and NFT leasing marketplace, 99Starz will cater to all aspects of the most popular blockchain gaming economies, including Axie Infinity, F1 Delta, and Sorare, just to name a few.`,
    launchDate: 'December 11th',
    launchTime: '5:00 UTC',
    saleAmount: '500,000 STZ',
    raiseAmount: '$250,000',
    vestingTime: '3 Months',
    projectSiteUrl: 'https://99starz.io/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'STZ',
    tokenDecimals: 18,
    releaseBlockNumber: 22364007, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: 'gan',
    address: '0xdDb35EE8d3B54216B114190a1Bc14eB11408BE23', // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: 'Galactic Arena',
    subTitle: 'Welcome to the Galactic Arena!',
    description: `Galactic Arena is the battlefield that everyone has been waiting for! It doesn't matter where your NFT comes from, In this NTFverse, you can bring your favorite heroes along with you! Take part in THE CARNIVAL, then make wagers on PvP battles in REAL TIME! Prizes include BNB, BUSD, GAN! Get on top of the Leaderboard and earn extra rewards!`,
    launchDate: 'November 4th',
    launchTime: '16:00 UTC',
    saleAmount: '80,000,000 GAN',
    raiseAmount: '$400,000',
    vestingTime: '3 Months',
    projectSiteUrl: 'http://galacticarena.io/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'GAN',
    tokenDecimals: 18,
    releaseBlockNumber: 12364007, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: 'nfty',
    address: '0xc55114204b5fA30b34c360De0E938eB3B3d4c0f6', // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: 'NFTY Network',
    subTitle: 'Decentralized NFT Gating Ecosystem',
    description: `NFTY Network is a decentralized NFT ecosystem built to facilitate various innovations in the NFT space, unlocking the true potential of NFTs through gated experiences that connect Web2 and Web3 infrastructures like never before!`,
    launchDate: 'September 29th',
    launchTime: '17:00 UTC',
    saleAmount: '57,200,000 NFTY',
    raiseAmount: '$715,000',
    vestingTime: '3 Months',
    projectSiteUrl: 'https://nftynetwork.io/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'NFTY',
    tokenDecimals: 18,
    releaseBlockNumber: 11342539, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: 'dragonary',
    address: '0x9BC1bC6C4010A2b0384C59b9513d841AA8b5BDF4', // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: 'Dragonary',
    subTitle: 'Decentralized NFT Gaming',
    description: `Dragonary is a brand new game being developed by CoinaryTV for Desktop, iPhone, and Android, where users can play to earn in-game currency. You can collect, trade, and breed various dragon NFTs and battle against the game or other players to win!`,
    launchDate: 'August 7th',
    launchTime: '16:00 UTC',
    saleAmount: '60,000,000 CYT',
    raiseAmount: '$600,000',
    vestingTime: '3 Months',
    projectSiteUrl: 'https://dragonary.com/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'CYT',
    tokenDecimals: 18,
    releaseBlockNumber: 9828870, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: 'bishares',
    address: '0x5B31A7124A4Abf8CA9B4090532A669783d8E11eE', // Leave empty for "Coming Soon!"
    isActive: false,
    isLinear: false,
    name: 'BiShares',
    subTitle: 'Decentralized Index Funds',
    description: `BiShares is BSC's first Index Funds for safely diversifying across crypto assets. Use BNB to purchase a wide basket of assets and gain exposure to the broader crypto market. Never miss out on another moon again!`,
    launchDate: 'July 9th',
    launchTime: '03:00 UTC',
    saleAmount: '128571 BISON',
    raiseAmount: '$450,000',
    totalAmountRaised: '$3,332,641',
    projectSiteUrl: 'https://bishares.finance/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'BISON',
    tokenDecimals: 18,
    releaseBlockNumber: 8993971, // block to start showing contract details
    // burnedTxUrl: '',
  },
  {
    id: 'hifi',
    // address: '0xF9F1B0945A31FB2Ea429014e58fCA47dAEee4743', // Leave empty for "Coming Soon!"
    address: '0x4D5e1E722e9280d44C564ef3FC14E0B03a50ad47', // IAO Aux contract!"
    isActive: false,
    isLinear: false,
    name: 'Hifi',
    subTitle: 'Decentralized retro gaming ecosystem.',
    description:
      'HiFi is a decentralized retro gaming ecosystem driven by its community. It uses staking and gameplay mining participation rewards to create a completely new DeFi gaming experience.',
    launchDate: 'June 11',
    launchTime: '03:00 UTC',
    saleAmount: '120,000,000 HIFI',
    raiseAmount: '$600,000',
    totalAmountRaised: '$24,428,059',
    projectSiteUrl: 'https://hifigamingsociety.com/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'HIFI',
    tokenDecimals: 18,
    releaseBlockNumber: 8135430, // block to start showing contract details
    // burnedTxUrl: '',
  },
  {
    id: 'aperocket',
    address: '0x8AC93DC2F83cEf4032FbC71070Dc5Af06fd9D105',
    isActive: false,
    isLinear: false,
    name: 'ApeRocket',
    subTitle: 'DeFi yield farming aggregator and optimizer for Binance Smart Chain.',
    description:
      'ApeRocket Finance is a suite of products in Decentralized Finance (DeFi) that provides yield optimization strategies through the Binance Smart Chain, using ApeSwap liquidity.',
    launchDate: 'May. 25',
    launchTime: '03:00 UTC',
    saleAmount: ' 55,556 SPACE',
    raiseAmount: '$500,000',
    totalAmountRaised: '$18,498,896',
    projectSiteUrl: 'https://aperocket.finance',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    offeringCurrency: 'SPACE',
    tokenDecimals: 18,
    releaseBlockNumber: 7378325,
    // burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
  },
  {
    id: 'bitfresh',
    address: '0x898aaD14CBebA249D4eEdC9bd22D9B533F0DDf73',
    isActive: false,
    isLinear: false,
    name: 'Bitfresh',
    subTitle: 'The first community-driven iGaming platform where everyone wins.',
    description:
      'Bitfresh is a blockchain-based community driven social iGaming experience that pays dividends to players and token holders. The platform is filled with reward systems to give players many ways to win and earn over time.',
    launchDate: 'Apr. 24',
    launchTime: '03:00 UTC',
    saleAmount: '100,000,000 BFT',
    raiseAmount: '$1,000,000',
    totalAmountRaised: '$5,781,873',
    bananaToBurn: '$500,000',
    projectSiteUrl: 'https://www.bitfresh.win/public-sale',
    currency: 'BANANA-BNB LP',
    currencyAddress: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    offeringCurrency: 'BFT',
    tokenDecimals: 18,
    releaseBlockNumber: 6565331,
    burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
  },
  {
    id: 'jediyield',
    address: '0xCBe256573185d767EfD4a797CB360880728B8fD8',
    isActive: false,
    isLinear: false,
    name: 'Jedi Yield',
    subTitle: 'The only app you need for all your yield farming needs',
    description:
      'Smart portal built to increase convenience and security for BSC yield farmers. Users can freely stake and/or unstake their funds regardless of the accessibility to their favorite yield farming websites. Moreover, users can monitor their portfolios, look at token graphs, and harvest their farms all in one page',
    launchDate: 'Apr. 2',
    launchTime: '03:00 UTC',
    saleAmount: '7,000,000 JDI',
    raiseAmount: '$700,000',
    totalAmountRaised: '$5,749,119',
    bananaToBurn: '$350,000',
    projectSiteUrl: 'https://jdiyield.com/',
    currency: 'BANANA-BNB LP',
    currencyAddress: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    offeringCurrency: 'JDI',
    tokenDecimals: 18,
    releaseBlockNumber: 6044304,
    burnedTxUrl: 'https://bscscan.com/tx/0x5f65d5ce713e115be0646c473688aa052c98896f49d9c0c09ecd13aa8d459a1e',
  },
  {
    id: 'astronaut',
    address: '0xd7e98ca54e6202fb6237b98c881817ed3e54d2ed',
    isActive: false,
    isLinear: false,
    name: 'Astronaut',
    subTitle: 'Decentralized hybrid yield token platform. Built on the Binance Smart Chain',
    description:
      'Protocol built for token pools and auctions enabling projects to raise capital on a decentralized and interoperable environment. Enabling the way your ideas raise capital.',
    launchDate: 'Mar. 15',
    launchTime: '11PM EDT',
    saleAmount: '2,000,000 NAUT',
    raiseAmount: '$400,000',
    totalAmountRaised: '$5,490,742',
    bananaToBurn: '$200,000',
    projectSiteUrl: 'https://astronaut.to/',
    currency: 'BANANA-BNB LP',
    currencyAddress: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    offeringCurrency: 'NAUT',
    tokenDecimals: 8,
    releaseBlockNumber: 5685490,
    burnedTxUrl: 'https://bscscan.com/tx/0xbcfe28f2552d53f3cb49f37d6001aa7708070d3d17f75652c5096b7ecb4ce8fa',
  },
]

export const pastIfos: Ifo[] = ifos.filter((ifo) => !ifo.isActive)

export default ifos
