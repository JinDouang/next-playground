import moment, { Moment } from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export const displayPastDate = (pastDate: Moment, longFormat?: boolean) => {
    const now = moment();

    if (!pastDate || !pastDate.isValid()) {
        return 'Date invalide';
    }

    if (longFormat) {
        if (pastDate.isSameOrAfter(now.clone().subtract(2, 'day').startOf('day'))) { // less than 2d
            return pastDate.format('LL - H:mm');
        }
        return pastDate.format('dddd LL');
    }

    if (pastDate.isAfter(now.clone().subtract(1, 'minute'))) { // less than 1min
        return 'Maintenant';
    } else if (pastDate.isSameOrAfter(now.clone().subtract(3, 'hour'))) { // less than 3h
        return pastDate.fromNow();
    } else if (pastDate.isSame(now, 'day')) { // today
        return pastDate.format('HH[:]mm');
    } else if (pastDate.clone().add(1, 'day').isSame(now, 'day')) { // yesterday
        return 'Hier';
    } else if (pastDate.isSameOrAfter(now.clone().subtract(6, 'day').startOf('day'))) { // less than 7d
        return pastDate.format('dddd');
    } else if (pastDate.isSame(now, 'year')) { // this year
        return pastDate.format('D MMM');
    }
    return pastDate.format('D MMM YYYY'); // before this year
};
