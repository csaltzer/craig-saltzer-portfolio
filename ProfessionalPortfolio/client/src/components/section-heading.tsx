import { motion } from "framer-motion";

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      {title && <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>}
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
