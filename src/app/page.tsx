import { ContentLayout } from '@/components/layout';
import { Page as DashboardPage } from '@/modules/dashboard/ui/components/page/page';

export default function Dashboard() {
  return (
    <ContentLayout title="Dashboard">
      <DashboardPage />
    </ContentLayout>
  );
}
