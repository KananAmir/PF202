import { Outlet } from 'react-router-dom';
import ClientFooter from '../../layout/Client/Footer';
import ClinetHeader from '../../layout/Client/Header';
const ClientLayout = () => {
  return (
    <div>
        <ClinetHeader/>
        <Outlet/>
        <ClientFooter/>
    </div>
  )
}

export default ClientLayout
