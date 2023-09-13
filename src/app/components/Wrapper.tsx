import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='max-w-[600px] md:max-w-[768px] lg:max-w-[1024px] mx-5 md:mx-auto '>
      {children}
    </div>
  );
};

export default Wrapper;
