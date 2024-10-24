import{s as _,a as g,H as y,b as n}from"./assets/index.1CxfGuLD.js";let c={};function f(){return Object.fromEntries(y.map(s=>[s,null]))}async function E(s,a,t=null){const e=t?t.url:_(s);let r=t||{url:e,method:a,headers:{},body:void 0};a==="GET"&&delete r.body;try{const o=await fetch(r.url,{method:r.method,headers:r.headers,...a!=="GET"&&{body:r.body}}),i={};o.headers.forEach((p,b)=>{i[b]=p});const h=await o.text(),d={success:!0,url:r.url,status:o.status,statusText:o.statusText,headers:i,body:g.js(h,{indent_size:2,indent_char:" ",max_preserve_newlines:2,preserve_newlines:!0,keep_array_indentation:!1,break_chained_methods:!1,brace_style:"collapse",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!1,wrap_line_length:0,indent_inner_html:!1,comma_first:!1,e4x:!1,indent_empty_lines:!1})};return c[e]||(c[e]=f()),c[e][a]=d,d}catch(o){console.error("Error in HTTP request:",o);const i={success:!1,url:r.url,status:0,statusText:"Error",headers:{Error:o.toString()},body:"Failed to fetch"};return c[e]||(c[e]=f()),c[e][a]=i,i}}function u(){c={}}function m(){u()}async function T(s){return null}let l=!1;n.storage.local.get("autoParserEnabled").then(s=>{l=s.autoParserEnabled||!1});m();n.runtime.onMessage.addListener((s,a,t)=>{const e=s;switch(e.action){case"getAutoParserState":t({success:!0,state:l});break;case"setAutoParserState":typeof e.state=="boolean"?(l=e.state,n.storage.local.set({autoParserEnabled:l}),t({success:!0}),S()):t({success:!1,error:"Invalid state provided"});break;case"sendRequest":if(e.endpoint&&e.method)return E(e.endpoint,e.method,e.customRequest).then(r=>{t(r)}).catch(r=>{console.error("Error in handleSendRequest:",r),t({success:!1,error:r.message,url:e.customRequest?.url||e.endpoint.url,status:0,statusText:"Error",headers:{Error:r.toString()},body:"Failed to fetch"})}),!0;t({success:!1,error:"Invalid endpoint or method provided"});break;case"clearResponseCache":u(),t({success:!0});break;case"getRequestDetails":if(e.url)return T(e.url).then(r=>t({success:!0,details:r})).catch(r=>t({success:!1,error:r.message})),!0;t({success:!1,error:"URL not provided"});break;default:t({success:!1,error:"Unknown action"})}});function S(){n.tabs.query({}).then(s=>{s.forEach(a=>{a.id&&n.tabs.sendMessage(a.id,{action:"autoParserStateChanged",state:l}).catch(()=>{})})})}n.tabs.onUpdated.addListener((s,a,t)=>{a.status==="complete"&&t.url&&t.url.startsWith("http")&&n.tabs.sendMessage(s,{action:"checkContentScriptInjected"}).catch(()=>{n.tabs.executeScript(s,{file:"content-script.js"}).then(()=>{n.tabs.sendMessage(s,{action:"autoParserStateChanged",state:l})})})});n.runtime.onInstalled.addListener(s=>{(s.reason==="install"||s.reason==="update")&&u()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2JhY2tncm91bmQvaHR0cFJlcXVlc3RIYW5kbGVyLnRzIiwiLi4vc3JjL2JhY2tncm91bmQtbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBzYW5pdGl6ZVVSTCB9IGZyb20gJy4uL3V0aWxzL2RlZmF1bHR2aWV3X3V0aWxzJztcclxuaW1wb3J0IHsgRW5kcG9pbnQsIEh0dHBNZXRob2QsIFJlcXVlc3REZXRhaWxzLCBSZXNwb25zZURldGFpbHMsIFJlc3BvbnNlQ2FjaGUgfSBmcm9tICcuLi9jb25zdGFudHMvbWVzc2FnZV90eXBlcyc7XHJcbmltcG9ydCB7IGpzIGFzIGJlYXV0aWZ5IH0gZnJvbSAnanMtYmVhdXRpZnknO1xyXG5pbXBvcnQgeyBIVFRQX01FVEhPRFMgfSBmcm9tICcuLi9jb25zdGFudHMvZGVmYXVsdHZpZXdfY29udGFudHMnO1xyXG5cclxubGV0IHJlc3BvbnNlQ2FjaGU6IFJlc3BvbnNlQ2FjaGUgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVSZXNwb25zZUNhY2hlKCk6IFJlY29yZDxIdHRwTWV0aG9kLCBSZXNwb25zZURldGFpbHMgfCBudWxsPiB7XHJcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgIEhUVFBfTUVUSE9EUy5tYXAobWV0aG9kID0+IFttZXRob2QsIG51bGxdKVxyXG4gICkgYXMgUmVjb3JkPEh0dHBNZXRob2QsIFJlc3BvbnNlRGV0YWlscyB8IG51bGw+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VuZFJlcXVlc3QoZW5kcG9pbnQ6IEVuZHBvaW50LCBtZXRob2Q6IEh0dHBNZXRob2QsIGN1c3RvbVJlcXVlc3Q6IFJlcXVlc3REZXRhaWxzIHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPFJlc3BvbnNlRGV0YWlscz4ge1xyXG4gIGNvbnN0IHVybCA9IGN1c3RvbVJlcXVlc3QgPyBjdXN0b21SZXF1ZXN0LnVybCA6IHNhbml0aXplVVJMKGVuZHBvaW50KTtcclxuICBsZXQgcmVxdWVzdERldGFpbHM6IFJlcXVlc3REZXRhaWxzID0gY3VzdG9tUmVxdWVzdCB8fCB7XHJcbiAgICB1cmwsXHJcbiAgICBtZXRob2QsXHJcbiAgICBoZWFkZXJzOiB7fSxcclxuICAgIGJvZHk6IHVuZGVmaW5lZFxyXG4gIH07XHJcbiAgXHJcblxyXG4gIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICBkZWxldGUgcmVxdWVzdERldGFpbHMuYm9keTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3REZXRhaWxzLnVybCwge1xyXG4gICAgICBtZXRob2Q6IHJlcXVlc3REZXRhaWxzLm1ldGhvZCxcclxuICAgICAgaGVhZGVyczogcmVxdWVzdERldGFpbHMuaGVhZGVycyxcclxuICAgICAgLi4uKG1ldGhvZCAhPT0gJ0dFVCcgJiYgeyBib2R5OiByZXF1ZXN0RGV0YWlscy5ib2R5IH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIG5hbWUpID0+IHtcclxuICAgICAgcmVzcG9uc2VIZWFkZXJzW25hbWVdID0gdmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VEZXRhaWxzOiBSZXNwb25zZURldGFpbHMgPSB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHVybDogcmVxdWVzdERldGFpbHMudXJsLFxyXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcclxuICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcclxuICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gICAgICBib2R5OiBiZWF1dGlmeShyZXNwb25zZUJvZHksIHtcclxuICAgICAgICBpbmRlbnRfc2l6ZTogMixcclxuICAgICAgICBpbmRlbnRfY2hhcjogJyAnLFxyXG4gICAgICAgIG1heF9wcmVzZXJ2ZV9uZXdsaW5lczogMixcclxuICAgICAgICBwcmVzZXJ2ZV9uZXdsaW5lczogdHJ1ZSxcclxuICAgICAgICBrZWVwX2FycmF5X2luZGVudGF0aW9uOiBmYWxzZSxcclxuICAgICAgICBicmVha19jaGFpbmVkX21ldGhvZHM6IGZhbHNlLFxyXG4gICAgICAgIGJyYWNlX3N0eWxlOiBcImNvbGxhcHNlXCIsXHJcbiAgICAgICAgc3BhY2VfYmVmb3JlX2NvbmRpdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgIHVuZXNjYXBlX3N0cmluZ3M6IGZhbHNlLFxyXG4gICAgICAgIGpzbGludF9oYXBweTogZmFsc2UsXHJcbiAgICAgICAgZW5kX3dpdGhfbmV3bGluZTogZmFsc2UsXHJcbiAgICAgICAgd3JhcF9saW5lX2xlbmd0aDogMCxcclxuICAgICAgICBpbmRlbnRfaW5uZXJfaHRtbDogZmFsc2UsXHJcbiAgICAgICAgY29tbWFfZmlyc3Q6IGZhbHNlLFxyXG4gICAgICAgIGU0eDogZmFsc2UsXHJcbiAgICAgICAgaW5kZW50X2VtcHR5X2xpbmVzOiBmYWxzZVxyXG4gICAgICB9IGFzIGFueSlcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2FjaGUgdGhlIHJlc3BvbnNlXHJcbiAgICBpZiAoIXJlc3BvbnNlQ2FjaGVbdXJsXSkge1xyXG4gICAgICByZXNwb25zZUNhY2hlW3VybF0gPSBpbml0aWFsaXplUmVzcG9uc2VDYWNoZSgpO1xyXG4gICAgfVxyXG4gICAgcmVzcG9uc2VDYWNoZVt1cmxdW21ldGhvZF0gPSByZXNwb25zZURldGFpbHM7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlRGV0YWlscztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gSFRUUCByZXF1ZXN0OicsIGVycm9yKTtcclxuICAgIGNvbnN0IGVycm9yUmVzcG9uc2U6IFJlc3BvbnNlRGV0YWlscyA9IHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIHVybDogcmVxdWVzdERldGFpbHMudXJsLFxyXG4gICAgICBzdGF0dXM6IDAsXHJcbiAgICAgIHN0YXR1c1RleHQ6ICdFcnJvcicsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0Vycm9yJzogKGVycm9yIGFzIEVycm9yKS50b1N0cmluZygpIH0sXHJcbiAgICAgIGJvZHk6ICdGYWlsZWQgdG8gZmV0Y2gnXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhY2hlIHRoZSBlcnJvciByZXNwb25zZVxyXG4gICAgaWYgKCFyZXNwb25zZUNhY2hlW3VybF0pIHtcclxuICAgICAgcmVzcG9uc2VDYWNoZVt1cmxdID0gaW5pdGlhbGl6ZVJlc3BvbnNlQ2FjaGUoKTtcclxuICAgIH1cclxuICAgIHJlc3BvbnNlQ2FjaGVbdXJsXVttZXRob2RdID0gZXJyb3JSZXNwb25zZTtcclxuXHJcbiAgICByZXR1cm4gZXJyb3JSZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkUmVzcG9uc2UodXJsOiBzdHJpbmcsIG1ldGhvZDogSHR0cE1ldGhvZCk6IFJlc3BvbnNlRGV0YWlscyB8IG51bGwge1xyXG4gIHJldHVybiByZXNwb25zZUNhY2hlW3VybF0/LlttZXRob2RdIHx8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlc3BvbnNlQ2FjaGUoKTogdm9pZCB7XHJcbiAgcmVzcG9uc2VDYWNoZSA9IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFJlcXVlc3RIYW5kbGVyKCk6IHZvaWQge1xyXG4gIGNsZWFyUmVzcG9uc2VDYWNoZSgpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWVzdERldGFpbHModXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlcXVlc3REZXRhaWxzIHwgbnVsbD4ge1xyXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIGltcGxlbWVudGVkIGlmIHlvdSBuZWVkIHRvIHJldHJpZXZlXHJcbiAgLy8gZGV0YWlscyBhYm91dCBhIHNwZWNpZmljIHJlcXVlc3QgaW4gdGhlIGZ1dHVyZVxyXG4gIHJldHVybiBudWxsO1xyXG59IiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVJlc3BvbnNlLCBIdHRwTWV0aG9kLCBFbmRwb2ludCwgUmVxdWVzdERldGFpbHMsIE1lc3NhZ2VTZW5kZXIgfSBmcm9tICcuL2NvbnN0YW50cy9tZXNzYWdlX3R5cGVzJztcclxuaW1wb3J0IHsgaGFuZGxlU2VuZFJlcXVlc3QsIGluaXRSZXF1ZXN0SGFuZGxlciwgY2xlYXJSZXNwb25zZUNhY2hlLCBnZXRSZXF1ZXN0RGV0YWlscyB9IGZyb20gJy4vYmFja2dyb3VuZC9odHRwUmVxdWVzdEhhbmRsZXInO1xyXG5cclxubGV0IGlzQXV0b1BhcnNlckVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIGF1dG8gcGFyc2VyIHN0YXRlIGFuZCByZXF1ZXN0IGhhbmRsZXJcclxuYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgnYXV0b1BhcnNlckVuYWJsZWQnKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAoaXNBdXRvUGFyc2VyRW5hYmxlZCBhcyBhbnkpID0gcmVzdWx0LmF1dG9QYXJzZXJFbmFibGVkIHx8IGZhbHNlO1xyXG59KTtcclxuaW5pdFJlcXVlc3RIYW5kbGVyKCk7XHJcblxyXG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gcG9wdXAgYW5kIGNvbnRlbnQgc2NyaXB0c1xyXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiB1bmtub3duLCBzZW5kZXI6IE1lc3NhZ2VTZW5kZXIsIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlOiB1bmtub3duKSA9PiB2b2lkKSA9PiB7XHJcbiAgY29uc3QgdHlwZWRNZXNzYWdlID0gbWVzc2FnZSBhcyBNZXNzYWdlO1xyXG4gIFxyXG4gIHN3aXRjaCAodHlwZWRNZXNzYWdlLmFjdGlvbikge1xyXG4gICAgY2FzZSAnZ2V0QXV0b1BhcnNlclN0YXRlJzpcclxuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSwgc3RhdGU6IGlzQXV0b1BhcnNlckVuYWJsZWQgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnc2V0QXV0b1BhcnNlclN0YXRlJzpcclxuICAgICAgaWYgKHR5cGVvZiB0eXBlZE1lc3NhZ2Uuc3RhdGUgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgIGlzQXV0b1BhcnNlckVuYWJsZWQgPSB0eXBlZE1lc3NhZ2Uuc3RhdGU7XHJcbiAgICAgICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGF1dG9QYXJzZXJFbmFibGVkOiBpc0F1dG9QYXJzZXJFbmFibGVkIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgICAgbm90aWZ5QWxsVGFicygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgc3RhdGUgcHJvdmlkZWQnIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnc2VuZFJlcXVlc3QnOlxyXG4gICAgICBpZiAodHlwZWRNZXNzYWdlLmVuZHBvaW50ICYmIHR5cGVkTWVzc2FnZS5tZXRob2QpIHtcclxuICAgICAgICBoYW5kbGVTZW5kUmVxdWVzdCh0eXBlZE1lc3NhZ2UuZW5kcG9pbnQgYXMgRW5kcG9pbnQsIHR5cGVkTWVzc2FnZS5tZXRob2QgYXMgSHR0cE1ldGhvZCwgdHlwZWRNZXNzYWdlLmN1c3RvbVJlcXVlc3QgYXMgUmVxdWVzdERldGFpbHMgfCBudWxsKVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGhhbmRsZVNlbmRSZXF1ZXN0OicsIGVycm9yKTtcclxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICB1cmw6IHR5cGVkTWVzc2FnZS5jdXN0b21SZXF1ZXN0Py51cmwgfHwgKHR5cGVkTWVzc2FnZS5lbmRwb2ludCBhcyBhbnkpLnVybCxcclxuICAgICAgICAgICAgICBzdGF0dXM6IDAsXHJcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogJ0Vycm9yJyxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdFcnJvcic6IGVycm9yLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICAgICAgICBib2R5OiAnRmFpbGVkIHRvIGZldGNoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBlbmRwb2ludCBvciBtZXRob2QgcHJvdmlkZWQnIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnY2xlYXJSZXNwb25zZUNhY2hlJzpcclxuICAgICAgY2xlYXJSZXNwb25zZUNhY2hlKCk7XHJcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZ2V0UmVxdWVzdERldGFpbHMnOlxyXG4gICAgICBpZiAodHlwZWRNZXNzYWdlLnVybCkge1xyXG4gICAgICAgIGdldFJlcXVlc3REZXRhaWxzKHR5cGVkTWVzc2FnZS51cmwpXHJcbiAgICAgICAgICAudGhlbihkZXRhaWxzID0+IHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUsIGRldGFpbHMgfSkpXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudCBhc3luY2hyb25vdXNseVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1VSTCBub3QgcHJvdmlkZWQnIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5rbm93biBhY3Rpb24nIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBub3RpZnlBbGxUYWJzKCkge1xyXG4gIGJyb3dzZXIudGFicy5xdWVyeSh7fSkudGhlbigodGFicykgPT4ge1xyXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgICAgaWYgKHRhYi5pZCkge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHsgYWN0aW9uOiAnYXV0b1BhcnNlclN0YXRlQ2hhbmdlZCcsIHN0YXRlOiBpc0F1dG9QYXJzZXJFbmFibGVkIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIC8vIFNpbGVudCBmYWlsIGlmIHRoZSB0YWIgZG9lc24ndCBoYXZlIHRoZSBjb250ZW50IHNjcmlwdCBsb2FkZWRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIExpc3RlbiBmb3IgdGFiIHVwZGF0ZXMgdG8gaW5qZWN0IGNvbnRlbnQgc2NyaXB0IGlmIG5lY2Vzc2FyeVxyXG5icm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XHJcbiAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09PSAnY29tcGxldGUnICYmIHRhYi51cmwgJiYgdGFiLnVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcclxuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBhY3Rpb246ICdjaGVja0NvbnRlbnRTY3JpcHRJbmplY3RlZCcgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAvLyBJZiB0aGUgY29udGVudCBzY3JpcHQgaXMgbm90IGluamVjdGVkLCBpbmplY3QgaXRcclxuICAgICAgYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHsgZmlsZTogJ2NvbnRlbnQtc2NyaXB0LmpzJyB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBBZnRlciBpbmplY3Rpb24sIHNlbmQgdGhlIGN1cnJlbnQgYXV0byBwYXJzZXIgc3RhdGVcclxuICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnYXV0b1BhcnNlclN0YXRlQ2hhbmdlZCcsIHN0YXRlOiBpc0F1dG9QYXJzZXJFbmFibGVkIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBPcHRpb25hbDogQWRkIGxpc3RlbmVyIGZvciBleHRlbnNpb24gaW5zdGFsbCBvciB1cGRhdGVcclxuYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XHJcbiAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcgfHwgZGV0YWlscy5yZWFzb24gPT09ICd1cGRhdGUnKSB7XHJcbiAgICBjbGVhclJlc3BvbnNlQ2FjaGUoKTtcclxuICB9XHJcbn0pOyJdLCJuYW1lcyI6WyJyZXNwb25zZUNhY2hlIiwiaW5pdGlhbGl6ZVJlc3BvbnNlQ2FjaGUiLCJIVFRQX01FVEhPRFMiLCJtZXRob2QiLCJoYW5kbGVTZW5kUmVxdWVzdCIsImVuZHBvaW50IiwiY3VzdG9tUmVxdWVzdCIsInVybCIsInNhbml0aXplVVJMIiwicmVxdWVzdERldGFpbHMiLCJyZXNwb25zZSIsInJlc3BvbnNlSGVhZGVycyIsInZhbHVlIiwibmFtZSIsInJlc3BvbnNlQm9keSIsInJlc3BvbnNlRGV0YWlscyIsImJlYXV0aWZ5IiwiZXJyb3IiLCJlcnJvclJlc3BvbnNlIiwiY2xlYXJSZXNwb25zZUNhY2hlIiwiaW5pdFJlcXVlc3RIYW5kbGVyIiwiZ2V0UmVxdWVzdERldGFpbHMiLCJpc0F1dG9QYXJzZXJFbmFibGVkIiwiYnJvd3NlciIsInJlc3VsdCIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ0eXBlZE1lc3NhZ2UiLCJub3RpZnlBbGxUYWJzIiwiZGV0YWlscyIsInRhYnMiLCJ0YWIiLCJ0YWJJZCIsImNoYW5nZUluZm8iXSwibWFwcGluZ3MiOiJvRUFNQSxJQUFJQSxFQUErQixDQUFBLEVBRW5DLFNBQVNDLEdBQXNFLENBQzdFLE9BQU8sT0FBTyxZQUNaQyxFQUFhLElBQUlDLEdBQVUsQ0FBQ0EsRUFBUSxJQUFJLENBQUMsQ0FBQSxDQUU3QyxDQUVBLGVBQXNCQyxFQUFrQkMsRUFBb0JGLEVBQW9CRyxFQUF1QyxLQUFnQyxDQUNySixNQUFNQyxFQUFNRCxFQUFnQkEsRUFBYyxJ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
