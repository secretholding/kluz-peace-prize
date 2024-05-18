// Function that receives a date like this 2021-01-30 and formats it like this January 30, 2021
export default function useFormatDate() {
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
  const formatDate = (date) => {
    const dateObj = new Date(date)
    return `${month[dateObj.getUTCMonth()]} ${dateObj.getUTCDate()}, ${dateObj.getUTCFullYear()}`
  }

  return {
    formatDate
  }
}
