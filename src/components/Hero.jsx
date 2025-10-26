import Spline from '@splinetool/react-spline';
import { Rocket, Phone, Shield, Mic } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/H4b1eY1dE-test-scene/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-8 shadow-sm">
          <p className="text-indigo-700 font-semibold mb-2 text-right">עברית תחילה</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight text-right">
            IsraMate — סוכני קול חכמים לעסקים, בעברית ובזמן אמת
          </h2>
          <p className="mt-4 text-slate-700 text-right">
            עוזרי טלפון שמנהלים שיחות, קובעים פגישות, גובים תשלומים ומתחברים לכלים שכבר יש לכם.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Feature icon={<Rocket className="h-5 w-5" />} label="השקה מהירה" />
            <Feature icon={<Phone className="h-5 w-5" />} label="טלפוניה ו-WhatsApp" />
            <Feature icon={<Mic className="h-5 w-5" />} label="דיבור והבנה בעברית" />
            <Feature icon={<Shield className="h-5 w-5" />} label="אבטחה ומדיניות" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-end">
            <a href="#start" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-700">
              התחל עכשיו
            </a>
            <a href="#architecture" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50">
              ארכיטקטורה
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-800 justify-end">
      <span className="text-sm font-medium">{label}</span>
      <span className="grid place-items-center h-7 w-7 rounded-md bg-indigo-50 text-indigo-700">
        {icon}
      </span>
    </div>
  );
}
