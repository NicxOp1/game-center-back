const axios = require("axios");
const apiUrl =require('../apiUrl')
class PaymentService {
  async createPayment(req,res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
        let {products,user} = req.body
      const body = {

      items: 
        products.map((e) => {
            return {
              title: e.name,
              id:e._id,
              description: e.description,
              picture_url: e.photo[0],
              category_id: {
                "id": "games",
                "description": "Online Games & Credits"
              },
              quantity: 1,
              currency_id: "ARS",
              unit_price: e.price,
            };
          })
      ,
      back_urls: {
        failure: "http://localhost:3000/Store",
        // pending: "/pending",
        success: "http://localhost:3000/Library"
      },
      notification_url: `https://d021-2800-810-557-8b6d-5fe-b80e-a04a-815a.sa.ngrok.io/payment/notification/${user}`
    }; 

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }

}

module.exports = PaymentService;