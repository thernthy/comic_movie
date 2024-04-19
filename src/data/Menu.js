// this custom date format for runing to the filter menu future
/*
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
*/

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
        { path:'/', menu_name: '연재', specific_name: '연재', other:''},
        { path:'/complate', menu_name: '연재', specific_name: '연재', other:''},
        { path:'/comics', menu_name: '코믹스', specific_name: '코믹스', other:''},
        { path:'/phototoon', menu_name: '포토툰', specific_name: '포토툰', other:''},
        { path:'/webtoon', menu_name: '웹소설(준비중)', specific_name: '웹소설(준비중)', other:''}, 

    ],
    consonant:[
        {
          name: '전체', specific_name:null
        },
        {
          name: 'ㄱ', specific_name:null
        },
        {
          name: 'ㄴ', specific_name:null
        },
        {
          name: 'ㄷ', specific_name:null
        },
        {
          name: 'ㄹ', specific_name:null
        },
        {
          name: 'ㅁ', specific_name:null
        },
        {
          name: 'ㅂ', specific_name:null
        },
        {
          name: 'ㅅ', specific_name:null
        },
        {
          name: 'ㅇ', specific_name:null
        },
        {
          name: 'ㅈ', specific_name:null
        },
        {
          name: 'ㅊ', specific_name:null
        },
        {
          name: 'ㅋ', specific_name:null
        },
        {
          name: 'ㅌ', specific_name:null
        },
        {
          name: 'ㅍ', specific_name:null
        },
        {
          name: 'ㅎ', specific_name:null
        },
        {
          name: 'a-z', specific_name:null
        },
        {
          name: '0-9', specific_name:null
        },
    ]
}

export default Menus;