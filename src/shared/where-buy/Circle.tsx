import styles from './WehereBuyToken.module.scss';

interface ICircle {
    type: 1 | 2;
    number: number;
}
const Circle = ({ number, type }: ICircle) => {
    return <div className={`${styles.circle} df jcc aic ${type === 1 ? styles.circle_1 : styles.circle_2}`}>{number}</div>;
};

export default Circle;
