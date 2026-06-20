import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Clock, Calendar, CalendarDays, BarChart2 } from 'lucide-react';
import './Operations.css';

const IconMap = {
  "Daily": Clock,
  "Weekly (Sales Sprint)": Calendar,
  "Monthly (Strategy Review)": CalendarDays,
  "Quarterly (System Audit)": BarChart2
};

const Operations = () => {
  const { operations } = blueprintData;

  return (
    <section className="ops-section container" id="operations">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Operations & Rhythm of Business
      </motion.h2>
      
      <div className="ops-grid">
        {operations.map((op, index) => {
          const Icon = IconMap[op.rhythm] || Clock;
          return (
            <motion.div 
              key={index}
              className="glass-panel ops-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="ops-header">
                <Icon size={28} className="ops-icon" />
                <h3>{op.rhythm}</h3>
              </div>
              <p className="ops-tasks">{op.tasks}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
};

export default Operations;
