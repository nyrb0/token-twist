import { Button } from '@/shared/UI/button/Button';
import styles from './Hero.module.scss';
import { useState } from 'react';

const InfoBoard = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.infoBoard}>
            <div className={styles.desktop}>
                <h1>Йоу. Я — Сэм!</h1>
                <p style={{ maxWidth: 460 }}>Я тот, кто взломал вашу скучную крипту и залил в нее адреналин.</p>
                <h2>$TWIST - это не токен? Это вирус?</h2>
                <p>И сейчас он доберется до вашего портфеля.</p>
                <h3>Зачем я здесь?</h3>
                <p>— Чтобы показать, что 52 миллиона — это только начало.</p>
                <p>— А так же перевернуть мир кпритовалют!</p>
                <div className={styles.square}>Купите STWIST. Или наблюдайте, как это сделают другие :)</div>
            </div>

            <div className={`${styles.boardButton} df`}>
                <Button variant="white" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    Запустить в Телеграм
                </Button>
                <Button>Заскочить в ракету</Button>
            </div>
        </div>
    );
};

export default InfoBoard;
