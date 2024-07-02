import Benefit from '../Components/Benefit';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import HappyClients from '../Components/HappyClients';
import HelpedCompany from '../Components/HelpedCompany';
import MidContainer from '../Components/MidContainer';
import OurApproach from '../Components/OurApproach';
import Poster from '../Components/Poster';
import TopContainer from '../Components/TopContainer';
import { happyClients, text,text2,text3 } from '../utils';

const Dashboard = () => {
    return <>
        <TopContainer/>
        <Poster start={' What we’re'} middle={'good'} end={'at?'} des={text}/>
        <MidContainer/>
        <OurApproach/>
        <Poster start={'How will you'} middle={'benefit?'} end={''} des={text2}/>
        <Benefit/>
        <br />
        <br />
        <br />
        <Poster start={'We’ve'} middle={'helped'} end={'them'} des={text3}/>
        <HelpedCompany/>
        <Poster start={''} middle={'Happy'} end={'clients'} des={happyClients}/>
        <HappyClients/>
        <Contact/>
        <Footer/>
    </> 

}

export default Dashboard