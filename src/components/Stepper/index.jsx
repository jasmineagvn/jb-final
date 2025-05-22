import React from 'react';

const Stepper = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Data Diri' },
    { number: 2, label: 'Identitas Orang Tua' },
    { number: 3, label: 'Kontak Darurat' }
  ];

  return (
    <div className="flex justify-between items-center mb-20">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 text-center relative">
          {/* Circle */}
          <div className="flex items-center justify-center">
            <div className={`w-8 h-8 rounded-full text-white font-bold flex items-center justify-center 
              ${currentStep === step.number ? 'bg-orange-500' : 'border border-black text-black bg-white'}`}>
              {step.number}
            </div>
          </div>

          {/* Label */}
          <p className="mt-2 text-sm font-medium">{step.label}</p>

          {/* Line */}
          {index < steps.length - 1 && (
            <div className="absolute top-4 left-1/2 w-full h-0.5 transform -translate-y-1/2 z-[-1]">
              <hr className={`border-t-2 ${currentStep > step.number ? 'border-orange-500' : 'border-gray-300'}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
