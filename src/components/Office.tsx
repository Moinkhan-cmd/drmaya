import { motion } from "framer-motion";
import { office } from "@/lib/content";
import { MapPin, Monitor, CheckCircle } from "lucide-react";
import office1 from "@/assets/office-real-1.png";
import office2 from "@/assets/office-real-2.png";

const officeImages = [
  { src: office1, alt: "Dr. Maya Reynolds therapy office in Santa Monica" },
  { src: office2, alt: "Calm, comfortable therapy space with natural light" },
];

export function Office() {
  return (
    <section id="office" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-display-sm md:text-display-md text-foreground mb-4"
          >
            {office.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl text-muted-foreground italic"
          >
            {office.subheadline}
          </motion.p>
        </div>

        {/* Image Grid - 2 images side by side */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {officeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Description & Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-lg p-8 md:p-10"
          >
            <p className="font-body text-muted-foreground mb-6">
              {office.description}
            </p>
            <ul className="space-y-3">
              {office.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Availability & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* In-Person & Telehealth */}
            <div className="bg-background rounded-lg p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl text-foreground">
                  {office.availability.headline}
                </h3>
              </div>
              <p className="font-body text-muted-foreground">
                {office.availability.description}
              </p>
            </div>

            {/* Location */}
            <div className="bg-background rounded-lg p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl text-foreground">Location</h3>
              </div>
              <p className="font-body text-muted-foreground">{office.address}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
