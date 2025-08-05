import React, { useState, useEffect } from 'react';
import { FormField, SingleFormField } from '../types';

interface FormProps {
    fields: FormField[];
    onSubmit: (data: any) => void;
    onCancel: () => void;
    initialData?: any;
}

export const Form: React.FC<FormProps> = ({ fields, onSubmit, onCancel, initialData }) => {
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        const initialFormState: any = {};
        fields.forEach(field => {
            if (field.type === 'group') {
                field.fields.forEach(subField => {
                    initialFormState[subField.name] = initialData?.[subField.label] ?? '';
                });
            } else {
                initialFormState[field.name] = initialData?.[(field as SingleFormField).label] ?? '';
            }
        });
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
        if (field.type === 'group') {
            return (
                <div key={field.name} className="form-group-inline">
                    {field.fields.map(subField => (
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
        
        const singleField = field as SingleFormField;
        return (
            <div key={singleField.name} className="form-control">
                <label htmlFor={singleField.name}>{singleField.label}</label>
                <input
                    type={singleField.type}
                    id={singleField.name}
                    name={singleField.name}
                    value={formData[singleField.name] || ''}
                    onChange={handleChange}
                    placeholder={singleField.placeholder}
                    required={singleField.required}
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
