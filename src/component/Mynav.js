import React, { Component } from 'react'

class Mynav extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log(
            'shouldComponentUpdate 작동',
            newProps.data, //변경된 값
            this.props.data //변경 전 값
            );
            if(this.props.data === newProps.data){
                return false;
            }
            
        return true;
    }
    render(){
        console.log('Mynav 실행');
        let lists = [];
        let data = this.props.data;

        /*
        //while 함수 사용방법
        let i = 0;
        while(i<data.length){
            lists.push(
                <li key={data[i].id}><a href="/">{data[i].title}</a></li>
            );
            i += 1;
        }
        
        //forEach 함수 사용방법
        data.forEach(function(item, idx){
            lists.push(
                <li key={item.id}><a href="/">{item.title}</a></li>
            );
        });
        */
        //간단하게 줄여쓸 경우
        data.forEach( item =>{
            lists.push(
                <li key={item.id}>
                    <a href="/"
                        onClick={e=>{
                            e.preventDefault();
                            this.props.onChangePage(item.id);
                        }}
                    >{item.title}</a>
                </li>
            );
        });       


       return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>      
        )
    }
}

export default Mynav;