import React, { useState } from 'react';

const CustomAccordion = ({ children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  
  // Filter and clone children to pass props
  const childrenWithProps = React.Children.map(children, child => {
    if (child.type === CustomAccordionSummary) {
      return React.cloneElement(child, { 
        expanded, 
        toggleExpanded: () => setExpanded(!expanded) 
      });
    }
    if (child.type === CustomAccordionDetails && !expanded) {
      return null;
    }
    return child;
  });
  
  return (
    <div className="border border-gray-300 rounded-md mb-2 overflow-hidden shadow-sm">
      {childrenWithProps}
    </div>
  );
};

const CustomAccordionSummary = ({ children, expanded, toggleExpanded, ...props }) => {
  return (
    <div 
      className="flex justify-between items-center p-3 bg-white cursor-pointer hover:bg-gray-50"
      onClick={toggleExpanded}
      {...props}
    >
      <div className="flex-grow">{children}</div>
      <div className={`transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

const CustomAccordionDetails = ({ children }) => {
  return (
    <div className="p-3 bg-gray-50 border-t border-gray-200">
      {children}
    </div>
  );
};

const CustomAccordionActions = ({ children }) => {
  return (
    <div className="flex justify-end gap-2 p-2 bg-gray-50 border-t border-gray-200">
      {children}
    </div>
  );
};

const CustomTypography = ({ component = 'div', children, ...props }) => {
  const Component = component;
  return <Component {...props}>{children}</Component>;
};

const CustomButton = ({ 
  children, 
  variant = 'text', 
  color = 'primary', 
  size = 'medium', 
  ...props 
}) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base'
  };
  
  const variantClasses = {
    text: 'bg-transparent hover:bg-gray-100',
    contained: 'bg-blue-500 text-white hover:bg-blue-600',
    outlined: 'border border-blue-500 text-blue-500 hover:bg-blue-50'
  };
  
  return (
    <button 
      className={`font-medium rounded ${sizeClasses[size]} ${variantClasses[variant]} transition-colors`}
      {...props}
    >
      {children}
    </button>
  );
};

const CustomExpandMoreIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomAccordionActions,
  CustomTypography,
  CustomButton,
  CustomExpandMoreIcon
};
