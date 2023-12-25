import { columns } from './columns';
import data from './../../../test-data/starred';
import { DataTable } from './DataTable';

export default async function DataTablePage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data as any} />
    </div>
  );
}
