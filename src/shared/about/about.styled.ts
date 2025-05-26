import styled from 'styled-components';

export const StyledNavigationAbout = styled.ul`
    border-bottom: 4px solid #000;
    border-left: 1px solid #000;
    border-right: 4px solid #000;
    border-top: 1px solid #000;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 4px 8px 8px 8px;
    width: 468px;
    height: 59px;
    gap: 8px;
`;

interface Props {
    isroute: boolean;
}

export const StyledButtonAboutNavigation = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isroute',
})<Props>`
    font-weight: 700;
    border-radius: 16px;
    box-sizing: border-box;
    width: 154px;
    height: 47px;
    background-color: ${(props) => (props.isroute ? 'var(--normal)' : 'transparent')};
    color: ${(props) => (props.isroute ? 'var(--white)' : '')};
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
`;
