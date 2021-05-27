const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateSuffixes = ['st', 'nd', 'rd', 'th'];

const formatDate = (dateAsString) => {
    const fullDate = new Date(dateAsString);
    const [, , , thSuffix] = dateSuffixes;

    const month = fullDate.getMonth();
    const monthName = monthNames[month];
    
    const date = fullDate.getDate();
    const dateHasSpecialSuffix = (date >= 1 && date <= 3) || (date >= 21 && date <= 23)

    const dateSuffix = dateHasSpecialSuffix
        ? dateSuffixes[date % 10 - 1]
        : thSuffix;

    const dateFormatted = `${monthName} ${date}${dateSuffix}`;

    return dateFormatted;
}

export {
    formatDate,
}