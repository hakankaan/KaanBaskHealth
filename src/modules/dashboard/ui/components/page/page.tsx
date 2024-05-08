'use client';
import React from 'react';
import { ContentLayout } from '@/components/layout';
import { LayoutProvider } from '../../contexts/layout-context';
import { LayoutContainer, SettingsButton } from '../layout';

export const Page = () => {
  return (
    <LayoutProvider>
      <ContentLayout title="Dashboard" extra={<SettingsButton />}>
        <LayoutContainer />
      </ContentLayout>
    </LayoutProvider>
  );
};
