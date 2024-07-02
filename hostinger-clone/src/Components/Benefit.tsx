import { Box } from '@chakra-ui/react';
import Styles from "../Styles/Dashboard.module.css";
import { BenefitComponent } from './BenefitComponent';
import { benefitData, benefitData2 } from '../db';

const Benefit: React.FC = () => {
    return (
        <Box mt={'10%'}>
            <Box className={Styles.benefitContiner} >
                {benefitData.map((item, index) => (
                    <BenefitComponent key={index} image={item.image} title={item.title}  />
                ))}
            </Box>
            <Box className={Styles.benefitContiner} >
                {benefitData2.map((item, index) => (
                    <BenefitComponent key={index} image={item.image} title={item.title}  />
                ))}
            </Box>
        </Box>
    );
};

export default Benefit