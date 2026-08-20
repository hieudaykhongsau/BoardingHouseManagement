import {HomeIcon, LayoutDashboard, ReceiptText, Wrench} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import '../assets/css/Sidebar.css';
import { tenantData } from '../data/mockData';
import  getNavClass  from '../assets/js/activeRoute';

const Sidebar = () => {

    const {pathname} = useLocation();
  return (
    <aside className="sidebar glass-panel">
        <NavLink to="/dashboard" className="sidebar-header">
          <div className="logo-icon">
            <HomeIcon />
          </div>
          <h2>House Management</h2>
        </NavLink>
      
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={getNavClass(pathname, '/dashboard')}>
          <LayoutDashboard className="nav-icon" />
          Bảng điều khiển
        </NavLink>
        <NavLink to="/invoices" className={getNavClass(pathname, '/invoices')}>
          <ReceiptText className="nav-icon" />
          Hóa đơn
        </NavLink>
        <NavLink to="/my-rooms" className={getNavClass(pathname, '/my-rooms')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          Phòng của tôi
        </NavLink>
        <NavLink to="/maintenance" className={getNavClass(pathname, '/maintenance')}>
          <Wrench className="nav-icon" />
          Bảo trì
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">
            {tenantData.name.charAt(0)}
          </div>
          <div className="user-info">
            <p className="text-sm user-name">{tenantData.name}</p>
            <p className="text-label user-room">{tenantData.roomNumber}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
