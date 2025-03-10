import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
}

const SectionHeader = ({ icon, title }: SectionHeaderProps) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center">
    <span className="mr-2 text-primary">{icon}</span>
    {title}
  </h2>
);

export default SectionHeader;