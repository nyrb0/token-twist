import styles from '../Community.module.scss';
import { Button } from '@/shared/UI/button/Button';
import IconThreads from '../../icons/IconThreads';
import IconTelegtam from '../../icons/IconTelegtam';
import IconTwitter from '../../icons/IconTwitter';
import Link from 'next/link';
const icons = {
    threads: <IconThreads />,
    tg: <IconTelegtam />,
    tiktok: <IconTwitter />,
    twitter: <IconTwitter />,
};

interface ISocialBlock {
    descs: string[];
    href: string;
    title: string;
    strong: string;
    icon: keyof typeof icons;
}

const SocialBlock = ({ descs, title, strong, icon, href }: ISocialBlock) => {
    const colors = () => {
        if (icon === 'tg') return '#69a0ea';
        if (icon === 'twitter') return '#608ce6';
        else {
            return '#000';
        }
    };

    return (
        <div style={{ border: `2px solid ${colors()}` }} className={`${styles.socialBlock} df fdc jcsb`}>
            <div>
                <div className={`${styles.title} df aic`}>
                    {icons[icon]}
                    <h4 style={{ color: colors(), transform: 'translateY(3px)' }}>{title}</h4>
                </div>
                <strong>{strong}</strong>
                <div className={`${styles.texts} df fdc`}>
                    {descs.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>

            <Link href={href}>
                <Button className={styles.link} variant={'purble'}>
                    Присоединиться
                </Button>
            </Link>
        </div>
    );
};

export default SocialBlock;
