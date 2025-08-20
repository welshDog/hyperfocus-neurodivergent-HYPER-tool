import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TaskContainer = styled.div`
  padding: 20px;
`;

const TaskManager = ({ settings }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TaskContainer>
        <h2>📝 Neurodivergent Task Manager</h2>
        <p>Executive function support coming soon! 🌈</p>
      </TaskContainer>
    </motion.div>
  );
};

export default TaskManager;