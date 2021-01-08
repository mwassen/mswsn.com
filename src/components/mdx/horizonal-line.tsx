import styled from "@emotion/styled";

export const HorizontalLine = styled.hr`
    margin: 2rem 0;
    border: none;
    border-top: 1.5px solid var(--color-text);
    color: var(--color-text);
    overflow: visible;
    text-align: center;
    height: 5px;

    &:after {
        background: var(--color-background);
        content: ">  <";
        font-size: ${(props) => props.theme.type.scale[5]};
        transition: background ${(props) => props.theme.animations.background};
        padding: 0 4px;
        position: relative;
        top: -13px;
    }
`;
