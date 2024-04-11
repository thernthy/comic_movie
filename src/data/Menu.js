const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
const prevMonthName = prevMonthDate.toLocaleString('default', { month: 'long' });

const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (6 - currentDate.getDay()));
const thisWeek = `${firstDayOfWeek.toLocaleDateString()} - ${lastDayOfWeek.toLocaleDateString()}`;

const lastWeekEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (currentDate.getDay() + 1));
const lastWeekStart = new Date(lastWeekEnd.getFullYear(), lastWeekEnd.getMonth(), lastWeekEnd.getDate() - 6);
const lastWeek = `${lastWeekStart.toLocaleDateString()} - ${lastWeekEnd.toLocaleDateString()}`;

const today = currentDate.toLocaleDateString();
const yesterday = new Date(currentDate);
yesterday.setDate(currentDate.getDate() - 1);


const Menus = {
    menuFilturList: [
        { path:'/filtur', filturName: '이번 달', spaceficVanlu: "this-month" },
        { path:'/filtur', filturName: '지난 달', spaceficVanlu: "last-month" },
        { path:'/filtur', filturName: '이번 주', spaceficVanlu: "this-week" },
        { path:'/filtur', filturName: '지난주', spaceficVanlu: "last-week" },
        { path:'/filtur', filturName: '오늘', spaceficVanlu: "today" },
        { path:'/filtur', filturName: '어제', spaceficVanlu: "yesterday" },
        { path:'/filtur', filturName: '새로운', spaceficVanlu: 'new' },
    ],
    menuList: [
        { path:'/', menu_name: '집', specific_name: '모든 만화', other:''},
        { path:'/complate', menu_name: '완전한', specific_name: '컴플리트', other:''},
        { path:'/lates', menu_name: '지각', specific_name: '지각', other:''},
        { path:'/popularity', menu_name: '인기', specific_name: '인기', other:''},
    ]
}

export default Menus;