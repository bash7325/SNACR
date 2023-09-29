import { Injectable } from '@angular/core';
import { sqlite3 } from 'sqlite3';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // ... (previous code)

  insertUser(id: number, name: string) {
    this.db.serialize(() => {
      const stmt = this.db.prepare("INSERT INTO users VALUES (?, ?)");
      stmt.run(id, name);
      stmt.finalize();
    });
  }

  getUsers(): Promise<{ id: number, name: string }[]> {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT id, name FROM users", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
