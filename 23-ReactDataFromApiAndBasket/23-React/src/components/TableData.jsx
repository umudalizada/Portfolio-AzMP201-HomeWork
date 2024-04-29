import React, { useEffect, useState } from 'react';
import Search from './Search';
import axios from 'axios';
import { stringify, v4 as uuidv4 } from 'uuid';

const TableData = () => {
  const [datas, setDatas] = useState([]);
  const [initialDatas, setInitialDatas] = useState([]);


useEffect(()=>{
  axios.get("https://northwind.vercel.app/api/products").then((res)=>{
    setDatas(res.data)
    setInitialDatas(res.data);
  }).catch((err)=>{
    console.log("Api problem: ", err);
  })
},[])
  return (
    <div className="left">
      <Search datas={datas} setDatas={setDatas} initialDatas={initialDatas} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UnitPrice</th>

          </tr>
          <tr>
            <th></th>
            <th>
              <button
                onClick={() => {
                  const sortedData = [...datas].sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                  });
                  setDatas(sortedData);
                }}
              >
                A-z
              </button>
              <button
                onClick={() => {
                  const Zaarray = [...datas].sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (nameA < nameB) return 1;
                    if (nameA > nameB) return -1;
                    return 0;
                  });
                  setDatas(Zaarray);
                }}
              >
                Z-a
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  let lowPrice = [...datas].sort((a, b) => a.unitPrice - b.unitPrice);
                  setDatas(lowPrice);
                }}
              >
                Low
              </button>
              <button
                onClick={() => {
                  let highPrice = [...datas].sort((a, b) => b.unitPrice - a.unitPrice);
                  setDatas(highPrice);
                }}
              >
                High
              </button>
            </th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Basket</th>
          </tr>
        </thead>
        <tbody>
          {
          datas.map((elem) => {

            return (
              <tr key={uuidv4()}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.unitPrice} $</td>
                <td>
                  <button
                    className="edit"
                    onClick={() => {
                      const newName = prompt('Enter new name:', elem.name);
                      const newPrice = prompt('Enter new price:', elem.unitPrice);

                      if (newName !== null && newPrice !== null) {
                        const updatedData = datas.map((item) => {
                          if (item.id === elem.id) {
                            return { ...item, name: newName, unitPrice: newPrice };
                          }
                          return item;
                        });
                        setDatas(updatedData);

                        axios.patch(`https://northwind.vercel.app/api/products/${elem.id}`,{
                          name: newName,
                          unitPrice: newPrice,
                        });

                      }
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={()=>{
                      let arr=datas.filter(element=>element.id!==elem.id)
                      setDatas(arr)
                      axios.delete(`https://northwind.vercel.app/api/products/${elem.id}`)
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                <button className="addBasket" onClick={() => {
                  const element = datas.find(item => item.id === elem.id);
                  if (element) {
                    let basket = JSON.parse(localStorage.getItem('basket')) || [];
                    const control = basket.find(item => item.id === element.id);
                    if (control) {
                      control.count++;
                    } else {
                      element.count = 1;
                      basket.push(element);
                    }
                    localStorage.setItem("basket", JSON.stringify(basket));
                  }
                  
                }}>Add Basket </button>
              </td>

              </tr>
            );
          })
          } 
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
