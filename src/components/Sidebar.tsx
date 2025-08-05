import React, { useState, useEffect } from 'react';
import { MenuItemData } from '../types';
import { PlayIcon, ChevronRightIcon } from './icons';

const SidebarNavItem: React.FC<{ item: MenuItemData; activeTab: string; handleOpenTab: (page: string) => void; }> = ({ item, activeTab, handleOpenTab }) => {
    const isInitiallyOpen = item.submenu?.some(sub => sub.name === activeTab) ?? false;
    const [isSubmenuOpen, setSubmenuOpen] = useState(isInitiallyOpen);
    
    useEffect(() => {
        if (isInitiallyOpen) {
            setSubmenuOpen(true);
        }
    }, [activeTab, isInitiallyOpen]);

    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isParentActive = hasSubmenu && item.submenu?.some(sub => sub.name === activeTab);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (hasSubmenu) {
            setSubmenuOpen(prev => !prev);
        } else {
            handleOpenTab(item.name);
        }
    };

    return (
        <li className="nav-item">
            <a href="#" className={`nav-link ${isParentActive ? 'active' : ''}`} onClick={handleClick}>
                {item.icon}
                <span>{item.name}</span>
                {hasSubmenu && <ChevronRightIcon className={`chevron-icon ${isSubmenuOpen ? 'open' : ''}`} />}
            </a>
            {hasSubmenu && (
                <ul className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                    {item.submenu?.map(subItem => (
                         <li key={subItem.name}>
                            <a href="#" className={`nav-link sub-link ${activeTab === subItem.name ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleOpenTab(subItem.name); }}>
                               {subItem.name}
                           </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export const Sidebar: React.FC<{ menuItems: MenuItemData[]; activeTab: string; handleOpenTab: (page: string) => void; isSidebarOpen: boolean; }> = ({ menuItems, activeTab, handleOpenTab, isSidebarOpen }) => {
    return (
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-text">
                    <h1>MUNICÍPIO DE IBICARAÍ</h1>
                    <span>Ano de Trabalho - 2025</span>
                </div>
                 <button className="play-btn" aria-label="Play"><PlayIcon /></button>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {menuItems.map(item => (
                        <SidebarNavItem key={item.name} item={item} activeTab={activeTab} handleOpenTab={handleOpenTab} />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};
