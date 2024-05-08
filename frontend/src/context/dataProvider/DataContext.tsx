import { createContext } from "react";
import FormUtils from "../../form/utils/FormUtils";

export interface IDataContext {
  users: FormUtils.IForm[];
  itemToEdit: FormUtils.IForm | undefined;
  setItemToEdit: React.Dispatch<
    React.SetStateAction<FormUtils.IForm | undefined>
  >;
  fetchAndSetUsers: () => Promise<void>;
}

export const DataContext = createContext<IDataContext>({
  users: [],
  itemToEdit: undefined,
  setItemToEdit: () => {},
  fetchAndSetUsers: async () => {},
});
