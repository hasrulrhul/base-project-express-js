const db = require('../../migration');
const Menu = require('../models/Menu');

module.exports = {


   /**
    * Get the lists of all menus.
    */
   index: (req, res, next) => {
      db.query(Menu.index(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
            })
         }

         res.status(200).json({
            'data': result,
         });
      })
   },

   /**
    * store menu details.
    */
   create: (req, res, next) => {
      const paramData = {
         parent: req.body.parent,
         name: req.body.name,
         icon: req.body.icon,
         url: req.body.url,
         sort: req.body.sort,
         display: req.body.display,
      }
      const menu = new Menu(paramData);
      console.log('tes => ',paramData.parent)
      db.query(menu.store(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
               'error_line': err.files,
            })
         };

         db.query(Menu.show(result.insertId), (err, paramData) => {
            console.log(paramData[0]);
            res.status(200).json({
               'data': paramData[0],
            });
         })
      });
   },

   /**
    * get menu details by menu id.
    */
   show: (req, res, next) => {
      const id = req.params.id;
      db.query(Menu.show(id), (err, result) => {
         if(err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'data': result[0],
         });
      })
   },

   /**
    * Update menu details.
    */
   edit: (req, res, next) => {
      const paramData = {
         parent: req.body.parent,
         name: req.body.name,
         icon: req.body.icon,
         url: req.body.url,
         sort: req.body.sort,
         display: req.body.display,
      }

      const menu = new Menu(paramData);
      const id = req.params.id;
      db.query(menu.update(id), (err, result) => {
         if(err) {
            res.status(400).json({
               'error': err.message,
            });
         }

         db.query(Menu.show(id), (err, paramData) => {

            if (err) {
               res.status(400).json({
                  'error': err.message,
               });
            }

            res.status(200).json({
               'message': 'Menu updated successfully.',
               'data': paramData[0],
            });
         });
      });
   },

   delete: (req, res, next) => {
      const id = req.params.id;
      console.log('====> ',id)
      db.query(Menu.destroy(id), (err, result) => {
         if (err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'message': 'Menu deleted successfully.',
         });
      })
   }
}