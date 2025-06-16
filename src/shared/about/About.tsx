import Image from 'next/image';
import styles from './About.module.scss';

import monkey from './images/monkey_glass.png';
// import block from './images/image.png';
import Background from './images/background.png';
import CustomChart from '../UI/chart/CustomChart';

const About = () => {
    return (
        <div className={styles.about} id="about">
            <Image className={styles.background} src={Background.src} width={monkey.height} height={Background.height} alt="monkey twist token" />
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={`${styles.who} df`}>
                        <p>
                            Мы — не просто очередной проект. Мы — взрывная волна в мире блокчейна, смесь инноваций, дерзости и абсолютной уверенности
                            в том, что будущее уже здесь. 
                        </p>
                        <p>
                            Наша команда — это гики с опытом, визионеры с горящими глазами и строители, которые не боятся рушить стены старой системы.
                        </p>
                    </div>
                    <p style={{ paddingBottom: 31, marginTop: 20 }}>
                        Мы создаем не просто токен — мы создаем экосистему, где каждый участник становится частью революции. Здесь нет места скучным
                        решениям и шаблонным подходам. Только хардкор, только реальная utility и движение вперед, пока остальные пытаются понять, что
                        вообще происходит.
                    </p>
                </div>
                <div className="container">
                    <div className={`${styles.result} df jce`}>
                        <div>
                            <h2>Готовы? Потому что мы уже разгоняемся.</h2>
                            <div className="df fdc aie">
                                <div className={styles.chart}>
                                    <Image src={monkey.src} className={styles.monkey} width={716} height={718} alt="monkey token twist" />
                                    <CustomChart />
                                </div>

                                <div className={`${styles.description} df aic jcsb`}>
                                    <div className={styles.left}>
                                        <h3>Алмазное ядро</h3>
                                        <strong>Не толпа. Не масса. Это — ударный отряд.</strong>
                                        <ul>
                                            <li>Каждая цифра — новый уровень влияния.</li>
                                            <li>100K? Разминка. 1M+? Точка доминирования. </li>
                                            <li>Фиолетовый — значит, мы уже внутри системы.</li>
                                        </ul>
                                    </div>
                                    <div className={styles.right}>
                                        <h3>Огненная река</h3>
                                        <strong>Цифры, которые сжигают старый мир</strong>
                                        <ul>
                                            <li>Это не просто деньги. Это топливо революции.</li>
                                            <li>Всплеск — значит, система живая и голодная.</li>
                                            <li>Просадка? Идеально. Очищение перед прыжком.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`${styles.descriptionMobile} df fdc`}>
                                    <div>
                                        <h3 style={{ color: 'var(--purple)' }}>
                                            <span></span> Алмазное ядро
                                        </h3>
                                        <p>Не толпа. Не масса. Это — ударный отряд.</p>
                                    </div>
                                    <div style={{ marginTop: 20 }}>
                                        <h3>
                                            <span></span> Огненная река
                                        </h3>
                                        <p>Цифры, которые сжигают старый мир</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="df jcc">
                <Image src={monkey.src} className={`${styles.monkeyMobile} `} width={330} height={336} alt="monkey token twist" />
            </div>
        </div>
    );
};

export default About;
