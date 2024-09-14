import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';

import 'dayjs/locale/th';

dayjs.extend(buddhistEra);
dayjs.extend(utc);
dayjs.extend(duration);

dayjs.locale('th');

export default dayjs;
