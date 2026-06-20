import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Database, Zap, Activity } from 'lucide-react';
import './SalesEngine.css';

const SalesEngine = () => {
  const { salesEngine, engineKPIs } = blueprintData;

  return (
    <section className="engine-section container" id="sales-engine">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Complete Sales System (The Engine)
      </motion.h2>
      
      <div className="engine-container">
        <motion.div 
          className="engine-core glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="core-icon">
            <Database size={48} />
          </div>
          <h3>Centralized CRM</h3>
          <p>Connected via API/Webhooks (Make.com/Zapier)</p>
        </motion.div>

        <div className="engine-steps">
          {salesEngine.map((step, index) => (
            <motion.div 
              key={index}
              className="engine-step glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="step-icon-small">
                <Zap size={16} />
              </div>
              <div>
                <h4>{step.step}</h4>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="engine-kpis glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="kpis-header">
            <Activity size={24} className="kpis-icon"/>
            <h3>Target KPIs</h3>
          </div>
          <div className="kpis-grid">
            {engineKPIs.map((kpi, index) => (
              <div key={index} className="kpi-card">
                <span className="kpi-metric">{kpi.metric}</span>
                <span className="kpi-target text-gradient">{kpi.target}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesEngine;
