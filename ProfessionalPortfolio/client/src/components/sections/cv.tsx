import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  Target,
  BarChart,
  Download,
  FileDown
} from "lucide-react";
import { generateCV } from "@/lib/generate-cv";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CV() {
  const handleTextDownload = () => {
    const cvContent = generateCV();
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Craig-Saltzer-CV.txt');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handlePDFDownload = async () => {
    const cvSection = document.getElementById('cv-content');
    if (!cvSection) return;

    const canvas = await html2canvas(cvSection, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('Craig-Saltzer-CV.pdf');
  };

  return (
    <section id="cv" className="py-24">
      <div className="flex justify-between items-center mb-8">
        <SectionHeading
          title="Resume"
        />
        <div className="flex gap-2">
          <Button onClick={handleTextDownload} className="gap-2">
            <Download className="h-4 w-4" />
            Text CV
          </Button>
          <Button onClick={handlePDFDownload} variant="secondary" className="gap-2">
            <FileDown className="h-4 w-4" />
            PDF CV
          </Button>
        </div>
      </div>
      <div id="cv-content" className="space-y-6">
        {/* Executive Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Executive Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Strategic partner and trusted advisor to C-suite executives, specializing in business operations, cross-functional alignment, and strategic execution in high-growth global organizations. Adept at translating vision into execution, optimizing workflows, and driving key initiatives across diverse teams. Proven track record of enhancing executive decision-making through data-driven insights, change management, and process optimization. Passionate about enabling operational excellence and fostering a culture of clarity, collaboration, and innovation.
              </p>
              <p className="text-muted-foreground mb-4">
                For over 15 years, I've helped mission-driven organizations navigate change, scale strategically, and operate smarter across borders. I don't just fix inefficiencies—I anticipate them. I design scalable, future-ready systems that transform how teams work, how decisions are made, and how impact is delivered.
              </p>
              <p className="text-muted-foreground mb-4">
                From leading global workforce transformation to building enterprise-wide intelligence platforms, my work lives at the intersection of strategy, operations, and innovation. I've guided organizations through crises, reorganizations, and reinventions—always with a focus on long-term value and human-centered leadership.
              </p>
              <p className="text-muted-foreground mb-4">
                What sets me apart isn't just operational expertise. It's my ability to translate big-picture strategy into clear, actionable pathways—and unite cross-functional teams around a shared vision.
              </p>
              <p className="text-muted-foreground">
                If you're looking for a partner to help evolve your organization with clarity, speed, and purpose—welcome.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Selected Executive Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Selected Executive Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>$1.03B+ in revenue growth driven through strategic initiatives and operational enhancements.</li>
                <li>15% improvement in executive decision-making efficiency through real-time data dashboards and KPI tracking systems.</li>
                <li>20% increase in workforce retention & hiring efficiency through optimized global mobility strategy.</li>
                <li>$283M in revenue unlocked via innovative strategic partnerships in emerging markets.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Business Administration</h3>
                  <p className="text-muted-foreground">Corporate Finance and Strategy - New York University // 2019</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Arts</h3>
                  <p className="text-muted-foreground">International Relations - Boston University // 2010</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Executive Advisory & Strategic Planning",
                  "Operational Scaling & Process Optimization",
                  "Cross-Functional Team Alignment",
                  "KPI Monitoring & Data-Driven Decision-Making",
                  "Project & Program Management (Agile, Lean)",
                  "Change Management & Business Transformation",
                  "Global Operations & Stakeholder Engagement",
                  "Digital Transformation & Business Intelligence"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">Managing Director, Business Optimization</h3>
                  <p className="text-sm text-muted-foreground">Chemonics International | 2021-Present | Washington DC & London, UK</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Strategic partner to the COO, driving executive priorities, operational scalability, and high-impact business initiatives.</li>
                    <li>Designed and implemented enterprise-wide transformation frameworks, improving operational efficiency and decision-making.</li>
                    <li>Developed and deployed KPI dashboards and governance frameworks, providing real-time visibility into business performance.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Sr. Director, Office of Chief Operating Officer</h3>
                  <p className="text-sm text-muted-foreground">Chemonics International | 2020-2021 | Washington DC, USA & Global Assignments</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Served as the COO's strategic advisor, ensuring alignment between business goals and operational execution.</li>
                    <li>Launched a Cross-Border Talent Strategy, expanding hiring regions by 4x and improving workforce diversity by 15%.</li>
                    <li>Redesigned global mobility frameworks, increasing compliance efficiency and reducing administrative overhead.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Director, Business Development and Project Management</h3>
                  <p className="text-sm text-muted-foreground">Chemonics International | 2016-2020 | Washington DC & Global Assignments</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Led $1.03B+ in revenue growth through strategic initiatives, international expansion, and global partnerships.</li>
                    <li>Established governance frameworks and risk management processes to improve scalability across emerging markets.</li>
                    <li>Enabled 701 firms to achieve $8.19B in new market sales, driving export acceleration strategies.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Languages & Industry Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Languages & Industry Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <p className="text-muted-foreground">English (Native), Arabic (Intermediate), French (Basic)</p>
                </div>
                <div>
                  <h3 className="font-semibold">Industries</h3>
                  <p className="text-muted-foreground">Technology & SaaS | Private Equity | Consulting | Supply-Chain Logistics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}