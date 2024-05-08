'use client';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert, AlertDescription, AlertTitle } from '../elements/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { RotateCcw } from 'lucide-react';
import { Button } from '../elements';

export function QueryErrorBoundary({ children }: PropsWithChildren) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        return (
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={({ error, resetErrorBoundary }) => {
              console.log('error', error.message);
              return (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription className="flex flex-col space-y-2">
                    <span>{error.message || 'Something went wrong'}</span>
                    <Button
                      variant={'destructive'}
                      className="w-fit"
                      onClick={resetErrorBoundary}
                    >
                      <RotateCcw className="h-4 w-4 mr-1" />
                      Try again
                    </Button>
                  </AlertDescription>
                </Alert>
              );
            }}
          >
            {children}
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
}
