import { Page as DashboardPage } from '@/modules/dashboard/ui/components/page/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Bask Health',
};

export default function Dashboard() {
  return <DashboardPage />;
}
