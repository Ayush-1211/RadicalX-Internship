const { default: ICONS } = require("@/components/icons/icons")
const { Grid, Card } = require("@mui/material")
import React from "react"
import Image from "next/image"
import missionsStyles from "@/styles/Missions/styles"

const Missions = () => {
    return (
        <Grid sx={{ ...missionsStyles.main }}> 
            <Card item sx={{ width:'100%', borderRadius:'10px', boxShadow:'none', height:'12.4%'}}>
                <Image src={ICONS.featuredQuest} width={1789} height={244} />
            </Card>
        </Grid>
    )
}

export default Missions