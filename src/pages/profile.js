// src/components/Profile.js
import React from 'react';

const ProfilePage = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-6">
      <div className="px-4 py-4 sm:px-6">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">{user.firstName} {user.lastName}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{user.email}</p>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src={user.avatar} alt="User Avatar" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user.firstName}</p>
            <p className="text-xs text-gray-500">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
