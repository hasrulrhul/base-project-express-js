class Option {

   constructor(data) {
      this.code = data.code;
      this.value = data.value;
      this.description = data.description;
      this.sort = data.sort;
   }

   static index() {
      return `SELECT * FROM options`;
   }
 
   store() {
      return `INSERT INTO options(
            code, 
            value, 
            description, 
            sort
         ) \ VALUES
         (
            '${this.code}', 
            '${this.value}', 
            '${this.description}', 
            '${this.sort}'
         )`;
   }

   static show(id) {
      console.log(id);
      return `SELECT * FROM options WHERE id = ${id}`;
   }
 
   update(id) {
      return `UPDATE options SET 
         code = '${this.code}', 
         value = '${this.value}', 
         description = '${this.description}', 
         sort = '${this.sort}'
         WHERE id = ${id}`;
   }

   static destroy(id) {
      return `DELETE FROM options WHERE id = ${id}`;
   }

 }
 
 module.exports = Option;