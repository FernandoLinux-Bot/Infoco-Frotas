import React from 'react';
import { PageConfig } from '../types';
import { TruckIcon, FolderIcon, IdCardIcon, GasPumpIcon, RouteIcon, WrenchScrewdriverIcon, TireIcon, BuildingOfficeIcon } from '../components/icons';

export const pageConfig: Record<string, PageConfig> = {
    'Municípios': {
        title: 'Municípios',
        description: 'Gerencia o cadastro dos municípios.',
        icon: <BuildingOfficeIcon />,
        identifier: '100100',
        breadcrumb: ['Geral', 'Municípios'],
        columns: ['Nome do Município', 'UF', 'Código IBGE'],
        data: [
            { 'Nome do Município': 'Ibicaraí', 'UF': 'BA', 'Código IBGE': '2912909' },
            { 'Nome do Município': 'Itabuna', 'UF': 'BA', 'Código IBGE': '2914804' },
            { 'Nome do Município': 'Ilhéus', 'UF': 'BA', 'Código IBGE': '2913600' },
        ],
        formFields: [
            { name: 'nome', label: 'Nome do Município*', type: 'text', required: true },
            { name: 'uf', label: 'UF*', type: 'text', required: true },
            { name: 'codigoIbge', label: 'Código IBGE', type: 'text' },
        ]
    },
    'Veículo e Equipamento': {
        title: 'Veículo e Equipamento',
        description: 'Gerencia o cadastro do veículo e suas características, tipo de combustível e condutor.',
        icon: <TruckIcon />,
        identifier: '101300',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Veículo e Equipamento'],
        columns: ['Número', 'Placa', 'Aquisição', 'Ano Fabricação', 'Marca', 'Veículo', 'RENAVAM', 'Estrutura Organizacional'],
        data: [
            { 'Número': '00287', 'Placa': 'JSR7294', 'Aquisição': '05/08/2025 15:30:12', 'Ano Fabricação': '2025', 'Marca': 'VolksWagen', 'Veículo': '10-160 E Delivery 2p (diesel)(E5)', 'RENAVAM': '987654321', 'Estrutura Organizacional': 'Secretaria de Obras' },
            { 'Número': '00286', 'Placa': 'JAP4128', 'Aquisição': '05/08/2025 10:49:27', 'Ano Fabricação': '2025', 'Marca': 'VolksWagen', 'Veículo': '10-160 E Delivery 2p (diesel)(E5)', 'RENAVAM': '123456789', 'Estrutura Organizacional': 'Prefeitura Municipal de Urandi' },
        ],
        formFields: [
            { name: 'modelo', label: 'Modelo*', type: 'text', required: true },
            { name: 'categoria', label: 'Categoria*', type: 'text', required: true },
            { type: 'group', name: 'placaGroup', fields: [
                { name: 'placa', label: 'Placa', type: 'text', placeholder: '___-____' },
                { name: 'prefixo', label: 'Prefixo', type: 'text' },
            ]},
            { name: 'corPredominante', label: 'Cor Predominante', type: 'text' },
            { name: 'renavam', label: 'Renavam', type: 'text' },
            { name: 'chassis', label: 'Chassis', type: 'text' },
            { name: 'licenciamento', label: 'Licenciamento (CRLV)', type: 'text' },
            { type: 'group', name: 'anoGroup', fields: [
                { name: 'anoFabricacao', label: 'Ano Fabricação', type: 'number', placeholder: '2025' },
                { name: 'anoModelo', label: 'Ano Modelo', type: 'number', placeholder: '2025' },
            ]},
        ]
    },
    'Colaborador': {
        title: 'Colaborador',
        description: 'Registra o colaborador responsável por conduzir o veículo.',
        icon: <FolderIcon />,
        identifier: '101010',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Colaborador'],
        columns: ['Colaborador', 'Função', 'CPF', 'Matrícula', 'Valor Hora'],
        data: [
            { 'Colaborador': 'Valquiria Pereira Dias Soares', 'Função': 'Não informado', 'CPF': '119.899.826-96', 'Matrícula': '', 'Valor Hora': '0,00' }
        ],
        formFields: [
            { name: 'nome', label: 'Nome*', type: 'text', required: true },
            { name: 'cpf', label: 'CPF*', type: 'text', required: true },
            { name: 'cargo', label: 'Cargo', type: 'text' },
            { name: 'funcao', label: 'Função', type: 'text' },
            { name: 'matricula', label: 'Matrícula', type: 'text' },
            { name: 'cnh', label: 'Registro CNH', type: 'text' },
            { name: 'categoriaCnh', label: 'Categoria Habilitação', type: 'text' },
            { name: 'valorHora', label: 'Valor Hora', type: 'number' },
        ]
    },
    'Fornecedor': {
        title: 'Fornecedor',
        description: 'Registra o fornecedor, próprio ou terceiros para gerenciamento da manutenção e abastecimento.',
        icon: <FolderIcon />,
        identifier: '101040',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Fornecedor'],
        columns: ['Fornecedor', 'Próprio', 'Posto', 'Oficina', 'Responsável'],
        data: [
            { 'Fornecedor': 'AUTO POSTO CANGUSSU LTDA ME', 'Próprio': 'Não', 'Posto': 'Sim', 'Oficina': 'Não', 'Responsável': '' },
            { 'Fornecedor': 'Prefeitura Municipal de Urandi', 'Próprio': 'Não', 'Posto': 'Sim', 'Oficina': 'Sim', 'Responsável': '' }
        ],
        formFields: [
            { name: 'fornecedor', label: 'Fornecedor*', type: 'text', required: true },
            { name: 'proprio', label: 'Próprio (Sim/Não)', type: 'text' },
            { name: 'posto', label: 'Posto (Sim/Não)', type: 'text' },
            { name: 'oficina', label: 'Oficina (Sim/Não)', type: 'text' },
            { name: 'responsavel', label: 'Responsável', type: 'text' },
        ]
    },
    'Veículo - Placa': {
        title: 'Veículo - Placa',
        description: 'Registra o histórico dos emplacamentos vinculados ao veículo.',
        icon: <IdCardIcon />,
        identifier: '12403',
        breadcrumb: ['Frotas', 'Tabelas Básicas', 'Veículo - Placa'],
        columns: ['Placa', 'Vigência Inicial', 'Vigência Final'],
        data: [
            { 'Placa': 'QTV0J62', 'Vigência Inicial': '14/02/2025', 'Vigência Final': '' },
            { 'Placa': 'QUH1751', 'Vigência Inicial': '18/02/2025', 'Vigência Final': '' }
        ],
        formFields: [
            { name: 'placa', label: 'Placa*', type: 'text', required: true },
            { name: 'vigenciaInicial', label: 'Vigência Inicial*', type: 'date', required: true },
            { name: 'vigenciaFinal', label: 'Vigência Final', type: 'date' },
        ]
    },
    'Cota de Combustível': {
        title: 'Cota de Combustível',
        description: 'Gerencia a cota de combustível a ser utilizada num determinado período, informe o fornecedor, contrato, centro de custo e o veículo.',
        icon: <GasPumpIcon />,
        identifier: '10318',
        breadcrumb: ['Frotas', 'Configurações', 'Cota de Combustível'],
        columns: ['Combustível', 'Monetário', 'Repasse', 'Meta', 'Início', 'Término', 'Valor', 'Percentual'],
        data: [],
        formFields: [
            { name: 'combustivel', label: 'Combustível', type: 'text' },
            { name: 'valor', label: 'Valor', type: 'number' },
            { name: 'inicio', label: 'Início', type: 'date' },
            { name: 'termino', label: 'Término', type: 'date' },
        ]
    },
     'Rota e Percurso': {
        title: 'Rota e Percurso',
        description: 'Registra a rota e/ou trajeto para utilização do veículo.',
        icon: <RouteIcon />,
        identifier: '1070480',
        breadcrumb: ['Frotas', 'Configurações', 'Rota e Percurso'],
        columns: ['Rota', 'Descrição'],
        data: [],
        formFields: [
             { name: 'rota', label: 'Rota*', type: 'text', required: true },
             { name: 'descricao', label: 'Descrição', type: 'text' },
        ]
    },
    'Plano de Manutenção Preventiva': {
        title: 'Plano de Manutenção Preventiva',
        description: 'Gerencia qual manutenção preventiva será realizada no veículo.',
        icon: <WrenchScrewdriverIcon />,
        identifier: '101130',
        breadcrumb: ['Frotas', 'Configurações', 'Plano de Manutenção Preventiva'],
        columns: ['Plano', 'Descrição', 'Tipo de Plano'],
        data: [],
        formFields: [
             { name: 'plano', label: 'Plano*', type: 'text', required: true },
             { name: 'descricao', label: 'Descrição', type: 'text' },
             { name: 'tipo', label: 'Tipo de Plano', type: 'text' },
        ]
    },
    'Pneu': {
        title: 'Pneu',
        description: 'Registra o pneu conforme modelo e suas características.',
        icon: <TireIcon />,
        identifier: '10678',
        breadcrumb: ['Frotas', 'Pneu', 'Pneu'],
        columns: ['Registro', 'Tipo', 'Marca', 'Modelo', 'Dimensão'],
        data: [],
        formFields: [
            { name: 'registro', label: 'Registro*', type: 'text', required: true },
            { name: 'tipo', label: 'Tipo', type: 'text' },
            { name: 'marca', label: 'Marca', type: 'text' },
            { name: 'modelo', label: 'Modelo', type: 'text' },
            { name: 'dimensao', label: 'Dimensão', type: 'text' },
        ]
    }
};
