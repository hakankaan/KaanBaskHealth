export const getTitleFromSlug = (slug: string) => {
  return (
    {
      id: 'ID',
      name: 'Name',
      sales: 'Sales',
      amount: 'Amount',
      user: 'User',
    }[slug] || slug
  );
};
