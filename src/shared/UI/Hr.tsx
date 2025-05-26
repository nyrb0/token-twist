'use client';
import styled from 'styled-components';

const StyledBack = styled.div`
    background: #000;
    width: 100%;
    height: 48px;
    p {
        font-family: var(--font-family);
        font-weight: 800;
        font-size: 12px;
        color: var(--white);
    }
`;

const hashtag = [
    'TWIST',
    'SAM',
    'MONEY',
    'COIN',
    'FEELS',
    'TIME',
    '$$$',
    'TWIST',
    'SAM',
    'MONEY',
    'FEELS',
    'TIME',
    '$$$',
    'TWIST',
    'SAM',
    'MONEY',
    'COIN',
    'FEELS',
    'TIME',
    '$$$',
    'TWIST',
    'SAM',
    'MONEY',
    'COIN',
    'FEELS',
    'TIME',
    '$$$',
];
const Hr = () => {
    return (
        <StyledBack className="df aic jcsa">
            {hashtag.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </StyledBack>
    );
};

export default Hr;
