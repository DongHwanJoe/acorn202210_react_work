//  App07.js
import React from "react";

//함수 기반으로 컴포넌트를 만들기

const App = () => {
    /*
        [ 초기값을 받을 변수(상태값), 상태값을 변경할 함수 ]
    */
    const [msg, setMsg] = React.useState('초기값');
    const [num, setNum] = React.useState(1);
    
    console.log(msg);
    console.log(setMsg);
    
    //버튼을 눌렀을 때 호출되는 함수
    const handleClick = () => {
        alert("버튼을 눌렀네요")
    };

    const onChange = (e) => {
        //상태값을 바꿔주는 함수를 이용해서 상태값 바꾸기
        let inputMsg = e.target.value;
        setMsg(inputMsg);
    };

    const handleClick2 = () => {
        setNum(num+1);
    };

    return (
        <div className="container">
            <h1>함수기반 컴포넌트</h1>
            <button onClick={handleClick} className="btn btn-primary">눌러보셈</button>
            <br />
            <input type="text" onChange={onChange}/>
            <p>{msg}</p>
            {/* 아래 버튼을 누르면 숫자가 1씩 증가되게 상태값을 관리하면서 동작 */}
            <button onClick={handleClick2}>{num}</button>
        </div>
    );
}

export default App;

/*
export default () => {
    return (
        <div className="container">
            <h1>함수기반 컴포넌트</h1>

        </div>
    );
};
*/