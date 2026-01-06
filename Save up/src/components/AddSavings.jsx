import React, { useState } from 'react';

const AddSavings = ({ onAddSavings, remainingAmount }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const savingsAmount = parseFloat(amount);
    
    if (savingsAmount > 0 && savingsAmount <= remainingAmount) {
      onAddSavings(savingsAmount);
      setAmount('');
    } else if (savingsAmount > remainingAmount) {
      alert(`Amount cannot exceed remaining balance of $${remainingAmount.toFixed(2)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="savingsAmount" className="block text-sm font-medium text-gray-700 mb-2">
          Add Savings ($)
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            id="savingsAmount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            min="0.01"
            step="0.01"
            max={remainingAmount}
            className="input-field pl-8"
            required
          />
        </div>
        {remainingAmount > 0 && (
          <p className="text-xs text-gray-500 mt-1">
            Max: ${remainingAmount.toFixed(2)}
          </p>
        )}
      </div>
      
      <button 
        type="submit" 
        className="btn-primary w-full"
        disabled={!amount || parseFloat(amount) <= 0}
      >
        Add to Savings
      </button>
    </form>
  );
};

export default AddSavings;
