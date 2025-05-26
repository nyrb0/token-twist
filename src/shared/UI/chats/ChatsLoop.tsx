import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Chat from './Chat';

const users = [
    { name: 'Имя', message: 'Сэм (но это не точно)' },
    { name: 'Род деятельности', message: 'Взлом ваших ожиданий' },
    { name: 'Любит', message: 'Бананы (он же бибизян)' },
    { name: 'Любит', message: 'Спамить FOMO в чатах' },
    { name: 'Ненавидит', message: '«Серьезные» токены ' },
    { name: 'Ненавидит', message: 'Личные вопросы' },
    { name: 'Ненавидит', message: 'Биржевых ботов!' },
];

const ChatLoop = () => {
    return (
        <div style={{ height: '153px', width: '100%', overflow: 'hidden' }}>
            <Swiper
                direction="vertical"
                slidesPerView={2}
                slidesPerGroup={2}
                loop={true}
                allowTouchMove={false}
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                style={{ height: '100%' }}
            >
                <SwiperSlide>
                    <Chat width={223} message={users[0].message} name={users[0].name} />
                </SwiperSlide>
                <SwiperSlide>
                    <Chat width={300} message={users[1].message} name={users[1].name} />
                </SwiperSlide>
                <SwiperSlide>
                    <Chat width={223} message={users[2].message} name={users[2].name} />
                </SwiperSlide>
                <SwiperSlide>
                    <Chat width={300} message={users[3].message} name={users[3].name} />
                </SwiperSlide>
                <SwiperSlide>
                    <Chat width={236} message={users[4].message} name={users[4].name} />
                </SwiperSlide>
                <SwiperSlide>
                    <Chat width={236} message={users[5].message} name={users[5].name} />
                </SwiperSlide>
                <SwiperSlide>
                    <Chat width={223} message={users[6].message} name={users[6].name} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ChatLoop;
