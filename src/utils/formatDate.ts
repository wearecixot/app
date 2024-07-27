export const formatDate = (date: number) => {
    const options: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    };
    const dateString = new Date(date).toLocaleDateString('en-US', options);
    const timeString = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    return `${dateString} — ${timeString}`;
}