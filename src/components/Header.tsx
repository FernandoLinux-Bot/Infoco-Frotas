import React, { useState, useEffect, useRef } from 'react';
import { UserMenuItemData } from '../types';
import { userMenuItems } from '../data/menuData';
import { BellIcon, Bars3Icon } from './icons';

export const Header = ({ onMenuClick, userName }: { onMenuClick: () => void; userName: string; }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="header">
             <button className="hamburger-btn" onClick={onMenuClick} aria-label="Abrir menu"><Bars3Icon /></button>
            <div className="header-actions">
                <button className="action-btn" aria-label="Notificações"><BellIcon /></button>
                <div className="user-profile" ref={userMenuRef} onClick={() => setUserMenuOpen(o => !o)}>
                    <div className="user-avatar">{userName.charAt(0)}</div>
                    <span className="user-name">{userName}</span>
                    <div className={`user-menu ${userMenuOpen ? 'open' : ''}`}>
                        {userMenuItems.map((item, index) =>
                            item.type === 'divider' ? (
                                <div key={`divider-${index}`} className="user-menu-divider" />
                            ) : (
                                <div key={item.name} className="user-menu-item">
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
