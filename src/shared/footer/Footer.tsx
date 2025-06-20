'use client';

import { scroller } from 'react-scroll';
import IconDiscord from '../icons/IconDiscord';
import IconTelegtam from '../icons/IconTelegtam';
import IconTiktok from '../icons/IconTiktok';
import IconTwitter from '../icons/IconTwitter';
import styles from './Footer.module.scss';
import { useNavationStore } from '@/app/store/navigation';

const Footer = () => {
    const { setNavigation1 } = useNavationStore();
    const { setNavigation2 } = useNavationStore();
    const handleScroll = (sectin: string, routeLink?: any) => {
        if (sectin === 'nav_1') {
            if (routeLink) {
                setNavigation1(routeLink);
            }
        } else if (sectin === 'nav_2') {
            if (routeLink) {
                setNavigation2(routeLink);
            }
        }
        scroller.scrollTo(sectin, {
            smooth: true,
            duration: 1000,
        });
    };
    return (
        <div className="container">
            <footer className={`${styles.footer} df jcc`}>
                <div className={`${styles.wrapper} df fdc jcsb `}>
                    <div className={`${styles.navigations} `}>
                        <div className={`${styles.navigationsDesktop} df jcsa ais`}>
                            <button onClick={() => handleScroll('home')}>Главная</button>
                            <div className={`${styles.column} df fdc`}>
                                <button onClick={() => handleScroll('nav_1', 'О компании')}>О нас</button>
                                <button onClick={() => handleScroll('nav_1', 'Токеномика')}>Токеномика</button>
                                <button onClick={() => handleScroll('nav_1', 'RoadMap')}>RoadMap</button>
                            </div>
                            <button onClick={() => handleScroll('buy-token')}>Покупка токена</button>
                            <div className={`${styles.column} df fdc`}>
                                <button onClick={() => handleScroll('nav_2', 'Соц-сети')}>Соц-сети</button>
                                <button onClick={() => handleScroll('nav_2', 'Амбасадор')}>Наш Амбасадор</button>
                                <button onClick={() => handleScroll('nav_2', 'Отзывы')}>Отзыв</button>
                            </div>
                            <button onClick={() => handleScroll('questions')}>FOQ</button>
                        </div>
                    </div>
                    <div className="df jcc">
                        <div className={`${styles.mobileNavigations} ${styles.navigations} df fdc `}>
                            <button>Главная</button>
                            <button onClick={() => handleScroll('nav_1', 'О компании')}>О нас</button>
                            <button onClick={() => handleScroll('nav_1', 'Токеномика')}>Токеномика</button>
                            <button onClick={() => handleScroll('nav_1', 'RoadMap')}>RoadMap</button>
                            <button onClick={() => handleScroll('buy-token')}>Покупка токена</button>
                            <button onClick={() => handleScroll('nav_2', 'Соц-сети')}>Соц-сети</button>
                            <button onClick={() => handleScroll('nav_2', 'Амбасадор')}>Наш Амбасадор</button>
                            <button onClick={() => handleScroll('nav_2', 'Отзывы')}>Отзыв</button>
                            <button onClick={() => handleScroll('questions')}>FOQ</button>
                        </div>
                    </div>

                    <div className={`${styles.socials} df jcsa `}>
                        <div>
                            <div className={styles.social}>
                                <IconDiscord />
                                Discord
                            </div>
                            <div className={styles.border}></div>
                        </div>
                        <div>
                            <div className={styles.social}>
                                <IconTelegtam />
                                Telegram
                            </div>
                            <div className={styles.border}></div>
                        </div>
                        <div>
                            <div className={styles.social}>
                                <IconTiktok />
                                TikTok
                            </div>
                            <div className={styles.border}></div>
                        </div>
                        <div>
                            <div className={styles.social}>
                                <IconTwitter />
                                Twitter
                            </div>
                            <div className={styles.border}></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
