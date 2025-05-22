import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Tool } from '../types/tool';
import { getPendingTools, updateToolStatus } from '../utils/firebaseUtils';
import PageLayout from '../components/layout/PageLayout';
import { toast } from 'react-toastify';
import { Transition } from '@headlessui/react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const AdminToolsReviewPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pendingTools, setPendingTools] = useState<Tool[]>([]);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user is admin (you should implement proper admin check)
    if (!user || user.email !== 'admin@zakerly.com') {
      navigate('/');
      return;
    }

    loadPendingTools();
  }, [user, navigate]);

  const loadPendingTools = async () => {
    try {
      const tools = await getPendingTools();
      setPendingTools(tools);
    } catch (error) {
      console.error('Error loading pending tools:', error);
      toast.error('حدث خطأ أثناء تحميل الأدوات المعلّقة');
    }
  };

  const handleApprove = async (toolId: string) => {
    try {
      await updateToolStatus(toolId, 'approved');
      toast.success('تم قبول الأداة بنجاح');
      loadPendingTools();
    } catch (error) {
      console.error('Error approving tool:', error);
      toast.error('حدث خطأ أثناء قبول الأداة');
    }
  };

  const openRejectModal = (toolId: string) => {
    setSelectedTool(toolId);
    setIsModalOpen(true);
  };

  const handleReject = async () => {
    if (!selectedTool || !rejectionReason.trim()) {
      toast.error('يرجى كتابة سبب الرفض');
      return;
    }

    try {
      await updateToolStatus(selectedTool, 'rejected', rejectionReason);
      toast.success('تم رفض الأداة بنجاح');
      setIsModalOpen(false);
      setRejectionReason('');
      setSelectedTool(null);
      loadPendingTools();
    } catch (error) {
      console.error('Error rejecting tool:', error);
      toast.error('حدث خطأ أثناء رفض الأداة');
    }
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">مراجعة الأدوات المعلّقة</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            راجع وأدر الأدوات المقدمة من المستخدمين
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pendingTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  معلّقة
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400" dir="rtl">
                  {new Date(tool.submittedAt.seconds * 1000).toLocaleDateString('ar-SA')}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-right">
                {tool.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-right">{tool.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 justify-end">
                <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                  {tool.category}
                </span>
                {tool.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-right" dir="rtl">
                  مقدم من: {tool.submittedBy}
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => openRejectModal(tool.id)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <XCircle className="w-5 h-5 ml-1.5" />
                    رفض
                  </button>
                  <button
                    onClick={() => handleApprove(tool.id)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <CheckCircle className="w-5 h-5 ml-1.5" />
                    قبول
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {pendingTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">لا توجد أدوات معلّقة للمراجعة</p>
          </div>
        )}

        {/* Rejection Modal */}
        <Transition show={isModalOpen} as={React.Fragment}>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
              </Transition.Child>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                        سبب رفض الأداة
                      </h3>
                      <div className="mt-2">
                        <textarea
                          rows={4}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                          value={rejectionReason}
                          onChange={(e) => setRejectionReason(e.target.value)}
                          placeholder="اكتب سبب الرفض هنا..."
                          dir="rtl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                      onClick={() => setIsModalOpen(false)}
                    >
                      إلغاء
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                      onClick={handleReject}
                    >
                      تأكيد الرفض
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Transition>
      </div>
    </PageLayout>
  );
};

export default AdminToolsReviewPage;