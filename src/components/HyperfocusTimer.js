import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimerContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const TimerDisplay = styled.div`
  font-size: 4rem;
  color: ${props => props.theme.colors.primary};
  margin: 20px 0;
  font-family: 'Monaco', monospace;
`;

const HyperfocusTimer = ({ settings }) => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TimerContainer>
        <h2>🎯 Hyperfocus Timer</h2>
        <TimerDisplay>
          {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
        </TimerDisplay>
        <p>Designed for your beautiful ADHD mind! 🧠✨</p>
      </TimerContainer>
    </motion.div>
  );
};

export default HyperfocusTimer;