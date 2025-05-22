import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
  orderBy,
  Timestamp,
  getDoc,
  setDoc,
  writeBatch
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Tool, ContactMessage, FAQ } from '../types/tool';
import { tools as defaultTools } from '../data/toolsData';

// Tool functions
export const submitTool = async (tool: Omit<Tool, 'id' | 'status' | 'submittedAt'>, userEmail: string) => {
  const toolData = {
    ...tool,
    status: 'pending',
    submittedBy: userEmail,
    submittedAt: Timestamp.now(),
    rating: 0,
    reviewCount: 0,
    isNew: true,
    isFeatured: false,
    isPopular: false
  };

  const docRef = await addDoc(collection(db, 'tools'), toolData);
  return docRef.id;
};

export const getPendingTools = async () => {
  const q = query(
    collection(db, 'tools'),
    where('status', '==', 'pending')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Tool));
};

export const updateToolStatus = async (
  toolId: string,
  status: 'approved' | 'rejected',
  rejectionReason?: string
) => {
  const toolRef = doc(db, 'tools', toolId);
  await updateDoc(toolRef, {
    status,
    ...(rejectionReason && { rejectionReason }),
    updatedAt: Timestamp.now()
  });
};

export const getApprovedTools = async () => {
  const q = query(
    collection(db, 'tools'),
    where('status', '==', 'approved'),
    orderBy('submittedAt', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Tool));
};

export const getFeaturedTools = async () => {
  const q = query(
    collection(db, 'tools'),
    where('status', '==', 'approved'),
    where('isFeatured', '==', true)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Tool));
};

export const getNewTools = async () => {
  const q = query(
    collection(db, 'tools'),
    where('status', '==', 'approved'),
    where('isNew', '==', true),
    orderBy('submittedAt', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Tool));
};

export const getPopularTools = async () => {
  const q = query(
    collection(db, 'tools'),
    where('status', '==', 'approved'),
    where('isPopular', '==', true),
    orderBy('rating', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Tool));
};

export const updateToolRating = async (toolId: string, newRating: number) => {
  const toolRef = doc(db, 'tools', toolId);
  const toolDoc = await getDoc(toolRef);
  
  if (toolDoc.exists()) {
    const tool = toolDoc.data();
    const newReviewCount = (tool.reviewCount || 0) + 1;
    const updatedRating = ((tool.rating || 0) * (newReviewCount - 1) + newRating) / newReviewCount;
    
    await updateDoc(toolRef, {
      rating: updatedRating,
      reviewCount: newReviewCount,
      isPopular: newReviewCount >= 10 && updatedRating >= 4.0 // Automatically mark as popular if highly rated
    });
  }
};

export const initializeDefaultTools = async () => {
  const batch = writeBatch(db);
  const toolsRef = collection(db, 'tools');
  
  // Check if tools already exist
  const snapshot = await getDocs(toolsRef);
  if (!snapshot.empty) {
    console.log('Tools already initialized');
    return;
  }
  
  // Initialize default tools
  for (const tool of defaultTools) {
    const newToolRef = doc(toolsRef);
    batch.set(newToolRef, {
      ...tool,
      status: 'approved',
      submittedAt: Timestamp.now(),
      rating: 0,
      reviewCount: 0,
      isNew: true,
      isFeatured: false,
      isPopular: false
    });
  }
  
  await batch.commit();
  console.log('Default tools initialized');
};

// Contact Message functions
export const submitContactMessage = async (message: Omit<ContactMessage, 'id' | 'createdAt'>) => {
  const messageData = {
    ...message,
    createdAt: Timestamp.now()
  };

  const docRef = await addDoc(collection(db, 'messages'), messageData);
  return docRef.id;
};

// FAQ functions
export const getFAQs = async () => {
  const q = query(
    collection(db, 'faqs'),
    orderBy('order', 'asc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as FAQ));
};
