import { Outlet } from 'react-router-dom';
import AdminHeader from '../../layout/Admin/Header';

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader/>
            <Outlet />
        </div>
    )
}

export default AdminLayout
