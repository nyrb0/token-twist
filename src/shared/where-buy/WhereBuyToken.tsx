import React from 'react';
import styles from './WehereBuyToken.module.scss';
import CardHowBuy from './CardHowBuy';
import IconWaller from './Icons/wallet.svg';
import IconConnect from './Icons/connect.svg';
import IconDowload from './Icons/dowload.svg';
import IconCoin from './Icons/coin.svg';
import Circle from './Circle';
import IconArrow from './Icons/IconArrow';
import { Button } from '../UI/button/Button';
import IconLineDash from './Icons/IconLineDash';
import IconSideLeft from '../icons/IconsSide';

const cards = [
    {
        icon: IconWaller,
        title: 'Создай кошелёк',
        description: 'Установи MetaMask или Trust Wallet',
    },
    {
        icon: IconCoin,
        title: 'Купи ETH/BNB/USDT',
        description: 'Пополни кошелёк через биржу или P2P',
    },
    {
        icon: IconConnect,
        title: 'Подключи кошелёк',
        description: 'Нажми «Connect Wallet» на сайте',
    },
    {
        icon: IconDowload,
        title: 'Обменивай на $Twist',
        description: 'Через встроенный свап или ссылку!',
    },
];

const WhereBuyToken = () => {
    const numbes = [1, 2, 1, 2];
    return (
        <div className={`${styles.where} df`} id="buy-token">
            <div className={styles.sideLeft}>
                <IconSideLeft position={'bottom-left'} />
            </div>
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles.header}>
                        <h2>Как купить нашу монету?</h2>
                        <strong>Чтобы потом плакаться!</strong>
                    </div>

                    <div className={`${styles.cards} df`}>
                        {cards.map((item, i) => (
                            <CardHowBuy key={i} description={item.description} icon={item.icon} title={item.title} />
                        ))}
                    </div>

                    <div className={`${styles.circles} df jcsa aic`}>
                        {numbes.map((item, i) => (
                            <React.Fragment key={i}>
                                <Circle type={item as 1 | 2} number={i + 1} />
                                <IconLineDash />
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={`${styles.bottom} df jcsb aic`}>
                        <div>
                            <p>А чтобы тебе было проще я оставил тут кнопку,</p>
                            <p>а то мало ли ты не шаришь в крипте</p>
                        </div>
                        <IconArrow />
                        <span>
                            <Button>НЕ УПУСТИ ШАНС!</Button>
                            <p className={`df jcc`}>+ бонус для первых 100 холдеров</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.sideRight}>
                <IconSideLeft position={'bottom-right'} />
            </div>
        </div>
    );
};

export default WhereBuyToken;
