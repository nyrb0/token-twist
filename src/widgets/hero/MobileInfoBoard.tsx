import React, { useState } from 'react';
import styles from './Hero.module.scss';
import { Button } from '@/shared/UI/button/Button';
import Monkey from './images/monkey.png';
import Board from './images/board.png';
import Image from 'next/image';
const MobileInfoBoard = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.mobileBoard}>
            <div>
                <h1>Йоу. Я — Сэм!</h1>
                <p style={{ maxWidth: 460 }}>Я тот, кто взломал вашу скучную крипту и залил в нее адреналин.</p>
                <h3>Зачем я здесь?</h3>
                <p>— Чтобы показать, что 52 миллиона — это только начало.</p>
                <p>— А так же перевернуть мир кпритовалют!</p>
                <h2>$TWIST - это не токен? Это вирус?</h2>
                <p>И сейчас он доберется до вашего портфеля.</p>
            </div>
            <div className={`${styles.boardButton} df`}>
                <Button variant="white" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    {visible ? 'Узнать подробнее' : 'Еще сомневаешься?'}
                </Button>
                <Button>Заскочить в ракету</Button>
            </div>
            <div className={styles.image}>
                <Image className={styles.mon} src={Monkey.src} alt="monkey token twist" width={330} height={364} />
                <Image src={Board.src} alt="board token twist" width={391} height={353} />
            </div>
        </div>
    );
};

export default MobileInfoBoard;
