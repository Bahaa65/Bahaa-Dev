export function Pagination({ page = 1, total = 1 }: { page?: number; total?: number }) {
  return (
    <div className="flex items-center gap-2 text-sm opacity-80">
      <span>Page {page} of {total}</span>
    </div>
  );
}


