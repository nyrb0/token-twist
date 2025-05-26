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

    return (
        <header className={`${styles.header} df aic jcc`}>
            <ul className="df aic jcsa">
                <li onClick={() => handleScroll('home')}>
                    <span>Главная</span>
                    <div className={styles.border}></div>
                </li>
                <li onClick={() => handleScroll('about')}>
                    <span className="df aic">
                        О нас <IconArrowHeader />
                    </span>
                    <div className={styles.border}></div>
                </li>
                <li onClick={() => handleScroll('buy-token')}>
                    <span>Как купить?</span>
                    <div className={styles.border}></div>
                </li>
                <li onClick={() => handleScroll('community')}>
                    <span className="df aic">
                        Наше комьнити <IconArrowHeader />
                    </span>
                    <div className={styles.border}></div>
                </li>
                <li onClick={() => handleScroll('questions')}>
                    <span>Вопросы?</span>
                    <div className={styles.border}></div>
                </li>
            </ul>
        </header>
    );
};

export default Header;
