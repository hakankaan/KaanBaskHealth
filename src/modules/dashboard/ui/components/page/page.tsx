'use client';
import React from 'react';
import { ContentLayout } from '@/components/layout';
import { LayoutProvider } from '../../contexts/layout-context';
import { LayoutContainer, SettingsButton } from '../layout';
import { QueryErrorBoundary } from '@/components/error-boundary/query-error-boundary';
import { RefetchingDisabledIndicator } from '../refetching-disabled-indicator/refetching-disabled-indicator';

export const Page = () => {
  return (
    <LayoutProvider>
      <ContentLayout
        title="Dashboard"
        extra={
          <div className="flex items-center gap-2">
            <RefetchingDisabledIndicator />
            <SettingsButton />
          </div>
        }
      >
        <QueryErrorBoundary>
          <LayoutContainer />
        </QueryErrorBoundary>
      </ContentLayout>
    </LayoutProvider>
  );
};
