import styles from './About.module.scss';
interface INavigation {
    links: string[];
    value: string;

    onChange: (value: any) => void;
}

const Navigation = ({ links, value, onChange }: INavigation) => {
    return (
        <div className={`${styles.navigations} df jcsb`}>
            {links.map((item) => (
                <div key={item} onClick={() => onChange(item)} className={`${styles.buttonNavigation} ${value === item && styles.active} df aic jcc`}>
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Navigation;
