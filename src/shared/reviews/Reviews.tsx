import Image from 'next/image';
import styles from './Review.module.scss';
import background1 from './images/background1.svg';
import background2 from './images/background2.svg';
import ReviewCard, { IReviews } from './ReviewCard';
import { Button } from '../UI/button/Button';

const reviewss: IReviews[] = [
    {
        id: '2',
        username: 'hodlMonkey',
        text: 'Купил на приколе. Через неделю просыпаюсь — портфель в зелёном, жена вернулась, собака снова со мной разговаривает.TokenTwist — это не инвестиция, это духовный путь.',
        procent: 200,
    },
    {
        id: '2fvs',
        username: 'hodlMonkey',
        text: 'Купил на приколе. Через неделю просыпаюсь — портфель в зелёном, жена вернулась, собака снова со мной разговаривает.TokenTwist — это не инвестиция, это духовный путь.',
        procent: 200,
    },
    {
        id: '@walletgirl420',
        username: 'walletgirl420',
        text: 'Честно? Думала, очередная мем-муть. Но после свапа на $Twist я ощутила смысл жизни и увидела свечу в форме обезьяны.',
        procent: 900,
    },
    {
        id: 'ksdsfhjh',
        username: 'twistOracle',
        text: 'Не верил в магию. Теперь мой телефон сам свапает всё в $Twist. Просто купи. Потом поблагодаришь.',
        procent: 400,
    },
    {
        id: 'vvhnvsdfn',
        username: 'rektbutblessed',
        text: 'Купил $Twist на сдачу с шавермы. Через 2 дня это стало моей лучшей инвестицией года. Теперь шаверму беру в два слоя и только с трюфелем.',
        procent: 150,
    },
    {
        id: 'jfsjv[',
        username: 'twistOracle',
        text: 'Поставил алерт на $0.00001 и думал забыть. Теперь не могу отлипнуть. Каждое утро читаю Твистометрию. Эта штука меняет сознание.',
        procent: 280,
    },
];
// { id: '', username: '', text: '', procent: 3 },
// { id: '', username: '', text: '', procent: 3 },
// { id: '', username: '', text: '', procent: 3 },

const Reviews = () => {
    return (
        <div className={styles.review}>
            {/* <Image className={styles.background1} src={background1} width={500} height={500} alt="token twist" />
            <Image className={styles.background2} src={background2} width={500} height={500} alt="token twist" /> */}
            <div className={styles.background1} />
            <div className={styles.background2} />

            <div className={'container'}>
                <div className={styles.wrapper}>
                    <h4>Разумеется некоторые из них сомневались!</h4>
                    <p>Но после покупки им так понравилась задумка и концепт ( либо моя харизма ) что они решили сказать пару слов!</p>
                    <div className={styles.content}>
                        <div className={styles.reviews}>
                            {reviewss.map((item) => (
                                <ReviewCard key={item.id} data={item} />
                            ))}
                        </div>
                        <div className={`${styles.btn} df jcc`}>
                            <Button>Оставить отзыв</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
