export default function SideBar() {
    const pages = [
        { name: "Dashboard", href: "/dashboard"},
        { name: "Transactions", href: "/transactions"},
        { name: "Savings", href: "/savings"},
        { name: "Debt", href: "/debt"},
        { name: "Net Worth", href: "/net-worth"}
    ];

    return (
    <div className="w-[10%] min-w-10 min-h-screen flex flex-col items-center text-gray-400 bg-v-black">
        <a className="flex items-center w-full px-4 mt-3" href="#">
            <svg className="w-6 h-6 stroke-v-gray" fill="none" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
			</svg>
            <span className="w-full text-sm font-medium text-center text-v-gray">Cash Money</span>
        </a>
        <div className="w-full px-2">
            <div className="flex flex-col w-full my-3 border-t border-gray-700">
                {pages.map((page) => (
                    <a className="flex items-center w-full h-8 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" key={page.name} href={page.href}>
                        <span className="w-full ml-2 text-sm text-v-gray">{page.name}</span>
                    </a>
                ))}
            </div>
        </div>
    </div>
    );
}