'use client';
import Image from 'next/image';
import Board from './images/board.png';
import styles from './Hero.module.scss';
import InfoBoard from './InfoBoard';
import ChatLoop from '@/shared/UI/chats/ChatsLoop';
import Header from '../header/Header';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className={styles.hero} id="home">
            <div className="container" style={{ marginTop: 20 }}>
                <Header />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.1,
                    ease: 'easeOut',
                }}
                className={`${styles.chat}`}
            >
                <ChatLoop />
            </motion.div>
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
