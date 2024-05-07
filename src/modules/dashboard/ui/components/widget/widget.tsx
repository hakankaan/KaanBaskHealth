'use client';
import {
  CardHeader,
  Card,
  CardContent,
  CardFooter,
} from '@/components/elements';
import { Widget as WidgetEntity } from '@/modules/dashboard/domain/widget';

import React from 'react';
import { useLayout } from '../../contexts/use-layout';
import { GripVertical } from 'lucide-react';

type Props = {
  widget: WidgetEntity;
  children?: React.ReactNode;
};

export const Widget = React.forwardRef<HTMLDivElement, Props>(
  ({ widget, children, ...rest }, ref) => {
    const { isEditMode } = useLayout();
    return (
      <Card ref={ref} {...rest}>
        <CardHeader className="h-8 p-2 flex justify-between items-center w-full flex-row">
          <h6 className="font-medium text-gray-500">{widget.title}</h6>
          {isEditMode && (
            <GripVertical className="h-4 w-4 cursor-move grid-item__title" />
          )}
        </CardHeader>
        <CardContent className="h-[calc(100%-48px)] p-2">wer</CardContent>
        <CardFooter className="p-1 relative h-4">
          <div className="right-0 absolute bottom-0 cursor-se-resize">
            {isEditMode && children}
          </div>
        </CardFooter>
      </Card>
    );
  },
);

Widget.displayName = 'Widget';
