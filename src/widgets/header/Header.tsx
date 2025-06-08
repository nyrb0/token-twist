import React from 'react';
import styles from './Header.module.scss';
import IconArrowHeader from './icon/IconArrowHeader';
import { scroller } from 'react-scroll';

const Header = () => {
    const handleScroll = (id: string) => {
        scroller.scrollTo(id, {
            durations: 4000,
            delay: 0,
            smooth: 0,
            offset: -100,
        });
    };
    const [index, setIndex] = React.useState<null | number>(null);
    return (
        <header className={`${styles.header} df aic jcc`}>
            <ul className={`${styles.ul} df aic jcsa`}>
                <li onClick={() => handleScroll('home')}>
                    <div className={styles.wrapper}>
                        <span>Главная</span>
                        <div className={styles.border}></div>
                    </div>
                </li>
                <li onMouseEnter={() => setIndex(0)} onMouseLeave={() => setIndex(null)} onClick={() => handleScroll('about')}>
                    <div className={styles.wrapper}>
                        <span className="df aic">
                            О нас <IconArrowHeader />
                        </span>
                        <div className={styles.border}></div>
                    </div>
                    <ul className={`${styles.select} ${index === 0 && styles.activeSelect} ${styles.about} df fdc jcsb aic`}>
                        <li>
                            <div>
                                <span>О компании</span>
                                <div className={styles.border}></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Токеномика</span>
                                <div className={styles.border}></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>RoadMap</span>
                                <div className={styles.border}></div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li onClick={() => handleScroll('buy-token')}>
                    <div className={styles.wrapper}>
                        <span>Как купить?</span>
                        <div className={styles.border}></div>
                    </div>
                </li>
                <li onMouseEnter={() => setIndex(1)} onMouseLeave={() => setIndex(null)} onClick={() => handleScroll('community')}>
                    <div className={styles.wrapper}>
                        <span className="df aic">
                            Наше комьнити <IconArrowHeader />
                        </span>
                        <div className={styles.border}></div>
                    </div>
                    <ul className={`${styles.select} ${styles.community} ${index === 1 && styles.activeSelect}  df fdc jcsb aic`}>
                        <li>
                            <div>
                                <span>Соц-сети</span>
                                <div className={styles.border}></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Амбасадор</span>
                                <div className={styles.border}></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Отзывы</span>
                                <div className={styles.border}></div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li onClick={() => handleScroll('questions')}>
                    <div className={styles.wrapper}>
                        <span>Вопросы?</span>
                        <div className={styles.border}></div>
                    </div>
                </li>
            </ul>
        </header>
    );
};

export default Header;
