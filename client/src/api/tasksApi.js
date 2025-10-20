const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTaskApi = async () => {
  const results = await fetch(`${API_BASE_URL}/api/v2/todos`);
  if (!results.ok) throw new Error("Failed to fetch task");
  return results.json();
};

export const createTaskApi = async (task) => {
  const results = await fetch(`${API_BASE_URL}/api/v2/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!results.ok) throw new Error("Failed to create task");
  return results.json();
};

export const updateTasksApi = async (id, updates) => {
  const res = await fetch(`${API_BASE_URL}/api/v2/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error("Failed to update task");
  return res.json();
};

export const deleteTaskApi = async (id) => {
  const results = await fetch(`${API_BASE_URL}/api/v2/todos/${id}`, {
    method: "DELETE",
  });
  if (!results.ok) throw new Error("Failed to create task");
  return true;
};

export const toggleTaskAPi = async (id) => {
  const results = await fetch(`${API_BASE_URL}/api/v2/todos/${id}/toggle`, {
    method: "PATCH",
  });
  if (!results.ok) throw new Error("Failed to create task");
  return results.json();
};
