'use client';
import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, Bell, Newspaper, Calendar, Bot, Languages, HelpCircle, MessageSquare, AlertCircle
} from 'lucide-react';

export default function StudentHomePage() {
  const data = {
    student: {
      fullName: "أحمد عماد",
      stageName: "المرحلة الثانية",
      studyModeText: "صباحي",
      sectionName: "A"
    },
    urgentNotice: {
      title: "تنبيه هام حول امتحان التقطير الفراغي",
      content: "يرجى العلم أن امتحان نصف الفصل لمادة تكرير النفط سيعقد في القاعة الكبرى يوم الأحد القادم."
    },
    appIcons: [
      { id: '1', title: 'المواد', iconName: 'BookOpen', route: '/student/subjects' },
      { id: '2', title: 'التبليغات', iconName: 'Bell', route: '/student/notices' },
      { id: '3', title: 'الأخبار', iconName: 'Newspaper', route: '/student/news' },
      { id: '4', title: 'الجدول', iconName: 'Calendar', route: '/student/schedule' },
      { id: '5', title: 'الذكاء الاصطناعي', iconName: 'Bot', route: '/student/ai-quiz' },
      { id: '6', title: 'الترجمة', iconName: 'Languages', route: '/student/translation' },
      { id: '7', title: 'الطلبات', iconName: 'HelpCircle', route: '/student/reports' },
      { id: '8', title: 'النقاش', iconName: 'MessageSquare', route: '/student/discussion' },
    ]
  };

  return (
    <div className="space-y-5 dir-rtl p-4 bg-[#0d0f12] text-white min-h-screen">
      <div className="bg-gradient-to-r from-[#181f29] to-[#12161f] p-5 rounded-2xl border border-[#2a323d] shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">أهلاً بك 👋</h1>
            <p className="text-lg font-semibold text-cyan-400 mt-1">{data.student.fullName}</p>
          </div>
          <div className="text-left bg-[#0f131a] px-3 py-2 rounded-xl border border-[#262e3b]">
            <p className="text-xs text-gray-400">{data.student.stageName}</p>
            <p className="text-xs font-semibold text-gray-200">{data.student.studyModeText} | شعبة {data.student.sectionName}</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl shadow-md">
        <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
          <AlertCircle size={20} />
          <span>تبليغ مهم وعاجل</span>
        </div>
        <h3 className="text-sm font-semibold text-amber-200">{data.urgentNotice.title}</h3>
        <p className="text-xs text-amber-100/80 mt-1 leading-relaxed">{data.urgentNotice.content}</p>
      </div>

      <div>
        <h2 className="text-base font-bold text-gray-200 mb-3 px-1">الوصول السريع</h2>
        <div className="grid grid-cols-4 gap-3">
          {data.appIcons.map((icon) => (
            <Link key={icon.id} href={icon.route} className="bg-[#151a21] border border-[#262e3b] p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-2">
              <div className="p-2 bg-[#0d1117] rounded-xl border border-[#202733]">
                {icon.iconName === 'BookOpen' && <BookOpen className="text-cyan-400" size={24} />}
                {icon.iconName === 'Bell' && <Bell className="text-amber-400" size={24} />}
                {icon.iconName === 'Newspaper' && <Newspaper className="text-emerald-400" size={24} />}
                {icon.iconName === 'Calendar' && <Calendar className="text-purple-400" size={24} />}
                {icon.iconName === 'Bot' && <Bot className="text-blue-400" size={24} />}
                {icon.iconName === 'Languages' && <Languages className="text-teal-400" size={24} />}
                {icon.iconName === 'HelpCircle' && <HelpCircle className="text-rose-400" size={24} />}
                {icon.iconName === 'MessageSquare' && <MessageSquare className="text-indigo-400" size={24} />}
              </div>
              <span className="text-xs font-medium text-gray-300">{icon.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
