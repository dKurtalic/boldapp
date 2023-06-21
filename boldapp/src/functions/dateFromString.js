export default function createDateFromString(dateString) {
    console.log("Uslo " + dateString)
    dateString = JSON.stringify(dateString)
    console.log("Sad je " + dateString)
    const year = parseInt(dateString.substring(14, 18));
    const month = parseInt(dateString.substring(19, 21));
    const day = parseInt(dateString.substring(22, 24));

    console.log("year " + year + ", month " + month + " day " + day)

    const newDate = new Date(year, month - 1, day);

    return newDate;
}