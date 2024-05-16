import { ref, computed } from 'vue'

export default function useFormatDate() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  const formatDate = (date) => {
    const dateObj = new Date(date)
    return `${month[dateObj.getUTCMonth()]} ${dateObj.getUTCDate()}, ${dateObj.getUTCFullYear()}`
  }

  return {
    formatDate
  }
}
