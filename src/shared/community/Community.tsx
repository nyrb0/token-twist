import React from 'react';
import styles from './Community.module.scss';

import SocialBlock from './social/SocialBlock';
import IconsSide from '../icons/IconsSide';

const Community = () => {
    return (
        <div className={`${styles.community} df`} id="community">
            <div className={styles.sideLeft}>
                <IconsSide position={'top-left'} />
            </div>

            <div className={`${styles.wrapper} container`}>
                <strong>Хочешь узнать что за место???</strong>
                <p>Сливы, инсайды, мемы. Всё, что нужно, чтобы не остаться нубом. Информация за которую можно и душу продать) </p>
                <div className={styles.blocks}>
                    <SocialBlock
                        title={'Discord'}
                        icon={'discord'}
                        strong="Твой VIP-доступ к комьюнити!"
                        descs={[
                            'Голосовые разборы токеномики и roadmap',
                            'Закрытый VC-чат с китами и аналитиками',
                            'Whitelist-розыгрыши на эксклюзивные продажи',
                            'Дампы полезных материалов (чек-листы, гайды)',
                        ]}
                        href=""
                    />
                    <SocialBlock
                        title={'Twitter'}
                        strong="Инфа от которой зависят твои решения!"
                        icon={'twitter'}
                        descs={[
                            'Прогнозы цены от топовых трейдеров',
                            'Мемы-предсказания (которые потом сбываются)',
                            'Треды с жестким анализом токеномики',
                            'Анонсы партнерств за 24 часа до официальных новостей',
                        ]}
                        href=""
                    />
                    <SocialBlock
                        icon={'tg'}
                        title={'Telegram'}
                        strong="Экстренные уведомления + сливы полезного"
                        descs={[
                            'Сливы инсайдерской инфы перед листингами',
                            'Чат с основателями — задай вопрос лично',
                            'Ранний доступ к Private Sale для подписчиков',
                            'Автоматические уведомления о ключевых событиях',
                        ]}
                        href=""
                    />
                    <SocialBlock
                        title={'TikTok'}
                        strong="Лайфхаки за 15 секунд по коину"
                        icon={'tiktok'}
                        descs={[
                            '15-секундные дампы — «Почему этот токен взлетит»',
                            'Разоблачения скам-проектов (с примерами)',
                            'Интервью с основателями в стиле «Без галстуков»',
                            'ТикТоки с розыгрышами!',
                        ]}
                        href=""
                    />
                </div>
            </div>
            <div className={styles.sideRight}>
                <IconsSide position={'top-right'} />
            </div>
        </div>
    );
};

export default Community;
