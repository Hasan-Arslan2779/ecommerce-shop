import React, { useState, createContext } from "react";
// create context
export const SideBarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isOpen, setİsOpen] = useState(false);
  const handleClose = () => {
    setİsOpen(false);
  };
  return (
    <SideBarContext.Provider value={{ isOpen, setİsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SidebarProvider;
