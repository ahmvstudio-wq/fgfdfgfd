import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Cpu, Server, Code } from 'lucide-react';
import './AIBlueprint.css';

const AIBlueprint = () => {
  const { aiBlueprint } = blueprintData;

  const getImpactClass = (val) => {
    if (val === 'Massive') return 'impact-massive';
    if (val === 'High') return 'impact-high';
    if (val === 'Medium') return 'impact-med';
    return 'impact-low';
  };

  return (
    <section className="blueprint-section container" id="ai-blueprint">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        AI Implementation Blueprint
      </motion.h2>
      
      <div className="grid grid-cols-3">
        {aiBlueprint.map((item, index) => (
          <motion.div 
            key={index}
            className="glass-panel ai-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="ai-header">
              <Cpu className="ai-icon" size={24} />
              <h3>{item.useCase}</h3>
            </div>
            
            <div className="ai-body">
              <div className="ai-meta">
                <span className="meta-label">Complexity:</span>
                <span className="meta-value">{item.complexity}</span>
              </div>
              <div className="ai-meta">
                <span className="meta-label">Impact:</span>
                <span className={`meta-value ${getImpactClass(item.impact)}`}>{item.impact}</span>
              </div>
            </div>
            
            <div className="ai-footer">
              <div className="tech-label"><Code size={14}/> Tech Stack</div>
              <div className="tech-stack">{item.tech}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIBlueprint;
