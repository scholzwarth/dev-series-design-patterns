
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
const AppLayout = () => {
  return (
    <div className="position-relative">
      <NavBar />
      <main className="mainContainer">
        <Outlet />
      </main>
    </div >
  );
}

export default AppLayout;