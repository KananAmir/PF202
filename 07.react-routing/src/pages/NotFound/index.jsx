import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Səhifə Tapılmadı</h2>
                <p className="text-gray-600 mb-6">
                    Axtardığınız səhifə mövcud deyil və ya silinmişdir.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 !bg-blue-600 text-white rounded !hover:bg-blue-700 transition"
                >
                    Ana səhifəyə qayıt
                </button>
            </div>
        </div>
    );
}

export default NotFound;
