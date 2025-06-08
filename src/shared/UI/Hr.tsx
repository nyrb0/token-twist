import styles from './Hr.module.scss';

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
        <div className={`${styles.hr} df aic jcsa`}>
            {hashtag.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    );
};

export default Hr;
