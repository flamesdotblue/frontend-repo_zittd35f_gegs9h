import { Globe, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">IM</div>
          <div className="leading-tight">
            <h1 className="text-slate-900 font-semibold">IsraMate</h1>
            <p className="text-xs text-slate-500">Hebrew-first AI Voice Agents</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <a href="#architecture" className="text-slate-700 hover:text-indigo-600">Architecture</a>
          <a href="#integrations" className="text-slate-700 hover:text-indigo-600">Integrations</a>
          <a href="#security" className="text-slate-700 hover:text-indigo-600">Security</a>
          <a href="#plan" className="text-slate-700 hover:text-indigo-600">Plan</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50" aria-label="Toggle language">
            <Globe className="h-4 w-4" /> HE / EN
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-700" aria-label="Sign in">
            <User className="h-4 w-4" /> Sign in
          </button>
          <button className="ml-1 inline-flex items-center gap-2 rounded-md border border-indigo-200 px-3 py-1.5 text-sm text-indigo-700 hover:bg-indigo-50" aria-label="Open console">
            <Settings className="h-4 w-4" /> Console
          </button>
        </div>
      </div>
    </header>
  );
}
