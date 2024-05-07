'use client';
import React from 'react';
import { Layout } from '../layout/layout';
import { ContentLayout } from '@/components/layout';
import { LayoutProvider } from '../../contexts/layout-context';

import { EditModeSwitch } from '../layout/edit-mode-switch';
import { DependencyContainer } from '@/core/dependency-container';
import { GetWidgetsUseCase } from '@/modules/dashboard/use-cases/get-widgets-use-case';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../query-keys';

type Props = {};

export const Page = (props: Props) => {
  const di = DependencyContainer.getInstance();
  const getWidgetsUsecase = new GetWidgetsUseCase(
    di.analyticsService,
    di.layoutSettingsRepository,
  );

  const widgetsQuery = useQuery({
    queryKey: queryKeys.widgets,
    queryFn: () => getWidgetsUsecase.execute(),
    refetchInterval: 5000,
  });

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
