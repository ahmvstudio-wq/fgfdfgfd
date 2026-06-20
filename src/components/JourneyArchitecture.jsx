import React from 'react';
import { motion } from 'framer-motion';
import { blueprintData } from '../data/blueprintData';
import { ArrowDownCircle, Target, MessageSquare, Phone, CheckSquare, Calendar, FileText, Briefcase, RefreshCw, Share2 } from 'lucide-react';
import './JourneyArchitecture.css';

const StageIcons = {
  "Discovery": Target,
  "Interest": MessageSquare,
  "Inquiry": Phone,
  "Qualification": CheckSquare,
  "Meeting / Visit": Calendar,
  "Negotiation": FileText,
  "Purchase": Briefcase,
  "After Sales": RefreshCw,
  "Referral": Share2
};

const JourneyArchitecture = () => {
  const { journey } = blueprintData;

  return (
    <section className="journey-section container" id="customer-journey">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Automated Customer Journey Architecture
      </motion.h2>
      
      <div className="journey-timeline">
        {journey.map((step, index) => {
          const Icon = StageIcons[step.stage] || ArrowDownCircle;
          return (
            <motion.div 
              key={index}
              className="journey-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-indicator">
                <div className="step-icon">
                  <Icon size={24} />
                </div>
                {index < journey.length - 1 && <div className="step-line"></div>}
              </div>
              
              <div className="glass-panel step-content">
                <div className="step-header">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.stage}</h3>
                </div>
                
                <div className="step-details">
                  <div className="detail-row pain">
                    <span className="label">Pain Point:</span>
                    <p>{step.painPoint}</p>
                  </div>
                  <div className="detail-row opp">
                    <span className="label">AI Integration:</span>
                    <p>{step.opportunity}</p>
                  </div>
                  <div className="detail-row action">
                    <span className="label">CRM Action:</span>
                    <p>{step.action}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
};

export default JourneyArchitecture;
