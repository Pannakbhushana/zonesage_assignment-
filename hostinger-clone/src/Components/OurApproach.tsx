import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import { OurApprochComponent } from './OurApprochComponent';
import { ourApproachData } from '../db';

const OurApproach = () => {

    return <Box className={Styles.ourApproach}>

        <Box className={Styles.ourApproachCh1}>
           
            <Box zIndex={2} w={'100%'}>
            <br />
            <br />
                <Box display={{ lg: 'none' }} >
                    <Text 
                        fontSize={['4xl','4xl','6xl']} 
                        as={'b'} color={'#fff'}>Our <span style={{ color: "#ff9935" }}
                        >
                            approach</span>
                    </Text>
                </Box>

                <br />
               <Box w={{lg:'80%'}} ml={{lg:'20%'}}>
                <img
                        style={{ width: "100%", height: "100%" }}
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=1151,fit=crop/lilofn1qx/approach-m6L1p88KZrclGlpD.png"
                        alt="image" />
               </Box>
            </Box>
        </Box>

        <Box className={Styles.ourApproachCh2}>
            <Box display={['none','none','none','block']} >
            <br />
            <br />
            <br />
                        <Text 
                            fontSize={['4xl','4xl','6xl']} 
                            as={'b'} color={'#fff'}>Our <span style={{ color: "#ff9935" }}
                            >
                                approach</span>
                        </Text>
            </Box>
            {ourApproachData.map((item, index) => (
                    <OurApprochComponent key={index} num={item.num} title={item.title} des={item.des} />
                ))}
            <br />
            <br />
            <br />
        </Box>
    </Box>
}

export default OurApproach