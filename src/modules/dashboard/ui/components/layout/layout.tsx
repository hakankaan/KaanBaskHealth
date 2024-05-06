'use client';
import React from 'react';
import { GetWidgetsUseCase } from '../../../use-cases/get-widgets-use-case';
import { DependencyContainer } from '@/core/dependency-container';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../query-keys';

type Props = {};

export function Layout({}: Props) {
  const di = DependencyContainer.getInstance();
  const getWidgetsUsecase = new GetWidgetsUseCase(
    di.analyticsService,
    di.preferencesRepository,
  );

  const widgets = useQuery({
    queryKey: queryKeys.widgets,
    queryFn: () => getWidgetsUsecase.execute(),
    refetchInterval: 5000,
  });

  console.log('widgets', widgets);
  return <div>layout</div>;
}
