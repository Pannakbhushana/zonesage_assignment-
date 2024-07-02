import { Box,Text,Button } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import FormElement from './FormElement';


const Contact = () => {
    return <Box className={Styles.contact}>

        <Box className={Styles.contactCh1} mt={'5%'}>
            <Box  h={'80px'} w={'60px'} mb={'10%'} display={{lg:'none'}}>
                <img src="/circle.png" alt="image" style={{width:"100%",height:"100%"}} />
            </Box>
            <Box className={Styles.contactContent} textAlign={'left'}>
                <Text fontSize={'4xl'} as={'b'} color={'#fff'}>Contact <span style={{color:'#ff9935'}}>us</span></Text>
                <Text fontSize={'md'}  color={'#fff'}>
                    Whether you have a request, a query, or want to work with us, use the form below to get in 
                    touch with our team. 
                </Text>
            </Box>
            <Box className={Styles.contactForm}>
                <FormElement title='Name' des={'Your name'}/>
                <br/>
                <FormElement title='Last name' des={'Your last name'}/>
                <br/>
                <FormElement title='Your email*' des={'Your email address'}/>
                <br/>
                <FormElement title='Message**' des={'Enter your message*'} widths={'100px'}/>
                <br />
                <Box textAlign={'left'}>
                    <Button
                        mt={'1%'}
                        size='md'
                        height='48px'
                        width='180px'
                        borderRadius={'25px'}
                        color={'#fff'}
                        colorScheme='yellow'
                        bg={'#ff9935'}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>

        <Box className={Styles.contactImageContainer} display={['none','none','none','block']}>
            <img src="/circle.png" alt="image" style={{width:"100%",height:"100%"}} />
        </Box>
    </Box>
}

export default Contact
