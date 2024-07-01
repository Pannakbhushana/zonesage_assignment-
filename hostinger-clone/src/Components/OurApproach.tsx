import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";

const OurApproach = () => {
    return <Box className={Styles.ourApproach}>

        <Box className={Styles.ourApproachCh1}>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=1151,fit=crop/lilofn1qx/approach-m6L1p88KZrclGlpD.png" alt="image" style={{width:"100%",height:"100%"}} />
        </Box>

        <Box className={Styles.ourApproachCh2}></Box>
    </Box>
}

export default OurApproach