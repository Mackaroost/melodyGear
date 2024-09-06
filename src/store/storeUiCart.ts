import { create } from "zustand";
interface ViewCart{
open: boolean
setOpen:(value:boolean)=> void
openForm: boolean
setOpenForm:(value:boolean)=>void
}


    
const useStoreCartView = create<ViewCart>((set) => ({
    open: false,
    setOpen: (open:boolean) => set({ open }),
    openForm: false,
    setOpenForm: (openForm:boolean) => set({ openForm }),
  }));

export default useStoreCartView