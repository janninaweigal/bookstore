/**
 * 切换导航
 * @param {*} name 
 */
export function switchNav(router) {
    const navArray = [
        {
            name:'热门商品',
            active:false,
            router:'/hotGoods'
        },
        {
            name:'会员专区',
            active:false,
            router:'/memberGoods'
        },
        {
            name:'购物车',
            active:false,
            router:'/shopcarts'
        },
        {
            name:'我的',
            active:false,
            router:'/about'
        }
    ]
    // 如果router有值，则修改成激活
    if(router){
        for(const index in navArray){
            if(navArray[index].router==router){
                navArray[index].active=true;
                break;
            }
        }
    }
    return navArray;
}