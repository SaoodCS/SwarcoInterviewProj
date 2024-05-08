import { ReactNode, useEffect, useState } from "react";
import FormUtils from "../../form/utils/FormUtils";
import APICaller from "../../utils/ApiCaller";
import { DataContext } from "./DataContext";

interface IDataContextProvider {
  children: ReactNode;
}

export default function DataContextProvider(props: IDataContextProvider) {
  const { children } = props;
  const [users, setUsers] = useState<FormUtils.IForm[]>([]);
  const [itemToEdit, setItemToEdit] = useState<FormUtils.IForm | undefined>(
    undefined
  );

  useEffect(() => {
    fetchAndSetUsers();
  }, []);

  async function fetchAndSetUsers(): Promise<void> {
    const res = await APICaller.getAllUsers();
    setUsers(res);
  }

  return (
    <DataContext.Provider
      value={{ users, itemToEdit, setItemToEdit, fetchAndSetUsers }}
    >
      {children}
    </DataContext.Provider>
  );
}
