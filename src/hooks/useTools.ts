import { useState, useEffect } from 'react';
import { Tool } from '../types';
import { 
  getFeaturedTools, 
  getNewTools, 
  getPopularTools, 
  getApprovedTools 
} from '../utils/firebaseUtils';

export const useTools = (type: 'featured' | 'new' | 'popular' | 'all') => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        let fetchedTools: Tool[] = [];

        switch (type) {
          case 'featured':
            fetchedTools = await getFeaturedTools();
            break;
          case 'new':
            fetchedTools = await getNewTools();
            break;
          case 'popular':
            fetchedTools = await getPopularTools();
            break;
          case 'all':
            fetchedTools = await getApprovedTools();
            break;
        }

        setTools(fetchedTools);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tools');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, [type]);

  return { tools, loading, error };
};
