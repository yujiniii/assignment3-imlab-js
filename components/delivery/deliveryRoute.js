const express = require("express");
const deliveryService = require("./postService");
const router = express.Router();


/**
 * @todo 주문건에 대하여 발송 처리 -- >  deliver num 설정ㄹ
 */
router.post('/set/:orderId', (req,res,next)=>{
    try{
         const setup = deliveryService.setDeliveryNumber(req.params.orderId);
         res.status(200).json({setup})
    } catch(err){
        next(err);
    }
});
/**
 * @todo 제품 배송 상태 업데이트 (제품의 배송 상태를 배송 중, 배송 완료 등으로 수정 가능)
 */
 router.patch('/set/:orderId', (req,res,next)=>{
    try{
         const setup = deliveryService.updateDeliverystate(req.params.orderId, req.body.status);
         res.status(200).json({setup})
        } catch(err){
        next(err);
    }
});
