import { Box, Text, Flex } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";


const Footer = () => {
    return <Box className={Styles.footer} mt={'-2%'}>
        <Box className={Styles.footerContainer} ml={['10%','15%','32%','10%']}>
            <Box className={Styles.footerLogo}>
                <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
                    <Text
                        ml={'10%'}
                        fontWeight={750}
                        fontSize={'5xl'}
                        fontFamily={'heading'}
                        color={'white'}>
                        lil
                    </Text>
                    <Box border={'8px solid white'} w={'30px'} h={'20px'} borderRadius={'35%'} mt={'35px'} ml={'1px'}>
                        <Box border={'5px solid #1857ab'} w={'18px'} h={'5px'} borderRadius={'40%'} mt={'-2px'} ml={'-2px'}></Box>
                    </Box>

                </Flex>
            </Box>

            <Box className={Styles.footerCh2} textAlign={'left'}>
                <Box className={Styles.footerContent}>
                    <Text color={'#ff9935'} fontSize={'2xl'} as={'b'}>Contacts</Text>
                    <Text color={'#fff'} fontSize={'sm'} >
                        +1234556677889 <br />
                        lilo@example.com
                    </Text>
                </Box>
                <Box className={Styles.footerContent}>
                    <Text color={'#ff9935'} fontSize={'2xl'} as={'b'}>Location</Text>
                    <Text color={'#fff'} fontSize={'sm'} >
                        3721 Single Street <br />
                        Quincy, MA 02169
                    </Text>
                </Box>
                <Box className={Styles.footerContent}>
                    <Text color={'#ff9935'} fontSize={'2xl'} as={'b'}>Hours</Text>
                    <Text color={'#fff'} fontSize={'sm'} >
                        I-V 9:00-18:00 <br />
                        VI - VII   Closed
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Footer