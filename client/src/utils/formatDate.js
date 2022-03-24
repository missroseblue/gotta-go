import { format, parse } from "fecha";

const formatDate = (string) => {
    let parsedDate = parse(string, 'isoDateTime');
    let formattedDate = format(parsedDate, 'mediumDate');
    return formattedDate;
}

export {formatDate};