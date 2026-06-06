import { connectDB } from "@/lib/db";
import Service from "@/models/Service";

export const createService = async (data, isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can create services.");
  }
  try {
    await connectDB();
    const service = await Service.create(data);
    return service;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
};
export const getServiceById = async (id, isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can view service details.");
  }
  try {
    await connectDB();
    const service = await Service.findById(id);
    return service;
  } catch (error) {
    console.error(`Error getting service by ID ${id}:`, error);
    throw error;
  }
};
export const deleteServiceById = async (id, isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can delete services.");
  }
  try {
    await connectDB();
    const result = await Service.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(`Error deleting service by ID ${id}:`, error);
    throw error;
  }
};
export const updateServiceById = async (id, data, isAdmin = false) => {
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can update services.");
  }
  try {
    await connectDB();
    const updatedService = await Service.findByIdAndUpdate(id, data, { new: true });
    return updatedService;
  } catch (error) {
    console.error(`Error updating service by ID ${id}:`, error);
    throw error;
  }
};
export const getAllServices = async () => {
  try {
    await connectDB();
    const services = await Service.find({});
    return services;
  } catch (error) {
    console.error("Error getting all services:", error);
    throw error;
  }
};
