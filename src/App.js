import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');
  const [name, setName] = useState('');

  const greetings = {
    en: { greeting: 'Hello', label: 'English' },
    es: { greeting: 'Hola', label: 'Español' },
    fr: { greeting: 'Bonjour', label: 'Français' },
    de: { greeting: 'Guten Tag', label: 'Deutsch' },
    it: { greeting: 'Ciao', label: 'Italiano' },
    ja: { greeting: 'こんにちは', label: '日本語' },
    zh: { greeting: '你好', label: '中文' }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      padding: '20px'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: '#333',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '100%'
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '30px',
      color: '#667eea'
    },
    greeting: {
      fontSize: '2rem',
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      minHeight: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      textAlign: 'left'
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      border: '2px solid #ddd',
      borderRadius: '8px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s'
    },
    buttonGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '10px',
      marginTop: '20px'
    },
    button: {
      padding: '12px 20px',
      fontSize: '0.95rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontWeight: '600'
    },
    buttonActive: {
      backgroundColor: '#667eea',
      color: '#fff'
    },
    buttonInactive: {
      backgroundColor: '#e0e0e0',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Multilingual Greeter</h1>
        
        <div style={styles.greeting}>
          {name 
            ? `${greetings[language].greeting}, ${name}!`
            : `${greetings[language].greeting}!`
          }
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="name-input">
            Enter your name:
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Select a language:</label>
          <div style={styles.buttonGroup}>
            {Object.entries(greetings).map(([code, { label }]) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                style={{
                  ...styles.button,
                  ...(language === code ? styles.buttonActive : styles.buttonInactive)
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
