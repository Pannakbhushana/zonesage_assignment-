import { Box, Text } from '@chakra-ui/react';

const OurApprochComponent = ({ num, title, des }: { num: number, title: string, des: string }) => {
    return <Box display={{ lg: 'flex' }} w={['100%', '100%', '50%']} ml={['0', '0', '25%']}   >

                <Box textAlign={'left'} p={{ lg: '25px' }}  >
                    <Text fontSize={'100px'} as={'b'} color={'#ff9935'} >{num}</Text>
                </Box>

                <Box h={'30%'} mt={{ lg: '15%' }}>
                    <Box textAlign={'left'} h={'50%'} >
                        <Text fontSize={'3xl'} as={'b'} color={'#fff'} lineHeight={'20px'}>{title}</Text>
                    </Box>
                    <br />
                    <Box textAlign={'left'} h={'50%'} >
                        <Text fontSize={'sm'} color={'#fff'} >{des}</Text>
                    </Box>
                </Box>
    </Box>

}

export { OurApprochComponent }