import styled from 'styled-components';

interface Props{
    outlined?: boolean;
}

export default styled.button<Props>`
    background:  ${(props) => (props.outlined ? "transparent" : "var(--nubank)")} ;
    color:  ${(props) => (props.outlined ? "var(--nubank)" : "var(--outline)")};
    border: ${(props) => (props.outlined ? "1px solid var(--nubank)" : "none")};
    
    padding: 14px ;
    border-radius: 25px;

    font-weight: bold;
    font-size: 18px;

    cursor: pointer;
    outline: 0;

    &:hover{
        background: ${(props) => props.outlined ? "var(--link-hover-light)" : "var(--link-hover)"};
        transition: 0.3s;
    }
`;
