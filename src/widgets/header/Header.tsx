import styles from './Header.module.scss';
import IconArrowHeader from './icon/IconArrowHeader';
import { scroller } from 'react-scroll';
import { useNavationStore } from '@/app/store/navigation';
import { useScrollDirection } from '@/shared/hooks/useScrollDirection';
import { motion } from 'framer-motion';

const Header = () => {
    const { setNavigation1 } = useNavationStore();
    const { setNavigation2 } = useNavationStore();
    const scrollDirection = useScrollDirection();

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
        <motion.div
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 99999 }}
            initial={{ y: 0 }}
            animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container">
                <motion.header className={`${styles.header} df aic jcc `}>
                    <ul className={`${styles.navigations} df aic jcsa`}>
                        <li onClick={() => handleScroll('home')}>
                            <span>Главная</span>
                            <div className={styles.border}></div>
                        </li>
                        <div className={styles.wrapper}>
                            <li>
                                <span className="df aic">
                                    О нас <IconArrowHeader />
                                </span>
                                <div className={styles.border}></div>
                            </li>
                            <div className={`${styles.drop} df fdc aic`} style={{ right: -50 }}>
                                <div onClick={() => handleScroll('nav_1', 'О компании')}>
                                    О компании
                                    <div className={styles.border}></div>
                                </div>
                                <div onClick={() => handleScroll('nav_1', 'Токеномика')}>
                                    Токеномика <div className={styles.border}></div>
                                </div>
                                <div onClick={() => handleScroll('nav_1', 'RoadMap')}>
                                    RoadMap <div className={styles.border}></div>
                                </div>
                            </div>
                        </div>
                        <li onClick={() => handleScroll('buy-token')}>
                            <span>Как купить?</span>
                            <div className={styles.border}></div>
                        </li>
                        <div className={styles.wrapper}>
                            <li>
                                <span className="df aic">
                                    Наше комьнити <IconArrowHeader />
                                </span>
                                <div className={styles.border}></div>
                            </li>

                            <div className={`${styles.drop} df fdc aic`} style={{ right: 18 }}>
                                <div onClick={() => handleScroll('nav_2', 'Соц-сети')}>
                                    Соц-сети <div className={styles.border}></div>
                                </div>
                                <div onClick={() => handleScroll('nav_2', 'Амбасадор')}>
                                    Амбасадор <div className={styles.border}></div>
                                </div>
                                <div onClick={() => handleScroll('nav_2', 'Отзывы')}>
                                    Отзывы <div className={styles.border}></div>
                                </div>
                            </div>
                        </div>
                        <li onClick={() => handleScroll('questions')}>
                            <span>Вопросы?</span>
                            <div className={styles.border}></div>
                        </li>
                    </ul>
                </motion.header>
            </div>
        </motion.div>
    );
};

export default Header;
