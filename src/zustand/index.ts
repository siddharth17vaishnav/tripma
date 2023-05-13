import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createUserSlice from "./user/user.slice";
import { UserSliceProps } from "./types";

export type StoreType = UserSliceProps

const useStore = create<StoreType>()(
    devtools((...args) => ({
        ...createUserSlice(...args),
    }))
);

export default useStore;