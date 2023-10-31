import React, { Component } from 'react'

export default class Bai3 extends Component {
    render() {
        let today = new Date();
        return (
            <div>
                <h2>Xin chào các bạn!</h2>
                <p>Bây giờ là: {today.toLocaleTimeString()}</p>
            </div>
        )
    }
}
