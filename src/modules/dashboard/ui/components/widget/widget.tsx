'use client';

import { CardHeader, Card } from '@/components/elements';
import React from 'react';

type Props = {
  title: string;
  editMode: boolean;
};

export const Widget = ({ title, editMode }: Props) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      {editMode && <div>edit mode</div>}
    </Card>
  );
};
