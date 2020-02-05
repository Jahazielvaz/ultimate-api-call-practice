// const Order = require("../models/orders");
//
// exports.orders_get_all =
// (req, res, next) => {
//   Order.find()
//   .select('_id product quantity')
//   .exec()
//   .then(result => {
//     res.status(200).json({
//       count: result.length,
//       orders: result.map(order => {
//         return {
//           id: order._id,
//           product: order.product,
//           quantity: order.quantity,
//           request: {
//             type: 'GET',
//             url: `http://localhost:3000/orders/${order._id}`
//           }
//         }
//       })
//
//     })
//   })
//   .catch(err => {
//     res.status(500).json({error: {error: err}})
//   })
// }
