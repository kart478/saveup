import React, { useState, useEffect } from 'react';
import GoalForm from './components/GoalForm';
import ImageUpload from './components/ImageUpload';
import AddSavings from './components/AddSavings';
import ProgressBar from './components/ProgressBar';
import GoalImage from './components/GoalImage';

const App = () => {
  // State management
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState(0);
  const [savedAmount, setSavedAmount] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [isGoalSet, setIsGoalSet] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('saveup-data');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setGoalName(data.goalName || '');
        setTargetAmount(data.targetAmount || 0);
        setSavedAmount(data.savedAmount || 0);
        setImageUrl(data.imageUrl || '');
        setIsGoalSet(!!data.goalName && data.targetAmount > 0);
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    if (isGoalSet) {
      const dataToSave = {
        goalName,
        targetAmount,
        savedAmount,
        imageUrl
      };
      localStorage.setItem('saveup-data', JSON.stringify(dataToSave));
    }
  }, [goalName, targetAmount, savedAmount, imageUrl, isGoalSet]);

  // Calculate progress
  const percentage = targetAmount > 0 ? (savedAmount / targetAmount) * 100 : 0;
  const remainingAmount = targetAmount - savedAmount;
  const isGoalReached = savedAmount >= targetAmount && targetAmount > 0;

  // Handle goal setup
  const handleGoalSubmit = () => {
    if (goalName.trim() && targetAmount > 0) {
      setIsGoalSet(true);
    }
  };

  // Handle adding savings
  const handleAddSavings = (amount) => {
    setSavedAmount(prev => prev + amount);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Handle reset goal
  const handleResetGoal = () => {
    if (window.confirm('Are you sure you want to reset your goal? This will delete all current progress.')) {
      setGoalName('');
      setTargetAmount(0);
      setSavedAmount(0);
      setImageUrl('');
      setIsGoalSet(false);
      localStorage.removeItem('saveup-data');
    }
  };

  // Handle edit goal
  const handleEditGoal = () => {
    setIsGoalSet(false);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            💰 SaveUp
          </h1>
          <p className="text-gray-600">
            Your Visual Savings Goal Tracker
          </p>
        </header>

        {/* Goal Setup Form */}
        {!isGoalSet ? (
          <div className="glass-morphism p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Set Your Savings Goal
            </h2>
            
            <div className="space-y-6">
              <GoalForm
                goalName={goalName}
                targetAmount={targetAmount}
                onGoalNameChange={setGoalName}
                onTargetAmountChange={setTargetAmount}
                onSubmit={handleGoalSubmit}
              />
              
              <ImageUpload
                imageUrl={imageUrl}
                onImageChange={setImageUrl}
              />
            </div>
          </div>
        ) : (
          /* Goal Tracking Interface */
          <div className="space-y-6">
            {/* Goal Image and Name */}
            <div className="glass-morphism p-8">
              <GoalImage
                imageUrl={imageUrl}
                goalName={goalName}
                isGoalReached={isGoalReached}
                isAnimating={isAnimating}
              />
              
              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 justify-center">
                <button
                  onClick={handleEditGoal}
                  className="btn-secondary"
                >
                  Edit Goal
                </button>
                <button
                  onClick={handleResetGoal}
                  className="btn-secondary text-red-600 hover:bg-red-50"
                >
                  Reset Goal
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="glass-morphism p-6">
              <ProgressBar
                saved={savedAmount}
                target={targetAmount}
                percentage={percentage}
              />
            </div>

            {/* Add Savings */}
            {!isGoalReached && (
              <div className="glass-morphism p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Add to Your Savings
                </h3>
                <AddSavings
                  onAddSavings={handleAddSavings}
                  remainingAmount={remainingAmount}
                />
              </div>
            )}

            {/* Goal Reached Message */}
            {isGoalReached && (
              <div className="glass-morphism p-6 text-center">
                <div className="text-6xl mb-4">🎊</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Congratulations!
                </h3>
                <p className="text-gray-600 mb-4">
                  You've successfully saved ${savedAmount.toFixed(2)} for your {goalName}!
                </p>
                <button
                  onClick={handleResetGoal}
                  className="btn-primary"
                >
                  Start New Goal
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
