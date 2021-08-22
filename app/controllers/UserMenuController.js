const db = require('../../migration');
const UserMenu = require('../models/UserMenu');

module.exports = {


   /**
    * Get the lists of all usermenus.
    */
   index: (req, res, next) => {
      db.query(UserMenu.index(), (err, result) => {
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
    * store usermenu details.
    */
   create: (req, res, next) => {
      const paramData = {
         role_id: req.body.role_id,
         menu_id: req.body.menu_id,
         is_read: req.body.is_read,
         is_create: req.body.is_create,
         is_update: req.body.is_update,
         is_delete: req.body.is_delete,
         is_report: req.body.is_report,
      }
      const usermenu = new UserMenu(paramData);
      db.query(usermenu.store(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
               'error_line': err.files,
            })
         };

         db.query(UserMenu.show(result.insertId), (err, paramData) => {
            console.log(paramData[0]);
            res.status(200).json({
               'data': paramData[0],
            });
         })
      });
   },

   /**
    * get usermenu details by usermenu id.
    */
   show: (req, res, next) => {
      const id = req.params.id;
      db.query(UserMenu.show(id), (err, result) => {
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
    * Update usermenu details.
    */
   edit: (req, res, next) => {
      const paramData = {
         role_id: req.body.role_id,
         menu_id: req.body.menu_id,
         is_read: req.body.is_read,
         is_create: req.body.is_create,
         is_update: req.body.is_update,
         is_delete: req.body.is_delete,
         is_report: req.body.is_report,
      }

      const usermenu = new UserMenu(paramData);
      const id = req.params.id;
      db.query(usermenu.update(id), (err, result) => {
         if(err) {
            res.status(400).json({
               'error': err.message,
            });
         }

         db.query(UserMenu.show(id), (err, paramData) => {

            if (err) {
               res.status(400).json({
                  'error': err.message,
               });
            }

            res.status(200).json({
               'message': 'UserMenu updated successfully.',
               'data': paramData[0],
            });
         });
      });
   },

   delete: (req, res, next) => {
      const id = req.params.id;
      db.query(UserMenu.destroy(id), (err, result) => {
         if (err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'message': 'UserMenu deleted successfully.',
         });
      })
   }
}