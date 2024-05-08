import {
  Table as BaseTable,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/elements/table';
import { Table as TableEntity } from '@/modules/dashboard/domain/table';
import React from 'react';
import { getTitleFromSlug } from './utils';

type Props = {
  table: TableEntity;
};

export function Table({ table }: Props) {
  const columns = Object.keys(table.data[0]);

  const rows = table.data.map((row) => Object.values(row));

  return (
    <BaseTable>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column} className="font-medium">
              {getTitleFromSlug(column)}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {row.map((cell, index) => (
              <TableCell key={index}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </BaseTable>
  );
}
