import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {

  const data = [
    { id: 1, firstName: "Rahul", lastName: "Kumar", email: "rahul@gmail.com" },
    { id: 2, firstName: "Rohan", lastName: "Singh", email: "rohan@gmail.com" },
    { id: 3, firstName: "Raju", lastName: "Kumar", email: "raju@gmail.com" },
    { id: 4, firstName: "Kapil", lastName: "sharma", email: "kapil@gmail.com" },
    { id: 5, firstName: "Yogesh", lastName: "samu", email: "yegoesh@gmail.com" },
    { id: 6, firstName: "Rajiv", lastName: "Chohan", email: "rajiv@gmail.com" },
    { id: 7, firstName: "Tinu", lastName: "Kumari", email: "tinu@gmail.com" },
    { id: 8, firstName: "garima", lastName: "raaj", email: "garima@gmail.com" },
    { id: 9, firstName: "himanshu", lastName: "thakur", email: "himanshu@gmail.com" },
    { id: 10, firstName: "pardeep", lastName: "yadav", email: "pradeep@gmail.com" },
  ]

  const [value, setValue] = useState('')
  const [dataSource, setDataSource] = useState(data)
  const [tableFilter, settableFilter] = useState([])

  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter(o=>Object.keys(o).some(k =>
        String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        ));
        settableFilter([...filterTable])
    }
    else
    {
      setValue(e.target.value);
      setDataSource([...dataSource])
    }
  }

  return (
    <div className="App">
      <div className="input-group mb-3 w-25">
        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={value} onChange={filterData} />
      </div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            value.length > 0 ? tableFilter.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })
            :
            dataSource.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })
            }
        </tbody>
      </table>
    </div>
  );
}



export default App;
