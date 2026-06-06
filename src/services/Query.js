import { connectDB } from "@/lib/db";
import Query from "@/models/Query";

// Create a new contact query (Public access)
export const createQuery = async (data) => {
  try {
    await connectDB();
    const query = new Query(data);
    await query.save();
    return query;
  } catch (error) {
    console.error("Error creating query:", error);
    throw error;
  }
};

// Get a single query by ID (Admin only)
export const getQueryById = async (id, isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can access queries.");
  }
  try {
    await connectDB();
    const query = await Query.findById(id);
    return query;
  } catch (error) {
    console.error(`Error getting query by ID ${id}:`, error);
    throw error;
  }
};

// Delete a query by ID (Admin only)
export const deleteQueryById = async (id, isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can delete queries.");
  }
  try {
    await connectDB();
    const result = await Query.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(`Error deleting query by ID ${id}:`, error);
    throw error;
  }
};

// Get all queries (Admin only)
export const getAllQueries = async (isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can view all queries.");
  }
  try {
    await connectDB();
    const queries = await Query.find({});
    return queries;
  } catch (error) {
    console.error("Error getting all queries:", error);
    throw error;
  }
};

