const db = require("../config/db");

class User {
  constructor(idusers, bio) {
    this.idusers = idusers;
    this.bio = bio;
  }

  save() {
    let u = new Date();
    let yyyy = u.getFullYear();
    let mm = u.getMonth() + 1;
    let dd = u.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO users(
      idusers,
      bio,
      created_at
    )
    VALUES (
      '${this.idusers}',
      '${this.bio}',
      '${createdAtDate}'
    )
    `;

    return db.execute(sql);
  }

  static findUser(id) {
    let sql = `
    SELECT * FROM users WHERE idusers = ${id};
    `;
    const user = db.execute(sql);
    return user;
  }

  static findAll() {
    let sql = "SELECT * FROM users;";

    return db.execute(sql);
  }
}

module.exports = User;
