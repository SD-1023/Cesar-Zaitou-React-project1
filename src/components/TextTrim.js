import styled from "styled-components";

const StyledSingleLine = styled.div`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

const StyledMultiLine = styled.div`
display: -webkit-box;
-webkit-line-clamp: ${props => props.lines};
-webkit-box-orient: vertical;
overflow: hidden;

`;

export const TextTrim =({maxLines,children})=>{

    return(
        <>
        {
            (maxLines === 1) ?
            (<StyledSingleLine>{children} </StyledSingleLine>):
            (<StyledMultiLine lines={maxLines}> {children}</StyledMultiLine>)

        }
        </>
    );
}
