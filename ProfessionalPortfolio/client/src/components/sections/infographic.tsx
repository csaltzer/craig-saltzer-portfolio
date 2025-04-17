import { motion } from "framer-motion";
import { 
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  BookOpen, 
  Truck,
  Factory,
  GraduationCap,
  Building2,
  Plane,
  BadgeCheck,
  Ship,
  BookMarked,
  FileText,
  Map,
  Briefcase,
  Landmark,
  Users,
  BarChart,
  Globe
} from "lucide-react";
import SectionHeading from "@/components/section-heading";

// Economic Growth & Investments data
const economicData = [
  { name: 'Revenue Generated', value: 8.19, unit: 'B', fill: '#0984E3' },
  { name: 'New Investments', value: 0.2535, unit: 'B', fill: '#00B894' },
];

// Trade & Business Expansion data
const tradeData = [
  { name: 'Trade Shows', value: 16, suffix: '+', fill: '#0984E3' },
  { name: 'Trade Increase', value: 42, suffix: '%', fill: '#00B894' },
  { name: 'Air Cargo Trade', value: 2.7, suffix: 'M', fill: '#F39C12' },
];

// Education & Workforce Development data
const educationData = [
  { name: 'Reading Benchmark', value: 54, suffix: '%', fill: '#0984E3' },
  { name: 'Schools Reached', value: 900, suffix: '+', fill: '#00B894' },
  { name: 'Books Distributed', value: 1.5, suffix: 'M+', fill: '#F39C12' },
];

// Infrastructure & Development
const infrastructureData = [
  { name: 'Roads Repaired', value: 600, suffix: 'km+', fill: '#0984E3' },
  { name: 'SME-Friendly Laws', value: 196, suffix: '+', fill: '#00B894' },
];

// Donut chart data
const impactDistributionData = [
  { name: 'Economic Growth', value: 35, fill: '#0984E3' },
  { name: 'Infrastructure', value: 25, fill: '#00B894' },
  { name: 'Education', value: 20, fill: '#F39C12' },
  { name: 'Trade', value: 20, fill: '#8E44AD' },
];

// Detailed metrics with icons for the cards
const metrics = [
  {
    category: "Economic Growth & Investments",
    icon: DollarSign,
    color: "#0984E3",
    items: [
      { label: "Revenue Generated", value: "$8.19B+", icon: TrendingUp },
      { label: "New Investments Secured", value: "$253.5M", icon: Factory },
    ]
  },
  {
    category: "Trade & Business Expansion",
    icon: Globe,
    color: "#00B894",
    items: [
      { label: "SME-Friendly Laws Passed", value: "196+", icon: FileText },
      { label: "Trade Facilitation Increase", value: "42%", icon: TrendingUp },
      { label: "International Trade Shows", value: "16+", icon: Briefcase },
      { label: "Air Cargo Trade", value: "$2.7M", icon: Plane },
    ]
  },
  {
    category: "Education & Development",
    icon: GraduationCap,
    color: "#F39C12",
    items: [
      { label: "Reading Benchmark Achievement", value: "54%", icon: BookOpen },
      { label: "Schools Supported", value: "900+", icon: Building2 },
      { label: "Books Distributed", value: "1.5M+", icon: BookMarked },
    ]
  },
  {
    category: "Infrastructure & Logistics",
    icon: Truck,
    color: "#8E44AD",
    items: [
      { label: "Roads Repaired", value: "600+ km", icon: Map },
      { label: "New Infrastructure Projects", value: "125+", icon: Landmark },
      { label: "Jobs Created", value: "18,000+", icon: Users },
    ]
  },
];

export default function Infographic() {
  return (
    <section id="infographic" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            title="Global Impact: By the Numbers"
            subtitle="Driving Economic Growth, Trade, and Innovation Worldwide"
          />
        </motion.div>
        
        {/* Subtle world map background */}
        <div className="relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg viewBox="0 0 1200 630" className="w-full h-full">
              <path d="M600,81.9c-58.9,0-106.7,47.8-106.7,106.7S541.1,295.2,600,295.2s106.7-47.8,106.7-106.7S658.9,81.9,600,81.9z M600,277.9
                c-49.3,0-89.4-40.1-89.4-89.4s40.1-89.4,89.4-89.4s89.4,40.1,89.4,89.4S649.3,277.9,600,277.9z" fill="#2D3436" opacity="0.1" />
              {/* Additional world map paths would go here */}
            </svg>
          </div>

          {/* Main metric cards in 2x2 grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 relative z-10">
            {metrics.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="overflow-hidden border-t-4" style={{ borderTopColor: category.color }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" style={{ color: category.color }} />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                      {category.items.map((item, itemIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (idx * 0.1) + (itemIdx * 0.1) }}
                            className="flex flex-col items-start"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div className="p-1.5 rounded-full" style={{ backgroundColor: `${category.color}20` }}>
                                <ItemIcon className="h-3.5 w-3.5" style={{ color: category.color }} />
                              </div>
                              <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                            </div>
                            <p className="text-xl font-bold ml-7">{item.value}</p>
                          </motion.div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>



          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-lg font-semibold text-primary">Driving Business & Economic Growth Across the Globe</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
