import { Box, Text } from '@chakra-ui/react';

interface BenefitComponentProps {
    image: string;
    title: string;
  }
  
  const BenefitComponent: React.FC<BenefitComponentProps> = ({ image, title }) => {
    return (
      <Box 
        textAlign="center" 
        h="50%" 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        mt={['20%','20%','20%','0']}
        >

        <Box w="150px" h="100px"  display="flex" alignItems="center" justifyContent="center">
          <img src={image} alt="pic" />
        </Box>
        <Box w={['120px','120px','300px']}  mt="4">
          <Text as="b" fontSize="2xl" color="#1857a6">
            {title}
          </Text>
        </Box>
      </Box>
    );
  };
  
  export { BenefitComponent };