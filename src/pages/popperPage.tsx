import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Popper from '@/components/Popper';


const popperPage = () => {

    const [descripBox, setDescripBox] = useState<null | HTMLElement>(null);

    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    {
        let defaultText = descripBox?.innerText;
        if(defaultText !== event.currentTarget.innerText)
        {
            setDescripBox(event.currentTarget)
        }
        else
        {
            setDescripBox(descripBox? null : event.currentTarget)
        }
    }

    return (
        <PopperContainer>
            <TopWrap>
                <ToggleBtn
                    onClick={handleBtnClick}
                >
                    top-left
                </ToggleBtn>
                <ToggleBtn
                    onClick={handleBtnClick}
                >
                    top
                </ToggleBtn>
                <ToggleBtn
                    onClick={handleBtnClick}
                >
                    top-right
                </ToggleBtn>
            </TopWrap>

            <BottomWrap>
                <ToggleBtn
                    onClick={handleBtnClick}
                >
                    bottom-left
                </ToggleBtn>
                <ToggleBtn
                    onClick={handleBtnClick}
                >
                    bottom
                </ToggleBtn>
                <ToggleBtn
                    onClick={handleBtnClick}
                >
                    bottom-right
                </ToggleBtn>
            </BottomWrap>

            <Popper
                el={descripBox}
                open={Boolean(descripBox)}
                position={'center'}
            >
                <div>이건</div>
                <div>지우지</div>
                <div>마세요</div>

            </Popper>


        </PopperContainer>
    );
};



const PopperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 300px 0 0;
`

const TopWrap = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;
    padding: 0 0 100px;
`
const BottomWrap = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;
`


const ToggleBtn = styled.button`
    width: 100%;
    max-width: 400px;
    padding: 10px 0;
`

export default popperPage;


