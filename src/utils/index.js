/**
 * Created by gongyuqi on 2017/5/17.
 */

export const parseTime = (time, fmt) => {
    if (arguments.length === 0) {
        return null;
    }
    const format = fmt || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const timeChart = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });

    return timeChart;
};
/**
 * 转换菜单
 * @param arr
 * @returns {{}}
 */
export const toMenus = (arr) => {
    let routes = {};
    arr.forEach((tree) => {
        let routeName = tree.route.slice(1);
        let childs = tree.children;

        let subRoute = childs.map(child => {
            let names = child.route.slice(1).split('/');
            if (child.parentCode === '0') {
                return names[0]
            }
            return names[1]
        });

        routes[routeName] = subRoute
    });
    return routes
};
