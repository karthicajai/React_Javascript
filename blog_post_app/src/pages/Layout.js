import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

export default function Layout({search, setSearch}) {
  return (
    <div className="App">
        <Header title="React Blog Application" />
        <Nav search={search} setSearch={setSearch}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
