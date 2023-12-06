import React, { Component } from 'react';

export default class Table extends Component{
   sampleData = [

    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
  
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
  
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
  
    { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
  
    { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
  
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
  
    { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
  
    { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
  
    { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
  
    { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
  
  ];
  state = {
    rows:''
  }

 constructor(){
  super();

 
  }

  

  render(){
    return(
      <>
      <h1>Table</h1>
      <p>{this.state}</p>
      <p>{this.showTable.bind}</p>
      </>
    );

    
  }
  showTable=()=>{
    const TableRow=(rows)=>{
      const{id,name,age,city, occupation}=rows;
      return (
        <>
          <tr>
          <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {age}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {city}
          </span>
        </td>        <td>
          <span className="fw-normal">
            {occupation}
          </span>
        </td>        
          </tr>
          </>
    
      )

    }
    return(

      <Table hover className="user-table align-items-center">
      <thead>
        <tr>
          <th className="border-bottom">id</th>
          <th className="border-bottom">name</th>
          <th className="border-bottom">age</th>
          <th className="border-bottom">city</th>
          <th className="border-bottom">occupation</th>
          
        </tr>
      </thead>
      <tbody>
        {this.rows.bind.map(t => <TableRow key={`data-${t.id}`} {...t} />)}
      </tbody>
    </Table>
    )
  }
  inputFilter(){
    <><label htmlFor="name">name</label>
    <input type="text" name='name'/>
    <label htmlFor="age">age</label>
    <input type="search"/>

    </>
    
  }
  resetButton(){
    <button onClick={ this.state.sampleData}>reset</button>
  }


}

