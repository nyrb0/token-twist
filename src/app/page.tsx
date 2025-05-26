import RouteAbout from '@/shared/about-route/RouteAbout';
import About from '@/shared/about/About';
import Community from '@/shared/community/Community';
import Question from '@/shared/question/Question';
import RoadMap from '@/shared/roadmap/RoadMap';
import CustomChart from '@/shared/UI/chart/CustomChart';
import Hr from '@/shared/UI/Hr';
import WhereBuyToken from '@/shared/where-buy/WhereBuyToken';
import WhereProfit from '@/shared/whereprofit/WhereProfit';
import Hero from '@/widgets/hero/Hero';
import RouteComminity from '@/shared/about-route/RouteComminity';

export default function Home() {
    return (
        <>
            <Hero />
            <Hr />
            <RouteAbout />
            <Hr />
            <WhereBuyToken />
            <Hr />
            <RouteComminity />
            <Hr />
            {/* <CustomChart /> */}
            <Question />
            <Hr />

            {/* <RoadMap /> */}
        </>
    );
}
