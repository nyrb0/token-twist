import RouteAbout from '@/shared/route/RouteAbout';
import Question from '@/shared/question/Question';
import Hr from '@/shared/UI/Hr';
import WhereBuyToken from '@/shared/where-buy/WhereBuyToken';
import Hero from '@/widgets/hero/Hero';
import RouteComminity from '@/shared/route/RouteComminity';
import Footer from '@/shared/footer/Footer';

export default function Home() {
    return (
        <>
            <Hero />
            <Hr type={'coin'} />
            <div id="nav_1">
                <RouteAbout />
            </div>
            <Hr type={'buy'} />
            <div id="buy-token">
                <WhereBuyToken />
            </div>
            <Hr type={'buy'} />
            <div id="nav_2">
                <RouteComminity />
            </div>
            <Hr type={'community'} />
            <div id="questions">
                <Question />
            </div>
            <Hr type={'question'} />
            <Footer />
        </>
    );
}
