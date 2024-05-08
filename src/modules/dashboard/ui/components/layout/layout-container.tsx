import { useWidgets } from '@/modules/dashboard/use-cases/use-widgets';
import React from 'react';
import { Layout } from './layout';

export function LayoutContainer() {
  const widgetsQuery = useWidgets();

  if (widgetsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!widgetsQuery.isSuccess) {
    return <div>Error</div>;
  }

  const widgets = widgetsQuery.data;
  return <Layout widgets={widgets} />;
}
