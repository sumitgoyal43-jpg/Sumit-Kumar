
import React, { useState, useEffect } from 'react';
import { DocumentType, FormData, FormField } from '../types';
import { FORM_CONFIG } from '../constants';

interface DocumentFormProps {
  docType: DocumentType;
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ docType, onSubmit, isLoading }) => {
  const formFields = FORM_CONFIG[docType];
  
  const getInitialState = (): FormData => {
    return formFields.reduce((acc, field) => {
      acc[field.id] = '';
      return acc;
    }, {} as FormData);
  };

  const [formData, setFormData] = useState<FormData>(getInitialState());

  useEffect(() => {
    setFormData(getInitialState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formFields.map((field: FormField) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-slate-300 mb-1">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              rows={4}
              className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              required
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              required
            />
          )}
        </div>
      ))}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Generating...' : 'Generate Document'}
        </button>
      </div>
    </form>
  );
};

export default DocumentForm;
