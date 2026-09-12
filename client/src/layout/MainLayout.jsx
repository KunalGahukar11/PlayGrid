import React from 'react'
import { Outlet } from 'react-router-dom';

import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';

const MainLayout = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">

            {/* Header */}
            <TopNavigation />

            {/* Scrollable Main Content */}
            <main className="flex-1 overflow-y-auto mx-2">
                <div className="border border-slate-200 rounded-lg p-2 my-2">
                    <Outlet />
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNavigation />

        </div>
    );
};

export default MainLayout