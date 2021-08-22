class Role {

   constructor(data) {
      this.role = data.role;
      this.name = data.name;
   }

   static index() {
      return `SELECT * FROM role`;
   }
 
   store() {
      return `INSERT INTO role (role, name) VALUES ( '${this.role}', '${this.name}' )`;
   }

   static show(id) {
      console.log(id);
      return `SELECT * FROM role WHERE id = ${id}`;
   }
 
   update(id) {
      return `UPDATE role SET 
         role = '${this.role}', 
         name = '${this.name}'
         WHERE id = ${id}`;
   }

   static destroy(id) {
      return `DELETE FROM role WHERE id = ${id}`;
   }

 }
 
 module.exports = Role;