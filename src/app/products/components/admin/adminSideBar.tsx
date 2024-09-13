import LinkRouter from "./LinkRouter"

const adminNavigation = [
    {url: '/admin/orders', text: 'Ordenes', blank: false},
    {url: '/admin/products', text: 'Productos', blank: false},
    {url: '/products', text: 'Store', blank: true},
]

export default function AdminSidebar() {

    return (
        <>

            <div className="space-y-3 ">
                <div>
                    <h2>Logotipo</h2>
                </div>
                <nav className="flex flex-col">
                    {
                        adminNavigation.map((item)=>{
                            return(
                                <LinkRouter key={item.url} link = {item}/>
                            )
                        })
                    }
                    
                </nav>
            </div>
        </>

    )
}