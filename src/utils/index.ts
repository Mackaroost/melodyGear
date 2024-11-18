export function getImagePath(path:string){
const baseUrl = 'https://res.cloudinary.com'
if(path.startsWith(baseUrl)){
    return  path
}else{
    return `products/${path}.com`
}
}