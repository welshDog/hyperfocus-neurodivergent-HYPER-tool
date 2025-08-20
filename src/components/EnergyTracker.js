import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EnergyContainer = styled.div`
  padding: 20px;
`;

const EnergyTracker = ({ settings }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <EnergyContainer>
        <h2>⚡ Energy & Spoon Tracker</h2>
        <p>Monitor your energy levels with neurodivergent understanding! 🌟</p>
      </EnergyContainer>
    </motion.div>
  );
};

export default EnergyTracker;