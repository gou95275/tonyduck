webpackJsonp([0],[,,function(t,e,i){"use strict";var a=i(1),n=i(35),s=i(26),r=i.n(s),c=i(25),o=i.n(c),l=i(27),v=i.n(l),u=i(28),_=i.n(u),d=i(24),p=i.n(d);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:r.a},{path:"/css",name:"css",component:o.a},{path:"/js",name:"js",component:v.a},{path:"/python",name:"python",component:_.a},{path:"/archive/:id",name:"archive",component:p.a}]})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){i(21);var a=i(0)(i(9),i(34),null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{tabs:[{name:"Home",icon:"icon-home-1",link:"#/home"},{name:"CSS",icon:"icon-tag",link:"#/css"},{name:"JS",icon:"icon-tags",link:"#/js"}],queryString:"",activeLink:location.hash}},methods:{search:function(){var t=this.queryString.trim();t&&(this.activeLink="/home",location.href="/home?queryString="+t)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{archiveId:this.$route.params.id}},computed:{titles:function(){var t=[];return this.$root.articles.forEach(function(e,i){t.push(e.title)}),t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"cssutil",data:function(){var t=this.$root.articles.filter(function(t,e){return t.tags.includes("css")});return{color:this.$root.color,articles:t}},methods:{createLink:function(t){return"#/archive/"+t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{color:this.$root.color,articles:this.$root.articles}},methods:{createLink:function(t){return"#/archive/"+t}},created:function(){var t=this;this.$route.query.queryString&&(this.articles=this.$root.articles.filter(function(e,i){var a=e.tags.includes(t.$route.query.queryString),n=e.text.includes(t.$route.query.queryString);return a||n}))},beforeRouteUpdate:function(t,e,i){var a=this;this.$route.query.queryString&&(this.articles=this.$root.articles.filter(function(t,e){var i=t.tags.includes(a.$route.query.queryString),n=t.text.includes(a.$route.query.queryString);return i||n}))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"jsutil",data:function(){var t=this.$root.articles.filter(function(t,e){return t.tags.includes("js")});return{color:this.$root.color,articles:t}},methods:{createLink:function(t){return"#/archive/"+t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{color:this.$root.color,articles:this.$root.articles}},methods:{createLink:function(t){return"/archive/"+t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1),n=i(8),s=i.n(n),r=i(2),c=i(5),o=(i.n(c),i(4)),l=(i.n(o),i(3)),v=(i.n(l),i(7)),u=(i.n(v),i(6));i.n(u);a.a.config.productionTip=!1,new a.a({el:"#app",data:{color:["green","blue","black","red"],articles:[{title:"git常用命令",text:"用gitbash进入类似命令行的窗口,用命令 cd e:/learngit 进入该目录，然后在此目录下初始化$ git init, 于是该文件夹就成为了一个工作区，里面的.git文件就是版本库（repository）,在工作区中新建一个文件，比如XXX.txt文件,在txt中添加‘1111’文本，用 $ git add XXX.txt命令将XXX.txt添加到缓存中",tags:["git"],id:0},{title:"浏览器页面解析过程",text:"浏览器的渲染引擎（如 chrome 的webkit）会先构建DOM树（从<html>标签开始），在遇到外部css文件时会停止构建DOM树，转而解析css文件，构建CSSOM树，完成后会继续构建DOM树，同时与已经构建好的DOM树节点共同构建渲染树，并将内容绘制在屏幕上，而这是一个渐进的过程",tags:["css","browser"],id:1},{title:"Angularjs directive",text:"Angularjs里的指令定义很常用的也是很重要的,priority: 在同一个元素上的指令，数字越大优先级越高，优先级越高controller和pre-link函数越先执行，而post-link则相反。该项不适用不在同一元素上的指令,terminal：如果设置为true，那么该指令最后一个执行，优先级低于该指令的指令全都被忽略",tags:["angular","js"],id:2},{title:"Angularjs 服务注册",text:"理解Angularjs服务注册过程，$injector用来提供正确的服务provider，实例化服务，然后调用他的$get方法来获取服务实例，$provide 服务有一系列的方法（6个方法: provider,value,constant,factory,service,decorator)，这些方法用 $injector来注册组件，大部分的方法都暴露在了angular.module下，也就是可以直接在module下调用这些函数。",tags:["angular","js"],id:3}]},router:r.a,template:"<app/>",components:{app:s.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABcCAYAAADu8aIfAAADIUlEQVR4Xu3cQUqqYRgF4FfNUUsQmwtqU2ksYk2cNXADLUFwA7UFFyAiTRVxA04cCJXguNyCIER6+YR7ycD+/xzrVbnnh0ad4/t9j5+KUibW6/XadP26QELQv268GSBoH2dBOzkLWtBeAk5z9BwtaCcBpzE60YJ2EnAaoxMtaCcBpzE60YJ2EnAaoxMtaCcBpzE60YJ2EnAaoxMtaCcBpzE60YJ2EnAaoxMtaCcBpzE60YJ2EnAaoxMtaCcBpzHQiX5+frZ6vW7T6dT+lz/ZSyQSls/nrd1uW6FQoO8WCPrm5sYGgwE97JSLYe/9fp/eAgQd7tGXlxd62CkXw6kOj2j2EnRMOUHHhNo3Juh9BWP2BR0Tat+YoPcVjNkXdEyofWOC3lcwZv8ooVOplPV6PSuXyzG3sR1Lp9NQb7lcWpiJXsPh0Gq1mn18fERWjxL64eHBGo1G5OJ3BcLbXuR6f3+3s7MzpPIve39/b81mM7J7dNC3t7fW7XYjF/5dwBM6rCOs+fHx8ds1u0JXq1ULD7ddV7FYtNFoZOfn5ycFvVgs7Orqyp6ennauu1KpfLv3qA1Db8Enk8nm07vZbLZ1u8lk0kqlknU6Hbu4uIiaGfl77xMdFvT6+ro52ePx2Far1dYac7ncZm+Xl5eRa9/5dMj852x48fj8MWmADj8/dR0C+u/aA/Jn6LAW5oX2qwV0on8KMup2DgkdtTb294Jm5cCeoEEwNi5oVg7sCRoEY+OCZuXAnqBBMDYuaFYO7AkaBGPjgmblwJ6gQTA2LmhWDuwJGgRj44Jm5cCeoEEwNi5oVg7sCRoEY+OCZuXAnqBBMDYuaFYO7AkaBGPjgmblwJ6gQTA2LmhWDuwJGgRj44Jm5cCeoEEwNi5oVg7sCRoEY+OCZuXAnqBBMDYuaFYO7AkaBGPjgmblwJ6gQTA2LmhWDuwJGgRj44Jm5cCeoEEwNi5oVg7sCRoEY+OCZuXAnqBBMDYuaFYO7AkaBGPjgmblwN5RQofv/Hh7e4u1lUwmY/P5PFb2kKGjhA7f6Ht3dxeJnc1mrdVq2fX19SENY83+A1wEswvPRmQnAAAAAElFTkSuQmCC"},function(t,e,i){t.exports=i.p+"static/img/me.a460f07.jpg"},function(t,e,i){i(16);var a=i(0)(i(10),i(29),"data-v-0fd1405d",null);t.exports=a.exports},function(t,e,i){i(18);var a=i(0)(i(11),i(31),"data-v-2e9b02c0",null);t.exports=a.exports},function(t,e,i){i(20);var a=i(0)(i(12),i(33),"data-v-52848e58",null);t.exports=a.exports},function(t,e,i){i(17);var a=i(0)(i(13),i(30),"data-v-145f5b80",null);t.exports=a.exports},function(t,e,i){i(19);var a=i(0)(i(14),i(32),"data-v-47b29c40",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[0==t.archiveId?i("article",{staticClass:"article"},[i("h3",{staticClass:"article-title"},[t._v("\n      "+t._s(t.titles[0])+"\n    ")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),1==t.archiveId?i("article",{staticClass:"article"},[i("h3",{staticClass:"article-title"},[t._v("\n          "+t._s(t.titles[1])+"\n        ")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),2==t.archiveId?i("article",{staticClass:"article"},[i("h3",{staticClass:"article-title"},[t._v("\n      "+t._s(t.titles[2])+"\n    ")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),3==t.archiveId?i("article",{staticClass:"article"},[i("h3",{staticClass:"article-title"},[t._v("\n          "+t._s(t.titles[3])+"\n      ")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),4==t.archiveId?i("article",{staticClass:"article"},[i("h3",{staticClass:"article-title"},[t._v("\n          "+t._s(t.titles[4])+"\n      ")]),t._v(" "),i("div",{staticClass:"content"})]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v("用gitbash进入类似命令行的窗口")]),t._v(" "),i("p",[t._v("用命令 cd e:/learngit 进入该目录，然后在此目录下初始化$ git init, 于是该文件夹就成为了一个工作区，里面的.git文件就是版本库（repository）")]),t._v(" "),i("p",[t._v("在工作区中新建一个文件，比如XXX.txt文件")]),t._v(" "),i("p",[t._v("在txt中添加‘1111’文本，用 $ git add XXX.txt命令将XXX.txt添加到缓存中")]),t._v(" "),i("p",[t._v("$ git status查看状态显示change to be committed(改变已经缓存）")]),t._v(" "),i("p",[t._v("已经缓存的文件是无法用$ git diff XXX.txt查看不同的,但可以用 $git diff HEAD -- XXX.txt（注意-- 后的空格）")]),t._v(" "),i("p",[t._v("然后，用 $ git commit -m'解释说明' 提交文档")]),t._v(" "),i("p",[t._v("提交之后会显示insertions(插入），deletion(删除），如果在最后添加新行会先删除最后一行，再补充最后一行的文本和新行文本，于是就会显示2 insertions ，1 deletions；")]),t._v(" "),i("p",[t._v("如果是在原行添加内容则会显示 1 insertions ，1 deletions；如果只是简单的插入一个新行则会显示 1 insertion")]),t._v(" "),i("p",[t._v("这时$ git status查看状态 显示nothing to commit working directory clean(没有东西提交，工作目录为空）")]),t._v(" "),i("p",[t._v("这时为txt添加一行，可以用$ git diff比较不同")]),t._v(" "),i("p",[t._v("再用 $ git status查看状态 changes not staged for commit(改变没有缓存到提交） 　　　　　　　　　　modified：XXX.txt no changes added to commit (也没有可以提交的改变)")]),t._v("\n      好，现在将文件缓存并提交后\n      "),i("p",[t._v("用$ git log可查看提交日志，但显示的条目有限，所以用$ git log --pretty=oneline更直观 按q可退出")]),t._v(" "),i("p",[t._v("用$ cat XXX.txt可查看当前工作区文本内容")]),t._v(" "),i("p",[t._v("用$ gir reset --hard 版本号 可回到相应的版本或者用 $ gir reset --hard HEAD^ 可回到上一个版本，回到前一百个版本$ gir reset --hard HEAD~100\n        ")]),i("p",[t._v("用$ git reflog(重新迫使） 可查看你的提交和回退日志，也就是命令日志，因此也能看到相应的版本号")]),t._v(" "),i("p",[t._v("$ git checkout -- XXX.txt 可以撤销修改，如果已经缓存再做修改，修改也只是在工作区，不会影响已经缓存的文档内容")]),t._v(" "),i("p",[t._v("$ git reset HEAD XXX.txt 会将文档回退到工作区的状态，如果文档在暂存区时作了修改,那这个修改也只是在工作区作出的，其实暂存区的文件只是一个副本而已，说是回退到工作区，其实不如说是删除该副本，比如文档文本为‘1’，缓存后再修改为‘12’，现在回退（也就是删除）那文档文本仍为‘12’")]),t._v(" "),i("p",[t._v("$ rm XXX.txt 可以删除工作区文档，但分支里的版本就跟工作区里的不一致了，也就是分支在工作区找不到对应的文件作比较，因此，你也需要把分支里的版本删除 $ git rm XXX.txt")]),t._v(" "),i("p",[t._v("？？？在master上更改后切换分支会报错：你的本地改变已经被改写，请先提交或stash（备份）后再切换，也就是说必须提交后才能切换，注意，这个时候即使缓存了也会报同样的错误，而在dev分支上修改再切换到master却可以，而且在dev分支上作的修改也会照样在master上呈现")]),t._v(" "),i("p",[t._v("$ git branch -d dev删除分支，如果你当前在dev分支上，你是无法删除dev分支的，需要切换到其他分支才能删除")]),t._v(" "),i("p",[t._v("如果在dev上作了修改。git stash 过后切换到master，修改master，stash后又切换到dev，会发现git stash list上{0}master {1}dev所以此时不能用git stash apply(不会删除stash list中的相应储存记录）或git stash pop（会删除list中的记录），应该用git stash apply @{1}")]),t._v(" "),i("p",[t._v("在dev和master的同一行修改了内容会引起冲突，比如dev ‘111’，master‘11111111’，虽然master只是在dev上增加了，但仍然冲突")]),t._v(" "),i("p",[t._v("如果在dev上创建了一个新分支conf，那么在远程任何分支上都可以创建conf ，在本地conf分支上push origin dev 则会把dev分支上的内容推送到远程dev上")]),t._v(" "),i("p",[t._v("git remote -v可查看当前分支在远程的情况")]),t._v(" "),i("p",[t._v("git remote show origin 可查看远程有哪些分支")]),t._v(" "),i("p",[t._v("获取远程分支 git fetch 此时查看分支列表没有显示刚获取的分支，需要切换到该分支下才行")]),t._v(" "),i("p",[t._v("删除远程分支 git push origin :dev 但是本地分支仍然存在，不会被影响")]),t._v(" "),i("p",[t._v("如果在远程创建了一个分支，而该分支和本地分支同名，当切换到该分支时会提示用 ‘git pull’更新本地分支,其实pull就相当于更新的功能")]),t._v(" "),i("p",[t._v("???克隆远程仓库时只能看到master分支，想在dev分支上开发需要 git checkout -b dev origin/dev")]),t._v(" "),i("p",[t._v("如果在远程的dev分支上修改，然后在本地conf分支上使用 git pull可以看到远程有哪些文件修改了，当切换到dev分支上时还需要再次git pull才可更新该分支")]),t._v(" "),i("p",[t._v("如果在工作区新建了一个文件，此时在dev分支上add并commit再push，那就只在远程dev上有该文件")]),t._v(" "),i("p",[t._v("git log可以查看在当前分支下的版本记录，如果该分支是在其他分支上创建的，那相应的记录也会复制过来")]),t._v(" "),i("p",[t._v("git tag v1.0可以在给该分支的最近一次提交打上标签，git tag v1.0 版本号 可以给相应版本打上标签，无论在哪一个分支上，用git reset --hard v1.0都可以使该分支下的文件回退到该版本")]),t._v(" "),i("p",[t._v("git tag 查看所有标签 git show v1.0查看标签信息")]),t._v(" "),i("p",[t._v("这里区分一下$ gir reset --hard v1.0（重新设置为硬盘里的v1.0版本） $ git checkout -- XXX.txt (切换到当前文本，也就是未被修改时的状态）$ git reset HEAD XXX.txt（重新设置为当前指针所指的版本，也就是缓存了的时候撤回工作区）什么时候- ，什么时候-- 如：-m，--hard")]),t._v(" "),i("p",[t._v("git branch --set-upstream-to=origin/dev")]),t._v(" "),i("p",[t._v("从pull过后，本地会多出一行")]),t._v(" "),i("p",[t._v("？？？在本地pull后再push，push成功后在远程发生冲突")]),t._v(" "),i("p",[t._v("删除操作也需要提交")]),t._v(" "),i("p",[t._v("B分支衍生于A分支的话，B分支会保存A分支的提交历史， git checkout --orphan dev创建一个无提交历史的干净的dev 分支")]),t._v(" "),i("p",[t._v("git rm -r --cached 文件夹名 //取消跟踪")]),t._v(" "),i("p",[t._v("git rm --cached 文件名")]),t._v(" "),i("p",[t._v(".gitignore /.json 忽略当前目录下的json .json忽略所有json文件 即使不忽略!myfile myfile下的json仍然被忽略，无论!myfile ，*json这两条语句前后")]),t._v(" "),i("p",[t._v("git ls-files 查看已经被跟踪的文件")]),t._v(" "),i("p",[t._v("git branch -m kill 重命名当前分支为kill")]),t._v(" "),i("p",[t._v("git checkout -f 强制撤销本地修改，对工作区和缓存区的修改都有效，对已经提交的修改无效")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v("浏览器的渲染引擎（如 chrome 的webkit）会先构建DOM树（从<html>标签开始），在遇到外部css文件时会停止构建DOM树，转而解析css文件，构建CSSOM树，完成后会继续构建DOM树，同时与已经构建好的DOM树节点共同构建渲染树，并将内容绘制在屏幕上，而这是一个渐进的过程，不会等到DOM树与CSSOM树共同构建好完整的渲染树才会将内容呈现。")]),t._v(" "),i("p",[t._v("在遇到js文件时也会立即停止构建DOM树，启动js引擎解析js脚本，在解析js过程中，会预解析页面的剩余部分，注意：预解析只是会发送请求接受响应并加载文件而不会解析文件内容。")]),t._v(" "),i("p",[i("i",[t._v("预解析：")]),t._v("Webkit 和 Firefox 都进行了这项优化。在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。请注意，预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。")]),t._v(" "),i("p",[t._v("进入页面后页面呈现空白并弹出要求用户操作的对话框，此时可查看chrome控制台Network,会发现在此脚本之后需要加载的部分外部文件(比如图片)已经响应成功了（status：200），但部分外部文件仍处于pending状态，这依网络环境而定。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v("priority: 在同一个元素上的指令，数字越大优先级越高，优先级越高controller和pre-link函数越先执行，而post-link则相反。该项不适用不在同一元素上的指令")]),t._v(" "),i("p",[t._v("terminal：如果设置为true，那么该指令最后一个执行，优先级低于该指令的指令全都被忽略")]),t._v(" "),i("p",[t._v("scope：<mydir attr='variable' attr2='{str}' on-ok='foo(a)'></mydir>\n        ")]),i("p",[t._v("scope：{ attr：‘=’, attr2:'@', onOk:'&'}")]),t._v(" "),i("p",[t._v("'='表示与属性中的变量双向绑定，与父作用域中的变量会相互影响，所以 attr= 后面必须跟一个变量；‘@’表示引用一个字符串之类的表达式")]),t._v(" "),i("p",[t._v("‘&’表示引用一个函数，首先用一个function把他包裹起来，因此onOk=function(a){ foo(a); },如果表达式中包含函数表达式，那么需要将函数写在")]),t._v(" "),i("p",[t._v("parent scope的function中，比如on-ok = ‘show=false’，直接用 ‘&’引用会报错， ‘show=false’ 只能用@，把他当做字符串处理，因此需要在父作用域中")]),t._v(" "),i("p",[t._v("$scope.isShow=function(){$scope.show=false},然后on-ok='isShow()'才行")]),t._v(" "),i("p",[t._v(" bindToController：设置为true的话，此属性会作为scope与controller联系的桥梁")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v(" $injector:")]),t._v(" "),i("p",[t._v("（When you request a service, the $injector is responsible for finding the correct service provider, instantiating it and then calling its $get service factory function to get the instance of the service.）")]),t._v(" "),i("p",[t._v("$injector用来提供正确的服务provider，实例化服务，然后调用他的$get方法来获取服务实例")]),t._v(" "),i("p",[t._v("// 加载了2个模块中的服务,此处必须传入一个数组，即使只加载一个模块,并且angular.injector()可以调用多次，每次都返回新建的injector对象。 //$injector用法跟此例相同，只不过是作为服务注入到其他服务中去，然后又调用get，invoke等方法实例化其他服务\n      ")]),t._v(" "),i("p",[t._v("$provide:")]),t._v(" "),i("p",[t._v("(The $provide service has a number of methods for registering components with the$injector. Many of these functions are also exposed on angular.Module.)")]),t._v(" "),i("p",[t._v("$provide 服务有一系列的方法（6个方法: provider,value,constant,factory,service,decorator)，这些方法用 $injector来注册组件，大部分的方法都暴露在了angular.module下，也就是可以直接在module下调用这些函数。")]),t._v(" "),i("p",[t._v("注意，所有服务都是延迟实例化的。这意味着所有的服务只有在需要时，或者被依赖时才会实例化。换句话说，AngularJS不会实例化服务，除非被请求了或者被应用直接或间接依赖了。")]),t._v(" "),i("p",[t._v("provider的第二个参数如果是一个对象（第一种情况），会检索该对象的$get方法，然后调用该方法，最终得到的就是直接调用该方法后的返回值，而不是将该方法作为构造函数返回的新对象。如果第二个参数是函数，则会将该函数作为构造函数创建一个新对象，又再去检索$get方法，和第一种情况相同")]),t._v(" "),i("p",[t._v("factory的第二个参数最终也会作为$get方法返回一个值，而service第二个参数是传入一个构造器，因此只会返回对象(当然也包括数组，函数等)")]),t._v(" "),i("p",[t._v("value服务不能作为依赖注入config（）方法中， 也就是 .config( function(value){ } )会报错, 但可作为依赖注入其他服务，并且值可以改变，constant可以注入config（）中，但值不可被改变")]),t._v(" "),i("p",[t._v("decorator服务能够修改除constant（否则报错）以外的其他服务，第二个参数必须是一个函数，否则报错，就算修改value服务的值也需要在函数中返回修改后的值；修改service服务是可以返回任何值，不仅限于对象。 使用decorator必须在相应服务定义了之后才能修改，否则会报出找不到相应服务的错误。函数中传入的$delegate代表修改之前服务返回的原始值；")]),t._v(" "),i("p",[t._v("（此外，如controllerProvide.register(name,constructor)，$filterProvider等$filterProvider.register(name,factory)可以用来注册一个过滤器，跟在模块上注册服务是一样的；）")]),t._v(" "),i("p",[t._v("run块，config块：")]),t._v(" "),i("p",[t._v("Configuration blocks - get executed during the provider registrations and configuration phase. Only providers and constants can be injected into configuration blocks. This is to prevent accidental instantiation of services before they have been fully configured. Run blocks - get executed after the injector is created and are used to kickstart the application. Only instances and constants can be injected into run blocks. This is to prevent further system configuration during application run time.")]),t._v(" "),i("p",[t._v("When bootstrapping, first Angular applies all constant definitions. Then Angular applies configuration blocks in the same order they were r　egistered.")]),t._v(" "),i("p",[t._v("Run blocks are the closest thing in Angular to the main method. A run block is the code which needs to run to kickstart the application. It is executed after all of the services have been configured and the injector has been created. Run blocks typically contain code which is hard t o unit-test, and for this reason should be declared in isolated modules, so that they can be ignored in the unit-tests.")]),t._v(" "),i("p",[t._v("当引导程序开始时，angular会先运行所有的constant定义，这是为了可以在config运行之前注入config中，接着是config块会按照注册的顺序被执行，最后才是run块在服务配置好和注入器被创建之后执行。")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.articles,function(e){return i("article",{staticClass:"article-item"},[i("h3",{staticClass:"article-title"},[i("a",{staticClass:"article-title-link",attrs:{href:t.createLink(e.id)}},[t._v("\n        "+t._s(e.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"article-profile"},[i("span",{staticClass:"article-text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),t._v(" "),i("span",[t._v("......")]),t._v(" "),i("a",{staticClass:"article-readall",attrs:{href:t.createLink(e.id)}},[t._v("阅读全文")])]),t._v(" "),i("div",{staticClass:"article-footer"},t._l(e.tags,function(e,a){return i("a",{staticClass:"tag",class:t.color[a]},[t._v("\n      "+t._s(e)+"\n      ")])}))])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.articles,function(e){return i("article",{staticClass:"article-item"},[i("h3",{staticClass:"article-title"},[i("a",{staticClass:"article-title-link",attrs:{href:t.createLink(e.id)}},[t._v("\n        "+t._s(e.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"article-profile"},[i("span",{staticClass:"article-text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),t._v(" "),i("span",[t._v("......")]),t._v(" "),i("a",{staticClass:"article-readall",attrs:{href:t.createLink(e.id)}},[t._v("        \n        阅读全文\n      ")])]),t._v(" "),i("div",{staticClass:"article-footer"},t._l(e.tags,function(e,a){return i("a",{staticClass:"tag",class:t.color[a]},[t._v("\n      "+t._s(e)+"\n      ")])}))])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.articles,function(e){return i("article",{staticClass:"article-item"},[i("h3",{staticClass:"article-title"},[i("a",{staticClass:"article-title-link",attrs:{href:t.createLink(e.id)}},[t._v("\n        "+t._s(e.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"article-profile"},[i("span",{staticClass:"article-text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),t._v(" "),i("span",[t._v("......")]),t._v(" "),i("a",{staticClass:"article-readall",attrs:{href:"#/archive/1"}},[t._v("阅读全文")])]),t._v(" "),i("div",{staticClass:"article-footer"},t._l(e.tags,function(e,a){return i("a",{staticClass:"tag",class:t.color[a]},[t._v("\n      "+t._s(e)+"\n      ")])}))])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.articles,function(e){return i("article",{staticClass:"article-item"},[i("h3",{staticClass:"article-title"},[i("a",{staticClass:"article-title-link",attrs:{href:t.createLink(e.id)}},[t._v("\n        "+t._s(e.title)+"\n      ")])]),t._v(" "),i("div",{staticClass:"article-profile"},[i("span",{staticClass:"article-text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),t._v(" "),i("span",[t._v("......")]),t._v(" "),i("a",{staticClass:"article-readall",attrs:{href:t.createLink(e.id)}},[t._v("阅读全文")])]),t._v(" "),i("div",{staticClass:"article-footer"},t._l(e.tags,function(e,a){return i("a",{staticClass:"tag",class:t.color[a]},[t._v("\n      "+t._s(e)+"\n      ")])}))])}))},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("div",{staticClass:"container clearfix"},[a("img",{staticClass:"logo",attrs:{src:i(22)}}),t._v(" "),a("ul",{staticClass:"nav"},t._l(t.tabs,function(e,i){return a("li",{staticClass:"nav-li"},[a("a",{staticClass:"nav-a",class:{active:t.activeLink==e.link},attrs:{href:e.link},on:{click:function(i){t.activeLink=e.link}}},[a("i",{class:e.icon}),t._v(" "),a("span",{staticClass:"nav-text"},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"nav-li-detail"})])})),t._v(" "),t._m(0)])]),t._v(" "),a("router-view",{staticClass:"view"})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("img",{staticClass:"profile-img",attrs:{src:i(23)}}),t._v(" "),a("div",{staticClass:"profile-content"},[a("ul",{staticClass:"profile-list"},[a("li",{staticClass:"profile-item"},[a("span",{staticClass:"profile-item-title"},[t._v("E-mail:")]),t._v(" "),a("div",[t._v("736726698@qq.com")])]),t._v(" "),a("li",{staticClass:"profile-item"},[a("span",{staticClass:"profile-item-title"},[t._v("Tel:")]),t._v(" "),a("div",[t._v("18285002707")])])])])])}]}}],[15]);
//# sourceMappingURL=app.74794543d777455452c1.js.map