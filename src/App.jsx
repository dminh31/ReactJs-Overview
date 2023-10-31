// import React, { Fragment } from 'react'

/* export default function App() {
  const fullName = "viet hieu"
  const age = 18;
  const a = 6
  const b = 8
  let obj = {
    name: "hoa",
    age: 20,
  }
  let students = ["minh", "hoa", "hồng"]
  let address = [
    {
      name: "hiếu",
      add: "chí linh",
      id: 1,
    },
    {
      name: "minh",
      add: "nbinh",
      id: 2
    },
    {
      name: "hào",
      add: "chuong my",
      id: 3
    }
  ]
  return (
    <>
      {<p>xin chao {fullName} , {age} tuoi </p>
      <h2>tong cua a va b là {a + b} </h2>
      <p>{obj.name}</p>
      <p>{students}</p>
      <ul>
        {students.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>}
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {address.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.add}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
} */

import React from 'react'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/BT4/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'


export default function App() {
  return (
    <>
      {/* <Bai1></Bai1>
      <Bai2></Bai2> */}
      {/* <Bai3></Bai3> */}
      {/* <Bai4></Bai4> */}
      {/* <Bai5></Bai5> */}
      <Bai6></Bai6>
    </>
  )
}

