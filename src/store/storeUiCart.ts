
import { create } from "zustand";


interface ViewCart{
open: boolean
setOpen:(value:boolean)=> void
}

const useStoreCartView = create<ViewCart>((set)=>({
    open: false,
    setOpen:(value)=> set({open:value})
}))

export default useStoreCartView