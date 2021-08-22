const db = require('../../migration');
const Option = require('../models/Option');

module.exports = {


   /**
    * Get the lists of all options.
    */
    index: (req, res, next) => {
      db.query(Option.index(), (err, result) => {
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
    * store option details.
    */
    create: (req, res, next) => {
      const paramData = {
         code: req.body.code,
         value: req.body.value,
         description: req.body.description,
         sort: req.body.sort,
      }
      const option = new Option(paramData);

      db.query(option.store(), (err, result) => {
         if (err) {
            res.status(400).json({
               'error': err.message,
               'error_line': err.files,
            })
         };

         db.query(Option.show(result.insertId), (err, paramData) => {
            console.log(paramData[0]);
            res.status(200).json({
               'data': paramData[0],
            });
         })
      });
   },

   /**
    * get option details by option id.
    */
   show: (req, res, next) => {
      const id = req.params.id;
      db.query(Option.show(id), (err, result) => {
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
    * Update option details.
    */
   edit: (req, res, next) => {
      const paramData = {
         code: req.body.code,
         value: req.body.value,
         description: req.body.description,
         sort: req.body.sort,
      }

      const option = new Option(paramData);
      const id = req.params.id;
      db.query(option.update(id), (err, result) => {
         if(err) {
            res.status(400).json({
               'error': err.message,
            });
         }

         db.query(Option.show(id), (err, paramData) => {

            if (err) {
               res.status(400).json({
                  'error': err.message,
               });
            }

            res.status(200).json({
               'message': 'Option updated successfully.',
               'data': paramData[0],
            });
         });
      });
   },

   delete: (req, res, next) => {
      const id = req.params.id;
      db.query(Option.destroy(id), (err, result) => {
         if (err) {
            res.status(404).json({
               'error': err.message,
            });
         }

         res.status(200).json({
            'message': 'Option deleted successfully.',
         });
      })
   }
}