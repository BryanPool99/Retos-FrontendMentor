const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

export interface ApiResponse {
  ip: string;
  location: {
    city: string;
    country: string;
    timezone:string;
    lat:number;
    lng:number;
    postalCode:string;
  };
  isp:string;
}

// Función para realizar la solicitud a la API
export const fetchData = async (apiKey: string, ipAddress: string): Promise<ApiResponse | null> => {
    try {
      const response = await fetch(`${BASE_URL}?apiKey=${apiKey}&ipAddress=${ipAddress}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parsea la respuesta JSON utilizando la interfaz definida
      const data: ApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };