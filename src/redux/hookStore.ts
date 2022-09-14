import { Idispatch, IrootState } from "./store"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"


export const useHookDispatch = ()=> useDispatch<Idispatch>();
export const useHookSelector: TypedUseSelectorHook<IrootState> = useSelector