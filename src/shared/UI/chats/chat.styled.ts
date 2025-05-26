import styled, { css } from 'styled-components';

export const StyledChatBlock = styled.div`
    background: #fff;
    border-radius: 32px;
    padding: 8px 35px 12px 35px;
    box-sizing: border-box;
    margin-top: 20px;
    height: 54px;
    position: relative;
    p {
        font-family: var(--font-family);
        font-size: 14px;
        font-weight: 600;
    }

    .message_chat {
        color: var(--gray);
    }
    .name_chat {
        color: #4822f4;
    }
    & svg {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

export const StyledChatBox = styled.div`
    height: 123px;
    overflow: hidden;
    position: relative;
`;

export const StyledMessages = styled.div<{ translate: boolean }>`
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
    ${({ translate }) =>
        translate &&
        css`
            transform: translateY(-33%);
        `}
`;

export const StyledMessageWrapper = styled.div`
    height: 41px; // 123 / 3 сообщений = 41px
    flex-shrink: 0;
`;
