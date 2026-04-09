import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Search, Download, Send } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [receiptData, setReceiptData] = useState({
    studentName: '',
    parentName: '',
    fees: '',
    subjects: '',
    timing: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiptData({ ...receiptData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(30, 58, 138); // primary-blue
    doc.text("ISHANT'S STUDY POINT", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Official Fee Acknowledgement Receipt", 105, 28, { align: "center" });
    
    doc.setDrawColor(30, 58, 138);
    doc.setLineWidth(0.5);
    doc.line(20, 32, 190, 32);

    // Details Table
    const bodyData = [
      ["Receipt Date:", receiptData.date],
      ["Student Name:", receiptData.studentName],
      ["Parent Name:", receiptData.parentName],
      ["Subjects Enrolled:", receiptData.subjects],
      ["Class Timing:", receiptData.timing],
      ["Amount Received:", `INR ${receiptData.fees}/-`]
    ];

    autoTable(doc, {
      startY: 40,
      head: [],
      body: bodyData,
      theme: 'plain',
      styles: { fontSize: 12, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', minCellWidth: 60 } },
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("This is a system generated acknowledgement receipt.", 105, 280, { align: "center" });
    
    doc.save(`Receipt_${receiptData.studentName.replace(' ', '_')}.pdf`);
  };

  const generatePaymentRequest = () => {
    const msg = `Dear ${receiptData.parentName},\n\nThis is a gentle reminder regarding the tuition fees for ${receiptData.studentName} for the subjects: ${receiptData.subjects}.\nAmount: INR ${receiptData.fees}\n\nPlease let me know if you need any clarification.\n\nRegards,\nIshant's Study Point`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendReceiptToWhatsApp = () => {
    const msg = `Dear ${receiptData.parentName},\n\nWe have successfully received the payment of INR ${receiptData.fees} for ${receiptData.studentName}'s classes.\n\nThe PDF receipt is available here (Note: PDF cannot be sent natively without Twilio; please attach the downloaded PDF to this chat manually).\n\nRegards,\nIshant's Study Point`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    generatePDF();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Receipt & Communication Generator */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-primary-blue mb-6">Receipt / Payment Generator</h2>
            <div className="space-y-4">
              <Input label="Student Name" name="studentName" value={receiptData.studentName} onChange={handleChange} />
              <Input label="Parent Name" name="parentName" value={receiptData.parentName} onChange={handleChange} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Fees Amount (INR)" type="number" name="fees" value={receiptData.fees} onChange={handleChange} />
                <Input label="Date" type="date" name="date" value={receiptData.date} onChange={handleChange} />
              </div>
              <Input label="Subjects" name="subjects" placeholder="e.g. Science, Maths" value={receiptData.subjects} onChange={handleChange} />
              <Input label="Timings" name="timing" placeholder="e.g. M-W-F 4 PM" value={receiptData.timing} onChange={handleChange} />
              
              <div className="flex flex-col gap-3 mt-8 pt-4 border-t">
                <Button onClick={generatePDF} className="flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Download PDF Receipt
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="secondary" onClick={sendReceiptToWhatsApp} className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white">
                    <Send size={18} className="mr-2" />
                    Send Confirmation
                  </Button>
                  <Button variant="outline" onClick={generatePaymentRequest} className="flex items-center justify-center border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                    <Send size={18} className="mr-2" />
                    Payment Reminder
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Leads Preview (Dummy data for now) */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Leads</h2>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-full outline-none focus:border-primary-blue" />
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((lead) => (
                <div key={lead} className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex justify-between items-center">
                  <div>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">Student Enquiry</span>
                    <h4 className="font-bold text-gray-900">Aarav Patel (Class 9)</h4>
                    <p className="text-sm text-gray-500">Parent: Ramesh Patel | 9876543210</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              ))}
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex justify-between items-center">
                <div>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-2">Teacher App</span>
                  <h4 className="font-bold text-gray-900">Riya Sharma (M.Sc)</h4>
                  <p className="text-sm text-gray-500">Exp: 4 Years | Biology</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
