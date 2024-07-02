import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";


const HappyClients = () => {
    return <Box >

        <Box textAlign={'left'} >

            <Box display={{lg:'flex'}} ml={'30%'} mt={'8%'}>
               <Box w={'200px'} ml={['0','15%','20%','0']} mr={'20px'}>
                    <img 
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=907,fit=crop/lilofn1qx/customer1-YX493ZqPx2F9pvBp.png" 
                        alt=""
                        style={{borderRadius:"20px",width:'100%',height:'100%'}}
                         />
               </Box>

               <Box w={['200px','200px','200px','400px']} ml={['0','15%','20%','0']}>
                    <Box >
                        <Text fontSize={'xl'} as={'b'} color={'#1857a6'}>John Bjerrand</Text>
                    </Box>
                    <Box >
                            I work in agricultural consulting, meaning that we often need to use big and complex 
                            datasets to justify expensive investments for our clients. Lilo's consultants helped 
                            us see the big picture with their visualization tools and expertise.
                    </Box>
               </Box>
            </Box>

            <Box display={{lg:'flex'}} ml={'30%'} mt={'8%'}>
               <Box w={'200px'} ml={['0','15%','20%','0']} mr={'20px'}>
                    <img 
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=893,fit=crop/lilofn1qx/customer2-AQE9lXLJejf8qVMo.png" 
                        alt=""
                        style={{borderRadius:"20px",width:'100%',height:'100%'}}
                         />
               </Box>

               <Box w={['200px','200px','200px','400px']} ml={['0','15%','20%','0']}>
                    <Box >
                        <Text fontSize={'xl'} as={'b'} color={'#1857a6'}>Anna Claudio</Text>
                    </Box>
                    <Box >
                        As the in-house supplier manager, it's sometimes had to understand which manufacturers 
                        work best for our needs. Lilo's data analysis helped us identify where we could save and 
                        which manufacturers worked the best for us in the long term.
                    </Box>
               </Box>
            </Box>

        </Box>
    </Box>
}

export default HappyClients