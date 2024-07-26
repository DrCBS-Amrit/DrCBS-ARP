"use client";
import { useState } from 'react';

export default function Home() {
  const [fields, setFields] = useState([{ fileName: '', text: '' }]);
  const [maxFields, setMaxFields] = useState(3); // Initial number of fields

  const handleFileChange = (index) => (e) => {
    const newFields = [...fields];
    newFields[index].fileName = e.target.files[0]?.name || '';
    setFields(newFields);
  };

  const handleTextChange = (index) => (e) => {
    const newFields = [...fields];
    newFields[index].text = e.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { fileName: '', text: '' }]);
  };

  const removeField = (index) => () => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="w-full py-6 bg-white shadow-md">
        <h1 className="text-4xl text-center text-black font-bold">INS Vuln</h1>
      </header>
      <main className="flex flex-col items-center justify-start flex-1 w-full px-4 space-y-6">
        <div className="flex flex-col items-center w-full max-w-3xl space-y-4 mt-6">
          {fields.map((field, index) => (
            <div key={index} className="flex items-center space-x-4 w-full justify-center">
              <div className="flex flex-col items-center">
                <label className="flex flex-col items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-green-700 cursor-pointer hover:bg-green-600">
                  <span className="text-base leading-normal">Upload</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange(index)} 
                  />
                </label>
                {fields.length > 3 && (
                  <button
                    type="button"
                    className="mt-2 text-red-500 underline"
                    onClick={removeField(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                type="text"
                className="px-4 py-2 border rounded shadow w-full max-w-xs"
                value={field.text}
                onChange={handleTextChange(index)}
                placeholder="Enter Vulnerability"
              />
            </div>
          ))}
        </div>
        
        <div className="w-full max-w-3xl flex flex-col items-center space-y-2 mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            onClick={addField}
          >
            Add More
          </button>
        </div>

        <div className="w-full max-w-3xl flex flex-col items-center">
          {fields.map((field, index) => (
            field.fileName && <span key={index} className="text-xl mt-4">{field.fileName}</span>
          ))}
        </div>
      </main>
    </div>
  );
}
