
import React, { useState } from 'react';

interface OutputDisplayProps {
  content: string;
}

const ClipboardIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const OutputDisplay: React.FC<OutputDisplayProps> = ({ content }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative bg-slate-900 rounded-lg p-1">
             <button
                onClick={handleCopy}
                className="absolute top-3 right-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Copy to clipboard"
            >
                {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
            </button>
            <div className="prose prose-invert prose-sm max-w-none bg-slate-800 rounded-lg p-6 h-96 overflow-y-auto whitespace-pre-wrap">
                <pre className="whitespace-pre-wrap font-sans text-slate-300">{content}</pre>
            </div>
        </div>
    );
};

export default OutputDisplay;
