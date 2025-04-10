export const getNotes = async (scenarioId, userIdentityId) => {
  try {
    const response = await fetch(`https://localhost:5001/story-engine/scenarios/${scenarioId}/notes?userId=${userIdentityId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const markNotesAsRead = async (scenarioId, noteId, userIdentityId) => {
  try {
    const response = await fetch(`https://localhost:5001/story-engine/scenarios/${scenarioId}/notes/${noteId}/mark-read?userIdentityId=${userIdentityId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error marking notes as read:', error);
    throw error;
  }
}; 