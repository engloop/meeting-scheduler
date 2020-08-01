import pytest


@pytest.fixture
def func_get_dates_in_range():
    from app.utils import get_dates_in_range
    return get_dates_in_range


# def test_get_dates_in_range(func_get_dates_in_range):
#     start = "2020-07-03T04:00:00.000Z"
#     end = "2020-07-06T03:59:59.999Z"
#     print(func_get_dates_in_range(start, end))
#     assert(func_get_dates_in_range(start, end) == True)
