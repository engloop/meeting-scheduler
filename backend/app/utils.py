
from datetime import datetime, timedelta, date


def get_dates_in_range(start, end):
    """
    Given start and end timestamp (ISO-8601 format) strings, get all dates in range

        Parameters:
            start (string): start timestamp
            end (string): end timestamp

        Output:
            list of dates
    """
    def daterange(date1, date2):
        print((date2 - date1).days)
        for n in range(int((date2 - date1).days)+1):
            yield date1 + timedelta(n)

    start_dt = datetime.strptime(start, "%Y-%m-%dT%H:%M:%S.%fZ")
    end_dt = datetime.strptime(end, "%Y-%m-%dT%H:%M:%S.%fZ")
    res = []
    for dt in daterange(start_dt, end_dt):
        res.append(dt.strftime("%Y-%m-%d"))

    return res
