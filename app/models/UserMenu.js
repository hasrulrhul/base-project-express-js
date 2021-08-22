class UserMenu {

   constructor(data) {
      this.role_id = data.role_id;
      this.menu_id = data.menu_id;
      this.is_read = data.is_read;
      this.is_create = data.is_create;
      this.is_edit = data.is_edit;
      this.is_update = data.is_update;
      this.is_delete = data.is_delete;
      this.is_report = data.is_report;
   }

   static index() {
      return `SELECT * FROM user_menu`;
   }
 
   store() {
      return `INSERT INTO user_menu (
            role_id, 
            menu_id, 
            is_read, 
            is_create, 
            is_update,
            is_delete,
            is_report
         ) \ VALUES
         (
            '${this.role_id}',
            '${this.menu_id}', 
            '${this.is_read}', 
            '${this.is_create}', 
            '${this.is_update}', 
            '${this.is_delete}', 
            '${this.is_report}'
         )`;
   }

   static show(id) {
      console.log(id);
      return `SELECT * FROM user_menu WHERE id = ${id}`;
   }
 
   update(id) {
      return `UPDATE user_menu SET 
         role_id = '${this.role_id}', 
         menu_id = '${this.menu_id}', 
         is_read = '${this.is_read}', 
         is_create = '${this.is_create}', 
         is_update = '${this.is_update}', 
         is_delete = '${this.is_delete}',
         is_report = '${this.is_report}'
         WHERE id = ${id}`;
   }

   static destroy(id) {
      return `DELETE FROM user_menu WHERE id = ${id}`;
   }

 }
 
 module.exports = UserMenu;