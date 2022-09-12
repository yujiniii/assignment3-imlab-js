const {Coupon} = require("../../models/index");


const allCouponInfo = async ()=>{
    return await Coupon.findAll()
        .catch((err)=>{
            throw new Error(err, "쿠폰 정보를 불러올 수 없습니다.")
        })
}


const newCoupon = async (type,range)=>{
    const randomCode = new Date().getTime()
    await Coupon.create({
        couponCode:randomCode,
        type:type,
        range:range,
        isUsed:false
    }).catch((err)=>{
        throw new Error(err, "쿠폰을 추가할 수 없습니다.")
    })
}

const couponIsUsed = async(couponId)=>{
    return await Coupon.findOne({
        attributes:[couponId,isUsed],
        where:{
            couponId:couponId
        }
    }).catch((err)=>{
        throw new Error(err, "쿠폰을 찾을 수 없습니다.")
    })
}


const typeStats = async(type)=>{
    return await Coupon.findAll({
        where:{
            type:type
        }
    }).catch((err)=>{
        throw new Error(err, "쿠폰정보를 찾을 수 없습니다.")
    })
}

module.exports = {
    typeStats,
    couponIsUsed,
    newCoupon,
    allCouponInfo
}