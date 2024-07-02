import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";


const HelpedCompany = () => {
    return <Box className={Styles.company}>
        <Box className={Styles.companyContainer}>
            <Box className={Styles.companyLogo}>
                <img src="https://assets.zyrosite.com/lilofn1qx/logo1-m7VjREvWwgIZnn2K.svg" alt="" />
            </Box>
            <Box className={Styles.companyLogo}>
                <img src="https://assets.zyrosite.com/lilofn1qx/logo2-m5KgRWEzGEUjkQDW.svg" alt="" />
            </Box>
            <Box className={Styles.companyLogo}>
                <img src="https://assets.zyrosite.com/lilofn1qx/logo3-Y4LgRE57kQHjbOEk.svg" alt="" />
            </Box>
            <Box className={Styles.companyLogo}>
                <img src="https://assets.zyrosite.com/lilofn1qx/logo4-A1aNRgxOpaFnP4b8.svg" alt="" />
            </Box>
        </Box>
    </Box>
}

export default HelpedCompany