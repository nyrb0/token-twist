import Image from 'next/image';
import styles from './Ambassador.module.scss';
import MonkeyTwist from './images/monkey-token-twist.png';
import Background from './images/background.svg';
const Ambassador = () => {
    return (
        <div className={styles.ambassador}>
            <Image src={MonkeyTwist} className={styles.monkeyTwist} width={657} height={659} alt="token twist" />
            <div className="container">
                <div className={styles.wrapper}>
                    <h4>Наш амбассадор — лицо, мем и энергия TokenTwist</h4>
                    <p>Тот кто с нами с самого начала. Тот кто всегда будет за нас и тот кому мы доверяем больше всего!</p>
                    <div className={`${styles.content} df `}>
                        <div className={styles.right}>
                            <div className={`${styles.block}`} style={{ width: 780, height: '100%' }}></div>
                        </div>
                        <div className={`${styles.left} df fdc`}>
                            <div className={styles.block}></div>
                            <div className={styles.block}></div>
                            <div className={styles.block}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={Background} className={styles.background} width={657} height={659} alt="token twist" />
        </div>
    );
};

export default Ambassador;
