import IconBluePart from './icon/inBluePart';
import IconGreenPart from './icon/IconGreenPart';
import IconOrangePart from './icon/IconOrangePart';
import IconPurplePart from './icon/IconPurplePart';
import styles from './WhereProfit.module.scss';
import IconRedPart from './icon/IconRedPart';

const ProcentCircle = () => {
    return (
        <div className={styles.circle}>
            <div className={styles.purple}>
                <IconPurplePart />
            </div>
            <div className={styles.orange}>
                <IconOrangePart />
            </div>
            <div className={styles.blue}>
                <IconBluePart />
            </div>
            <div className={styles.green}>
                <IconGreenPart />
            </div>
            <div className={styles.red}>
                <IconRedPart />
            </div>
        </div>
    );
};

export default ProcentCircle;
