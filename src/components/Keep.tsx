import React from 'react';

const Popper = (props : any) => {

    console.log(props)

    const {
        children,
        el,
    } = props;
    //ref
    const popperRef = useRef();

    

    const scrollOrResizeHandler = () =>
    {
        // setDescripBox(descripBox ? null : event.currentTarget);

        console.log(test)

        let btnOffsetTop = el.offsetTop;
        let btnOffsetLeft = el.offsetLeft;
        let btnOffsetHeight = el.offsetHeight;
        let windowHeight = window.visualViewport?.height;

        if(windowHeight && windowHeight < (btnOffsetTop + btnOffsetHeight + popperRef.current.offsetHeight))
        {
            setBtnTop(btnOffsetTop - btnOffsetHeight);
        }
        else
        {
            setBtnTop(btnOffsetTop + btnOffsetHeight);
            setPopperTop(btnOffsetTop + btnOffsetHeight + 43);
            setBtnLeft(btnOffsetLeft);
        }

    }

    useEffect(()=>{
        window.onresize = () => {
            let windowHeight = window.visualViewport?.height;
            let btnRefOffsetTop = el.current.offsetTop;
            let btnRefOffsetHeight = el.current.offsetHeight;
    
            if(windowHeight < (btnRefOffsetTop + btnRefOffsetHeight + 43))
            {
                setBtnTop(btnRefOffsetTop - btnRefOffsetHeight);
            }
            else
            {
                setBtnTop(btnRefOffsetTop + btnRefOffsetHeight);
            }
    
        }
    },[]);



    return (
        <div
            ref={popperRef}
        >
            {children}
        </div>
    );
};



export default Popper;