'use strict';

/**
 * Setting.js controller
 *
 * @description: A set of functions called "actions" for managing `Setting`.
 */

module.exports = {

  /**
   * Retrieve setting records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.setting.search(ctx.query);
    } else {
      return strapi.services.setting.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a setting record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.setting.fetch(ctx.params);
  },

  /**
   * Count setting records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.setting.count(ctx.query);
  },

  /**
   * Create a/an setting record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.setting.add(ctx.request.body);
  },

  /**
   * Update a/an setting record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.setting.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an setting record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.setting.remove(ctx.params);
  }
};
