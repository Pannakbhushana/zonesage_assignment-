import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import Poster from '../Components/Poster';


const Dashboard = () => {
    return <>
    <Box className={Styles.topContainer}>

        <Box  className={Styles.firstChild}>
            <Box
                textAlign={'justify'}
                minW={'80%'}
                minH={["45%","45%","55%"]}
                mt={'15%'}
                ml={['5%','5%','15%']}
            >
                <Text fontSize={['80px','100px','130px']} fontWeight={['700','700','900']} lineHeight={['100px','100px','140px']}>
                    Big data
                </Text>
                <Text fontSize={['80px','100px','130px']} fontWeight={['700','700','900']} lineHeight={['100px','100px','140px']}>
                    for big
                </Text>
                <Text fontSize={['80px','100px','130px']} fontWeight={['700','700','900']} lineHeight={['100px','100px','140px']} color={'#ff9935'}>
                    success
                </Text>
            </Box>

            <Box
                textAlign={'justify'}
                ml={['5%','5%','15%']}
            >
                <Text >
                    We help companies comb through big data sets and realize otherwise 
              
                </Text>
                <Text >
                    hidden trends, opportunities and threats to their business. 
                </Text>
            </Box>
        </Box>
            <Box className={Styles.handImageContainer}>
                <img src="/hand.png" alt="image" style={{width:"100%",height:"100%"}} />
            </Box>


        <Box  className={Styles.secondChild}>
                <img src="/hand.png" alt="image" style={{width:"100%",height:"100%"}} />
        </Box>
    </Box>
    <Poster/>
</> 

}

export default Dashboard