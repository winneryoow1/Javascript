//----------------------------------------------------------------------Proxy ---------------------------------------------------------//
//Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。
//新建接口--返回任意数据
const service = createWebService('http://example.com/data');

service.employees().then(json => {
  const employees = JSON.parse(json);
  // ···
});
//拦截此对象的任意属性
function createWebService(baseUrl) {
    return new Proxy({}, {
      get(target, propKey, receiver) {
        return () => httpGet(baseUrl+'/' + propKey);
      }
    });
  }
//注：Proxy 也可以用来实现数据库的 ORM 层
