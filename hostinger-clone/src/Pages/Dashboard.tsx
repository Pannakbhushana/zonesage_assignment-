import Benefit from '../Components/Benefit';
import Contact from '../Components/Contact';
import MidContainer from '../Components/MidContainer';
import OurApproach from '../Components/OurApproach';
import Poster from '../Components/Poster';
import TopContainer from '../Components/TopContainer';
import { text,text2 } from '../utils';

const Dashboard = () => {
    return <>
        <TopContainer/>
        <Poster start={' What we’re'} middle={'good'} end={'at?'} des={text}/>
        <MidContainer/>
        <OurApproach/>
        <Poster start={'How will you'} middle={'benefit?'} end={''} des={text2}/>
        <Benefit/>
        <Contact/>
    </> 

}

export default Dashboard