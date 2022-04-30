function checkSpam(str) {
    if (str.toLoverCase().includes("viagra") || str.toLoverCase().includes("xxx")) {
        return true;
    } else {
        return false;
    }
}