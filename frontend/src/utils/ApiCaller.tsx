import axios from "axios";
import FormUtils from "../form/utils/FormUtils";

// TODO: CLEAN UP THIS FILE WITH BETTER ERROR HANDLING

export namespace APICaller {
  // -- Configuration -- //
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
      if (axios.isAxiosError(e)) {
        const errorMsg = e.response?.data;
        console.log(errorMsg);
        if (errorMsg === "No users found") {
          return [];
        }
      }
      throw e;
    }
  }

  // Create a new user
  export async function setUser(userData: FormUtils.IForm) {
    try {
      const res = await axios.post(`${baseURL}/${route.SET_USER}`, userData);
      return res.data;
    } catch (error) {
      console.error("Error creating user: ", error);
      throw error;
    }
  }

  // Update a user
  export async function updateUser(userData: any) {
    try {
      const res = await axios.put(`${baseURL}/${route.UPDATE_USER}`, userData);
      return res.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  // Delete a user
  export async function deleteUser(userId: number) {
    try {
      const res = await axios.delete(`${baseURL}/${route.DELETE_USER(userId)}`);
      return res.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}

export default APICaller;
