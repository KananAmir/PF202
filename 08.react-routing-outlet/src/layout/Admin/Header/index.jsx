import { Link } from "react-router-dom"

const AdminHeader = () => {
    return (
        <header className="bg-white !p-5 border-b-2 border-gray-200 shadow-md">
            <nav className=''>
                <ul className='flex space-x-4 text-white text-lg font-semibold gap-4'>
                    <li>
                        <Link className={"text-orange-500"} to={"/admin"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link className={"text-orange-500"} to={"/admin/products"}>Products</Link>
                    </li>
                    <li>
                        <Link className={"text-orange-500"} to={"/admin/products/new"}>Add Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AdminHeader
