import { Box, Text } from '@chakra-ui/react';

interface MidComponentProps {
  image: string;
  title: string;
  des: string;
}

const MidComponent: React.FC<MidComponentProps> = ({ image, title, des }) => {
  return (
    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={['20%','20%','20%','0']}>
      <Box w="150px" h="100px" display="flex" alignItems="center" justifyContent="center" mb={4}>
        <img src={image} alt="" />
      </Box>
      <Box w="170px" display="flex" alignItems="center" justifyContent="center" mb={4}>
        <Text as="b" fontSize="xl" color="#1857a6">
          {title}
        </Text>
      </Box>
      <Box w={['200px', '300px', '400px']} display="flex" alignItems="center" justifyContent="center">
        <Text>{des}</Text>
      </Box>
    </Box>
  );
};

export { MidComponent };
