import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactCardProps {
  title: string;
  children: ReactNode;
}

const ContactCard = ({ title, children }: ContactCardProps) => (
  <Card className="card">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export default ContactCard;