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
        { path:'/filtur', filturName: 'This month', spaceficVanlu: currentMonth },
        { path:'/filtur', filturName: 'Last month', spaceficVanlu: prevMonthName },
        { path:'/filtur', filturName: 'This Week', spaceficVanlu: thisWeek },
        { path:'/filtur', filturName: 'Last Week', spaceficVanlu: lastWeek },
        { path:'/filtur', filturName: 'Today', spaceficVanlu: today },
        { path:'/filtur', filturName: 'Yeasterday', spaceficVanlu: yesterday.toLocaleDateString() },
        { path:'/filtur', filturName: 'New', spaceficVanlu: 'new' },
    ],
    menuList: [
        { path:'/', menu_name: 'Home', specific_name: '모든 만화', other:''},
        { path:'/complate', menu_name: 'Complate', specific_name: '컴플리트', other:''},
        { path:'/lates', menu_name: 'Lates', specific_name: '지각', other:''},
        { path:'/popularity', menu_name: 'Popularity', specific_name: '인기', other:''},
    ]
}

export default Menus;