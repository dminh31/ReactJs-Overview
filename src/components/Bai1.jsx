import React, { Component } from 'react'

export default class Bai1 extends Component {
    render() {
        let arr = ["HTML", "Javascrip", "Python", "C#"]
        return (
            <>
                <div>DANH SÁCH KHÓA HỌC</div>
                <ul>
                    {arr.map((item)=>(
                        <li>{item}</li>
                    ))}
                </ul>
            </>

        )
    }
}
