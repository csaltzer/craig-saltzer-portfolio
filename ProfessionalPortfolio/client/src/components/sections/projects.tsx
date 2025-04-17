import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Droplets, 
  BookOpen, 
  Container, 
  Landmark, 
  Building2,
  Stethoscope,
  Factory,
  Banknote,
  Zap,
  Mountain
} from "lucide-react";

type ProjectCategory = "all" | "programs" | "proposals";

const programs = [
  {
    title: "USAID/Ukraine Competitive Economy Program",
    description: "Supervised a $42M program with 38 overseas staff aimed at enhancing the investment and business enabling environment in Ukraine. Generated $253.5M in new investments, assisted 701 firms in export market expansion, and facilitated $8.19B in sales.",
    icon: TrendingUp,
    tags: ["Economic Growth", "Investment", "Business Development"],
    link: "https://www.usaid.gov/ukraine/economic-growth",
    period: "2018-2021"
  },
  {
    title: "USAID/Sustainable Water in Tajikistan",
    description: "Supervised a $12.5M program to improve drinking water access and promote PPP management mechanisms while involving civil society. Promoted collaboration among local public and private water sector entities and community-based organizations.",
    icon: Droplets,
    tags: ["Water Management", "Infrastructure", "Public-Private Partnership"],
    link: "https://www.usaid.gov/tajikistan/fact-sheets/sustainable-water-supply-tajikistan",
    period: "2020-2021"
  },
  {
    title: "USAID/Kyrgyzstan Time to Read",
    description: "Directed a $9.9M program improving reading skills of 220,000+ students. Assisted 200+ authors/illustrators, distributed 1.5M books to 900 schools, and trained 1,000+ teachers, achieving 54% national reading proficiency.",
    icon: BookOpen,
    tags: ["Education", "Capacity Building", "Program Management"],
    link: "https://www.usaid.gov/kyrgyz-republic/education",
    period: "2019-2020"
  },
  {
    title: "USAID/Afghanistan Trade and Revenue",
    description: "Oversaw a $77M program with 100+ staff across multiple countries. Facilitated Afghanistan's WTO membership, established Afghan Exporters Club, and streamlined export processes from 29 to 10 steps.",
    icon: Container,
    tags: ["Trade Facilitation", "Economic Growth", "Export Development"],
    link: "https://www.usaid.gov/afghanistan/economic-growth",
    period: "2016-2018"
  },
  {
    title: "USAID/Building Economic Sustainability through Tourism",
    description: "Led $12.5M investment fund leveraging $90M in private sector co-investments. Partnered with international hotel brands and tourism platforms, resulting in 42% increase in tourist arrivals.",
    icon: Landmark,
    tags: ["Tourism Development", "Investment Management", "Strategic Partnerships"],
    link: "https://www.usaid.gov/jordan/economic-growth-and-trade",
    period: "2015-2016"
  },
  {
    title: "USAID/Lebanon Water Infrastructure Enhancement",
    description: "Managed $26M infrastructure project improving water services throughout Lebanon. Enhanced water network infrastructure and trained utilities in capital investment management.",
    icon: Building2,
    tags: ["Infrastructure", "Water Management", "Capacity Building"],
    link: "https://www.usaid.gov/lebanon/water-and-sanitation",
    period: "2015"
  }
];

const proposals = [
  {
    title: "USAID Prevent, Detect, Respond - Primary Health Care",
    description: "Designed a 5-year $50M Global Health Security initiative in Jordan focusing on biosecurity, antimicrobial resistance, and emerging health threats.",
    icon: Stethoscope,
    tags: ["Health Security", "Biosecurity", "Healthcare"],
    link: "https://www.usaid.gov/jordan/global-health",
    period: "2025"
  },
  {
    title: "USAID/West Bank Gaza Building Regional Economic Bridges",
    description: "Designed $87.6M program to foster economic growth through enhanced cross-border trade and investment. Focus on business efficiency and infrastructure development.",
    icon: Factory,
    tags: ["Economic Growth", "Trade Development", "Investment"],
    link: "https://www.usaid.gov/west-bank-and-gaza/economic-growth-and-trade",
    period: "2023"
  },
  {
    title: "USAID/Financial Sector Reform Activity in Ukraine",
    description: "Designed 5-year, $20M program to transform Ukraine's financial sector into a sophisticated market aligned with EU standards and integrated into international financial systems.",
    icon: Banknote,
    tags: ["Financial Sector", "Market Development", "EU Integration"],
    link: "https://www.usaid.gov/ukraine/economic-growth",
    period: "2021"
  },
  {
    title: "USAID/Kosovo Energy",
    description: "Designed five-year, $12M program to integrate Kosovo's energy sector with regional markets according to EU standards and achieve long-term sustainability through private-sector investment.",
    icon: Zap,
    tags: ["Energy Sector", "Market Integration", "Sustainability"],
    link: "https://www.usaid.gov/kosovo/energy",
    period: "2020"
  },
  {
    title: "USAID/Sustainable Economic Growth In Bosnia SEGA",
    description: "Designed five-year, $22M program to drive rural tourism development, stem rural-urban migration, and enhance country brand through partnerships with diverse stakeholders.",
    icon: Mountain,
    tags: ["Economic Growth", "Tourism Development", "Rural Development"],
    link: "https://www.usaid.gov/bosnia-and-herzegovina/economic-growth",
    period: "2020"
  }
];

export default function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("all");

  const filteredProjects = category === "all"
    ? [...programs, ...proposals]
    : category === "programs"
      ? programs
      : proposals;

  return (
    <section id="projects" className="py-24">
      <SectionHeading
        title="Featured Work"
        subtitle="Major programs managed and business development initiatives"
      />
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant={category === "all" ? "default" : "outline"}
          onClick={() => setCategory("all")}
        >
          All Projects
        </Button>
        <Button
          variant={category === "programs" ? "default" : "outline"}
          onClick={() => setCategory("programs")}
        >
          Programs Managed
        </Button>
        <Button
          variant={category === "proposals" ? "default" : "outline"}
          onClick={() => setCategory("proposals")}
        >
          Business Development
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}