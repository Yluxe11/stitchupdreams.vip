import React from 'react';
import { Type } from 'lucide-react';

interface TextEditorProps {
  value: string;
  onChange: (text: string) => void;
}

export function TextEditor({ value, onChange }: TextEditorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
        <Type className="w-5 h-5 mr-2" />
        Add Custom Text
      </h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your text here..."
        className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>Supports multiple lines</span>
        <span>{value.length}/100</span>
      </div>
    </div>
  );
}