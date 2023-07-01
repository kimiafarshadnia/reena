import Description from "../components/Description";
import Input from "../components/Input";
import LasrSection from "../components/LastSection";
import SectionHero from "../components/SectionHero";

const HomePage = () => {
    return ( 
        <div className="w-full h-full flex flex-col justify-center items-center">
            <SectionHero/>
            <Input/>
            <Description/>
            <LasrSection/>
        </div>
     );
}
 
export default HomePage;