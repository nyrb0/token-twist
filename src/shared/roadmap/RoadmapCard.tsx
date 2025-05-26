import styles from './Roadmap.module.scss';
import { motion } from 'framer-motion';

interface IRoadmapCard {
    variant: 1 | 2 | 3 | 4;
    title: string;
    lists: string[];
    delay: number;
}

const RoadmapCard = ({ variant = 4, title, lists, delay }: IRoadmapCard) => {
    const color = () => {
        if (variant === 1) return '#10b43b';
        if (variant === 2) return '#4822f4';
        if (variant === 3) return '#008791';
        return '#be008f';
    };

    return (
        <div className={styles.card}>
            <div className={styles.header} style={{ backgroundColor: color() }}>
                <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay }}>
                    {title}
                </motion.h4>
            </div>

            <div className={`${styles.content} df fdc`} style={{ border: `2px solid ${color()}` }}>
                {lists.map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: delay + 0.2 + i * 0.2,
                        }}
                        key={i}
                        className="df aic"
                    >
                        <span style={{ backgroundColor: color() }}></span>
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapCard;
