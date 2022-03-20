import React, { createContext, useCallback, useState } from 'react'
import ToastContainer from '../components/atoms/ToastContainer'
import nextId from "react-id-generator";

export const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export interface ToastMessage {
   id: string
   type?: 'success' | 'error' | 'info'
   title: string
   description?: string
}

interface ToastContextData {
   addToast(message: Omit<ToastMessage, 'id'>): void
   removeToast(id: string): void
}

export const ToastProvider: React.FC = ({ children }) => {

   const [messages, setMessages] = useState<ToastMessage[]>([])

   const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = nextId()

      const toast = {
         id,
         type,
         title,
         description
      }

      setMessages(state => [...state, toast])
   }, [])

   const removeToast = useCallback((id: string) => {
      setMessages((state) => state.filter((message) => message.id !== id))
   }, [])

   return (
      <ToastContext.Provider value={{ addToast, removeToast }} >
         {children}
         <ToastContainer messages={messages} />
      </ToastContext.Provider>
   )
}