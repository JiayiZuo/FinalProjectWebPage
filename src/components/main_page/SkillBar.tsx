import React, { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillBarProps {
  icon: ReactNode;
  name: string;
  percentage: number;
}

const SkillBar = ({ icon, name, percentage }: SkillBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <h3 className="font-medium flex items-center">
        <span className="mr-2 h-4 w-4 text-primary">{icon}</span>
        {name}
      </h3>
      <span className="text-primary font-medium">{percentage}%</span>
    </div>
    <Progress value={percentage} className="sci-fi-progress h-2" />
  </div>
);

export default SkillBar;