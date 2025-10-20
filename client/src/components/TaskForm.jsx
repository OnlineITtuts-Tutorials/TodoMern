import { Plus, X } from "lucide-react";
import React from "react";

function TaskForm({ onCancel, newTasks, setNewTask, onAdd }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8">
      {/* Header with Close */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Add New Task</h2>

        {/* Conditional Rendering */}
        {onCancel && (
          <button
            className="text-gray-400 hover:text-red-500 transition"
            onClick={onCancel}
          >
            <X size={26} />
          </button>
        )}
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="text"
          value={newTasks.title}
          onChange={(e) => setNewTask({ ...newTasks, title: e.target.value })}
          placeholder="Task title.........."
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <textarea
          value={newTasks.description}
          onChange={(e) =>
            setNewTask({ ...newTasks, description: e.target.value })
          }
          placeholder="Task description (optional)"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rouned-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
          rows="4"
        />

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-green-500 hover:to-emerald-500 transition"
            onClick={onAdd}
          >
            <Plus size={20} /> Add Task
          </button>

          {/* Conditional Rendering */}
          <button className="flex-1 bg-gray-700 text-gray-300 py-3 rounded-lg hover:bg-gray-600 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
