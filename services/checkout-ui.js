const { prisma } = require('./index');

exports.discountBtnClickQuery = async (data) => {
    try {
        const response = await prisma.clickRecord.create({ data })
        return response;
    } catch (e) {
        console.log("Error while create click record: ", e)
    }
}