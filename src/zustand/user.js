import create from "zustand";
import { devtools } from "zustand/middleware";

let useStore = (set) => ({
  usuarioActivo: false,
  changeUsuarioActivo: (estado) => set((state) => ({ usuarioActivo: estado })),
});

useStore = devtools(useStore, { name: "AUTH" });

export default create(useStore);
