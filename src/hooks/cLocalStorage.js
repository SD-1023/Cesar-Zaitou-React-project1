export const useLocalStorage = () => {
    return {
      setItem: (key, value) => {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error(`Error setting localStorage item: ${error.message}`);
        }
      },
      getItem: (key, defaultValue) => {
        try {
          let value = localStorage.getItem(key);
          return (value !== null) ? JSON.parse(value) : defaultValue;
          
        } catch (error) {
          console.error(`Error getting localStorage item: ${error.message}`);
       
        }
      },
    };
  };
  