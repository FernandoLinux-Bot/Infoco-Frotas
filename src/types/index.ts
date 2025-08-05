import React from 'react';

export interface SubMenuItemData { 
    name: string; 
}

export interface MenuItemData {
    name: string;
    icon: React.ReactElement;
    submenu?: SubMenuItemData[];
}

export type UserMenuItemData = 
    | { name: string; icon?: React.ReactElement; type?: 'item'; } 
    | { type: 'divider'; };

export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'number' | 'date' | 'email' | 'password';
    placeholder?: string;
    required?: boolean;
    group?: FormField[];
}

export interface PageConfig {
    title: string;
    description: string;
    icon: React.ReactElement;
    identifier: string;
    breadcrumb: string[];
    columns: string[];
    data: any[];
    formFields?: FormField[];
}
