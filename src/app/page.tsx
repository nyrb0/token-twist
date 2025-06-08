import RouteAbout from '@/shared/about-route/RouteAbout';
import Question from '@/shared/question/Question';
import Hr from '@/shared/UI/Hr';
import WhereBuyToken from '@/shared/where-buy/WhereBuyToken';
import Hero from '@/widgets/hero/Hero';
import RouteComminity from '@/shared/about-route/RouteComminity';
import Footer from '@/shared/footer/Footer';

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
            <Question />
            {/* <Hr />
            <Footer /> 
            <RoadMap />  */}
        </>
    );
}
