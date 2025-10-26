import Header from './components/Header';
import Hero from './components/Hero';
import SectionList from './components/SectionList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <SectionList />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function CTA() {
  return (
    <section id="start" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-indigo-600 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-right">מוכנים להשקה? נתחיל בתצורת MVP</h3>
            <p className="text-indigo-100 mt-2 text-right">שיחה בעברית עם TTS של ElevenLabs, שילוב Twilio, תשלומים עם Stripe, ואינטגרציות בסיסיות.</p>
          </div>
          <div className="flex gap-3">
            <a href="#plan" className="inline-flex items-center gap-2 rounded-md bg-white text-indigo-700 px-5 py-2.5 hover:bg-indigo-50">צפו בתוכנית</a>
            <a href="#integrations" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 hover:bg-indigo-500">חברו אינטגרציות</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
