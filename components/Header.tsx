
import React from 'react';

const DocumentIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/60 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
            <DocumentIcon className="w-8 h-8 text-sky-400" />
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
            Release Document AI Assistant
            </h1>
        </div>
        <p className="text-slate-400 mt-1">
            Streamlining release documentation for Business Analysts.
        </p>
      </div>
    </header>
  );
};

export default Header;
