import { useContext } from "react";
import { ToastContext } from '../contexts/toast'

export function useToast() {
   const value = useContext(ToastContext);

   return value;
}

