const {Delivery, Country, Order} = require('../../models/index');


const setDeliveryNumber = async (orderId)=>{
    const orderInfo = await Delivery.findAll({
        orderId:orderId
    }).catch((err)=>{
        throw new Error(err,"주문 정보를 찾을 수 없습니다.")
    })
    const country = await Country.findOne({
        where:{
            countryId:orderInfo.dataValues.countryId
        }
    }).catch((err)=>{
        throw new Error(err,"국가 정보를 찾을 수 없습니다.")
    })
    const cost = await findDeliveryCost(country.dataValues.countryName, orderInfo.dataValues.quantity);
    const delivery = await Delivery.create({
        deliveryPrice:cost,
        deliveryState:"배송준비중"
    }).catch((err)=>{
        throw new Error(err,"배송 정보를 저장하지 못했습니다")
    });
    return await Order.update({
        deliveryId : delivery.dataValues.deliveryId
    }).catch((err)=>{
        throw new Error(err,"주문정보에 배송정보를 저장하지 못헀습니다.")
    });

}
/**
 * @todo 배송비 조회
 */
const findDeliveryCost = async(countryName, quantity)=>{
    //??
}

const updateDeliverystate = async(orderId, status)=>{
    const order = await Order.findOne({
        where:{
            orderId:orderId
        }
    }).catch((err)=>{
        throw new Error(err,"주문 정보를 찾지 못했습니다.");
    });
    await Delivery.update({
        deliveryState:status
    },{
        where:{
            deliveryId:order.dataValues.deliveryId
        }
    }).catch((err)=>{
        throw new Error(err,"배송정보를 찾지 못했습니다.");
    });

}

/**
 * @todo 환율 적용(외한은행)
 */

module.exports = {
    updateDeliverystate,
    setDeliveryNumber
}
