/**
 * Ejemplo: Cómo cargar bootstrap.json en React Native
 * 
 * Opción 1: Desde URL raw (GitHub, CDN, etc.)
 * Ejemplo URL: https://raw.githubusercontent.com/tu-usuario/configurl/main/bootstrap.json
 */

const BOOTSTRAP_URL = 'https://tu-dominio.com/bootstrap.json'; // o URL raw de GitHub

export async function loadBootstrapConfig() {
  try {
    const response = await fetch(BOOTSTRAP_URL);
    const config = await response.json();
    return config;
  } catch (error) {
    console.error('Error cargando bootstrap:', error);
    // Fallback local
    return {
      apiBaseUrl: 'https://api.miapp.com',
      env: 'prod',
      updatedAt: new Date().toISOString().split('T')[0]
    };
  }
}

// Uso en tu app:
// const config = await loadBootstrapConfig();
// const apiUrl = config.apiBaseUrl;
