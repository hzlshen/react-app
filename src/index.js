import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX， 一种 JavaScript 的语法扩展
function formatName(user) {
    return user.firstName + '' +user.lastName;
}

const user ={
    firstName : '神威如狱',
    lastName : '不动的推动者'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

//JSX本身其实也是一种表达式
//可传参 可作返回值
function getGreeting(user) {
    if(user){
        return <h1>Hello,{formatName(user)}!</h1>;
    }
    return <h1>Hello , 啊哈哈哈</h1>;
}
//也可以用引号来定义以字符串为值的属性
const element1= <div tabIndex="0"></div>;
//也可以用大括号
const element2 = <img src="{user.avatarUrl}" />;
//相互嵌套
const element3 =(
    <div>
        <h1>小龟龟</h1>
        <h2>你好啊！世界！</h2>
    </div>
)

//JSX防注入攻击
// const title = response.potentiallyMaliciousInput;
//直接使用是安全的
// const element4 =<h1>{title}</h1>

//JSX代表Objects React.createElement()方法调用
//这两种代码作用是完全相同的
const element6 = (
    <h1 className="greeting">Hello , world!</h1>
);

const element8 = React.createElement(
    'h1',
    {
        className:'greeting'
    },
    'Hello , world'
)
//React.createElement()首先会进行避免bug的检查
const elay = {
    type:'h1',
    props:'greeting',
    children:'Hello world'
}

ReactDOM.render(
    element3,document.getElementById('root')
)