// Every claim here comes from content/arturopo_cv.pdf. No client names.
export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  points: string[];
  stack: string;
  diagramLabel: string;
  diagram: string;
}

export const work: CaseStudy[] = [
  {
    id: 'elevaria',
    title: 'ElevarIA',
    summary:
      'A production multi-agent LLM system I designed to generate and review social media content for agency clients.',
    points: [
      '9 specialized agents: planner, writer, LLM-as-a-judge validator and reviewer, auto-correction, variations, web-search research and insight extraction.',
      'Hybrid quality gates. Deterministic checks run before an LLM judge that returns per-criterion verdicts. Code, not the model, decides approve, request changes or reject.',
      'Failures are fed back to the writer for self-correction, with human-in-the-loop review.',
      'Real-time per-post generation progress over WebSockets, plus review interfaces: correction diff viewer, A/B variations and a teleprompter.',
    ],
    stack: 'LLM agents · Django Channels · WebSockets · React',
    diagramLabel:
      'Quality gate: the writer output passes deterministic checks, then an LLM judge, then code decides approve, request changes or reject. Failures return to the writer.',
    diagram: String.raw` +--------+
 | writer |<------------------------+
 +----+---+                         |
      |                             |
      v                             |
 +----+-----------------------+     |
 | deterministic checks       |     |
 +----+-----------------------+     |
      |                             |
      v                             |
 +----+-----------------------+     |
 | LLM judge                  |     |
 | verdict per criterion      |     |
 +----+-----------------------+     |
      |                             |
      v                             |
 +----+-----------------------+     |
 | CODE decides               +-----+
 +--+---------+----------+----+  failures
    |         |          |
 approve   changes     reject`,
  },
  {
    id: 'sofia',
    title: 'SofIA',
    summary: 'A WhatsApp AI agent I deployed to production for a healthcare practice.',
    points: [
      'RAG-style knowledge layer and strict JSON output contracts.',
      'Escalation to a human team member when a conversation needs one.',
      'Tool use and function calling for lead qualification, scheduling and payment verification.',
      'Integrated with Kommo CRM, Google Calendar and Supabase/PostgreSQL through REST APIs and webhooks in n8n.',
    ],
    stack: 'n8n · WhatsApp Business API · Kommo CRM · Google Calendar · Supabase · PostgreSQL',
    diagramLabel:
      'A WhatsApp contact reaches the AI agent, which has a knowledge layer and JSON output. It calls tools for lead qualification, scheduling and payment verification through n8n webhooks into Kommo CRM, Google Calendar and Supabase. It can escalate to a human.',
    diagram: String.raw`  contact on WhatsApp
          |
          v
 +--------+------------------+
 | AI agent                  +----> human team
 | RAG-style knowledge layer |      member
 | strict JSON output        |   (escalation)
 +--------+------------------+
          | tool calls
          |  - lead qualification
          |  - scheduling
          |  - payment verification
          v
   n8n  (webhooks + REST)
     |        |         |
     v        v         v
  Kommo    Google    Supabase /
   CRM    Calendar   PostgreSQL`,
  },
  {
    id: 'repo-pipeline',
    title: 'Multi-agent repository maintenance pipeline',
    summary: 'A multi-agent pipeline I built to maintain 20+ production repositories end to end.',
    points: [
      'Agents: triage, updater, auditor and notifier.',
      'Runs on a 15-day cycle across 20+ production repos.',
      'Each change is validated twice: the build before deploy, and the live site after release.',
    ],
    stack: 'Multi-agent pipeline · Git/GitHub',
    diagramLabel:
      'Twenty-plus production repositories flow through four agents in order: triage, updater, auditor, notifier, on a 15-day cycle. Every change is validated twice: a build check before deploy, then a live-site check after release.',
    diagram: String.raw`  20+ production repos
          |
          |  every 15 days
          v
 [triage]->[updater]->[auditor]->[notifier]

  each change is validated twice

   change
     |
     v
 +--------------+
 | build check  |  before deploy
 +------+-------+
        |
        v
     deploy
        |
        v
 +--------------+
 | live-site    |  after release
 | check        |
 +--------------+`,
  },
];
