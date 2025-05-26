import styles from '../Community.module.scss';
import { Button } from '@/shared/UI/button/Button';
import IconDiscord from './icons/IconDiscord';
import IconTelegtam from './icons/IconTelegtam';
import IconTwitter from './icons/IconTwitter';
import Link from 'next/link';
const icons = {
    discord: <IconDiscord />,
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
        if (icon === 'discord') return '#6c52e8';
        if (icon === 'tg') return '#608ce6';
        if (icon === 'tiktok') return '#69a0ea';
        else {
            return '#000';
        }
    };

    return (
        <div style={{ border: `2px solid ${colors()}` }} className={`${styles.socialBlock} df fdc jcsb`}>
            <div>
                <div style={{ gap: 12 }} className="df">
                    {icons[icon]}
                    <h4 style={{ color: colors() }}>{title}</h4>
                </div>
                <strong>{strong}</strong>
                <div className={`${styles.texts} df fdc`}>
                    {descs.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>

            <Link href={href}>
                <Button variant={icon === 'tg' || icon === 'tiktok' ? 'primary' : 'purble'}>Присоединиться</Button>
            </Link>
        </div>
    );
};

export default SocialBlock;
