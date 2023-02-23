"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe = require("stripe")(
  "sk_test_51MeDPsLrUdQMyaUot1fv8wHQKFx9TIdGKMZh1dknKBYOyXd0aY8glArCpSsJqvMLlIOmGTOZs4J1xC1PRPk1k2660017snpSwT"
);

module.exports = {
  // 注文を作成する
  create: async (ctx) => {
    const { address, amount, dishes, token } = JSON.parse(ctx.request.body);
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "jpy",
      source: token,
      description: `Order ${new Date()} by ${ctx.state.user.id}`,
    });

    const order = await strapi.services.order.create({
      user: ctx.state.user._id,
      charge_id: charge.id,
      amount: amount,
      address,
      dishes,
    });

    return order;
  },
};
