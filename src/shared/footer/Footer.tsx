import IconDiscord from '../icons/IconDiscord';
import IconTelegtam from '../icons/IconTelegtam';
import IconTiktok from '../icons/IconTiktok';
import IconTwitter from '../icons/IconTwitter';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className="container">
            <footer className={`${styles.footer} df jcc`}>
                <div className={`${styles.wrapper} df fdc jcsb `}>
                    <div className={`${styles.navigations} `}>
                        <div className={`${styles.navigationsDesktop} df jcsa ais`}>
                            <button>Главная</button>
                            <div className={`${styles.column} df fdc`}>
                                <button>О нас</button>
                                <button>Токеномика</button>
                                <button>RoadMap</button>
                            </div>
                            <button>Покупка токена</button>
                            <div className={`${styles.column} df fdc`}>
                                <button>Соц-сети</button>
                                <button>Наш Амбасадор</button>
                                <button>Отзыв</button>
                            </div>
                            <button>FOQ</button>
                        </div>
                    </div>
                    <div className="df jcc">
                        <div className={`${styles.mobileNavigations} ${styles.navigations} df fdc `}>
                            <button>Главная</button>
                            <button>О нас</button>
                            <button>Токеномика</button>
                            <button>RoadMap</button>
                            <button>Покупка токена</button>
                            <button>Соц-сети</button>
                            <button>Наш Амбасадор</button>
                            <button>Отзыв</button>
                            <button>FOQ</button>
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
