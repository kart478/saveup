import React from 'react';

const GoalForm = ({ goalName, targetAmount, onGoalNameChange, onTargetAmountChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="goalName" className="block text-sm font-medium text-gray-700 mb-2">
          Goal Name
        </label>
        <input
          id="goalName"
          type="text"
          value={goalName}
          onChange={(e) => onGoalNameChange(e.target.value)}
          placeholder="e.g., New Phone"
          className="input-field"
          required
        />
      </div>
      
      <div>
        <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700 mb-2">
          Target Amount ($)
        </label>
        <input
          id="targetAmount"
          type="number"
          value={targetAmount}
          onChange={(e) => onTargetAmountChange(parseFloat(e.target.value) || 0)}
          placeholder="1000"
          min="1"
          step="0.01"
          className="input-field"
          required
        />
      </div>
      
      <button type="submit" className="btn-primary w-full">
        Set Goal
      </button>
    </form>
  );
};

export default GoalForm;
