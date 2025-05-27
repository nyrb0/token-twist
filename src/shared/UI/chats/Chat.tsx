import styles from './chat.module.scss';

interface IChat {
    name?: string;
    message?: string;
    width: number;
}

const Chat = ({ name, message, width }: IChat) => {
    return (
        <div style={{ minWidth: width, maxWidth: width }} className={`${styles.chat} df aic`}>
            <div>
                <p className={styles.name_chat}>{name}:</p>
                <p className={styles.message_chat}>{message}</p>
            </div>
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 21C11.1534 17.027 9.32039 5.34459 9.00971 0L4.66019 1.84459L0 14.7568C0.932039 15.9392 5.43689 18.8432 16 21Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default Chat;
