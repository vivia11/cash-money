import db from '../common/drizzles';
import { categoryTable, transactionTable } from '../../db/schema';

export default async function Home() {
    const categories = await db.select().from(categoryTable);
    const transactions = await db.select().from(transactionTable);

    console.log('categories got from db: ', categories);
    return (
        <div className="w-full h-full flex bg-v-gray items-center">
            <div className="w-[60%] h-[90%] bg-v-white relative left-10 rounded-lg">
                <h1 className="w-full h-8 text-3xl text-gray uppercase font-light text-center mb-4">Transactions</h1>
                {categories.map((category) => (
                    <a className="flex items-center w-full h-8 px-3 mt-2 rounded text-v-black hover:bg-gray-700 hover:text-gray-800" key={category.name}>
                        <span className="w-full ml-2 text-sm text-v-black">{category.name}</span>
                    </a>
                ))}

                {transactions.map((transaction) => (
                    <a className="flex items-center w-full h-8 px-3 mt-2 rounded text-v-black hover:bg-gray-700 hover:text-gray-800" key={transaction.id}>
                        <span className="w-full ml-2 text-sm text-v-black">{transaction.description}</span>
                    </a>
                ))}
            </div>
        </div>
    );
  }
  