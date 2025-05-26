'use client';
import Image from 'next/image';
import Board from './images/board.png';
import styles from './Hero.module.scss';
import InfoBoard from './components/InfoBoard';
import ChatLoop from '@/shared/UI/chats/ChatsLoop';
import Header from '../header/Header';

const Hero = () => {
    return (
        <div className={styles.hero} id="home">
            <div className="container" style={{ marginTop: 20 }}>
                <Header />
            </div>
            <div className={`${styles.chat}`}>
                <ChatLoop />
            </div>
            <div className={`${styles.board} df jcc aie`}>
                <div className={styles.container}>
                    <Image src={Board.src} width={1062} height={957} alt="Доска" />
                    <div className={styles.texts}>
                        <InfoBoard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
