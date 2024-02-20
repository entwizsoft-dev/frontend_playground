
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Popper from '@/components/Popper';
import Test from '@/components/Test';

// const DyTest = dynamic(() => import('@/components/Test'), {
//     ssr: false
// })

const popperPage = () => {

    // const [btnTop, setBtnTop] = useState<number>(0);
    // const [btnLeft, setBtnLeft] = useState<number>(0);
    
    // const [popperTop, setPopperTop] = useState<number>(0);
    
    
    ///
    // const btnRef = useRef<null | HTMLButtonElement>(null);
    const [descripBox, setDescripBox] = useState<null | HTMLElement>(null);
    ///

    // const popRef = useRef<null | HTMLDivElement>(null);



    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    {
        setDescripBox(descripBox ? null : event.currentTarget);
        // let btnOffsetTop = event.currentTarget.offsetTop;
        // let btnOffsetLeft = event.currentTarget.offsetLeft;
        // let btnOffsetHeight = event.currentTarget.offsetHeight;
        // let windowHeight = window.visualViewport.height;

        // if(windowHeight < (btnOffsetTop + btnOffsetHeight + 43))
        // {
        //     setBtnTop(btnOffsetTop - btnOffsetHeight);
        // }
        // else
        // {
        //     setBtnTop(btnOffsetTop + btnOffsetHeight);
        //     setPopperTop(btnOffsetTop + btnOffsetHeight + 43);
        //     setBtnLeft(btnOffsetLeft);
        // }

    }




    return (
        <PopperContainer>
            <ToggleBtn
                onClick={handleBtnClick}
            >
                버튼
            </ToggleBtn>
            {/* {
                open &&
                <Popper
                    style={{position : 'absolute', inset: '0 auto auto 0',  transform: `translate(${btnLeft}px, ${btnTop}px)`}}
                >
                    버튼 클릭시 나오는 박스1 {btnTop}
                </Popper>
            } */}
            <Popper
                el={descripBox}
                open={Boolean(descripBox)}
            >
                <div>이건</div>
                <div>지우지</div>
                <div>마세요</div>
            </Popper>
            {/* <DyTest/> */}
        </PopperContainer>
    );
};



const PopperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 100px 0;
`

const ToggleBtn = styled.button`
    width: 300px;
    padding: 10px 0;
`


export default popperPage;