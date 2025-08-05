import React from 'react';
import { GenericManagementPage } from './GenericManagementPage';
import { pageConfig } from '../data/pageData';
import { HomeIcon, XMarkIcon } from './icons';

const PlaceholderContent = ({ pageTitle, message }: { pageTitle: string, message: string }) => (
    <div className="content-placeholder">
        <div className="placeholder-icon"><HomeIcon /></div>
        <h1>{pageTitle}</h1>
        <p>{message}</p>
    </div>
);

export const TabbedContent = ({ openTabs, activeTab, setActiveTab, handleCloseTab }: { openTabs: string[], activeTab: string, setActiveTab: (tab: string) => void, handleCloseTab: (tab: string) => void }) => {
    const renderContent = () => {
        if (activeTab === 'Página Principal') {
            return <PlaceholderContent pageTitle="Bem-vindo ao Sistema de Frotas" message="Selecione um item no menu para começar a gerenciar sua frota." />;
        }
        const config = pageConfig[activeTab];
        if (config) {
            return <GenericManagementPage config={config} handleClose={() => handleCloseTab(activeTab)} />;
        }
        return <PlaceholderContent pageTitle={`Página "${activeTab}"`} message="Esta página ainda está em construção." />;
    };
    
    return (
        <main className="content">
            <div className="tabs-container">
                {openTabs.map(tab => (
                    <div key={tab} className={`tab ${tab === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                        <span>{tab}</span>
                        {tab !== 'Página Principal' &&
                            <button className="tab-close-btn" onClick={(e) => { e.stopPropagation(); handleCloseTab(tab); }}><XMarkIcon /></button>
                        }
                    </div>
                ))}
            </div>
            <div className="content-area">
                {renderContent()}
            </div>
        </main>
    );
};
