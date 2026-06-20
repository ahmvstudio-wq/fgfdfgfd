import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { title, subtitle, description } = blueprintData.hero;

  return (
    <section className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.h2>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="hero-stats grid grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="glass-panel stat-card">
              <DollarSign className="stat-icon" size={32} />
              <div className="stat-value">Increase ROI</div>
            </div>
            <div className="glass-panel stat-card">
              <Users className="stat-icon" size={32} />
              <div className="stat-value">Automate Leads</div>
            </div>
            <div className="glass-panel stat-card">
              <TrendingUp className="stat-icon" size={32} />
              <div className="stat-value">Scale Business</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
