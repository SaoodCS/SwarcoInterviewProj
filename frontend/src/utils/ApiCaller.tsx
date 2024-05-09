import axios from "axios";
import FormUtils from "../form/utils/FormUtils";

export namespace APICaller {
  // -- Configuration -- //
  // TODO: at Swarco - run the server -> if the baseURL is different, change it below
  const baseURL = "http://127.0.0.1:5000";
  const route = {
    GET_USER: (userId: number) => `getUser?id=${userId}`,
    GET_ALL_USERS: "getAllUsers",
    SET_USER: "setUser",
    UPDATE_USER: "updateUser",
    DELETE_USER: (userId: number) => `deleteUser?id=${userId}`,
  };

  // -- API Caller Functions -- //

  // Get all users from database
  export async function getAllUsers(): Promise<FormUtils.IForm[]> {
    try {
      const res = await axios.get(`${baseURL}/${route.GET_ALL_USERS}`);
      return res.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  // Create a new user
  export async function setUser(userData: FormUtils.IForm): Promise<void> {
    try {
      const res = await axios.post(`${baseURL}/${route.SET_USER}`, userData);
      return res.data;
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  }

  // Update a user
  export async function updateUser(userData: FormUtils.IForm): Promise<void> {
    try {
      const res = await axios.put(`${baseURL}/${route.UPDATE_USER}`, userData);
      return res.data;
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  // Delete a user
  export async function deleteUser(userId: number): Promise<void> {
    try {
      const res = await axios.delete(`${baseURL}/${route.DELETE_USER(userId)}`);
      return res.data;
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
}

export default APICaller;
