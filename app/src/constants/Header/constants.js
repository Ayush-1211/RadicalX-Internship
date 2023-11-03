const { default: ICONS } = require("@/components/icons/icons");
const { default: ROUTES } = require("@/routes/routes");
const { default: headerTheme } = require("@/themes/Header/theme");

const CONSTANTS = {
    navbarPages: [
        {
            text: 'Missions',
            link: ROUTES.MISSIONS,
            icon: ICONS.rocketicon,
        },
        {
            text: 'Leaderboard',
            link: ROUTES.LEADERBOARD,
            icon: ICONS.trophyicon
        }, 
        {
            text: 'Rewards',
            link: ROUTES.REWARDS,
            icon: ICONS.rewardsicon
        }
    ],
    
    buttons: [
        {
            icon: ICONS.diamondicon,
            number: '20,000',
            background: headerTheme.palette.diamondsBackground,
            borderColor: headerTheme.palette.diamondsBorder
        },
        {
            icon: ICONS.coinicon,
            number: '11,000',
            background: headerTheme.palette.coinsBackground,
            borderColor: headerTheme.palette.coinsBorder
        }
    ]
}
export default CONSTANTS