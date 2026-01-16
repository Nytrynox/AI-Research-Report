import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Zap, Target, Users, Lightbulb, Code } from "lucide-react";
import { useState } from "react";

const timelineEvents = [
  { year: "1763", title: "Bayes Theorem", description: "Foundation of probabilistic reasoning", category: "foundation" },
  { year: "1956", title: "Dartmouth Conference", description: "Birth of AI as a field", category: "modern" },
  { year: "1997", title: "Deep Blue vs Kasparov", description: "AI defeats world chess champion", category: "modern" },
  { year: "2011", title: "IBM Watson", description: "AI wins Jeopardy!", category: "revolution" },
  { year: "2016", title: "AlphaGo", description: "AI defeats world Go champion", category: "revolution" },
  { year: "2022", title: "ChatGPT Released", description: "100M users in 2 months", category: "current" },
];

const companyProjects = [
  { company: "OpenAI", project: "AI Research Interns (2026)", timeline: "2026", description: "AI that reads papers and suggests improvements" },
  { company: "Meta", project: "Mango & Avocado Models", timeline: "2026 H1", description: "Advanced image and video generation" },
  { company: "Google", project: "Enhanced Gemini", timeline: "2026", description: "Improved reasoning capabilities" },
  { company: "Microsoft", project: "AI-Integrated Microsoft 365", timeline: "2026", description: "Enterprise AI across productivity tools" },
  { company: "Anthropic", project: "Advanced Reasoning Models", timeline: "2026", description: "Safety-aligned AI" },
];

const gaps = [
  { category: "Technical Gaps", items: ["Hallucination & Accuracy", "Reasoning & Planning", "Context Understanding", "Energy Efficiency", "Local/Edge Deployment"] },
  { category: "Infrastructure Gaps", items: ["AI OS for Personal Use", "MacBook Air M2 Optimization", "Structured Collaboration", "Goal-to-Execution Pipeline", "Context Management"] },
  { category: "Market Gaps", items: ["Affordable AI Research Tools", "Open-Source Alternatives", "Privacy-First AI", "Specialized AI Agents", "Accessibility"] },
];

export default function Home() {
  const [expandedGap, setExpandedGap] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      foundation: "bg-slate-400",
      modern: "bg-primary",
      revolution: "bg-accent",
      current: "bg-primary",
    };
    return colors[category] || "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-timeline.png" alt="AI Evolution" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="display-font text-5xl md:text-6xl font-bold mb-6 text-primary">100 Years of AI</h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              From theoretical computation to personal AI collaborators. Explore the complete history of artificial intelligence, current R&D from leading companies, and the revolutionary gap-filling project that bridges the future.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Timeline <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Project Concept
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-secondary/30 py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-foreground/70">Years of AI History</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">8</div>
              <p className="text-foreground/70">Major Breakthroughs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <p className="text-foreground/70">Top Company Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <p className="text-foreground/70">Critical Gaps Identified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-primary">AI Evolution Timeline</h2>
          <p className="text-foreground/70 mb-12 max-w-2xl">Witness the remarkable journey from theoretical foundations to the AI revolution.</p>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full mt-2 ${getCategoryColor(event.category)}`} />
                  {index < timelineEvents.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="font-bold text-lg text-primary">{event.year}</div>
                  <div className="font-semibold text-lg mb-1">{event.title}</div>
                  <p className="text-foreground/70">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current R&D Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-primary">Current R&D from Top Companies</h2>
          <p className="text-foreground/70 mb-12 max-w-2xl">Leading technology companies are racing to advance AI capabilities.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-primary">{project.company}</h3>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{project.timeline}</span>
                </div>
                <h4 className="font-semibold mb-2">{project.project}</h4>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gap Analysis Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-primary">Critical Gaps Identified</h2>
          <p className="text-foreground/70 mb-12 max-w-2xl">Despite rapid progress, significant gaps remain in AI technology, infrastructure, and market solutions.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {gaps.map((gapGroup, index) => (
              <Card
                key={index}
                className="p-6 cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setExpandedGap(expandedGap === gapGroup.category ? null : gapGroup.category)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-primary">{gapGroup.category}</h3>
                  <div className="text-accent">{expandedGap === gapGroup.category ? "−" : "+"}</div>
                </div>
                {expandedGap === gapGroup.category && (
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {gapGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          <div className="relative">
            <img src="/images/gap-analysis-visual.png" alt="Gap Analysis Visualization" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Project Concept Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-primary">The Solution: MindOS</h2>
            <p className="text-foreground/70 mb-12 text-lg">
              A revolutionary personal AI operating system that bridges the gap between vague goals and actionable AI-powered execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                <img src="/images/hero-mindos.png" alt="MindOS Concept" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Goal-to-Tasks Pipeline</h3>
                    <p className="text-foreground/70 text-sm">Converts annual goals into monthly milestones, weekly tasks, and daily actions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">AI Research Intern Mode</h3>
                    <p className="text-foreground/70 text-sm">Autonomous research, paper analysis, and insight generation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Code className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Local-First Architecture</h3>
                    <p className="text-foreground/70 text-sm">Runs on MacBook Air M2 without cloud dependency</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Multi-AI Support</h3>
                    <p className="text-foreground/70 text-sm">Works with ChatGPT, Claude, Gemini, and local LLMs</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-xl mb-4 text-primary">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Structured context management</span>
                </div>
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Weekly planning automation</span>
                </div>
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Stuck-moment resolution</span>
                </div>
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Progress tracking</span>
                </div>
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Knowledge base integration</span>
                </div>
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Privacy-centric architecture</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary">Market Opportunity</h2>

            <Tabs defaultValue="target" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="target">Target Market</TabsTrigger>
                <TabsTrigger value="positioning">Positioning</TabsTrigger>
                <TabsTrigger value="metrics">Success Metrics</TabsTrigger>
              </TabsList>

              <TabsContent value="target" className="mt-6 space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold mb-4">Who Benefits Most</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li>Solo entrepreneurs and freelancers</li>
                    <li>Researchers and academics</li>
                    <li>Knowledge workers on MacBook Air M2</li>
                    <li>Students managing projects</li>
                    <li>Privacy-conscious users</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="positioning" className="mt-6 space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold mb-4">Unique Value Proposition</h3>
                  <div className="space-y-4 text-foreground/70">
                    <p>Only AI OS optimized for MacBook Air M2 with privacy-first architecture</p>
                    <p>Freemium model with basic features free, premium at $15-30/month</p>
                    <p>Scalable to enterprise with team collaboration</p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="metrics" className="mt-6 space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold mb-4">Year 1 Goals</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-foreground/70">Active Users</span>
                      <span className="font-bold text-primary">10,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-foreground/70">Goal Completion Rate</span>
                      <span className="font-bold text-accent">80%</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-foreground/70">App Store Rating</span>
                      <span className="font-bold text-primary">4.5+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Productivity Improvement</span>
                      <span className="font-bold text-accent">5x</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">The Future of AI is Personal</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            MindOS represents the next evolution in AI—from generic tools to personal collaborators.
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Learn More About MindOS <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

