function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str.slice(0, maxlength - 2) + "…";
    } else {
        return str;
    }
}