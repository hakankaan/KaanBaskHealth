import { useRandomStyle } from '../use-cases/use-random-style';

type Props = {
  children: React.ReactNode;
};

export const StyleProvider = ({ children }: Props) => {
  const styles = useRandomStyle();

  const css = `
    :root {
      --background: ${styles.background};
      --foreground: ${styles.foreground};
      --card: ${styles.card};
      --card-foreground: ${styles.cardForeground};
      --popover: ${styles.popover};
      --popover-foreground: ${styles.popoverForeground};
      --primary: ${styles.primary};
      --primary-foreground: ${styles.primaryForeground};
      --secondary: ${styles.secondary};
      --secondary-foreground: ${styles.secondaryForeground};
      --muted: ${styles.muted};
      --muted-foreground: ${styles.mutedForeground};
      --accent: ${styles.accent};
      --accent-foreground: ${styles.accentForeground};
      --destructive: ${styles.destructive};
      --destructive-foreground: ${styles.destructiveForeground};
      --border: ${styles.border};
      --input: ${styles.input};
      --ring: ${styles.ring};
    }
  `;

  return (
    <>
      <style>{css}</style>
      {children}
    </>
  );
};
