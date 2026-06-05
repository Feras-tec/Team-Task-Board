export default function FilterBar({ currentFilter, onFilterChange }) {
  const filters = [
    { value: "all", label: "Alle" },
    { value: "open", label: "Offen" },
    { value: "in-progress", label: "In Bearbeitung" },
    { value: "done", label: "Erledigt" },
  ];

  return (
    <div className="flex justify-center my-6">
      <div className="join">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`join-item btn ${currentFilter === f.value ? "btn-primary" : "btn-outline"}`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
