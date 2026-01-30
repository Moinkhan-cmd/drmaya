import { motion } from "framer-motion";
import { about } from "@/lib/content";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src={therapistPortrait}
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-sm uppercase tracking-widest text-primary mb-4"
            >
              {about.intro}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-sm md:text-display-md text-foreground mb-8"
            >
              {about.headline}
            </motion.h2>

            <div className="space-y-4 mb-10">
              {about.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="font-body text-muted-foreground"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-secondary rounded-lg p-6 md:p-8"
            >
              <h3 className="font-display text-xl text-foreground mb-4">
                {about.approach.headline}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {about.approach.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {about.approach.methods.map((method, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-body text-sm font-medium text-foreground">
                        {method.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 text-center max-w-3xl mx-auto"
        >
          <p className="font-display text-xl md:text-2xl text-foreground italic">
            "{about.closing}"
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
