function formatDate(date) {
    let now = new Date();
    let difference = Math.round( (new Date() - date ) / 1000);

    let formatedDate = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    let formatedMonth = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let formatedYear = String( date.getFullYear() ).slice(2);
    let formatedHours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    let formatedMinutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();


    if (difference < 1) {
        return "прямо сейчас";
    } else if (difference < 60) {
        return `${difference} сек. назад`;
    } else if (difference < 3600) {
        return `${Math.round(difference / 60)} мин. назад`;
    } else {
        return `${formatedDate}.${formatedMonth}.${formatedYear} ${formatedHours}:${formatedMinutes}`;
    }
}