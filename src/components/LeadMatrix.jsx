import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Trophy, ChevronRight } from 'lucide-react';
import './LeadMatrix.css';

const LeadMatrix = () => {
  const { leadMatrix } = blueprintData;

  const getPillClass = (val) => {
    if (val === 'High') return 'pill-high';
    if (val === 'Med') return 'pill-med';
    if (val === 'Low') return 'pill-low';
    return '';
  };

  return (
    <section className="matrix-section container" id="lead-matrix">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Lead Generation Matrix
      </motion.h2>
      
      <div className="matrix-table-container glass-panel">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Source / Channel</th>
              <th>Cost</th>
              <th>Difficulty</th>
              <th>Scale</th>
              <th>ROI</th>
              <th>Best Practice</th>
            </tr>
          </thead>
          <tbody>
            {leadMatrix.map((item, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <td className="rank-cell">
                  {item.rank <= 3 ? <Trophy size={18} className={`trophy-${item.rank}`} /> : `#${item.rank}`}
                </td>
                <td className="source-cell">{item.source}</td>
                <td><span className={`pill ${getPillClass(item.cost)}`}>{item.cost}</span></td>
                <td><span className={`pill ${getPillClass(item.difficulty)}`}>{item.difficulty}</span></td>
                <td><span className={`pill ${getPillClass(item.scale)}`}>{item.scale}</span></td>
                <td><span className={`pill ${getPillClass(item.roi)}`}>{item.roi}</span></td>
                <td className="practice-cell">
                  <ChevronRight size={14} className="practice-icon"/>
                  {item.bestPractice}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LeadMatrix;
