import Image from 'next/image';
import styles from './WehereBuyToken.module.scss';

interface ICardtHowBuy {
    icon: string;
    title: string;
    description: string;
}

const CardHowBuy = ({ icon, title, description }: ICardtHowBuy) => {
    return (
        <div className={`${styles.card}`}>
            <div>
                <Image src={icon} alt={`icon`} width={48} height={48} />
            </div>
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    );
};

export default CardHowBuy;
