const {Order,User} = require("../../models/index");

const allOrders = async()=>{
    return await Order.findAll({
        include:[{model:User}],
    })
        .catch((err)=>{throw new Error(err)});
}

const allOrdersWithQuery = async (status, startDate, endDate)=>{
    return await Order.findAll({
        include:[{model:User}],
        where:{
        [Op.and]:{
            payState:status,
            orderDate: {[Op.gte]:startDate},
            orderDate: {[Op.lte]:endDate}
        }
    }}).catch((err)=>{
        throw new Error(err);
    });
}

const allOrdersWithParams = async(name)=>{
    return await Order.findAll({
        include:[{model:User}],
        where:{
            userName:name
        }
    }).catch((err)=>{
        throw new Error(err);
    })
}

module.exports={
    allOrders,
    allOrdersWithParams,
    allOrdersWithQuery
}