'use strict';

// to enable these logs set `DEBUG=boot:03-load-content` or `DEBUG=boot:*`
var log = require('debug')('boot:03-load-content');

module.exports = function (app) {

  if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
    return;
  }


  function createDataDefault() {
    log('Creating categories and products');

    var Category = app.models.Category;
    var Product = app.models.Product;
    var Tour = app.models.Tour;
    Category.findOrCreate(
      {where: {name: 'indexSlide'}}, // find
      {name: 'indexSlide'}, // create
      function (err, category, created) {
        if (err) {
          console.error('err', err);
        }
        (created) ? log('created Category', category.name)
          : log('found Category', category.name);
        Product.findOrCreate(
          {where: {name: 'Slide1'}}, // find
          {
            name: 'Slide1',
            categoryId: category.id
          }, // create
          function (err, data, created) {
            if (err) {
              console.error('err', err);
            }
            (created) ? log('created Product', data.name)
              : log('found Product', data.name);
          });
        Product.findOrCreate(
          {where: {name: 'Slide2'}}, // find
          {
            name: 'Slide2',
            categoryId: category.id
          }, //create
          function (err, data, created) {
            if (err) {
              console.error('err', err);
            }
            (created) ? log('created Product', data.name)
              : log('found Product', data.name);
          });
      });

    Category.findOrCreate({where: {name: 'exploreSlide'}}, {
      name: 'Wine'
    }, function (err, category, created) {
      if (err) {
        console.error('err', err);
      }
      (created) ? log('created Category', category.name)
        : log('found Category', category.name);
      Product.findOrCreate({where: {name: 'Slide1'}}, {
        name: 'Slide1',
        categoryId: category.id
      }, function (err, data, created) {
        if (err) {
          console.error('err', err);
        }
        (created) ? log('created Product', data.name)
          : log('found Product', data.name);
      });
      Product.findOrCreate({where: {name: 'Slide2'}}, {
        name: 'Slide2',
        categoryId: category.id
      }, function (err, data, created) {
        if (err) {
          console.error('err', err);
        }
        (created) ? log('created Product', data.name)
          : log('found Product', data.name);
      });
    });

    Tour.findOrCreate({where:{title: 'Tour example'}},{
        title: 'Tour example'
      },function (err, category, created) {
        if (err) {
          console.error('err', err);
        }
        (created) ? log('created Tour', category.title)
          : log('found Tour', category.title);
      }
    )
  }
  createDataDefault();

  };
