import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SettingsContainer = styled.div`
  padding: 20px;
`;

const SensorySettings = ({ settings, setSettings, setTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SettingsContainer>
        <h2>⚙️ Sensory Comfort Settings</h2>
        <p>Customize your sensory experience! 🌈</p>
      </SettingsContainer>
    </motion.div>
  );
};

export default SensorySettings;