import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  deleteUser,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  updateUserProfile: (data: { displayName?: string; photoURL?: string }) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  verifyEmail: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      toast.success('تم إنشاء حسابك بنجاح!');
      navigate('/');
      return userCredential;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          toast.error('البريد الإلكتروني مستخدم بالفعل');
          break;
        case 'auth/weak-password':
          toast.error('كلمة المرور ضعيفة جداً');
          break;
        default:
          toast.error('حدث خطأ في إنشاء الحساب');
      }
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success(`مرحباً بعودتك${result.user.displayName ? '، ' + result.user.displayName : ''}!`);
      navigate('/');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          toast.error('البريد الإلكتروني غير مسجل');
          break;
        case 'auth/wrong-password':
          toast.error('كلمة المرور غير صحيحة');
          break;
        default:
          toast.error('حدث خطأ في تسجيل الدخول');
      }
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`مرحباً بك${result.user.displayName ? '، ' + result.user.displayName : ''}!`);
      navigate('/');
    } catch (error) {
      toast.error('حدث خطأ في تسجيل الدخول بواسطة Google');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success('تم تسجيل الخروج بنجاح');
      navigate('/login');
    } catch (error) {
      toast.error('حدث خطأ في تسجيل الخروج');
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      if (currentUser) {
        await deleteUser(currentUser);
        toast.success('تم حذف حسابك بنجاح');
        navigate('/');
      }
    } catch (error) {
      toast.error('حدث خطأ في حذف الحساب');
      throw error;
    }
  };
  const updateUserProfile = async (data: { displayName?: string; photoURL?: string }) => {
    try {
      if (!currentUser) throw new Error('No user signed in');
      await updateProfile(currentUser, data);
      toast.success('تم تحديث الملف الشخصي بنجاح');
    } catch (error) {
      toast.error('حدث خطأ في تحديث الملف الشخصي');
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني');
    } catch (error) {
      toast.error('حدث خطأ في إرسال رابط إعادة تعيين كلمة المرور');
      throw error;
    }
  };

  const verifyEmail = async () => {
    try {
      if (!currentUser) throw new Error('No user signed in');
      await sendEmailVerification(currentUser);
      toast.success('تم إرسال رسالة التحقق إلى بريدك الإلكتروني');
    } catch (error) {
      toast.error('حدث خطأ في إرسال رسالة التحقق');
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
    deleteAccount,
    updateUserProfile,
    resetPassword,
    verifyEmail
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
