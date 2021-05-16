function fun_add_date_time(date, interval, units) {
    if(!(date instanceof Date))
      return undefined;
    var ret = new Date(date); //don't change original date
    var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
    switch(String(interval).toLowerCase()) {
      case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
      case 'quarter':  ret.setMonth(ret.getMonth() + units * 3); checkRollover();  break;
      case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
      case 'week'   :  ret.setDate(ret.getDate() + units * 7);  break;
      case 'day'    :  ret.setDate(ret.getDate() + units);  break;
      case 'hour'   :  ret.setTime(ret.getTime() + units * 3600000);  break;
      case 'minute' :  ret.setTime(ret.getTime() + units * 60000);  break;
      case 'second' :  ret.setTime(ret.getTime() + units * 1000);  break;
      default       :  ret = undefined;  break;
    }
    return ret;
}
exports.fun_add_date_time = fun_add_date_time;