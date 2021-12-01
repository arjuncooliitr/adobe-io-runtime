(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7533],{29663:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var a,o=t(22122),i=t(19756),r=(t(15007),t(64983)),s=t(99536),d=["components"],l={},c=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),m={_frontmatter:l},h=s.Z;function u(e){var n=e.components,t=(0,i.Z)(e,d);return(0,r.mdx)(h,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"throughput-tuning"},"Throughput Tuning"),(0,r.mdx)("p",null,"The main instrument you can use for tuning how a given action is executed and enable a faster number of executions, is the value you set for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"action/container concurrency"),". This value is not related to the concurrent value per namespace or minuteRate value, though these two enforce the upper limit for actions executed per minute your namespace can reach."),(0,r.mdx)("p",null,"The default value is ",(0,r.mdx)("inlineCode",{parentName:"p"},"200")," and it means that 200 invocation can happen in the same container for the that action. Suppose that you want to execute 100 times a ",(0,r.mdx)("inlineCode",{parentName:"p"},"HelloWorld")," action at the same time or in short period of time (minutes). With the default value (",(0,r.mdx)("inlineCode",{parentName:"p"},"200"),") it means that the system will use 1  container instead of using up to 100 containers."),(0,r.mdx)("p",null,"This enables you to avoid cold-start issues. When the system doesn't have any containers left, it has to create new ones. This cold-start adds a lot of latency to your application."),(0,r.mdx)("p",null,"You can set any value between ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"500"),". In the example below, the limit is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"100"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"wsk action create actionName fileName.js -c 100\n")),(0,r.mdx)("p",null,"Some considerations to keep in mind:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"A container is kept warm after an invocation finished for 10 minutes. This means that for 10 minutes you can be 99% you don't get cold-starts when executing the same action"),(0,r.mdx)("li",{parentName:"ol"},"Depending on how much memory/resources your action consumes, you can use a smaller or a higher value. A good average number to start with is ",(0,r.mdx)("inlineCode",{parentName:"li"},"200"),". You should experiment to make sure the value you choose is working "),(0,r.mdx)("li",{parentName:"ol"},"Make sure that your code is working when being executed in parallel. Using global variables to store values that are different between invocations is a recipe for disaster"),(0,r.mdx)("li",{parentName:"ol"},"If your Action works on some large data that is not different between invocations, then using a global variable can maximize the chances that the next execution can reuse it. However your code should handle the situation where the variable is not initialized"),(0,r.mdx)("li",{parentName:"ol"},"It is not guarantee that all invocations will use the same container. In case of errors, the existing container is destroyed and a new container will be used"),(0,r.mdx)("li",{parentName:"ol"},"In cases where your action code is memory hungry, you might need to tweak this setting to a lower value ")),(0,r.mdx)("h2",{id:"using-pre-warm-containers-or-optimizing-against-cold-starts"},"Using pre-warm containers or optimizing against cold-starts"),(0,r.mdx)("p",null,"A second way for maximizing your chances of having the best low latency possible is creating actions that use the default Node version and a memory setting that is ",(0,r.mdx)("inlineCode",{parentName:"p"},"256MB"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"512MB"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"1024MB")," - this way you avoid cold-starts in most cases. "),(0,r.mdx)("p",null,"The system has a pool of containers with these settings waiting to be used for any incoming call that can't be sent to an existing running container and the action matches the container settings (Node version and memory setting). In this scenario, time will only be spent for injecting your action code as opposed to wait for creating a container first and then get the code injected."),(0,r.mdx)("h2",{id:"caching-responses"},"Caching Responses"),(0,r.mdx)("p",null,"The second instrument you have to maximize throughput is caching the action response. When you cache an action response, for the time the cache is valid, you can invoke the action without increasing the counter used by minuteRate or concurrent action invocations per namespace. In this situations, your action is not actually executed, instead the system serves the result from cache."),(0,r.mdx)("p",null,"You use the Cache-Control dirrective in order to configure the cache. Below is an example of an action that sets the cache with a TTL of ",(0,r.mdx)("inlineCode",{parentName:"p"},"30 minutes"),". In the response object you'll find an entry with ",(0,r.mdx)("inlineCode",{parentName:"p"},"X-Cache: HIT")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"X-Cache: MISS")," (depending on the answer being returned from cache or not). "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'function main(args) {\n   return {\n       body: "OK",\n       statusCode: 200,\n       headers: {\n           "Cache-Control": "max-age=1800"\n       }\n   }\n}\n')),(0,r.mdx)("p",null,"One way to verify if a response is returned from the cache or not is by checking for the following header:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"X-GW-Cache: HIT\n")),(0,r.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Encoded responses can't be cached, this means that ",(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Encoding")," response header needs to be always empty in order for the response to be cached. "),(0,r.mdx)("h3",{id:"vary-header"},"Vary Header"),(0,r.mdx)("p",null,"The caching layer supports the use of ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary"},"Vary header")," to enable caching based not only on URL and query parameters but on header fields."),(0,r.mdx)("p",null,"For example you here is some action that responds to certain header fields when doing some complex calculation:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},'curl -H "storeId: 1234" https://runtime-namespace-1.adobeioruntime.net/api/v1/web/store?query={products(pageSize: 10,filter:{ id:{ eq:"abcedefg"}}){items{name}}}')),(0,r.mdx)("p",null,"Could produce a response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\nVary: storeId\nCache-Control: max-age=120\nX-GW-Cache: MISS\n\n{"someBigData" : ["array"]}\n')),(0,r.mdx)("p",null,"That would add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"storeId")," to the cache key such that subsequent requests with the same ",(0,r.mdx)("inlineCode",{parentName:"p"},"storeId")," in the headers will create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"HIT")," up till the cahe control header settings and anytime the value varies, it will be a ",(0,r.mdx)("inlineCode",{parentName:"p"},"MISS")," and be stored under a new key with new cache control directives."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-throughput-tuning-md-4634b446182694ccce07.js.map