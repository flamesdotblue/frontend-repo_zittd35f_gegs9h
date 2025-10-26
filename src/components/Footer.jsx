export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} IsraMate — Built for Hebrew-first voice experiences.</p>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#security" className="text-slate-600 hover:text-indigo-700">Privacy & Security</a>
            <a href="#billing" className="text-slate-600 hover:text-indigo-700">Pricing</a>
            <a href="#integrations" className="text-slate-600 hover:text-indigo-700">Integrations</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
