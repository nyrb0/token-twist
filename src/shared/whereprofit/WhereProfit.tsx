import styles from './WhereProfit.module.scss';
import ProfitCard from './ProfitCard';
import Image from 'next/image';
import grow from './image/grow.svg';
import Monkey from './image/monkey.png';
import ProcentCircle from './ProcentCircle';
import { useState } from 'react';

const WhereProfit = () => {
    const [isActive, setIsActive] = useState('');
    return (
        <div className={styles.content}>
            <Image className={styles.grow} src={grow} width={500} height={500} alt="token twist" />
            <div className={styles.background}></div>
            <div className="container">
                <div className={`${styles.whereprofit}`}>
                    <Image className={styles.monkey} src={Monkey} width={624} height={564} alt="token twist" />
                    <div className="df jcsb">
                        <div className={`${styles.left} df fdc`}>
                            <ProfitCard
                                color="#9747ff"
                                isActive={isActive === 'purple'}
                                onMouseEnter={() => setIsActive('purple')}
                                onMouseLeave={() => setIsActive('')}
                            >
                                <h4>Стейкинг & Награды</h4>
                                <p>Держите — получайте</p>
                                <p>Или не получайте. Риски есть</p>
                            </ProfitCard>
                            <ProfitCard
                                onMouseEnter={() => setIsActive('orange')}
                                onMouseLeave={() => setIsActive('')}
                                color="#ff4c00"
                                isActive={isActive === 'orange'}
                            >
                                <h4>Команда & Разработка</h4>
                                <p>Вестятся 2 года. Если мы не выведем всё в рандомный shitcoin — вы получите свои TWT.</p>
                            </ProfitCard>
                        </div>
                        <ProcentCircle />
                        <div className={`${styles.right} df fdc`}>
                            <ProfitCard
                                onMouseEnter={() => setIsActive('green')}
                                onMouseLeave={() => setIsActive('')}
                                color="#008791"
                                isActive={isActive === 'green'}
                            >
                                <h4> Публичная продажа</h4>
                                <p>Купили те, кто поверил в нас раньше всех. Или просто FOMOнули.</p>
                            </ProfitCard>
                            <ProfitCard
                                onMouseEnter={() => setIsActive('red')}
                                onMouseLeave={() => setIsActive('')}
                                color="#be008f"
                                isActive={isActive === 'red'}
                            >
                                <h4>Ликвидность & Биржи</h4>
                                <p>Чтобы курс не упал на 90% за 5 минут (но это не гарантия)</p>
                                <p></p>
                            </ProfitCard>
                            <ProfitCard
                                onMouseEnter={() => setIsActive('blue')}
                                onMouseLeave={() => setIsActive('')}
                                color="#042bee"
                                isActive={isActive === 'blue'}
                            >
                                <h4>Маркетинг & Партнёрства</h4>
                                <p>Заливаем рекламу везде,</p>
                                <p>где дадут. Даже в подъездах</p>
                            </ProfitCard>
                        </div>
                    </div>
                    <div className="df jce">
                        <div className={`${styles.token}`}>
                            <h3>$TWIST — это токен, который</h3>
                            <ul>
                                <li>Не даст вам уснуть (потому что курс скачет как пьяный скейтер).</li>
                                <li>Создан, чтобы его стейкали, жгли и иногда продавали в панике.</li>
                                <li>Управляется DAO (то есть всеми, кому не лень голосовать).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereProfit;
