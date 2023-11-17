import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import Portal from './Portal';
import CreateUser from './CreateUser';
import UserView from './UserView';
import EditUser from './EditUser';


function App() {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Deepak Suthan",
      email: "deepaksuthan111@gmail.com",
      role: "Developer",
      salary: "48000"
    },
    {
      id: "2",
      name: "Shaha Ilmee",
      email: "shahailmee@gmail.com",
      role: "Support",
      salary: "37000"
    },
    {
      id: "3",
      name: "Elangovan R",
      email: "elangomvr@gmail.com",
      role: "Tester",
      salary: "34000"
    },
    {
      id: "4",
      name: "Rakesh M",
      email: "raheshmonohar@gmail.com",
      role: "Developer",
      salary: "48000"
    },
    {
      id: "5",
      name: "Avinash B",
      email: "avinashb@gmail.com",
      role: "Support",
      salary: "37000"
    },
    {
      id: "6",
      name: "Karthick S",
      email: "karthicksankar@gmail.com",
      role: "Tester",
      salary: "34000"
    },
    {
      id:"7",
      name: "Gunasaker N",
      email: "gunaln@gmail.com",
      role: "Developer",
      salary: "48000"
    },
    {
      id: "8",
      name: "Avinash B",
      email: "avinashb@gmail.com",
      role: "Support",
      salary: "37000"
    },
    {
      id: "9",
      name: "Karthick s",
      email: "karthicks@gmail.com",
      role: "Tester",
      salary: "34000"
    }

  ])
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/portal" element={<Portal />}>
        <Route path="userlist" element={<UserList data={data} setData={setData} />} />
        <Route path="createuser" element={<CreateUser data={data} setData={setData} />} />
        <Route path="userview/:id" element={<UserView data={data} />} />
        <Route path="edituser/:id" element={<EditUser data={data} />} />
      </Route>
    </Routes>
  );
}

export default App;
