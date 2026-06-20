import React from 'react';
import Hero from './components/Hero';
import IndustryGaps from './components/IndustryGaps';
import JourneyArchitecture from './components/JourneyArchitecture';
import LeadMatrix from './components/LeadMatrix';
import SalesEngine from './components/SalesEngine';
import AIBlueprint from './components/AIBlueprint';
import Operations from './components/Operations';
import AdPhilosophy from './components/AdPhilosophy';
import KPIDashboard from './components/KPIDashboard';
import Roadmap from './components/Roadmap';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <div className="section-divider"></div>
      <IndustryGaps />
      <div className="section-divider"></div>
      <JourneyArchitecture />
      <div className="section-divider"></div>
      <LeadMatrix />
      <div className="section-divider"></div>
      <SalesEngine />
      <div className="section-divider"></div>
      <AIBlueprint />
      <div className="section-divider"></div>
      <Operations />
      <div className="section-divider"></div>
      <AdPhilosophy />
      <div className="section-divider"></div>
      <KPIDashboard />
      <div className="section-divider"></div>
      <Roadmap />
      
      <footer className="glass-panel footer">
        <div className="container">
          <p>© 2026 Agency Growth Blueprint. All Systems Automated.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
