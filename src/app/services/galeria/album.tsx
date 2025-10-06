import axios from 'axios';

// URL de API
const API_URL = import.meta.env.VITE_APP_API_URL;
const TOKEN_KEY = 'token';
const token = localStorage.getItem(TOKEN_KEY);

// Exporta cada función de forma individual.
export const getAlbum = async () => {
  try {
    const response = await axios.get(API_URL+'/recuerdos/galerias/album/listar',
      { 
        headers: {
          Authorization: `Bearer ${token}` // Send the token in the Authorization header
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};