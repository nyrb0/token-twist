import { StyledButtonAboutNavigation, StyledNavigationAbout } from './about.styled';

interface INavigation {
    links: string[];
    value: string;
    onChange: (value: string) => void;
}

const Navigation = ({ links, value, onChange }: INavigation) => {
    return (
        <StyledNavigationAbout className="df  jcsb">
            {links.map((item) => (
                <StyledButtonAboutNavigation key={item} onClick={() => onChange(item)} isroute={value === item}>
                    {item}
                </StyledButtonAboutNavigation>
            ))}
        </StyledNavigationAbout>
    );
};

export default Navigation;
