
export default async function PUT(api, body, there_is_token, token) {
    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      if (there_is_token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const credentials = {
        method: 'PUT',
        headers: headers,
        body: body,
      }
  
      
  
      const response = await fetch(api,credentials);
  
      if (!response.ok) {
        const responseData = await response.json();
        return {
          data: responseData,
          status: response.status,
        };
      }
  
      const responseData = await response.json();
      return {
        data: responseData,
        status: response.status,
      };
    } catch (error) {
      return {
        data: { msg: "Network error or server down" },
        status: 0, 
      };
    }
  };
  
  