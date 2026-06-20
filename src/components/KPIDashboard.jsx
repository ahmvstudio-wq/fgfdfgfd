import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { Filter, ChevronDown, BarChart, LineChart, PieChart } from 'lucide-react';
import './KPIDashboard.css';

const KPIDashboard = () => {
  const { kpiDashboard } = blueprintData;

  const renderCard = (title, items, icon) => (
    <div className="glass-panel dashboard-card">
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h4>{title}</h4>
      </div>
      <ul className="kpi-list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="kpi-bullet"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="kpi-section container" id="kpi-dashboard">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Executive KPI Dashboard
      </motion.h2>

      <motion.div 
        className="dashboard-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="dashboard-top-bar">
          <div className="dash-title">Looker Studio / CRM Dashboard View</div>
          <div className="dash-filters">
            <span className="filter-btn"><Filter size={14}/> All Channels <ChevronDown size={14}/></span>
            <span className="filter-btn">Last 30 Days <ChevronDown size={14}/></span>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {renderCard("Top of Funnel (Marketing)", kpiDashboard.topFunnel, <PieChart size={20}/>)}
          {renderCard("Mid Funnel (Sales Velocity)", kpiDashboard.midFunnel, <BarChart size={20}/>)}
          {renderCard("Bottom Funnel (Revenue)", kpiDashboard.bottomFunnel, <LineChart size={20}/>)}
          {renderCard("Post-Sale (Growth)", kpiDashboard.postSale, <PieChart size={20}/>)}
        </div>
      </motion.div>
    </section>
  );
};

export default KPIDashboard;
