import React from 'react';

const Profile = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#cce7ff', 
      backgroundSize: 'cover', 
      padding: '2rem' 
    }}>
      <div style={{ 
        maxWidth: '1120px', 
        margin: '0 auto', 
        backgroundColor: '#fff',  
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        borderRadius: '0.5rem',
        padding: '2rem' 
      }}>
        <div style={{ display: 'flex' }}>
          <aside style={{ width: '25%', backgroundColor: '#f3f4f6', padding: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Emotion Detector AI</h2>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={{ display: 'block', padding: '0.5rem', color: '#4b5563', borderRadius: '0.375rem', textDecoration: 'none' }}>Dashboard</a>
              <a href="#" style={{ display: 'block', padding: '0.5rem', color: '#4b5563', borderRadius: '0.375rem', textDecoration: 'none' }}>Emotion Detector</a>
              <a href="#" style={{ display: 'block', padding: '0.5rem', color: '#4b5563', borderRadius: '0.375rem', textDecoration: 'none' }}>File</a>

               
            </nav>
          </aside>
          <main style={{ width: '75%', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '6rem', height: '6rem', borderRadius: '9999px', overflow: 'hidden', marginRight: '1rem' }}>
                <img src="https://via.placeholder.com/96" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Azad</h2>
                <p style={{ color: '#6b7280' }}>  Pune</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#fbbf24', fontSize: '1.125rem' }}>★</span>
                  <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>5.0 (1)</span>
                  <span style={{ color: '#9ca3af', fontSize: '0.875rem', marginLeft: '0.5rem' }}>(Sponsored)</span>
                </div>
                <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', borderRadius: '0.375rem' }}>Close Account</button>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>Profile</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} value="Azad" />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} value="azad@gmail.com" />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }}>Phone</label>
                <input type="tel" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} value="+1233456" />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }}>Current Password</label>
                <input type="password" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }}>New Password</label>
                <input type="password" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }}>Confirm New Password</label>
                <input type="password" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} />
              </div>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '0.375rem' }}>Save Now</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
