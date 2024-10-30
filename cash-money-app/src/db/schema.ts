import { date, float, index, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const accountTable = mysqlTable('account', {
    id: int().primaryKey().autoincrement(),
    name: varchar({ length: 255 }).notNull()
})

export const bucketTable = mysqlTable('bucket', {
    id: int().primaryKey().autoincrement(),
    name: varchar({ length: 255 }).notNull()
})

export const categoryTable = mysqlTable('category', {
    id: int().primaryKey().autoincrement(),
    name: varchar({ length: 255 }).notNull(),
    bucketId: int().references(() => bucketTable.id)
})

export const noteTable = mysqlTable('note', {
    id: int().primaryKey().autoincrement(),
    date: date().notNull(),
    content: text().notNull(),
})

export const transactionTable = mysqlTable('transaction', {
    id: int().primaryKey().autoincrement(),
    date: date().notNull(),
    amount: float().notNull(),
    description: text().notNull(),
    accountId: int().notNull().references(() => accountTable.id),
    bucketId: int().references(() => bucketTable.id),
    categoryId: int().references(() => categoryTable.id)
}, (table) => {
    return {
        accountIdx: index("index_on_account_id").on(table.accountId),
        bucketIdx: index("index_on_bucket_id").on(table.bucketId),
        categoryIdx: index("index_on_category_id").on(table.categoryId),
    }
});
