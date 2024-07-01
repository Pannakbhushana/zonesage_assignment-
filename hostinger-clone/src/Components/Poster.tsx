import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";


const Poster = () => {
    return <Box className={Styles.poster}>
        <br />
        <br />
        <Box w={['50%','40%','100%']} ml={['25%','30%','0']}>
            <Text fontSize={['40px', '40px', '80px']} fontWeight={['600', '600', '900']} lineHeight={['50px', '50px', '140px']}>
                What we’re <span style={{ color: '#ff9935' }}>good</span> at?
            </Text>
        </Box>
        <br />
        <Box w={['40%','40%','100%']} ml={['30%','30%','0']}>
            <Text color={'black'}>
                We believe in your success and that big data can help you achieve the best <br />
                results for your business, regardless of your field or target market.
            </Text>
        </Box>
    </Box>
}

export default Poster