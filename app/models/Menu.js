class Menu {

   constructor(data) {
      this.parent = data.parent;
      this.name = data.name;
      this.icon = data.icon;
      this.url = data.url;
      this.sort = data.sort;
      this.display = data.display;
   }

   static index() {
      return `SELECT * FROM menu`;
   }
 
   store() {
      return `INSERT INTO menu (parent, name, icon, url, sort, display) 
         VALUES ('${this.parent}', '${this.name}', '${this.icon}', '${this.url}','${this.sort}', '${this.display}')`;
   }

   static show(id) {
      console.log(id);
      return `SELECT * FROM menu WHERE id = ${id}`;
   }
 
   update(id) {
      return `UPDATE menu SET 
         parent = '${this.parent}', 
         name = '${this.name}', 
         icon = '${this.icon}', 
         url = '${this.url}', 
         sort = '${this.sort}',
         display = '${this.display}'
         WHERE id = ${id}`;
   }

   static destroy(id) {
      return `DELETE FROM menu WHERE id = ${id}`;
   }

 }
 
 module.exports = Menu;