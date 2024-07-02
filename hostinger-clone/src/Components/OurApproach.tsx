import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import { OurApprochComponent } from './OurApprochComponent';

const OurApproach = () => {
    interface OurApproachItem {
        num: number;
        title: string;
        des: string;
    }
    
    const ourApproachData: OurApproachItem[] = [
        {
            num:1,
            title: 'Business Challenge Review',
            des: "We help you realize the biggest challenges you're facing."
        },
        {
            num:2,
            title: 'Data Collection and Preparation',
            des: "Together, we'll collect and format all the relevant data."
        },
        {
            num:3,
            title: 'Data Analysis',
            des: "We dive deep into the data, and aim to understand the underlying why."
        },
        {
            num:4,
            title: 'Business Implementation',
            des: "Implementation often happens in phases paired with vigorous testing."
        },
    ];

    return <Box className={Styles.ourApproach}>

        <Box className={Styles.ourApproachCh1}>
           
            <Box zIndex={2} w={'100%'}>
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
            
        </Box>
    </Box>
}

export default OurApproach