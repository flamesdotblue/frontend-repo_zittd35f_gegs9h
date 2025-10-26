import { Server, Database, Lock, Calendar, CreditCard, Phone, FileText, Zap, Bot, Search, Book, Building2 } from 'lucide-react';

const sections = [
  { id: 'architecture', title: 'Executive Architecture', icon: Server, desc: 'C4 overview, multi-tenant, events, and orchestration plan.' },
  { id: 'services', title: 'Services & Repo', icon: Building2, desc: 'Monorepo layout and service boundaries.' },
  { id: 'stack', title: 'Tech Stack', icon: Zap, desc: 'Frameworks, infra, and messaging choices.' },
  { id: 'data', title: 'Data Models', icon: Database, desc: 'Schemas for tenants, contacts, interactions, and more.' },
  { id: 'api', title: 'APIs', icon: FileText, desc: 'OpenAPI, auth, conversations, actions, payments.' },
  { id: 'integrations', title: 'Integrations', icon: Phone, desc: 'Twilio, CRM, Calendar, Payments, Helpdesk, Docs.' },
  { id: 'voice', title: 'Voice & RT', icon: Bot, desc: 'SIP/WebRTC, ASR/TTS, latency, recording, consent.' },
  { id: 'rag', title: 'Knowledge & RAG', icon: Search, desc: 'Ingestion, chunking, ACL-aware retrieval, citations.' },
  { id: 'policy', title: 'Policy & Guardrails', icon: Lock, desc: 'RBAC/ABAC, approvals, budgets, explainability.' },
  { id: 'security', title: 'Security & Privacy', icon: Lock, desc: 'Encryption, consent, DSAR, retention, audit.' },
  { id: 'billing', title: 'Metering & Billing', icon: CreditCard, desc: 'Usage ledger, pricing, tiers, alerts, caps.' },
  { id: 'observability', title: 'Observability & SLOs', icon: Zap, desc: 'Tracing, metrics, dashboards, kill switch.' },
  { id: 'devops', title: 'DevEx & DevOps', icon: Server, desc: 'Docker, IaC, CI/CD, environments, seeding.' },
  { id: 'roadmap', title: 'MVP → GA Plan', icon: Calendar, desc: 'Milestones, sprints, KPIs, acceptance tests.' },
  { id: 'risks', title: 'Risks & Mitigations', icon: Book, desc: 'Integration and cost risks, compliance, KB quality.' },
  { id: 'open', title: 'Open Questions', icon: FileText, desc: 'Assumptions and gaps to resolve.' },
];

export default function SectionList() {
  return (
    <section className="py-16" id="architecture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-right">
          <h3 className="text-2xl font-bold text-slate-900">תוכנית ההקמה המלאה</h3>
          <p className="text-slate-600 mt-1">כל מה שצריך כדי להוציא MVP לייצור — מסודר וברור.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(({ id, title, desc, icon: Icon }) => (
            <a key={id} href={`#${id}`} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1 text-right">
                  <h4 className="font-semibold text-slate-900 group-hover:text-indigo-700">{title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
