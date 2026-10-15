export const site = {
  name: 'Arturo Pulido',
  role: 'AI Engineer',
  statement:
    'I design LLM agents end to end, and let code, not the model, make the final call.',
  email: 'arturopo97@icloud.com',
  linkedin: 'https://www.linkedin.com/in/arturopo',
  github: 'https://github.com/p0sin',
  cv: '/arturo-pulido-cv.pdf',
  location: 'Guadalajara, MX',
  experience: '2+ years designing AI solutions',
};

export const agentDesign = [
  'Cost estimation',
  'Prompt and tool design',
  'Structured outputs',
  'Testing',
  'Output evaluation and safeguards',
  'Escalation to a human where reliability matters',
];

export const skills = [
  {
    group: 'AI / LLMs',
    items: ['LLMs (GPT-4, Claude, Grok)', 'prompt engineering', 'RAG', 'function calling / tool use', 'structured JSON outputs', 'LangChain', 'LangGraph', 'CrewAI'],
  },
  {
    group: 'Automation & APIs',
    items: ['n8n', 'REST APIs', 'webhooks', 'WhatsApp Business API', 'Kommo CRM', 'Google Calendar API', 'Facebook Graph API'],
  },
  {
    group: 'Programming',
    items: ['Python', 'JavaScript', 'SQL', 'Node.js', 'Django', 'Django REST Framework', 'Celery', 'Redis', 'React'],
  },
  {
    group: 'Data & Tools',
    items: ['PostgreSQL', 'Supabase', 'Git/GitHub', 'Docker', 'AWS', 'unit testing', 'AI coding tools and agentic workflows (Cursor)'],
  },
];

export const background = [
  { label: 'Experience', title: 'Software Developer, AI Automation & Full-Stack', meta: 'SENSO MX · Jun 2024 – Present · Jalisco, MX (Remote)' },
  { label: 'Education', title: 'B.E. Civil Engineering', meta: 'ITESO, Guadalajara MX · Aug 2016 – Dec 2021' },
  { label: 'AI training', title: 'LLM Engineering · Complete Agentic AI Engineering · Generative and Agentic AI in Production', meta: 'Udemy' },
  { label: 'Languages', title: 'English, native / professional · Spanish, native', meta: '' },
];

export const methodDiagram = String.raw` +------------------------------+
 | gather and structure the     |
 | client's information         |
 +---------------+--------------+
                 |
                 v
 +------------------------------+
 | analyze the options          |
 +---------------+--------------+
                 |
                 v
 +------------------------------+
 | design the AI solution that  |
 | fits that client             |
 +------------------------------+`;
