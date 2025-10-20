const API_BASE_URL = "https://todoback-kappa.vercel.app";

// Add this to debug
console.log("API_BASE_URL:", API_BASE_URL);

export const fetchTaskApi = async () => {
  console.log("Fetching from:", `${API_BASE_URL}/api/v2/todos`);

  try {
    const results = await fetch(`${API_BASE_URL}/api/v2/todos`);
    if (!results.ok) {
      throw new Error(
        `Failed to fetch task: ${results.status} ${results.statusText}`
      );
    }
    return results.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const createTaskApi = async (task) => {
  try {
    const results = await fetch(`${API_BASE_URL}/api/v2/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!results.ok) {
      throw new Error(`Failed to create task: ${results.status}`);
    }
    return results.json();
  } catch (error) {
    console.error("Create error:", error);
    throw error;
  }
};

export const updateTasksApi = async (id, updates) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v2/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!res.ok) {
      throw new Error(`Failed to update task: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Update error:", error);
    throw error;
  }
};

export const deleteTaskApi = async (id) => {
  try {
    const results = await fetch(`${API_BASE_URL}/api/v2/todos/${id}`, {
      method: "DELETE",
    });
    if (!results.ok) {
      throw new Error(`Failed to delete task: ${results.status}`);
    }
    return true;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};

export const toggleTaskAPi = async (id) => {
  try {
    const results = await fetch(`${API_BASE_URL}/api/v2/todos/${id}/toggle`, {
      method: "PATCH",
    });
    if (!results.ok) {
      throw new Error(`Failed to toggle task: ${results.status}`);
    }
    return results.json();
  } catch (error) {
    console.error("Toggle error:", error);
    throw error;
  }
};
