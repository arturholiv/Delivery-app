const SalesService = require('../../services/Sales');

const GetAllSalesService = async (req, res, next) => {
  try {
    const sales = await SalesService.getAll(req.user);
    return res.status(200).json(sales);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = GetAllSalesService;
