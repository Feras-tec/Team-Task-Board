import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("open");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: crypto.randomUUID(),
      title,
      description,
      assignee,
      status,
    });

    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("open");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-200 p-6 rounded-xl max-w-xl mx-auto my-6 shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Neue Aufgabe hinzufügen</h2>

      <div className="form-control">
        <label className="label font-semibold">Titel</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Aufgaben-Titel..."
        />
      </div>

      <div className="form-control">
        <label className="label font-semibold">Beschreibung</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full"
          placeholder="Beschreibung..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label font-semibold">Verantwortlich</label>
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Name..."
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="open">Offen</option>
            <option value="in-progress">In Bearbeitung</option>
            <option value="done">Erledigt</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full mt-4">
        Aufgabe erstellen
      </button>
    </form>
  );
}
