
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface PrincipleCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ title, description, isOpen, onClick }) => {
  return (
    <div 
      className="group border-2 border-brand-gold/20 bg-brand-dark/30 p-4 sm:p-6 md:px-6 md:pt-10 md:pb-2 rounded-lg transition-all duration-300 hover:border-brand-gold hover:shadow-gold-glow hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-brand-beige group-hover:text-brand-gold-light transition-colors duration-300">
          {title}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 sm:w-6 sm:h-6 text-brand-gold/50 group-hover:text-brand-gold-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} mt-2`} 
        />
      </div>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 mt-2 md:mt-4' : 'max-h-0'}`}>
        <p className="text-brand-beige/80 text-sm sm:text-base md:text-lg text-left leading-relaxed pb-4 md:pb-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PrincipleCard;
