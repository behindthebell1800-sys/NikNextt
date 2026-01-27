import React, { useState } from 'react';

interface LoginProps {
  onLogin: (success: boolean) => void;
  onCancel: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      onLogin(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A0D14] flex items-center justify-center p-6 z-[200]">
      <div className="max-w-md w-full bg-white rounded-[1.5rem] p-10 lg:p-14 shadow-2xl animate-fade-up">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Access</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Identification"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:bg-white focus:border-slate-200 transition-all text-sm"
              />
            </div>
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Credentials"
                className={`w-full px-6 py-4 rounded-xl bg-slate-50 border outline-none transition-all text-sm ${error ? 'border-red-500 animate-shake' : 'border-slate-100 focus:bg-white focus:border-slate-200'}`}
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors shadow-lg"
          >
            Verify
          </button>
        </form>

        <button 
          onClick={onCancel}
          className="w-full mt-8 text-slate-300 font-medium text-xs hover:text-slate-400 transition-colors"
        >
          Return
        </button>
      </div>
    </div>
  );
};