import { useState } from 'react';

export default function BugReportForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: '',
    category: '',
    severity: 'medium',
    screenshot: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reports/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Report submitted successfully!');
        setStep(1);
        setFormData({
          url: '',
          title: '',
          description: '',
          category: '',
          severity: 'medium',
          screenshot: null
        });
      }
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <div className="flex mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1">
            <div className={`flex flex-col items-center ${i <= step ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i <= step ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-100 border-2 border-gray-300'}`}>
                {i}
              </div>
              <span className="text-sm mt-2">
                {i === 1 ? 'Details' : i === 2 ? 'Description' : 'Review'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Website URL</label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({...formData, url: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Review Your Report</h3>
              <div className="mt-2 p-4 bg-gray-50 rounded-md">
                <p><strong>URL:</strong> {formData.url}</p>
                <p><strong>Title:</strong> {formData.title}</p>
                <p><strong>Description:</strong> {formData.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button 
              type="button" 
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            >
              Back
            </button>
          )}
          <button
            type={step === 3 ? 'submit' : 'button'}
            onClick={step < 3 ? () => setStep(step + 1) : null}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {step === 3 ? 'Submit Report' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
}