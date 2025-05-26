'use client';
import { Button } from '@/shared/UI/button/Button';
import { StyledBackground, StyledBoard, StyledBoardButton, StyledBoardP, StyledHeroH1, StyledHeroH2, StyledInfoBoard } from './info-board.styled';
import { useState } from 'react';
const InfoBoard = () => {
    const [visible, setVisible] = useState(false);
    return (
        <StyledInfoBoard>
            <StyledHeroH1>Йоу. Я — Сэм!</StyledHeroH1>
            <StyledBoardP style={{ maxWidth: 460 }}>Я тот, кто взломал вашу скучную крипту и залил в нее адреналин.</StyledBoardP>
            <StyledBoard>$TWIST - это не токен? Это вирус?</StyledBoard>
            <StyledBoardP>И сейчас он доберется до вашего портфеля.</StyledBoardP>
            <StyledHeroH2>Зачем я здесь?</StyledHeroH2>
            <StyledBoardP>— 52 миллиона — это не капитализация. Это начало.</StyledBoardP>
            <StyledBoardP>— 2 миллиона кошельков? Да это просто тест-драйв.</StyledBoardP>
            <StyledBackground>Купите STWIST. Или наблюдайте, как это сделают другие :)</StyledBackground>
            <StyledBoardButton className={'df'}>
                <Button variant="white" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    {visible ? 'Узнать подробнее' : 'Еще сомневаешься?'}
                </Button>

                <Button>Заскочить в ракету</Button>
            </StyledBoardButton>
        </StyledInfoBoard>
    );
};

export default InfoBoard;
