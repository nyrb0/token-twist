'use client';
import { useWindowSize } from '../hooks/useWindowSize';
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

const coin = ['COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN', 'COIN'];
const buy = ['TWIST', 'SAM', 'MONEY', 'COIN', 'FEELS', 'TIME', 'TWIST', 'SAM', 'MONEY', 'COIN', 'FEELS', 'TIME'];
const community = ['COMMUNITY', 'NEWS', 'COMMUNITY', 'NEWS', 'COMMUNITY', 'NEWS', , 'NEWS', 'COMMUNITY', , 'NEWS', 'COMMUNITY'];
const question = ['FAQ', 'QUESTIONS', 'FAQ', 'QUESTIONS', 'FAQ', 'QUESTIONS', 'FAQ', 'QUESTIONS'];

const Hr = ({ type }: { type: 'coin' | 'buy' | 'community' | 'question' }) => {
    const screenSize = useWindowSize() ?? 0;
    const chooseSwitch = () => {
        if (type === 'coin') return coin;
        else if (type === 'buy') return buy;
        else if (type === 'community') return community;
        else if (type === 'question') return question;
    };
    return (
        <div className={`${styles.hr} df aic jcsa`}>
            {screenSize > 680 ? hashtag.map((item, i) => <p key={i}>{item}</p>) : chooseSwitch()!.map((item, i) => <p key={i}>{item}</p>)}
        </div>
    );
};

export default Hr;
