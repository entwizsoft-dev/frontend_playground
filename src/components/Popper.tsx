import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

interface IPopperProps {
    children: React.ReactNode;
    el : null | HTMLElement;
    open?: boolean;
    position?: 'center' | 'left' | 'right';
}

const Popper = (props : IPopperProps) => {
    const {
        children,
        el,
        open,
        position = 'center'

    } = props;
    //ref
    const popperRef = useRef<HTMLDivElement | null>(null);
    //state
    const[popperTop, setPopperTop] = useState<number>(0);
    const[popperLeft, setPopperLeft] = useState<number>(0);


    const handleResize = () =>
    {
        //윈도우
        let windowHeight = window.visualViewport?.height;
        let windowScrollY = window.scrollY;
        //토글버튼
        let btnTop = el?.offsetTop;
        let btnLeft = el?.offsetLeft;
        let btnWidth = el?.offsetWidth;
        let btnHeight = el?.offsetHeight;
        //popper박스
        let popperWidth = popperRef.current?.offsetWidth;
        let popperHeight = popperRef.current?.offsetHeight;

        if(
            windowHeight &&
            btnTop &&
            btnLeft &&
            btnWidth &&
            btnHeight &&
            popperWidth &&
            popperHeight
        )
        {
            const poscov = (btnLeftValue?: number) => {
                if(
                    windowHeight &&
                    btnTop &&
                    btnLeft &&
                    btnWidth &&
                    btnHeight &&
                    popperWidth &&
                    popperHeight &&
                    btnLeftValue
                )
                {
                    const gap = btnTop + btnHeight + popperHeight;
                    if(windowHeight < gap && windowScrollY === 0)
                    {
                        setPopperTop(btnTop - popperHeight)
                        setPopperLeft(btnLeftValue);
                    }
                    else if (windowHeight < gap - windowScrollY && windowScrollY !== 0)
                    {
                        setPopperTop(btnTop - popperHeight)
                        setPopperLeft(btnLeftValue);
                    }
                    else
                    {
                        setPopperTop(btnTop + btnHeight)
                        setPopperLeft(btnLeftValue);
                    }
                }
            }

            if(position === 'center')
            {
                poscov(btnLeft + ((btnWidth - popperWidth) / 2));
            }
            else if(position === 'left')
            {
                poscov(btnLeft);
            }
            else if(position === 'right')
            {
                poscov(btnLeft + ((btnWidth - popperWidth)));
            }
        }
    }

    useLayoutEffect(()=>{
        const callback = handleResize;
        callback();

        window.addEventListener('resize', callback);
        window.addEventListener('scroll', callback);

        return() =>{
            window.removeEventListener('resize', callback);
            window.removeEventListener('scroll', callback);
        }

    },[el, position]);

    return (
        <>
            {
                open &&
                <PopperBox
                    ref={popperRef}
                    style={{
                        transform: `translate(${popperLeft}px, ${popperTop}px)`,
                    }}
                >
                    innerText
                    {children}
                </PopperBox>
            }
        </>
    );

};
const PopperBox = styled.div`
    position: absolute;
    padding: 10px;
    inset: 0 auto auto 0;
    border: 1px solid #000;
`;

export default Popper;