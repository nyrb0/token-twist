import React from 'react';
import styles from './Header.module.scss';
import IconArrowHeader from './icon/IconArrowHeader';
import { scroller } from 'react-scroll';

const Header = () => {
    const handleScroll = (sectin: string) => {
        scroller.scrollTo(sectin, {
            smooth: true,
            duration: 1000,
        });
    };

    const [index, setIndex] = React.useState<null | number>(null);

    return (
        <header className={`${styles.header} df aic jcc`}>
            <ul className={`${styles.navigations} df aic jcsa`}>
                <li onClick={() => handleScroll('home')}>
                    <span>Главная</span>
                    <div className={styles.border}></div>
                </li>
                <div className={styles.wrapper}>
                    <li onClick={() => handleScroll('nav_1')}>
                        <span className="df aic">
                            О нас <IconArrowHeader />
                        </span>
                        <div className={styles.border}></div>
                    </li>
                    <div className={`${styles.drop} df fdc aic`} style={{ right: -50 }}>
                        <div>
                            Соц-сети <div className={styles.border}></div>
                        </div>
                        <div>
                            Амбасадор <div className={styles.border}></div>
                        </div>
                        <div>
                            Отзывы <div className={styles.border}></div>
                        </div>
                    </div>
                </div>
                <li onClick={() => handleScroll('buy-token')}>
                    <span>Как купить?</span>
                    <div className={styles.border}></div>
                </li>
                <div className={styles.wrapper}>
                    <li onClick={() => handleScroll('nav_2')}>
                        <span className="df aic">
                            Наше комьнити <IconArrowHeader />
                        </span>
                        <div className={styles.border}></div>
                    </li>
                    <div className={`${styles.drop} df fdc aic`} style={{ right: 18 }}>
                        <div>
                            О компании
                            <div className={styles.border}></div>
                        </div>
                        <div>
                            Токеномика <div className={styles.border}></div>
                        </div>
                        <div>
                            RoadMap <div className={styles.border}></div>
                        </div>
                    </div>
                </div>
                <li onClick={() => handleScroll('questions')}>
                    <span>Вопросы?</span>
                    <div className={styles.border}></div>
                </li>
            </ul>
        </header>
    );
};

export default Header;
