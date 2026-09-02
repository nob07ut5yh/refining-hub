import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Refining Hub — قسم تكرير النفط والغاز',
  description: 'المنصة التعليمية لقسم تكرير النفط والغاز - كلية البوليتكنك السماوة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0d0f12] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
