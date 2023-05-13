import { AppStateCreator, UserSliceProps } from "@src/zustand/types";



const createUserSlice: AppStateCreator<UserSliceProps> = (set) => ({
    user: null
});

export default createUserSlice;