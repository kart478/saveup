import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ saved, target, percentage }) => {
  const isGoalReached = percentage >= 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-bold text-blue-600">{percentage.toFixed(1)}%</span>
      </div>
      
      <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(percentage, 100)}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isGoalReached && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          )}
        </motion.div>
        
        {isGoalReached && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-white text-xs font-bold">🎉 Complete!</span>
          </motion.div>
        )}
      </div>
      
      <div className="flex justify-between text-sm">
        <div>
          <span className="text-gray-500">Saved: </span>
          <span className="font-semibold text-gray-900">${saved.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-gray-500">Target: </span>
          <span className="font-semibold text-gray-900">${target.toFixed(2)}</span>
        </div>
      </div>
      
      {saved < target && (
        <div className="text-center">
          <span className="text-gray-500">Remaining: </span>
          <span className="font-semibold text-orange-600">${(target - saved).toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
