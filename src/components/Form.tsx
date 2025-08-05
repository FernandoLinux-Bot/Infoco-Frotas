import React, { useState, useEffect } from 'react';
import { FormField } from '../types';

interface FormProps {
    fields: FormField[];
    onSubmit: (data: any) => void;
    onCancel: () => void;
    initialData?: any;
}

export const Form: React.FC<FormProps> = ({ fields, onSubmit, onCancel, initialData }) => {
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        const initialFormState = fields.reduce((acc, field) => {
            acc[field.name] = initialData?.[field.label] ?? '';
            return acc;
        }, {} as any);
        setFormData(initialFormState);
    }, [fields, initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const renderField = (field: FormField) => {
        if (field.group) {
            return (
                <div key={field.name} className="form-group form-group-inline">
                    {field.group.map(subField => (
                         <div key={subField.name} className="form-control">
                            <label htmlFor={subField.name}>{subField.label}</label>
                            <input
                                type={subField.type}
                                id={subField.name}
                                name={subField.name}
                                value={formData[subField.name] || ''}
                                onChange={handleChange}
                                placeholder={subField.placeholder}
                                required={subField.required}
                            />
                        </div>
                    ))}
                </div>
            )
        }
        return (
            <div key={field.name} className="form-control">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="dynamic-form">
            <div className="form-fields">
                {fields.map(renderField)}
            </div>
            <div className="form-actions">
                <button type="button" className="btn" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </form>
    );
};
