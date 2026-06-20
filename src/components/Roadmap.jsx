import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Map, Flag } from 'lucide-react';
import './Roadmap.css';

const Roadmap = () => {
  const { roadmap } = blueprintData;

  return (
    <section className="roadmap-section container" id="roadmap">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        90-Day Execution Roadmap
      </motion.h2>

      <div className="roadmap-container">
        {roadmap.map((phase, index) => (
          <motion.div 
            key={index}
            className="roadmap-phase glass-panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="phase-marker">
              <Flag size={20} className="marker-icon" />
            </div>
            <div className="phase-content">
              <div className="phase-header">
                <h3>{phase.phase}</h3>
                <span className="phase-weeks">{phase.weeks}</span>
              </div>
              <p className="phase-goals">{phase.goals}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
