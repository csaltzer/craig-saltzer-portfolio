import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionHeading
        subtitle="Proactive and results-driven leader with over 15 years of experience in strategic leadership, global expansion, and operational excellence"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
            <p className="text-muted-foreground">
              At Chemonics International, I lead management and advisory services across 80+ countries. With extensive experience living and working in over 20 countries, I've cultivated strong relationships with senior government officials and industry executives to achieve transformational outcomes on a global scale, contributing to over $1.3 billion in new business opportunities and securing more than $450 million in awarded contracts.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
            <p className="text-muted-foreground mb-4 font-medium">
              Sales | Strategic Partnerships/Alliances | Project & Portfolio Management | Global Operations Strategy | Sustainability
            </p>
            <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
              <li>Program Management</li>
              <li>Strategic Planning</li>
              <li>Stakeholder Engagement</li>
              <li>Policy Development</li>
              <li>Business Development</li>
              <li>Grant Management</li>
              <li>Change Management</li>
              <li>Risk Management</li>
              <li>Public-Private Partnerships</li>
              <li>Data-Driven Decision-Making</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}