import { Box, Text,Button } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import { MidComponent } from './MidComponent';


interface MidDataItem {
    image: string;
    title: string;
    des: string;
}

const midData: MidDataItem[] = [
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon1-YBgxRLPwRBUvalQv.svg',
        title: 'Big Data Consulting',
        des: "Sometimes you need to look far to see close. Our experts help you make sense of big data. "
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon3-mxB9PEqbP5Ta5rkg.svg',
        title: 'Data Infrastructure',
        des: "It's not enough to have data, you also need to have the right tools to manage it day-to-day."
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon2-d956kWb9Jkty1zP4.svg',
        title: 'Data Analytics',
        des: "From in-house training to tailored service packages, we offer a wide range of data analysis services."
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon4-dOq0RrLp8LTPNrN9.svg',
        title: 'Data Visualization',
        des: "In order to make informed decisions, you need to understand your data. We can visualize yours for you."
    },
];

const MidContainer: React.FC = () => {
    return (
        <Box mt={'10%'}>
            <Box className={Styles.midContiner}>
                {midData.map((item, index) => (
                    <MidComponent key={index} image={item.image} title={item.title} des={item.des} />
                ))}
            </Box>

            <Box  w={'100%'} minH={"100px"} mb={'10%'}>
                <Text as={'b'} fontSize={'2xl'} color={'#1857a6'}>Let us help you</Text><br/>
                <Button
                    mt={'1%'}
                    size='md'
                    height='48px'
                    width='180px'
                    borderRadius={'25px'}
                    color={'#fff'}
                    colorScheme='yellow'
                    bg={'#ff9935'}>
                    Contact us
                </Button>
            </Box>
            
        </Box>
    );
};

export default MidContainer