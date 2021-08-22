class User {

   constructor(data) {
      this.name = data.name;
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;
      this.role_id = data.role_id;
   }

   static index() {
      return `SELECT * FROM user`;
   }
 
   store() {
      return `INSERT INTO user
         (  name, username, email, password, role_id) \ 
         VALUES
         ( '${this.name}', '${this.username}',  '${this.email}',  '${this.password}',  '${this.role_id}' )`;
   }

   static show(id) {
      console.log(id);
      return `SELECT * FROM user WHERE id = ${id}`;
   }
 
   update(id) {
      return `UPDATE user SET 
         name = '${this.name}', 
         username = '${this.username}', 
         email = '${this.email}', 
         password = '${this.password}', 
         role_id = '${this.role_id}'
         WHERE id = ${id}`;
   }

   static destroy(id) {
      return `DELETE FROM user WHERE id = ${id}`;
   }

 }
 
 module.exports = User;