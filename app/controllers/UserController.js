const db = require('../../migration');
const User = require('../models/User');

module.exports = {

   /**
    * Get the lists of all users.
    */
    index: (req, res, next) => {
      db.query(User.index(), (err, result) => {
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
    * store user details.
    */
    create: (req, res, next) => {
      const userData = {
         name: req.body.name,
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         role_id: req.body.role_id,
      }
      const user = new User(userData);

      db.query(user.store(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
               'error_line': err.files,
            })
         };

         db.query(User.show(result.insertId), (err, userData) => {
            console.log(userData[0]);
            res.status(200).json({
               'data': userData[0],
            });
         })
      });
   },

   /**
    * get user details by user id.
    */
   show: (req, res, next) => {
      const id = req.params.id;
      db.query(User.show(id), (err, result) => {
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
    * Update user details.
    */
   edit: (req, res, next) => {
      const userData = {
         name: req.body.name,
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         role_id: req.body.role_id,
      }

      const user = new User(userData);
      const id = req.params.id;
      db.query(user.update(id), (err, result) => {
         if(err) {
            res.status(400).json({
               'error': err.message,
            });
         }

         db.query(User.show(id), (err, userData) => {

            if (err) {
               res.status(400).json({
                  'error': err.message,
               });
            }

            res.status(200).json({
               'message': 'User updated successfully.',
               'data': userData[0],
            });
         });
      });
   },

   delete: (req, res, next) => {
      const id = req.params.id;
      db.query(User.destroy(id), (err, result) => {
         if (err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'message': 'User deleted successfully.',
         });
      })
   }
}