import React from 'react';
import { MenuItemData, UserMenuItemData } from '../types';
import { 
    FolderIcon, Cog6ToothIcon, TruckIcon, GasPumpIcon, WrenchScrewdriverIcon, 
    TireIcon, ChartPieIcon, LockClosedIcon, PaintBrushIcon, ArrowLeftOnRectangleIcon, BuildingOfficeIcon 
} from '../components/icons';

export const frotasMenuItems: MenuItemData[] = [
    { name: 'Municípios', icon: <BuildingOfficeIcon /> },
    { name: 'Tabelas Básicas', icon: <FolderIcon />, submenu: [
        { name: 'Veículo e Equipamento' }, { name: 'Colaborador' }, { name: 'Fornecedor' }, { name: 'Veículo - Placa' }
    ]},
    { name: 'Configurações', icon: <Cog6ToothIcon />, submenu: [
        { name: 'Cota de Combustível' }, { name: 'Rota e Percurso' }, { name: 'Plano de Manutenção Preventiva' }, { name: 'Registro Mecânico' }
    ]},
    { name: 'Movimentação', icon: <TruckIcon />, submenu: [
        { name: 'Composição (Veículo/Reboque)' }, { name: 'Componente e Acessório' }, { name: 'Atividade e Agendamento' },
    ]},
    { name: 'Posto', icon: <GasPumpIcon />, submenu: [ { name: 'Ordem de Abastecimento' }, { name: 'Abastecimento' } ]},
    { name: 'Oficina', icon: <WrenchScrewdriverIcon />, submenu: [ { name: 'Ordem de Manutenção' }, { name: 'Manutenção' } ]},
    { name: 'Pneu', icon: <TireIcon />, submenu: [ { name: 'Pneu' }, { name: 'Movimentação' } ]},
    { name: 'Relatórios', icon: <ChartPieIcon />, submenu: [ { name: 'Gerenciais' } ]}
];

export const userMenuItems: UserMenuItemData[] = [
    { name: 'Credenciais', icon: <LockClosedIcon /> },
    { name: 'Propriedades', icon: <Cog6ToothIcon /> },
    { name: 'Customizar', icon: <PaintBrushIcon /> },
    { type: 'divider' },
    { name: 'Sair', icon: <ArrowLeftOnRectangleIcon /> },
];
