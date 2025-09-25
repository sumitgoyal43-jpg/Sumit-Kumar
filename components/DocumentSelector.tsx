
import React from 'react';
import { DocumentType } from '../types';
import { DOCUMENT_TYPES } from '../constants';

interface DocumentSelectorProps {
  selectedDocument: DocumentType;
  onSelect: (docType: DocumentType) => void;
}

const DocumentSelector: React.FC<DocumentSelectorProps> = ({ selectedDocument, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {DOCUMENT_TYPES.map((docType) => (
        <button
          key={docType}
          onClick={() => onSelect(docType)}
          className={`px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500
            ${selectedDocument === docType
              ? 'bg-sky-600 text-white shadow-md'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
        >
          {docType}
        </button>
      ))}
    </div>
  );
};

export default DocumentSelector;
