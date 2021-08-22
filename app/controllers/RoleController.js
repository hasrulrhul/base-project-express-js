const db = require('../../migration');
const Role = require('../models/Role');

module.exports = {


   /**
    * Get the lists of all roles.
    */
    index: (req, res, next) => {
      db.query(Role.index(), (err, result) => {
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
    * store role details.
    */
    create: (req, res, next) => {
      const paramData = {
         role: req.body.role,
         name: req.body.name,
      }
      const role = new Role(paramData);

      db.query(role.store(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
               'error_line': err.files,
            })
         };

         db.query(Role.show(result.insertId), (err, paramData) => {
            console.log(paramData[0]);
            res.status(200).json({
               'data': paramData[0],
            });
         })
      });
   },

   /**
    * get role details by role id.
    */
   show: (req, res, next) => {
      const id = req.params.id;
      db.query(Role.show(id), (err, result) => {
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
    * Update role details.
    */
   edit: (req, res, next) => {
      const paramData = {
         role: req.body.role,
         name: req.body.name,
      }

      const role = new Role(paramData);
      const id = req.params.id;
      db.query(role.update(id), (err, result) => {
         if(err) {
            res.status(400).json({
               'error': err.message,
            });
         }

         db.query(Role.show(id), (err, paramData) => {

            if (err) {
               res.status(400).json({
                  'error': err.message,
               });
            }

            res.status(200).json({
               'message': 'Role updated successfully.',
               'data': paramData[0],
            });
         });
      });
   },

   delete: (req, res, next) => {
      const id = req.params.id;
      db.query(Role.destroy(id), (err, result) => {
         if (err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'message': 'Role deleted successfully.',
         });
      })
   }
}