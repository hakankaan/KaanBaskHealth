import { useWidgets } from '@/modules/dashboard/use-cases/use-widgets';
import React from 'react';
import { Layout } from './layout';
import { LoadingPlaceholder } from '@/components/loading-placeholder/loading-placeholder';

export function LayoutContainer() {
  const widgetsQuery = useWidgets();

  if (widgetsQuery.isLoading) {
    return <LoadingPlaceholder />;
  }

  if (!widgetsQuery.isSuccess) {
    return null;
  }

  const widgets = widgetsQuery.data;
  return <Layout widgets={widgets} />;
}
