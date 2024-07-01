import { Box, Text } from '@chakra-ui/react';

const MidComponent = ({image,title,des}:{image:string,title:string,des:string}) => {
    return <Box textAlign={'center'}>
            <Box w={'150px'} h={'100px'}  ml={['10%','25%','25%']}>
                <img src={image} alt="image" />
            </Box>
            <Box w={'150px'}  ml={['10%','25%','25%']}>
                <Text as={'b'} fontSize={'xl'} color={'#1857a6'}>{title}</Text>
            </Box>
            <br />
            <Box w={['200px','300px','400px']} >
                <Text>{des}</Text>
            </Box>
            <br />
            <br />
       </Box>
  
}

export {MidComponent}