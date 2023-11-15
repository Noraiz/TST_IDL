// 1.4 Manipulate the object to always return "404" with Proxy

const proxyObject = new Proxy({
    a:1,b:2
}, {
    get: (_target,_prop)=> "404"
});

const result404 = proxyObject.a;

console.log(result404)
