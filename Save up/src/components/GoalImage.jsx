import React from 'react';
import { motion } from 'framer-motion';

const GoalImage = ({ imageUrl, goalName, isGoalReached, isAnimating }) => {
  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    bounce: {
      scale: [1, 1.1, 1],
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    celebrate: {
      scale: [1, 1.2, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1]
      }
    },
    glow: {
      boxShadow: [
        "0 0 0 rgba(34, 197, 94, 0)",
        "0 0 20px rgba(34, 197, 94, 0.6)",
        "0 0 40px rgba(34, 197, 94, 0.4)",
        "0 0 20px rgba(34, 197, 94, 0.6)",
        "0 0 0 rgba(34, 197, 94, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative"
        variants={imageVariants}
        initial="initial"
        animate={isGoalReached ? "celebrate" : isAnimating ? "bounce" : "initial"}
      >
        {imageUrl ? (
          <motion.img
            src={imageUrl}
            alt={goalName}
            className="w-48 h-48 object-cover rounded-2xl shadow-lg"
            animate={isGoalReached ? "glow" : "initial"}
          />
        ) : (
          <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-lg flex items-center justify-center">
            <svg className="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        
        {isGoalReached && (
          <motion.div
            className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        )}
      </motion.div>
      
      {goalName && (
        <motion.h2
          className="text-2xl font-bold text-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {goalName}
        </motion.h2>
      )}
      
      {isGoalReached && (
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-4xl">🎉</div>
          <p className="text-lg font-semibold text-green-600">Goal Achieved!</p>
          <p className="text-sm text-gray-600">Congratulations on reaching your savings goal!</p>
        </motion.div>
      )}
    </div>
  );
};

export default GoalImage;
