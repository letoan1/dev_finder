import React, { createContext } from "react";
import { IInfoUserResponse } from "../utils/types";

interface IUserContext {
  dataUser: IInfoUserResponse;
  setDataUser: React.Dispatch<React.SetStateAction<IInfoUserResponse>>;
}

export const UserContext = createContext<IUserContext>({
  dataUser: {} as IInfoUserResponse,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDataUser: () => {},
});
