const express = require("express");
const orderService = require("./orderService");
const router = express.Router();



/**
 * @todo 제품 주문 내역 열람( 결제 완료 /  결제 취소)
 */
router.get('/all',async (req, res, next)=>{
    try{
        const result = await orderService.allOrders();
        res.status(200).json({
            result
        })
    } catch (err){
        next(err);
    }
});


/**
 * @todo 주문 상태, 시작일자, 종료일자에 따른 필터 ( 쿼리스트링?? )
 */
 router.get('/search',async (req, res, next)=>{
    try{
        let status = req.query.status; 
        let startDate = req.query.startDate; 
        let endDate = req.query.endDate; 
        const result = await orderService.allOrdersWithQuery(status, startDate, endDate);
        res.status(200).json({
            result
        })
    } catch (err){
        next(err);
    }
});
/**
 * @todo 주문자명으로 검색
 */
 router.get('/:name',async (req, res, next)=>{
    try{
        let name = req.params.name; 
        const result = await orderService.allOrdersWithParams(name);
        res.status(200).json({
            result
        })
    } catch (err){
        next(err);
    }
});

module.exports = router;