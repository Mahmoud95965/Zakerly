import { createContext, useContext, useEffect, useState } from 'react';
import { Tool } from '../types/tool';
import { initializeDefaultTools } from '../utils/firebaseUtils';

interface ToolsContextType {
  initialized: boolean;
}

const ToolsContext = createContext<ToolsContextType>({ initialized: false });

export const useTools = () => useContext(ToolsContext);

export const ToolsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        await initializeDefaultTools();
        setInitialized(true);
      } catch (error) {
        console.error('Failed to initialize tools:', error);
        // Still set initialized to true so the app can continue
        setInitialized(true);
      }
    };

    init();
  }, []);

  return (
    <ToolsContext.Provider value={{ initialized }}>
      {children}
    </ToolsContext.Provider>
  );
};
