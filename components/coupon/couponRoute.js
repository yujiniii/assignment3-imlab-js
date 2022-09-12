const express = require("express");
const couponService = require("./couponService");
const router = express.Router();





/**
 * @todo 쿠폰 조회
 */
router.get('/',(req,res,next)=>{
    try{
        const result = couponService.allCouponInfo()
        res.status(200).json({result});
    }catch(err){
        next(err)
    }
})
/**
 * @todo 특정 신규 쿠폰 코드 발급  ( 랜덤 숫자(문자) ) 새로운 쿠폰 타입 신설 (배송비 할인  % 할인  정액 할인)
 */
 router.get('/new',(req,res,next)=>{
    try{
        const {type,range} = req.body
        couponService.newCoupon(type,range)

    }catch(err){
        next(err)
    }
})

/**
 * @todo 발급된 쿠폰의 사용 내역 열람 (사용 유무 조회)
 */
 router.get('/isUserd',(req,res,next)=>{
    try{
        const couponId = req.body.couponId
        couponService.couponIsUsed(couponId)

    }catch(err){
        next(err)
    }
})

/**
 * @todo 쿠폰 타입 별 사용 횟수, 총 할인액 (type 별 find)
 */
 router.get('/stats/:type',(req,res,next)=>{
    try{
        const type = req.params.type
        couponService.typeStats(type)

    }catch(err){
        next(err)
    }
})