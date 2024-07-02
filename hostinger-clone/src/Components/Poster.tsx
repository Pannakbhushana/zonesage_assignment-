import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";


const Poster = ({start,middle,end,des}:{start:string,middle:string,end:string,des:string}) => {
    return <Box className={Styles.poster}>
        <br />
        <br />
        <Box w={['50%','40%','100%']} ml={['25%','30%','0']}>
            <Text fontSize={['40px', '40px', '80px']} fontWeight={['600', '600', '900']} lineHeight={['50px', '50px', '140px']}>
                {start} <span style={{ color: '#ff9935' }}>{middle}</span>  {end}
            </Text>
        </Box>
        <br />
        <Box w={'40%'} ml={'30%'} >
            <Text color={'black'}>
                {des}
            </Text>
        </Box>
    </Box>
}

export default Poster