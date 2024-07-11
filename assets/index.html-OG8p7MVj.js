import{_ as s,c as n,o as a,a as l}from"./app-J0BX9W0f.js";const e="/image/20240709142634.png",i="/image/20240709142736.png",t="/image/20240709144517.png",r="/image/20240709144548.png",p="/image/20240709144636.png",u="/image/20240709144706.png",c={},d=l('<h1 id="安卓tts朗读" tabindex="-1"><a class="header-anchor" href="#安卓tts朗读"><span>安卓TTS朗读</span></a></h1><p>分句翻译安卓版支持调用外部TTS引擎，可以支持上百种朗读音色，下面介绍两个主流的外部TTS引擎导入教程。</p><h3 id="multitts教程" tabindex="-1"><a class="header-anchor" href="#multitts教程"><span>MultiTTS教程</span></a></h3><p>分句翻译安卓3.1.4版本支持MultiTTS语音引擎，下面是使用方法。</p><h4 id="需要下载的资源" tabindex="-1"><a class="header-anchor" href="#需要下载的资源"><span>需要下载的资源：</span></a></h4><ol><li><p><strong>MultiTTS 安卓APP</strong></p><ul><li><a href="https://www.123pan.com/s/nkR7jv-hqvDv.html" target="_blank" rel="noopener noreferrer">下载链接</a></li></ul></li><li><p><strong>英文TTS</strong></p><ul><li><a href="https://www.123pan.com/s/nkR7jv-HqvDv.html" target="_blank" rel="noopener noreferrer">下载链接</a></li></ul></li><li><p><strong>中文TTS</strong></p><ul><li><a href="https://www.123pan.com/s/nkR7jv-AqvDv.html" target="_blank" rel="noopener noreferrer">下载链接</a></li></ul></li></ol><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤：</span></a></h4><ol><li><p><strong>安装MultiTTS 安卓APP并打开</strong></p></li><li><p><strong>导入数据</strong></p><ul><li>分别导入英文TTS和中文TTS两个zip压缩包文件</li></ul></li></ol><p><img src="'+e+'" alt="Example Image"></p><ol start="3"><li><strong>软件设置</strong></li></ol><p><img src="'+i+'" alt="Example Image"></p><ol start="4"><li><strong>开启“本地配置”和“合成对话”</strong></li></ol><p><img src="'+t+'" alt="Example Image"></p><ol start="5"><li><strong>回到应用首页，设置语速和对话</strong><ul><li>语速设为32，长按情感女声中的“南芳”设为对话。<strong>注意是长按</strong></li></ul></li></ol><p><img src="'+r+'" alt="Example Image"></p><ol start="6"><li><strong>切换到“微软语音”，设置旁白</strong><ul><li>点击“en-US,Jenny”，设为旁白。<strong>注意是点击</strong></li></ul></li></ol><p><img src="'+p+'" alt="Example Image"></p><ol start="7"><li><strong>分句翻译设置</strong><ul><li>打开分句翻译，进入双语阅读页面，找到“朗读设置”，选择“multitts”</li></ul></li></ol><p><img src="'+u+`" alt="Example Image"></p><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项：</span></a></h4><ul><li>教程中特别强调了哪些操作需要长按，哪些需要点击，请严格按照图片中的标注进行操作。</li></ul><h4 id="更多tts资源获取" tabindex="-1"><a class="header-anchor" href="#更多tts资源获取"><span>更多TTS资源获取：</span></a></h4><ul><li><p><strong>multiTTS官方频道</strong></p><ul><li><a href="https://t.me/MultiTTS_channel" target="_blank" rel="noopener noreferrer">访问链接</a></li></ul></li><li><p><strong>multiTTS交流群</strong></p><ul><li><a href="https://t.me/MultiTTS" target="_blank" rel="noopener noreferrer">加入群组</a></li></ul></li></ul><hr><h3 id="tts-server导入教程" tabindex="-1"><a class="header-anchor" href="#tts-server导入教程"><span>tts_server导入教程</span></a></h3><h4 id="tts-server-安卓版下载地址" tabindex="-1"><a class="header-anchor" href="#tts-server-安卓版下载地址"><span>TTS Server 安卓版下载地址</span></a></h4><ul><li>访问 <a href="https://github.com/jing332/tts-server-android/releases" target="_blank" rel="noopener noreferrer">TTS Server GitHub Releases 页面</a> 以获取最新版本。</li></ul><p>打开tts_server，在右上角菜单<strong>勾选多语音</strong>，然后选择导入下面代码：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;group&quot;: {</span>
<span class="line">        &quot;id&quot;: 1695085210756,</span>
<span class="line">        &quot;name&quot;: &quot;分句翻译&quot;,</span>
<span class="line">        &quot;isExpanded&quot;: true</span>
<span class="line">    },</span>
<span class="line">    &quot;list&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: 1695085242891,</span>
<span class="line">            &quot;groupId&quot;: 1695085210756,</span>
<span class="line">            &quot;displayName&quot;: &quot;云健（zh-CN-YunjianNeural）&quot;,</span>
<span class="line">            &quot;isEnabled&quot;: true,</span>
<span class="line">            &quot;speechRule&quot;: {</span>
<span class="line">                &quot;target&quot;: 4,</span>
<span class="line">                &quot;tag&quot;: &quot;dialogue&quot;,</span>
<span class="line">                &quot;tagRuleId&quot;: &quot;ttsrv.multi_voice&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;tts&quot;: {</span>
<span class="line">                &quot;#type&quot;: &quot;internal&quot;,</span>
<span class="line">                &quot;voiceName&quot;: &quot;zh-CN-YunjianNeural&quot;,</span>
<span class="line">                &quot;prosody&quot;: {</span>
<span class="line">                    &quot;rate&quot;: -8</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: 1695085374545,</span>
<span class="line">            &quot;groupId&quot;: 1695085210756,</span>
<span class="line">            &quot;displayName&quot;: &quot;Michelle（en-US-MichelleNeural）&quot;,</span>
<span class="line">            &quot;isEnabled&quot;: true,</span>
<span class="line">            &quot;speechRule&quot;: {</span>
<span class="line">                &quot;target&quot;: 4,</span>
<span class="line">                &quot;tag&quot;: &quot;narration&quot;,</span>
<span class="line">                &quot;tagRuleId&quot;: &quot;ttsrv.multi_voice&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;tts&quot;: {</span>
<span class="line">                &quot;#type&quot;: &quot;internal&quot;,</span>
<span class="line">                &quot;locale&quot;: &quot;en-US&quot;,</span>
<span class="line">                &quot;voiceName&quot;: &quot;en-US-MichelleNeural&quot;,</span>
<span class="line">                &quot;prosody&quot;: {</span>
<span class="line">                    &quot;rate&quot;: -15</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>朗读规则管理代码：</strong></p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let SpeechRuleJS = {</span>
<span class="line">    name: &quot;分句翻译&quot;,</span>
<span class="line">    id: &quot;ttsrv.multi_voice&quot;,</span>
<span class="line">    author: &quot;TTS Server&quot;,</span>
<span class="line">    version: 4,</span>
<span class="line">    tags: {narration: &quot;旁白&quot;, dialogue: &quot;对话&quot;},</span>
<span class="line"></span>
<span class="line">    handleText(text) {</span>
<span class="line">        const list = [];</span>
<span class="line">        let tmpStr = &quot;&quot;;</span>
<span class="line">        let endTag = &quot;narration&quot;;</span>
<span class="line"></span>
<span class="line">        text.split(&quot;&quot;).forEach((char, index) =&gt; {</span>
<span class="line">            tmpStr += char;</span>
<span class="line"></span>
<span class="line">            if (char === &#39;{&#39;) {</span>
<span class="line">                endTag = &quot;dialogue&quot;;</span>
<span class="line">                list.push({text: tmpStr, tag: &quot;narration&quot;});</span>
<span class="line">                tmpStr = &quot;&quot;;</span>
<span class="line">            } else if (char === &#39;}&#39;) {</span>
<span class="line">                endTag = &quot;narration&quot;;</span>
<span class="line">                tmpStr = tmpStr.slice(0, -1)</span>
<span class="line">                list.push({text: tmpStr, tag: &quot;dialogue&quot;});</span>
<span class="line">                tmpStr = &quot;&quot;;</span>
<span class="line">            } else if (index === text.length - 1) {</span>
<span class="line">                list.push({text: tmpStr, tag: endTag});</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        return list;</span>
<span class="line">    },</span>
<span class="line"></span>
<span class="line">    splitText(text) {</span>
<span class="line">        let separatorStr = &quot;。？?！!;；&quot;</span>
<span class="line"></span>
<span class="line">        let list = []</span>
<span class="line">        let tmpStr = &quot;&quot;</span>
<span class="line">        text.split(&quot;&quot;).forEach((char, index) =&gt; {</span>
<span class="line">            tmpStr += chacharr</span>
<span class="line"></span>
<span class="line">            if (separatorStr.includes(char)) {</span>
<span class="line">                list.push(tmpStr)</span>
<span class="line">                tmpStr = &quot;&quot;</span>
<span class="line">            } else if (index === text.length - 1) {</span>
<span class="line">                list.push(tmpStr);</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line"></span>
<span class="line">        return list.filter(item =&gt;  item.replace(/[“”]/g, &#39;&#39;).trim().length &gt; 0);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[d];function v(m,q){return a(),n("div",null,o)}const g=s(c,[["render",v],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/skills/","title":"安卓TTS朗读","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"MultiTTS教程","slug":"multitts教程","link":"#multitts教程","children":[]},{"level":3,"title":"tts_server导入教程","slug":"tts-server导入教程","link":"#tts-server导入教程","children":[]}],"git":{},"filePathRelative":"skills/README.md"}');export{g as comp,h as data};
