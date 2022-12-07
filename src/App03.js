//App03.js

import { Component } from "react";

class App03 extends Component{
    
    render(){
        /*
            배열에 jsx 객체를 여러개 넣기
        */
        const names = [];
        names.push(<li key={0}>김구라</li>);
        names.push(<li key={1}>해골</li>);
        names.push(<li key={2}>원숭이</li>);

        // jsx 객체를 만들어낼 아이템이 배열에 준비되어 있다고 가정
        const animals = ["강아지", "코끼리", "고양이"];

        //만들어낼 jsx 객체를 저장할 빈 배열을 생성
        const result = [];
        //반복문 돌면서
        for(let i = 0; i < animals.length; i++){
            //동물이름이 출력된 jsx객체를 생성 및 준비된 배열에 누적
            result.push(<li key={i}>{animals[i]}</li>)
        }

        const result2 = animals.map((item, index)=>{
            return <li key={index}>{item}</li>
        });

        return (
            <div className="container">
                <h3>반복문 돌면서 여러개의 문서객체 만들기</h3>
                <ul>
                    {names}
                </ul>
                <h3>동물 목록</h3>
                <ul>
                    {result}
                </ul>
                <h3>동물 목록2</h3>
                <ul>
                    {result2}
                </ul>
            </div>
        );
    }
}

export default App03;