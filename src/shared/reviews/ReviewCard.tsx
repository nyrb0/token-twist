import { AnimatedPercentage } from './AnimatedPercentage';
import styles from './Review.module.scss';

export interface IReviews {
    id: string;
    username: string;
    text: string;
    procent: number;
}

interface IReviewCard {
    data: IReviews;
}
const ReviewCard = ({ data }: IReviewCard) => {
    return (
        <div className={styles.card}>
            <div className={`${styles.header} df aic`}>
                <div className={styles.avatar}></div>
                <span>@{data.username}</span>
            </div>
            <div className={`${styles.profi} df aic jcsb`}>
                <p>Профит</p>{' '}
                <span>
                    <AnimatedPercentage target={data.procent} duration={2000} />
                </span>
            </div>
            <div className={styles.text}>{data.text}</div>
            <div className="df jce">
                <button>Смотреть больше</button>
            </div>
        </div>
    );
};

export default ReviewCard;
