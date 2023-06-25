export default function createDateFromString(dateString) {
    console.log("Uslo " + dateString)
    dateString = JSON.stringify(dateString)
    console.log("Sad je " + dateString)
    const year = parseInt(dateString.substring(1, 5));
    const month = parseInt(dateString.substring(6, 8));
    const day = parseInt(dateString.substring(9, 11));

    console.log("year " + year + ", month " + month + " day " + day)

    const newDate = day + "/" + month + "/" + year
    return newDate;
}