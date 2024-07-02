import { Box, Text,Button } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import { MidComponent } from './MidComponent';
import { midData } from '../db';


const MidContainer: React.FC = () => {
    return (
        <Box >
            <Box className={Styles.midContiner}>
                {midData.map((item, index) => (
                    <MidComponent key={index} image={item.image} title={item.title} des={item.des} />
                ))}
            </Box>
            <Box  w={'100%'} h={'100px'} className={Styles.contactBox} mb={'10%'}>
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