export const getWidgetTitleBySlug = (slug: string) => {
  const title = {
    userEngagement: 'User Engagement',
    salesOverTime: 'Sales Over Time',
    recentTransactions: 'Recent Transactions',
    topProducts: 'Top Products',
  }[slug];

  if (!title) {
    return 'No Title';
  }

  return title;
};
