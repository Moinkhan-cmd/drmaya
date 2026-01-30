import { motion } from "framer-motion";
import { cta } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-display-sm md:text-display-md mb-6"
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          {cta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base font-medium"
          >
            <a href={cta.button.href}>{cta.button.label}</a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-sm text-primary-foreground/60 mt-6"
        >
          {cta.note}
        </motion.p>
      </div>
    </section>
  );
}
