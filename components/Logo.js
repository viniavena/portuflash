import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center my-6 mb-14">
      <Image src="/negative-logo.svg" alt="Logo" />
    </div>
  );
};

export default Logo;
