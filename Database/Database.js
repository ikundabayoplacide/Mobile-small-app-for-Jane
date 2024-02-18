import { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

const userDatabase = {
  db: 'userdatabase'
};

export const DatabaseConnection ={
  getConnection: () => SQLite.openDatabase(userDatabase.db)
}







