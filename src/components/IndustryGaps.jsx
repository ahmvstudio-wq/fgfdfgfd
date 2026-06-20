import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Building, HardHat, TrendingUp, Zap, AlertTriangle, AlertCircle, ArrowRight } from 'lucide-react';
import './IndustryGaps.css';

const IconMap = {
  Building: Building,
  HardHat: HardHat
};

const IndustryGaps = () => {
  const { industryGaps } = blueprintData;

  return (
    <section className="industry-section container" id="industry-analysis">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Industry Analysis & Strategic Gaps
      </motion.h2>
      
      <div className="grid grid-cols-2">
        {industryGaps.map((ind, index) => {
          const Icon = IconMap[ind.icon];
          return (
            <motion.div 
              key={index}
              className="glass-panel industry-card"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="industry-header">
                <div className="icon-wrapper">
                  <Icon size={32} />
                </div>
                <h3>{ind.industry}</h3>
              </div>
              
              <div className="industry-content">
                <div className="content-block">
                  <h4><TrendingUp size={18}/> Market Trends</h4>
                  <p>{ind.trends}</p>
                </div>
                
                <div className="content-block warning">
                  <h4><AlertCircle size={18}/> Bottlenecks</h4>
                  <p>{ind.bottlenecks}</p>
                </div>
                
                <div className="content-block highlight">
                  <h4><Zap size={18}/> AI & Automation Opportunity</h4>
                  <p>{ind.aiAutomation}</p>
                </div>
                
                <div className="content-block actionable">
                  <h4><ArrowRight size={18}/> Low-Cost Growth</h4>
                  <p>{ind.lowCostGrowth}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
};

export default IndustryGaps;
