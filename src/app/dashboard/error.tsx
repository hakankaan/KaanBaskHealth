'use client';

import { Button } from '@/components/elements';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/elements/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { RotateCcw } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <QueryErrorResetBoundary>
      {({ reset: resetQuery }) => {
        return (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription className="flex flex-col space-y-2">
              <span>{error.message || 'Something went wrong'}</span>
              <Button
                variant={'destructive'}
                className="w-fit"
                onClick={() => {
                  resetQuery();
                  reset();
                }}
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Try again
              </Button>
            </AlertDescription>
          </Alert>
        );
      }}
    </QueryErrorResetBoundary>
  );
}
