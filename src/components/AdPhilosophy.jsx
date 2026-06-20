import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Megaphone, Search, Settings } from 'lucide-react';
import './AdPhilosophy.css';

const AdPhilosophy = () => {
  const { advertising } = blueprintData;

  return (
    <section className="ad-section container" id="ad-philosophy">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Omni-Channel Marketing Strategy
      </motion.h2>
      <p className="philosophy-intro text-center">{advertising.philosophy}</p>

      <div className="grid grid-cols-2 ad-grid">
        {/* Meta Ads */}
        <motion.div 
          className="glass-panel ad-card meta-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ad-header">
            <Megaphone size={32} className="ad-icon meta-icon" />
            <div>
              <h3>{advertising.meta.title}</h3>
              <p className="best-for">Best for: {advertising.meta.bestFor}</p>
            </div>
          </div>
          <div className="ad-tactics">
            {advertising.meta.campaigns.map((camp, i) => (
              <div key={i} className="tactic">
                <h4>{camp.name}</h4>
                <p>{camp.angle}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Google Ads */}
        <motion.div 
          className="glass-panel ad-card google-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ad-header">
            <Search size={32} className="ad-icon google-icon" />
            <div>
              <h3>{advertising.google.title}</h3>
              <p className="best-for">Best for: {advertising.google.bestFor}</p>
            </div>
          </div>
          <div className="ad-tactics">
            {advertising.google.tactics.map((tac, i) => (
              <div key={i} className="tactic">
                <h4>{tac.name}</h4>
                <p>{tac.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="glass-panel tech-integration"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="tech-header">
          <Settings size={28} className="tech-icon" />
          <h3>Technical Integration (The SaaS Edge)</h3>
        </div>
        <ul className="tech-list">
          {advertising.technical.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default AdPhilosophy;
