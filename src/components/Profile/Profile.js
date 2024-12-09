import React, { useState } from 'react';
import { Layout, Eye, Hexagon, FileText, Search } from 'lucide-react';

// Layout Component
const SideNavigation = ({ activePage, onPageChange }) => {
  const navigationItems = ['Profile', 'Overview', 'Marketplace', 'Upload'];
  
  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed">
      <div className="p-4">
        <div className="w-8 h-8 mb-8">
          <svg viewBox="0 0 24 24" className="text-yellow-500">
            <rect width="24" height="2" fill="currentColor" />
            <rect y="6" width="24" height="2" fill="currentColor" />
            <rect y="12" width="24" height="2" fill="currentColor" />
          </svg>
        </div>
        {navigationItems.map((item) => (
          <div
            key={item}
            className={`p-2 mb-2 rounded cursor-pointer ${
              activePage === item.toLowerCase() 
                ? 'bg-yellow-50 text-yellow-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => onPageChange(item.toLowerCase())}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// Profile Page Component
const ProfilePage = () => {
  const stats = [
    { icon: <Layout size={24} color="white" />, count: 100, label: 'Notes Posted' },
    { icon: <Eye size={24} color="white" />, count: 971, label: 'Total notes views' },
    { icon: <Hexagon size={24} color="white" />, count: 100, label: 'Nectars owned' }
  ];

  return (
    <div className="p-8">
      {/* Profile Section */}
      <div className="mb-12 flex items-center">
        <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mr-6">
          <img src="/api/placeholder/96/96" alt="Profile" className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Jane Doe</h1>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-yellow-500 rounded-lg p-4 flex items-center space-x-4">
            <div>{stat.icon}</div>
            <div className="text-white">
              <div className="text-2xl font-bold">{stat.count}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Badges owned:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className={`aspect-square rounded-lg ${index < 3 ? 'bg-pink-50' : 'bg-gray-100'}`}>
              {index < 3 && <img src="/api/placeholder/64/64" alt={`Badge ${index + 1}`} className="w-full h-full p-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Overview Page Component
const OverviewPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Recent Activity {index + 1}</h3>
            <p className="text-gray-600">Recent activity details go here...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Marketplace Page Component
const MarketplacePage = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search items..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="bg-gray-100 aspect-square rounded-lg mb-4" />
            <h3 className="font-semibold">Item {index + 1}</h3>
            <p className="text-gray-600 text-sm mt-1">Description goes here...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Upload Page Component
const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const uploadedFiles = [...e.dataTransfer.files];
    handleFiles(uploadedFiles);
  };

  const handleFileInput = (e) => {
    const uploadedFiles = [...e.target.files];
    handleFiles(uploadedFiles);
  };

  const handleFiles = (uploadedFiles) => {
    const validFiles = uploadedFiles.filter(file => 
      file.type.startsWith('image/') || file.type === 'application/pdf'
    );
    setFiles(prev => [...prev, ...validFiles]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Files</h1>
      
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center ${
          dragActive ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <FileText className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="mb-2 text-gray-600">
          Drag and drop files here, or click to select files
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Supported formats: PDF, JPG, PNG
        </p>
        <input
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg cursor-pointer hover:bg-yellow-600"
        >
          Select Files
        </label>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <FileText className="text-gray-400 mr-3" size={24} />
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('profile');

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <ProfilePage />;
      case 'overview':
        return <OverviewPage />;
      case 'marketplace':
        return <MarketplacePage />;
      case 'upload':
        return <UploadPage />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavigation activePage={activePage} onPageChange={setActivePage} />
      <div className="ml-64 flex-1">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;