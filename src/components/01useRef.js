import React, { useRef, useState } from 'react'

const PageuseRef = () => {
    // 1. DOM 요소 접근
    const buttonRef = useRef(null); // 초기값 null로 지정

    setTimeout(()=>{
        // console.log(buttonRef.current);
    },1000)

    const handleClick = () =>{
        if(buttonRef.current){
            buttonRef.current.innerText = '버튼이 클릭되었습니다.';
        }
        
    }

    // 2. 애니메이션 제어
    const animationRef = useRef(null);
    const startAni = () =>{
        animationRef.current.classList.add('animate');
    }

    // 3. 토글
    const [isVisible, setIsVisible] = useState(false);
    const toggleRef = useRef(false);

    const toggle = ()=>{
        toggleRef.current = !toggleRef.current;
        setIsVisible(toggleRef.current);
    }

  return (
    <>
        {/* 1 */}
        <button ref = {buttonRef} onClick={handleClick}>CLICK</button>
        {/* 2 */}
        <div className='box' ref={animationRef}></div>
        <button onClick={startAni}>애니메이션 시작</button>
        {/* 3 */}
        <button onClick={toggle}>토글</button>
        {/* 앞에가 true면 뒤에꺼 실행 */}
        {isVisible && <div>표시됨</div>}
    </>
  )
}

export default PageuseRef