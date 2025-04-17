import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen } from "lucide-react";

type InsightCategory = "all" | "economic" | "infrastructure" | "tourism" | "health" | "leadership" | "project-management";

interface InsightItem {
  title: string;
  source: string;
  description: string;
  content?: string;
  link?: string;
  tags: string[];
}

const insights = {
  leadership: [
    {
      title: "Listening for Opportunity: The Project Leadership Advantage in the Age of AI",
      source: "Blog Article",
      description: "In a world disrupted by AI and shaped by evolving business needs, organizations no longer have the luxury of rigid scopes, narrow roles, or \"not my job\" mindsets. Project teams that thrive in this environment don't just deliver what was asked—they deliver what the business didn't know it needed.",
      content: `
        In a world disrupted by AI and shaped by evolving business needs, organizations no longer have the luxury of rigid scopes, narrow roles, or "not my job" mindsets. Project teams that thrive in this environment don't just deliver what was asked—they deliver what the business didn't know it needed.

        That's not scope creep. That's visionary execution.

        **AI Has Changed the Rules of Engagement**

        With AI, project managers and teams can now operate at a level that was previously impossible:
        • Smaller teams can run larger portfolios
        • Resource constraints are no longer blockers to insight or innovation
        • Time once spent gathering, analyzing, or formatting data can now be spent connecting dots and spotting opportunity

        The tools have evolved. So must the mindset.

        **Scope Responsiveness > Scope Rigidity**

        In the age of AI, business landscapes shift weekly. Projects must be allowed to evolve mid-flight. That means:
        • Teams need situational awareness: the ability to see what's emerging
        • Leaders need permission to adjust based on insight, not just instruction
        • Organizations need to empower the instinct to build what's next without sacrificing delivery of what's now

        Yes, it's a fine line to walk. But it's the line between good project management and breakthrough leadership.

        **The Talent You Want Tomorrow Is Already Here Today**

        Companies of the future won't just reward employees who complete tasks on time. They'll look for those who:
        • Achieve results and see the white space around them
        • Use AI tools to scale their insight, not just automate checklists
        • Don't just follow direction—they listen to the work itself, and act on what it's trying to say

        This kind of leader doesn't need to be told to innovate. They do it in the margins of delivery.

        **How to Spot Them**

        You won't always find these qualities on a resume. But you can spot them in track records:
        • When the project evolved, they evolved with it—without missing a beat
        • They flagged opportunities before leadership knew they existed
        • They made themselves obsolete by building systems that didn't need them to survive
        • They leveraged AI not to replace people, but to stretch what's possible with the same team

        **The Bottom Line**

        AI is not just a tool for efficiency. It's a force multiplier for those who already have the instinct to build, adapt, and lead in motion.

        The future belongs to those who don't just get things done, but who listen as they go—and deliver more than what was asked, because of what they saw along the way.
      `,
      tags: ["Leadership", "AI", "Project Management", "Innovation"]
    },
    {
      title: "Why Visionary Leaders Shouldn't Fear Scope Creep—They Should Optimize It",
      source: "Blog Article",
      description: "Most people hear \"scope creep\" and think: red flag. Missed deadlines. Budget overruns. A team gone rogue. But here's the truth: sometimes what looks like scope creep is actually discovery. And visionary leaders don't panic when the brief starts shifting. They get curious.",
      content: `
        Most people hear "scope creep" and think: red flag. Missed deadlines. Budget overruns. A team gone rogue.

        But here's the truth: sometimes what looks like scope creep is actually discovery. And visionary leaders don't panic when the brief starts shifting. They get curious.

        **Scope Creep vs. Strategic Adaptation**

        Let's be clear: uncontrolled expansion of a project is a problem. But so is ignoring what new insights or shifting realities are telling you. Leadership isn't about sticking to the script at all costs. It's about knowing when the script needs to evolve.

        In my work, I don't chase distractions. I don't lose sight of outcomes. But I do listen closely to what's surfacing during the work. Because often, the real opportunity only reveals itself mid-flight.

        **Building the Plane While Flying It**

        You've heard the metaphor. And yes—it's real. In high-stakes, rapidly shifting environments, we don't always get to pause, re-scope, or take a beat. The challenge is to deliver the mission and evolve the design.

        I call it structured adaptability: staying accountable to the original objective, while staying alert to the bigger opportunity emerging along the way.
        • It's not about endless expansion. It's about strategic evolution.
        • It's not about drifting. It's about noticing.
        • It's not scope creep. It's leadership.

        **From Execution to Elevation**

        When done right, this mindset doesn't dilute results—it strengthens them.

        Here's how I approach it:
        1. Build: Deliver what was asked for, with clarity and speed.
        2. Operate: Stabilize and run it, so it works in real-time conditions.
        3. Transfer: Hand it off to a team that owns it fully, freeing me to move on to what's next.

        Yes, I often get called in when it's urgent. But I get asked to stay when leaders want to stop living in urgency. I don't just fix problems—I redesign the systems behind them, and build capacity that lasts.

        **The Real Risk**

        The real risk isn't scope creep. It's rigidity.

        It's clinging to an outdated brief while the environment evolves. It's protecting the original plan instead of updating the architecture that supports it. Visionary leaders know when the goal has outgrown the scope.

        If we're building the plane while flying it, the point isn't to land exactly as planned. The point is to land stronger than we took off.

        And that starts with knowing when to listen—even if it means changing course.
      `,
      tags: ["Leadership", "Scope Management", "Strategic Adaptation", "Vision"]
    }
  ],
  "project-management": [
    {
      title: "Rethinking Scope Creep: How Smart Expansion Drives Value Without Extra Cost",
      source: "Blog Article",
      description: "Scope creep gets a bad rap. And sure, when unmanaged, it can derail a project. But when approached with intention, scope evolution isn't a threat—it's an opportunity.",
      content: `
        Scope creep gets a bad rap. And sure, when unmanaged, it can derail a project. But when approached with intention, scope evolution isn't a threat—it's an opportunity.

        Done right, it doesn't just expand deliverables. It delivers additionality: more impact, broader capability, and strategic positioning—without greater cost to the client or the company.

        **Doing More With the Same**

        The best teams know how to maximize existing effort. When a project grows in scope but not in resource requirement, that's not inefficiency—that's leverage. It's the team identifying adjacent needs, executing with creativity, and delivering added value by stretching intelligently, not endlessly.

        Whether it's uncovering new use cases, embedding tools that serve multiple functions, or designing processes that scale beyond the initial brief, this kind of scope expansion builds capability for the future. It's not about chasing shiny objects—it's about spotting the strategic spillover that makes everything stronger.

        **Building What Comes Next**

        Smart scope evolution often opens the door to:
        • New lines of business: A team takes ownership of an adjacent challenge and prototypes a service offering before leadership even sees the demand.
        • Talent growth: Stretch opportunities allow emerging leaders to step up, pilot new solutions, and gain visibility across the org.
        • Innovation: Constrained resources push teams to design better, leaner systems—many of which go on to serve long after the original project ends.

        What starts as "Can we also include…?" can lead to "Should we build this into our core services?"

        **The Cost Efficiency Fallacy**

        The assumption that more scope = more cost is often a false binary. With the right mindset and architecture, you can extend the impact of your effort without increasing overhead. Especially when:
        • Teams are already mobilized
        • Knowledge is already being created
        • Systems are already being stood up

        In fact, some of the most valuable capabilities I've seen emerge organically from projects that were designed to solve one problem—but were flexible enough to recognize and capture the adjacent opportunities.

        **A Culture That Listens and Leverages**

        What enables this? A culture that:
        • Encourages initiative without penalizing deviation
        • Recognizes adjacent wins, not just scoped ones
        • Understands that capability building is just as valuable as deliverable tracking

        Scope creep done right isn't about chasing rabbits. It's about leading with listening, building with foresight, and delivering with range.

        Because when we create space for possibility inside the plan, we don't just meet expectations—we redefine them.
      `,
      tags: ["Project Management", "Scope Creep", "Value Creation", "Efficiency"]
    }
  ],
  economic: [
    {
      title: "Economic Growth in Emerging Markets",
      source: "Deloitte",
      description: "Analysis of market entry strategies and growth opportunities in emerging economies",
      link: "https://www2.deloitte.com/global/en/pages/growth/topics/emerging-markets.html",
      tags: ["Market Entry", "Growth Strategy", "Economic Development"]
    },
    {
      title: "Trade Facilitation and Economic Growth",
      source: "PwC",
      description: "Impact of trade facilitation on economic development and cross-border commerce",
      link: "https://www.pwc.com/gx/en/services/tax/trade-facilitation.html",
      tags: ["Trade", "Economic Growth", "Cross-border Commerce"]
    }
  ],
  infrastructure: [
    {
      title: "Water Infrastructure Development",
      source: "KPMG",
      description: "Sustainable approaches to water infrastructure and management",
      link: "https://home.kpmg/xx/en/home/insights/water-infrastructure.html",
      tags: ["Water Management", "Infrastructure", "Sustainability"]
    },
    {
      title: "Infrastructure Investment Trends",
      source: "EY",
      description: "Global trends in infrastructure investment and development",
      link: "https://www.ey.com/en_gl/infrastructure",
      tags: ["Investment", "Development", "Global Infrastructure"]
    }
  ],
  tourism: [
    {
      title: "Future of Tourism",
      source: "Deloitte",
      description: "Post-pandemic tourism development and sustainable growth strategies",
      link: "https://www2.deloitte.com/global/en/pages/consumer-business/topics/travel-and-hospitality.html",
      tags: ["Tourism", "Sustainability", "Development"]
    },
    {
      title: "Tourism Economic Impact",
      source: "PwC",
      description: "Analysis of tourism's economic impact and growth potential",
      link: "https://www.pwc.com/gx/en/industries/hospitality-leisure.html",
      tags: ["Economic Impact", "Tourism Growth", "Market Analysis"]
    }
  ],
  health: [
    {
      title: "Global Health Security",
      source: "KPMG",
      description: "Strengthening health systems and biosecurity measures",
      link: "https://home.kpmg/xx/en/home/insights/healthcare.html",
      tags: ["Health Security", "Biosecurity", "Healthcare Systems"]
    },
    {
      title: "Healthcare Innovation",
      source: "EY",
      description: "Transforming healthcare delivery and security",
      link: "https://www.ey.com/en_gl/health",
      tags: ["Healthcare", "Innovation", "Technology"]
    }
  ]
};

export default function Insights() {
  const [category, setCategory] = useState<InsightCategory>("all");
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);

  const getFilteredInsights = () => {
    if (category === "all") {
      return Object.values(insights).flat();
    }
    return insights[category] || [];
  };

  const toggleExpanded = (title: string) => {
    if (expandedInsight === title) {
      setExpandedInsight(null);
    } else {
      setExpandedInsight(title);
    }
  };

  return (
    <section id="insights" className="py-24">
      <SectionHeading
        title="Industry Insights & Thought Leadership"
        subtitle="Articles, blog posts, and curated content on leadership, project management, and industry expertise"
      />
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button
          variant={category === "all" ? "default" : "outline"}
          onClick={() => setCategory("all")}
        >
          All Insights
        </Button>
        <Button
          variant={category === "leadership" ? "default" : "outline"}
          onClick={() => setCategory("leadership")}
          className="bg-opacity-90"
        >
          Leadership
        </Button>
        <Button
          variant={category === "project-management" ? "default" : "outline"}
          onClick={() => setCategory("project-management")}
        >
          Project Management
        </Button>
        <Button
          variant={category === "economic" ? "default" : "outline"}
          onClick={() => setCategory("economic")}
        >
          Economic Growth
        </Button>
        <Button
          variant={category === "infrastructure" ? "default" : "outline"}
          onClick={() => setCategory("infrastructure")}
        >
          Infrastructure
        </Button>
        <Button
          variant={category === "tourism" ? "default" : "outline"}
          onClick={() => setCategory("tourism")}
        >
          Tourism
        </Button>
        <Button
          variant={category === "health" ? "default" : "outline"}
          onClick={() => setCategory("health")}
        >
          Health Security
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {getFilteredInsights().map((insight, index) => {
          const isExpanded = expandedInsight === insight.title;
          const isBlogPost = insight.source === "Blog Article";
          
          return (
            <Card key={index} className={`group transition-all duration-300 ${isExpanded ? 'md:col-span-2' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {isBlogPost && <BookOpen className="h-5 w-5 text-primary" />}
                      {insight.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{insight.source}</p>
                  </div>
                  {insight.link ? (
                    <a
                      href={insight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-full"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    isBlogPost && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => toggleExpanded(insight.title)}
                        className="text-sm"
                      >
                        {isExpanded ? 'Collapse' : 'Read More'}
                      </Button>
                    )
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isExpanded && isBlogPost ? (
                  <div className="prose max-w-none prose-headings:font-bold prose-headings:text-primary">
                    {insight.content?.split('\n\n').map((paragraph, idx) => {
                      // Handle markdown-style bold text with **
                      const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      
                      // Handle markdown-style bullet points
                      if (paragraph.trim().startsWith('•')) {
                        return (
                          <ul key={idx} className="list-disc pl-6 mt-4 mb-4">
                            {paragraph.split('\n').map((item, itemIdx) => (
                              <li key={itemIdx} 
                                  className="text-muted-foreground mb-2"
                                  dangerouslySetInnerHTML={{ __html: item.replace('• ', '') }} />
                            ))}
                          </ul>
                        );
                      } 
                      // Handle numbered lists
                      else if (paragraph.match(/^\d+\./)) {
                        return (
                          <ol key={idx} className="list-decimal pl-6 mt-4 mb-4">
                            {paragraph.split('\n').map((item, itemIdx) => (
                              <li key={itemIdx} 
                                  className="text-muted-foreground mb-2"
                                  dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s+/, '') }} />
                            ))}
                          </ol>
                        );
                      } 
                      // Regular paragraph
                      else {
                        return (
                          <p key={idx} 
                             className="text-muted-foreground mb-4" 
                             dangerouslySetInnerHTML={{ __html: formattedText }} />
                        );
                      }
                    })}
                  </div>
                ) : (
                  <>
                    <p className="text-muted-foreground mb-4">{insight.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {insight.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
