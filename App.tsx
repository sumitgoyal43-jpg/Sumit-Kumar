
import React, { useState, useCallback } from 'react';
import { DocumentType, FormData } from './types';
import { DOCUMENT_TYPES } from './constants';
import { generateDocument } from './services/geminiService';
import Header from './components/Header';
import DocumentSelector from './components/DocumentSelector';
import DocumentForm from './components/DocumentForm';
import OutputDisplay from './components/OutputDisplay';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentType>(DOCUMENT_TYPES[0]);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleDocumentSelect = useCallback((docType: DocumentType) => {
    setSelectedDocument(docType);
    setGeneratedContent('');
    setError('');
  }, []);

  const handleGenerate = async (formData: FormData) => {
    setIsLoading(true);
    setGeneratedContent('');
    setError('');
    try {
      const content = await generateDocument(selectedDocument, formData);
      setGeneratedContent(content);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Failed to generate document: ${err.message}`);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <div className="flex flex-col gap-8">
            <div className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700">
              <h2 className="text-xl font-bold mb-4 text-sky-400">1. Select Document Type</h2>
              <DocumentSelector
                selectedDocument={selectedDocument}
                onSelect={handleDocumentSelect}
              />
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700">
              <h2 className="text-xl font-bold mb-4 text-sky-400">2. Provide Details</h2>
              <DocumentForm
                docType={selectedDocument}
                onSubmit={handleGenerate}
                isLoading={isLoading}
              />
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700 sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-sky-400">3. Generated Document</h2>
            {isLoading && <Loader />}
            {error && <div className="text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</div>}
            {generatedContent && !isLoading && <OutputDisplay content={generatedContent} />}
            {!isLoading && !error && !generatedContent && (
              <div className="flex items-center justify-center h-96 bg-slate-800 rounded-lg text-slate-500">
                <p>Your generated document will appear here...</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
