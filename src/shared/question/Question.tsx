import Image from 'next/image';
import { Button } from '../UI/button/Button';
import CustomSelect from '../UI/select/CustomSelect';
import styles from './Questions.module.scss';
import Monkey from './images/monkey.svg';
import Seaweed from './images/eaweed.svg';

const options = [
    {
        value: 'Что такое $TWIST?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Как я могу получить $TWIST?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Что такое стейкинг $TWIST?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Почему курс $TWIST такой нестабильный?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Что такое DAO в $TWIST?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Есть ли у $TWIST токеномика?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Где я могу купить или продать $TWIST?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
    {
        value: 'Что делать, если я купил $TWIST из-за FOMO, а теперь жалею?',
        label: 'STWIST — это токен, созданный для стейкинга, сжигания и торговли. Его курс может быть очень волатильным, что делает его одновременно рисковым и потенциально прибыльным активом. Управляется сообществом через DAO.',
    },
];

const Question = () => {
    return (
        <div className={`${styles.faq} df`}>
            <Image className={styles.monkey} src={Monkey.src} width={100} height={100} alt="monkey token twist" />
            <section className="container">
                <div className={styles.questions}>
                    <div className={`${styles.header} df jcsb`}>
                        <h2>Все еще есть вопросы?</h2>
                        <h3>FAQ по $TWIST</h3>
                    </div>
                    <div className={styles.blocks}>
                        <div className={`${styles.dropdowns} df fdc`}>
                            {options.map((item, i) => (
                                <CustomSelect key={i} option={item} number={i + 1} />
                            ))}
                        </div>
                    </div>
                </div>
                <Button className={styles.btn}>Купить сейчас</Button>
            </section>
            <Image className={styles.seaweed} src={Seaweed.src} width={100} height={100} alt="monkey token twist" />
        </div>
    );
};

export default Question;
