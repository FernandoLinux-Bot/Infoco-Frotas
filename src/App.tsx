import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TabbedContent } from './components/TabbedContent';
import { frotasMenuItems } from './data/menuData';
import { LoginPage } from './components/LoginPage';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [openTabs, setOpenTabs] = useState(['Página Principal']);
    const [activeTab, setActiveTab] = useState('Página Principal');
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);
    const userName = "Uilber";

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    const handleOpenTab = (tabName: string) => {
        if (!openTabs.includes(tabName)) {
            setOpenTabs(prev => [...prev, tabName]);
        }
        setActiveTab(tabName);
    };

    const handleCloseTab = (tabToClose: string) => {
        const tabIndex = openTabs.indexOf(tabToClose);
        const newTabs = openTabs.filter(tab => tab !== tabToClose);

        if (activeTab === tabToClose) {
            const newActiveIndex = Math.max(0, tabIndex - 1);
            setActiveTab(newTabs[newActiveIndex] || 'Página Principal');
        }
        setOpenTabs(newTabs.length > 0 ? newTabs : ['Página Principal']);
    };
    
    const handleMenuClick = () => setSidebarOpen(!isSidebarOpen);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Call on initial mount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return (
        <div className="app-container">
            <Sidebar 
                menuItems={frotasMenuItems} 
                activeTab={activeTab} 
                handleOpenTab={handleOpenTab}
                isSidebarOpen={isSidebarOpen}
            />
            <div className={`main-wrapper ${isSidebarOpen ? '' : 'full'}`}>
                <Header 
                    onMenuClick={handleMenuClick}
                    userName={userName}
                    onLogout={handleLogout}
                />
                <TabbedContent 
                    openTabs={openTabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    handleCloseTab={handleCloseTab}
                />
            </div>
        </div>
    );
};

export default App;
