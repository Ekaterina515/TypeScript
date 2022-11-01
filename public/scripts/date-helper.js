export class DateHelper {
    static cloneDate(date) {
        return new Date(date.getTime());
    }
    static addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }
}
