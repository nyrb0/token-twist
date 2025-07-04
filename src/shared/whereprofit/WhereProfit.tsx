import styles from './WhereProfit.module.scss';
import ProfitCard from './ProfitCard';
import Image from 'next/image';
import grow from './image/grow.svg';
import Monkey from './image/monkey.png';
import { useRef, useState } from 'react';
import ScheduleCircle from './Circle/ScheduleCircle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDebouncedCallback } from 'use-debounce';
import { useWindowSize } from '../hooks/useWindowSize';

const WhereProfit = () => {
    const [isActive, setIsActive] = useState<null | number>(null);
    const [isHovering, setIsHovering] = useState(false);
    const widthWindow = useWindowSize()!;
    const swiperRef = useRef<any>(null);
    const handleSlideChange = useDebouncedCallback((swiper: any) => {
        if (!isHovering) {
            const realIndex = swiper.realIndex;
            setIsActive(realIndex);
        }
    }, 80);

    const handleSlide = (index: number | null) => {
        if (swiperRef.current && widthWindow <= 970) {
            swiperRef.current.slideToLoop(index);
            setIsActive(index);
        } else {
            setIsActive(index);
        }
    };

    return (
        <div className={styles.content}>
            <Image className={styles.grow} src={grow} width={500} height={500} alt="token twist" />
            <div className={styles.background}></div>
            <div className="container">
                <div className={`${styles.whereprofit}`}>
                    <Image className={styles.monkey} src={Monkey} width={624} height={564} alt="token twist" />

                    <div className="df jcsb" style={{ gap: 8 }}>
                        <div className={`${styles.left} df fdc`}>
                            <ProfitCard
                                color="#9747ff"
                                isActive={isActive === 0}
                                onMouseEnter={() => {
                                    setIsActive(0);
                                    setIsHovering(true);
                                }}
                                onMouseLeave={() => {
                                    setIsActive(null);
                                    setIsHovering(false);
                                }}
                            >
                                <h4>Стейкинг & Награды</h4>
                                <p>Держите — получайте</p>
                                <p>Или не получайте. Риски есть</p>
                            </ProfitCard>
                            <ProfitCard
                                onMouseEnter={() => {
                                    setIsActive(1);
                                    setIsHovering(true);
                                }}
                                onMouseLeave={() => {
                                    setIsActive(null);
                                    setIsHovering(false);
                                }}
                                color="#ff4c00"
                                isActive={isActive === 1}
                            >
                                <h4>Команда & Разработка</h4>
                                <p>Вестятся 2 года. Если мы не выведем всё в рандомный shitcoin — вы получите свои TWT.</p>
                            </ProfitCard>
                        </div>
                        <div className={`${styles.circle} df jcc`}>
                            <ScheduleCircle index={isActive} setIndex={(index) => handleSlide(index === null ? null : index)} />
                        </div>
                        <div className={`${styles.right} df fdc`}>
                            <ProfitCard
                                onMouseEnter={() => {
                                    setIsActive(2);
                                    setIsHovering(true);
                                }}
                                onMouseLeave={() => {
                                    setIsActive(null);
                                    setIsHovering(false);
                                }}
                                color="#008791"
                                isActive={isActive === 2}
                            >
                                <h4> Публичная продажа</h4>
                                <p>Купили те, кто поверил в нас раньше всех. Или просто FOMOнули.</p>
                            </ProfitCard>
                            <ProfitCard
                                onMouseEnter={() => {
                                    setIsActive(3);
                                    setIsHovering(true);
                                }}
                                onMouseLeave={() => {
                                    setIsActive(null);
                                    setIsHovering(false);
                                }}
                                color="#be008f"
                                isActive={isActive === 3}
                            >
                                <h4>Ликвидность & Биржи</h4>
                                <p>Чтобы курс не упал на 90% за 5 минут (но это не гарантия)</p>
                                <p></p>
                            </ProfitCard>
                            <ProfitCard
                                onMouseEnter={() => {
                                    setIsActive(4);
                                    setIsHovering(true);
                                }}
                                onMouseLeave={() => {
                                    setIsActive(null);
                                    setIsHovering(false);
                                }}
                                color="#042bee"
                                isActive={isActive === 4}
                            >
                                <h4>Маркетинг & Партнёрства</h4>
                                <p>Заливаем рекламу везде,</p>
                                <p>где дадут. Даже в подъездах</p>
                            </ProfitCard>
                        </div>
                    </div>
                    <div className={`${styles.wrapperToken} df jce`}>
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
            {widthWindow <= 970 && (
                <div className={styles.mobileWrapper}>
                    <div className={styles.mobile}>
                        <Swiper
                            style={{ paddingLeft: 20 }}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={160}
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            <SwiperSlide>
                                <ProfitCard
                                    color="#9747ff"
                                    isActive={isActive === 0}
                                    onMouseEnter={() => setIsActive(0)}
                                    onMouseLeave={() => setIsActive(null)}
                                >
                                    <h4>Стейкинг & Награды</h4>
                                    <p>Держите — получайте</p>
                                    <p>Или не получайте. Риски есть</p>
                                </ProfitCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProfitCard
                                    onMouseEnter={() => setIsActive(1)}
                                    onMouseLeave={() => setIsActive(null)}
                                    color="#ff4c00"
                                    isActive={isActive === 1}
                                >
                                    <h4>Команда & Разработка</h4>
                                    <p>Вестятся 2 года. Если мы не выведем всё в рандомный shitcoin — вы получите свои TWT.</p>
                                </ProfitCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProfitCard
                                    onMouseEnter={() => setIsActive(2)}
                                    onMouseLeave={() => setIsActive(null)}
                                    color="#008791"
                                    isActive={isActive === 2}
                                >
                                    <h4> Публичная продажа</h4>
                                    <p>Купили те, кто поверил в нас раньше всех. Или просто FOMOнули.</p>
                                </ProfitCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProfitCard
                                    onMouseEnter={() => setIsActive(3)}
                                    onMouseLeave={() => setIsActive(null)}
                                    color="#be008f"
                                    isActive={isActive === 3}
                                >
                                    <h4>Ликвидность & Биржи</h4>
                                    <p>Чтобы курс не упал на 90% за 5 минут (но это не гарантия)</p>
                                    <p></p>
                                </ProfitCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProfitCard
                                    onMouseEnter={() => setIsActive(4)}
                                    onMouseLeave={() => setIsActive(null)}
                                    color="#042bee"
                                    isActive={isActive === 4}
                                >
                                    <h4>Маркетинг & Партнёрства</h4>
                                    <p>Заливаем рекламу везде,</p>
                                    <p>где дадут. Даже в подъездах</p>
                                </ProfitCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhereProfit;
