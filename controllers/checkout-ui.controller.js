const { discountBtnClickQuery } = require("../services/checkout-ui");

exports.discountBtnClick = async (req, res) => {
    try {
        const { uniqueId } = req?.body;
        const payload = {
            uniqueId
        }
        const response = await discountBtnClickQuery(payload);
        if (response?.id) {
            return res.status(200).send({ success: true, message: "Event save successfully!" })
        }
        return res.status(500).send({ success: false, message: "Something went wrong!" })

    } catch (e) {
        console.log("Error while using discount button click: ", e)
    }

}