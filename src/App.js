import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import HyperfocusTimer from './components/HyperfocusTimer';
import TaskManager from './components/TaskManager';
import SensorySettings from './components/SensorySettings';
import EnergyTracker from './components/EnergyTracker';
import { neurodivergentThemes } from './styles/themes';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.dyslexiaFriendly};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: all 0.3s ease;
    overflow: hidden;
  }

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    body {
      background: #000000;
      color: #ffffff;
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.colors.background};

  /* Gentle focus outline for keyboard navigation */
  *:focus {
    outline: 3px solid ${props => props.theme.colors.focus};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Sidebar = styled(motion.nav)`
  width: 280px;
  background: ${props => props.theme.colors.sidebar};
  border-right: 2px solid ${props => props.theme.colors.border};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: ${props => props.theme.colors.background};
`;

const WelcomeHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: ${props => props.theme.colors.card};
  border-radius: 12px;
  border: 2px solid ${props => props.theme.colors.primary};
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 1.2;
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const NavButton = styled(motion.button)`
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.card};
  color: ${props => props.active ? props.theme.colors.cardText : props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [theme, setTheme] = useState('calmBlue');
  const [settings, setSettings] = useState({
    reducedMotion: false,
    highContrast: false,
    dyslexiaFont: true,
    fontSize: 'medium'
  });

  // Respect system preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));
  }, []);

  const views = [
    { id: 'welcome', label: '🌈 Welcome', icon: '✨' },
    { id: 'timer', label: '⏰ Hyperfocus Timer', icon: '🎯' },
    { id: 'tasks', label: '📝 Task Manager', icon: '✅' },
    { id: 'energy', label: '⚡ Energy Tracker', icon: '📊' },
    { id: 'settings', label: '⚙️ Sensory Settings', icon: '🛠️' }
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'timer':
        return <HyperfocusTimer settings={settings} />;
      case 'tasks':
        return <TaskManager settings={settings} />;
      case 'energy':
        return <EnergyTracker settings={settings} />;
      case 'settings':
        return <SensorySettings settings={settings} setSettings={setSettings} setTheme={setTheme} />;
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeHeader>
              <WelcomeTitle>🌈💎⚡ Welcome to Your Neurodivergent Excellence Tool! ⚡💎🌈</WelcomeTitle>
              <WelcomeSubtitle>
                This is your safe space for productivity that actually works with your beautiful neurodivergent mind.
                Take your time exploring - everything here is designed with ADHD, Autism, and Dyslexia in mind.
                You're amazing exactly as you are! 🧠✨
              </WelcomeSubtitle>
            </WelcomeHeader>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  background: neurodivergentThemes[theme].colors.card,
                  padding: '20px',
                  borderRadius: '12px',
                  border: `2px solid ${neurodivergentThemes[theme].colors.primary}`,
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: neurodivergentThemes[theme].colors.primary, marginBottom: '10px' }}>🎯 Hyperfocus Timer</h3>
                <p>Pomodoro++ timers designed for ADHD minds. Extended sessions, gentle breaks, and hyperfocus protection.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  background: neurodivergentThemes[theme].colors.card,
                  padding: '20px',
                  borderRadius: '12px',
                  border: `2px solid ${neurodivergentThemes[theme].colors.primary}`,
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: neurodivergentThemes[theme].colors.primary, marginBottom: '10px' }}>📝 Task Manager</h3>
                <p>Executive function support with visual task boards, dopamine rewards, and brain-friendly breakdowns.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  background: neurodivergentThemes[theme].colors.card,
                  padding: '20px',
                  borderRadius: '12px',
                  border: `2px solid ${neurodivergentThemes[theme].colors.primary}`,
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: neurodivergentThemes[theme].colors.primary, marginBottom: '10px' }}>⚡ Energy Tracker</h3>
                <p>Monitor your mental energy and spoons. Work WITH your natural rhythms, not against them.</p>
              </motion.div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <ThemeProvider theme={neurodivergentThemes[theme]}>
      <GlobalStyle />
      <AppContainer>
        <Sidebar
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{ color: neurodivergentThemes[theme].colors.primary, fontSize: '1.5rem' }}>
              🌈 Your Space
            </h2>
            <p style={{ color: neurodivergentThemes[theme].colors.textSecondary, fontSize: '0.9rem' }}>
              Designed for neurodivergent minds
            </p>
          </div>

          {views.map((view) => (
            <NavButton
              key={view.id}
              active={currentView === view.id}
              onClick={() => setCurrentView(view.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span style={{ fontSize: '1.2rem' }}>{view.icon}</span>
              {view.label}
            </NavButton>
          ))}
        </Sidebar>

        <MainContent>
          <AnimatePresence mode="wait">
            {renderCurrentView()}
          </AnimatePresence>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;