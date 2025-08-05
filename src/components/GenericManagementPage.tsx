import React, { useState } from 'react';
import { PageConfig } from '../types';
import { InfoIcon, SearchIcon, PlusIcon, CloseIcon, TrashIcon, PencilIcon } from './icons';
import { Modal } from './Modal';
import { Form } from './Form';

export const GenericManagementPage = ({ config, handleClose }: { config: PageConfig, handleClose: () => void }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);

    const handleAction = (action: string, row: any) => alert(`Ação: ${action}\nItem: ${JSON.stringify(row, null, 2)}`);

    const handleOpenNewModal = () => {
        setEditingItem(null);
        setModalOpen(true);
    };

    const handleOpenEditModal = (item: any) => {
        setEditingItem(item);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setEditingItem(null);
    };
    
    const handleFormSubmit = (data: any) => {
        if (editingItem) {
            alert(`Salvando alterações para: ${JSON.stringify(editingItem, null, 2)}\nNovos dados: ${JSON.stringify(data, null, 2)}`);
        } else {
            alert(`Criando novo item com dados: ${JSON.stringify(data, null, 2)}`);
        }
        handleCloseModal();
    };


    return (
        <div className="page-container">
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingItem ? `Editar ${config.title}` : `Novo ${config.title}`}>
                {config.formFields && (
                     <Form 
                        fields={config.formFields}
                        onSubmit={handleFormSubmit}
                        onCancel={handleCloseModal}
                        initialData={editingItem}
                     />
                )}
            </Modal>

            <div className="page-header-container">
                <div className="page-title-section">
                    <span className="page-icon">{config.icon}</span>
                    <div>
                        <h2 className="page-title">{config.title}</h2>
                        <p className="page-description">{config.description}</p>
                        <div className="breadcrumb-trail">
                            {config.breadcrumb.map((crumb, i) => <span key={i}>{crumb}{i < config.breadcrumb.length - 1 && ' > '}</span>)}
                        </div>
                    </div>
                </div>
                <div className="page-identifier">
                    <span>Identificador: {config.identifier}</span>
                    <button className="info-btn" aria-label="Informações"><InfoIcon /></button>
                </div>
            </div>

            <div className="search-actions-bar">
                <div className="search-input-group">
                    <SearchIcon />
                    <input type="text" placeholder="Pesquisar..." />
                </div>
                <div className="action-buttons-group">
                    <button className="btn btn-primary" onClick={handleOpenNewModal}><PlusIcon /> Novo</button>
                    <button className="btn" onClick={handleClose}><CloseIcon /> Fechar</button>
                </div>
            </div>

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Ações</th>
                            {config.columns.map(col => <th key={col}>{col}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {config.data.length > 0 ? config.data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <div className="action-button-group">
                                        <button className="btn-icon" aria-label="Excluir" onClick={() => handleAction('Excluir', row)}><TrashIcon /></button>
                                        <button className="btn-icon" aria-label="Editar" onClick={() => handleOpenEditModal(row)}><PencilIcon /></button>
                                    </div>
                                </td>
                                {config.columns.map(col => <td key={`${col}-${rowIndex}`}>{row[col] || ''}</td>)}
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={config.columns.length + 1} className="no-records">Não foram encontrados registros na pesquisa.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
