'use client';
import React from 'react';
import { Layout } from '../layout/layout';
import { ContentLayout } from '@/components/layout';
import { LayoutProvider } from '../../contexts/layout-context';

import { EditModeSwitch } from '../layout/edit-mode-switch';
import { DependencyContainer } from '@/core/dependency-container';

import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../query-keys';
import { useWidgets } from '@/modules/dashboard/use-cases/use-widgets';

type Props = {};

export const Page = (props: Props) => {
  const widgetsQuery = useWidgets();

  if (widgetsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!widgetsQuery.isSuccess) {
    return <div>Error</div>;
  }

  const widgets = widgetsQuery.data;

  return (
    <LayoutProvider>
      <ContentLayout title="Dashboard" extra={<EditModeSwitch />}>
        {widgetsQuery.isSuccess && <Layout widgets={widgets} />}
      </ContentLayout>
    </LayoutProvider>
  );
};
