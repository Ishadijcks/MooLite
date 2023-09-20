// ==UserScript==
// @name         moolite
// @namespace    123ishaTest
// @version      1.4.6
// @author       Isha
// @description  Useful plugins for Milky Way Idle
// @icon         https://www.milkywayidle.com/favicon.svg
// @updateURL    https://github.com/Ishadijcks/MooLite/raw/release/dist/moolite.user.js
// @match        *://*www.milkywayidle.com/*
// @match        *://*test.milkywayidle.com/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.prod.js
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(e=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.textContent=e,document.head.append(t)})(' *,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.right-0{right:0px}.top-0{top:0px}.order-2{order:2}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mb-1{margin-bottom:.25rem}.mb-1\\.5{margin-bottom:.375rem}.mb-2{margin-bottom:.5rem}.mr-2{margin-right:.5rem}.mt-0{margin-top:0}.mt-0\\.5{margin-top:.125rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.table{display:table}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-full{height:100%}.max-h-full{max-height:100%}.w-2{width:.5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-32{width:8rem}.w-36{width:9rem}.w-4{width:1rem}.w-40{width:10rem}.w-44{width:11rem}.w-48{width:12rem}.w-52{width:13rem}.w-56{width:14rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-64{width:16rem}.w-72{width:18rem}.w-8{width:2rem}.w-80{width:20rem}.w-96{width:24rem}.w-full{width:100%}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.-rotate-90{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes ping{75%,to{transform:scale(2);opacity:0}}.animate-ping{animation:ping 1s cubic-bezier(0,0,.2,1) infinite}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.gap-2{gap:.5rem}.gap-y-2{row-gap:.5rem}.gap-y-3{row-gap:.75rem}.space-x-0>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(0px * var(--tw-space-x-reverse));margin-left:calc(0px * calc(1 - var(--tw-space-x-reverse)))}.space-x-0\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.125rem * var(--tw-space-x-reverse));margin-left:calc(.125rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.25rem * var(--tw-space-x-reverse));margin-left:calc(.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-clip{overflow:clip}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-clip{overflow-x:clip}.overflow-y-visible{overflow-y:visible}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-mwi-default{border-radius:4px}.rounded-t-mwi-default{border-top-left-radius:4px;border-top-right-radius:4px}.border-2{border-width:2px}.border-b-2{border-bottom-width:2px}.border-b-4{border-bottom-width:4px}.border-divider{border-color:var(--color-divider)}.border-midnight-300{border-color:var(--color-midnight-300)}.bg-background-game{background-color:var(--color-background-game)}.bg-divider{background-color:var(--color-divider)}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-hitpoints{background-color:var(--color-hitpoints)}.bg-midnight-300{background-color:var(--color-midnight-300)}.bg-midnight-400{background-color:var(--color-midnight-400)}.bg-midnight-500{background-color:var(--color-midnight-500)}.bg-space-700{background-color:var(--color-space-700)}.bg-space-800{background-color:var(--color-space-800)}.bg-space-900{background-color:var(--color-space-900)}.bg-space-950{background-color:var(--color-space-950)}.bg-warning{background-color:var(--color-warning)}.bg-opacity-40{--tw-bg-opacity: .4}.fill-dark-mode{fill:var(--color-text-dark-mode)}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.pl-2{padding-left:.5rem}.pt-8{padding-top:2rem}.text-left{text-align:left}.text-center{text-align:center}.align-middle{vertical-align:middle}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.text-xxs{font-size:.65rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.italic{font-style:italic}.text-black{--tw-text-opacity: 1;color:rgb(1.4.6 / var(--tw-text-opacity))}.text-dark-mode{color:var(--color-text-dark-mode)}.text-midnight-600{color:var(--color-midnight-600)}.text-neutral-200{color:var(--color-neutral-200)}.text-ocean-200{color:var(--color-ocean-200)}.text-progress{color:var(--color-progress)}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-space-200{--tw-shadow-color: var(--color-space-200);--tw-shadow: var(--tw-shadow-colored)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-700{transition-duration:.7s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}input,select{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.hover\\:bg-midnight-300:hover{background-color:var(--color-midnight-300)}.hover\\:bg-neutral-200:hover{background-color:var(--color-neutral-200)}.hover\\:bg-space-900:hover{background-color:var(--color-space-900)}.hover\\:fill-progress:hover{fill:var(--color-progress)}.hover\\:opacity-40:hover{opacity:.4}.hover\\:opacity-70:hover{opacity:.7}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px} ');

(function (vue) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var PluginConfigType = /* @__PURE__ */ ((PluginConfigType2) => {
    PluginConfigType2["CheckBox"] = "checkbox";
    PluginConfigType2["Text"] = "text";
    PluginConfigType2["Choice"] = "choice";
    PluginConfigType2["ChoiceList"] = "choice-list";
    return PluginConfigType2;
  })(PluginConfigType || {});
  const _hoisted_1$o = { class: "flex flex-row" };
  const _hoisted_2$g = ["title"];
  const _hoisted_3$a = /* @__PURE__ */ vue.createElementVNode("span", { class: "flex-1" }, null, -1);
  const _hoisted_4$8 = ["value"];
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
    __name: "PluginConfigDisplay",
    props: {
      config: null
    },
    emits: ["onConfigChange"],
    setup(__props, { emit }) {
      const props = __props;
      const options = vue.computed(() => {
        return props.config.options;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$o, [
          vue.createElementVNode("span", {
            title: __props.config.description
          }, vue.toDisplayString(__props.config.name), 9, _hoisted_2$g),
          _hoisted_3$a,
          __props.config.type === vue.unref(PluginConfigType).CheckBox ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            type: "checkbox",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.value = $event)
          }, null, 512)), [
            [vue.vModelCheckbox, __props.config.value]
          ]) : vue.createCommentVNode("", true),
          __props.config.type === vue.unref(PluginConfigType).Text ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            type: "text",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.value = $event),
            class: "bg-divider w-24C"
          }, null, 512)), [
            [vue.vModelText, __props.config.value]
          ]) : vue.createCommentVNode("", true),
          __props.config.type === vue.unref(PluginConfigType).Choice ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("select", {
            key: 2,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.value = $event),
            onChange: _cache[3] || (_cache[3] = ($event) => emit("onConfigChange")),
            class: "bg-divider w-24"
          }, [
            vue.createTextVNode(vue.toDisplayString(vue.unref(options)) + " ", 1),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(options), (option) => {
              return vue.openBlock(), vue.createElementBlock("option", {
                value: option.value,
                class: "bg-divider"
              }, vue.toDisplayString(option.text), 9, _hoisted_4$8);
            }), 256))
          ], 544)), [
            [vue.vModelSelect, __props.config.value]
          ]) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const _hoisted_1$n = { class: "flex flex-row space-x-1 items-center py-2" };
  const _hoisted_2$f = ["title"];
  const _hoisted_3$9 = /* @__PURE__ */ vue.createElementVNode("span", { class: "flex-1" }, null, -1);
  const _hoisted_4$7 = ["disabled"];
  const _hoisted_5$7 = {
    key: 0,
    class: "flex flex-col pl-2 py-2 space-y-2"
  };
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
    __name: "PluginListItem",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const showConfig = vue.ref(false);
      const hasConfig = vue.computed(() => {
        return props.plugin.hasConfig;
      });
      const toggleConfig = () => {
        showConfig.value = !showConfig.value;
      };
      const creditText = vue.computed(() => {
        const credits = props.plugin.credits;
        let creditText2 = `Created by ${credits.author}`;
        if (credits.author !== credits.maintainer) {
          creditText2 += ` and maintained by ${credits.maintainer}`;
        }
        if (credits.contributors) {
          creditText2 += `
Other contributors include ${credits.contributors.join(", ")}`;
        }
        return creditText2;
      });
      const onConfigChange = (key, newValue) => {
        var _a, _b;
        (_b = (_a = props.plugin).onConfigChange) == null ? void 0 : _b.call(_a, key, newValue);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$n, [
            vue.createElementVNode("span", {
              title: __props.plugin.description + "\n\n" + vue.unref(creditText)
            }, vue.toDisplayString(__props.plugin.name), 9, _hoisted_2$f),
            _hoisted_3$9,
            vue.createElementVNode("span", {
              class: "text-xs hover:opacity-40 cursor-pointer",
              onClick: toggleConfig
            }, [
              vue.withDirectives(vue.createElementVNode("span", null, "⚙️", 512), [
                [vue.vShow, vue.unref(hasConfig)]
              ])
            ]),
            vue.withDirectives(vue.createElementVNode("input", {
              class: "cursor-pointer",
              type: "checkbox",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.plugin.isEnabled = $event),
              disabled: !__props.plugin.canBeDisabled
            }, null, 8, _hoisted_4$7), [
              [vue.vModelCheckbox, __props.plugin.isEnabled]
            ])
          ]),
          vue.unref(hasConfig) && showConfig.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$7, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.plugin.config, (config) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$o, {
                config,
                onOnConfigChange: () => {
                  onConfigChange(config.key, config.value);
                }
              }, null, 8, ["config", "onOnConfigChange"]);
            }), 256))
          ])) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _hoisted_1$m = { class: "flex flex-col" };
  const _hoisted_2$e = { class: "px-2 border-b-2 border-divider" };
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
    __name: "PluginManagerDisplay",
    props: {
      manager: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$m, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.manager.plugins, (plugin) => {
            return vue.openBlock(), vue.createElementBlock("div", _hoisted_2$e, [
              (vue.openBlock(), vue.createBlock(_sfc_main$n, {
                plugin,
                key: plugin.name
              }, null, 8, ["plugin"]))
            ]);
          }), 256))
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$l = {};
  const _hoisted_1$l = { class: "border-divider border-2" };
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("hr", _hoisted_1$l);
  }
  const MooDivider = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$3]]);
  const _hoisted_1$k = ["title"];
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
    __name: "PluginTabItem",
    props: {
      tab: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: "p-1 hover:bg-space-900 cursor-pointer",
          title: __props.tab.pluginName
        }, vue.toDisplayString(__props.tab.icon), 9, _hoisted_1$k);
      };
    }
  });
  const _hoisted_1$j = ["title"];
  const _hoisted_2$d = { key: 0 };
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    __name: "PluginCreditsDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const credits = vue.computed(() => {
        return props.plugin.credits;
      });
      const contributorText = vue.computed(() => {
        if (!credits.value.contributors) {
          return "";
        }
        return "Other contributors include " + credits.value.contributors.sort().join(", ");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: "italic text-xxs",
          title: vue.unref(contributorText)
        }, [
          vue.createElementVNode("span", null, "Created by " + vue.toDisplayString(vue.unref(credits).author), 1),
          vue.unref(credits).author !== vue.unref(credits).maintainer ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$d, " and maintained by " + vue.toDisplayString(vue.unref(credits).maintainer), 1)) : vue.createCommentVNode("", true)
        ], 8, _hoisted_1$j);
      };
    }
  });
  const _hoisted_1$i = { class: "flex flex-col h-full shadow-sm overflow-clip bg-background-game text-dark-mode shadow-space-200" };
  const _hoisted_2$c = { class: "flex flex-row h-full" };
  const _hoisted_3$8 = {
    key: 0,
    class: "flex flex-col flex-grow p-2 overflow-auto"
  };
  const _hoisted_4$6 = { class: "flex flex-col" };
  const _hoisted_5$6 = { class: "flex flex-col h-full overflow-auto shrink-0 bg-divider" };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    props: {
      client: null
    },
    setup(__props) {
      const props = __props;
      const defaultPluginWidth = "w-64";
      const pluginManager = vue.computed(() => {
        return props.client.pluginManager;
      });
      const tabs = vue.computed(() => {
        return pluginManager.value.tabs;
      });
      const activeTab = vue.ref(0);
      const findPlugin = (name) => {
        return pluginManager.value.plugins.find((plugin) => plugin.name === name);
      };
      const setActiveTab = (index) => {
        if (activeTab.value === index) {
          activeTab.value = -1;
        } else {
          activeTab.value = index;
        }
      };
      if (findPlugin("MooLite").getConfig("mooliteclient/start-collapsed").value === true) {
        setActiveTab(-1);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [
          vue.createVNode(MooDivider, { class: "border-b-4" }),
          vue.createElementVNode("div", _hoisted_2$c, [
            activeTab.value > -1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$8, [
              activeTab.value === 0 ? (vue.openBlock(), vue.createBlock(_sfc_main$m, {
                key: 0,
                manager: vue.unref(pluginManager),
                class: vue.normalizeClass(defaultPluginWidth)
              }, null, 8, ["manager"])) : vue.createCommentVNode("", true),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tabs), (tab, index) => {
                return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                  class: vue.normalizeClass(["flex flex-col justify-between", (tab.width ?? defaultPluginWidth) + " h-full"])
                }, [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(tab.componentName), {
                    plugin: findPlugin(tab.pluginName)
                  }, null, 8, ["plugin"])),
                  vue.createElementVNode("div", _hoisted_4$6, [
                    vue.createVNode(MooDivider, { class: "mb-1" }),
                    vue.createVNode(_sfc_main$j, {
                      plugin: findPlugin(tab.pluginName)
                    }, null, 8, ["plugin"])
                  ])
                ], 2)), [
                  [vue.vShow, index + 1 === activeTab.value]
                ]);
              }), 256))
            ])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_5$6, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tabs), (tab, index) => {
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  index === 1 ? (vue.openBlock(), vue.createBlock(_sfc_main$k, {
                    key: 0,
                    onClick: _cache[0] || (_cache[0] = ($event) => setActiveTab(0)),
                    tab: { pluginName: "Plugins", icon: "🔧" },
                    class: vue.normalizeClass({ "bg-space-950": 0 === activeTab.value })
                  }, null, 8, ["class"])) : vue.createCommentVNode("", true),
                  vue.createVNode(_sfc_main$k, {
                    onClick: ($event) => setActiveTab(index + 1),
                    tab,
                    class: vue.normalizeClass({ "bg-space-950": index + 1 === activeTab.value })
                  }, null, 8, ["onClick", "tab", "class"])
                ], 64);
              }), 256))
            ])
          ])
        ]);
      };
    }
  });
  var PluginBuiltinOption = /* @__PURE__ */ ((PluginBuiltinOption2) => {
    PluginBuiltinOption2["Monsters"] = "monsters";
    PluginBuiltinOption2["Items"] = "items";
    return PluginBuiltinOption2;
  })(PluginBuiltinOption || {});
  class MooLitePlugin {
    constructor() {
      __publicField(this, "_isEnabled", false);
      __publicField(this, "_canBeDisabled", true);
      __publicField(this, "config", []);
      __publicField(this, "tab");
      __publicField(this, "_game");
    }
    get canBeDisabled() {
      return this._canBeDisabled;
    }
    getConfig(key) {
      return this.config.find((config) => config.key === key);
    }
    get hasConfig() {
      return this.config.length > 0;
    }
    get isEnabled() {
      return this._isEnabled;
    }
    set isEnabled(value) {
      if (value) {
        this.enable();
      } else {
        this.disable();
      }
    }
    initialize(game) {
      this._game = game;
      this.config.forEach((config) => {
        if (typeof config.options === "string") {
          switch (config.options) {
            case PluginBuiltinOption.Monsters:
              config.options = this._game.combat.monsterDetailList.map((monster) => ({
                text: monster.name,
                value: monster.hrid
              }));
              break;
            case PluginBuiltinOption.Items:
              config.options = this._game.inventory.sortedAlphabeticalItems.map((item) => ({
                text: item.name,
                value: item.hrid
              }));
              break;
            default:
              console.error(`Unrecognized builtin option '${config.options}'`);
              return [];
          }
        }
      });
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      if (this._canBeDisabled) {
        this._isEnabled = false;
      }
    }
  }
  class IdleNotifierPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Idle Notifier");
      __publicField(this, "key", "idle-notifier");
      __publicField(this, "description", "Notifies you when your action queue is empty");
      __publicField(this, "_isEnabled", true);
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
    }
    onActionQueueUpdated(queue) {
      if (queue.length === 0) {
        this._game.notifier.sendBrowserNotification("You are idle");
      }
    }
  }
  var ServerMessageType = /* @__PURE__ */ ((ServerMessageType2) => {
    ServerMessageType2["InitClientInfo"] = "init_client_data";
    ServerMessageType2["InitCharacterInfo"] = "init_character_data";
    ServerMessageType2["Pong"] = "pong";
    ServerMessageType2["ActivePlayerCountUpdated"] = "active_player_count_updated";
    ServerMessageType2["Info"] = "info";
    ServerMessageType2["CharacterStatsUpdated"] = "character_stats_updated";
    ServerMessageType2["EquipmentBuffsUpdated"] = "equipment_buffs_updated";
    ServerMessageType2["ItemsUpdated"] = "items_updated";
    ServerMessageType2["LootOpened"] = "loot_opened";
    ServerMessageType2["ActionCompleted"] = "action_completed";
    ServerMessageType2["ActionsUpdated"] = "actions_updated";
    ServerMessageType2["ConsumableSlotsUpdated"] = "action_type_consumable_slots_updated";
    ServerMessageType2["ChatMessageReceived"] = "chat_message_received";
    ServerMessageType2["CombatTriggersUpdated"] = "combat_triggers_updated";
    ServerMessageType2["AbilitiesUpdated"] = "abilities_updated";
    ServerMessageType2["LeaderboardInfoUpdated"] = "leaderboard_info_updated";
    return ServerMessageType2;
  })(ServerMessageType || {});
  class MessageParser {
    canParse(message) {
      return message.type === this.type;
    }
  }
  class ActionCompletedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.ActionCompleted);
    }
    apply(message, game) {
      game.abilities.updateCharacterAbilities(message.endCharacterAbilities);
      game.actionQueue.updateActions([message.endCharacterAction]);
      game.inventory.updateCharacterItems(message.endCharacterItems);
      game.skills.updateCharacterSkills(message.endCharacterSkills);
    }
  }
  class ChatMessageReceivedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.ChatMessageReceived);
    }
    apply(message, game) {
      game.chat.addMessage({
        message: message.message.message,
        channel: message.message.channelTypeHrid,
        senderName: message.message.senderName,
        receiverName: message.message.receiverName,
        isDeleted: message.message.isDeleted,
        isModMessage: message.message.isModMessage,
        isSystemMessage: message.message.isSystemMessage
      });
    }
  }
  class ActivePlayerCountUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.ActivePlayerCountUpdated);
    }
    apply(message, game) {
      game.activePlayerCount = message.activePlayerCount;
    }
  }
  class ConsumableSlotsUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.ConsumableSlotsUpdated);
    }
    apply(message, game) {
      game.inventory.updateCharacterDrinks(message.actionTypeDrinkSlotsMap);
      game.inventory.updateCharacterFood(message.actionTypeFoodSlotsMap);
    }
  }
  class ActionsUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.ActionsUpdated);
    }
    apply(message, game) {
      game.actionQueue.updateActions(message.endCharacterActions);
    }
  }
  class Character {
    constructor(charDetail) {
      __publicField(this, "_id");
      __publicField(this, "_userID");
      __publicField(this, "_name");
      __publicField(this, "_previousName");
      __publicField(this, "_chatIconHrid");
      __publicField(this, "_isOnline");
      __publicField(this, "_lastOfflineTime");
      __publicField(this, "_inactiveTime");
      __publicField(this, "_isDeleted");
      __publicField(this, "_createdAt");
      __publicField(this, "_updatedAt");
      this._id = charDetail.id;
      this._userID = charDetail.userID;
      this._name = charDetail.name;
      this._previousName = charDetail.previousName;
      this._chatIconHrid = charDetail.chatIconHrid;
      this._isOnline = charDetail.isOnline;
      this._lastOfflineTime = charDetail.lastOfflineTime;
      this._inactiveTime = charDetail.inactiveTime;
      this._isDeleted = charDetail.isDeleted;
      this._createdAt = charDetail.createdAt;
      this._updatedAt = charDetail.updatedAt;
    }
    get id() {
      return this._id;
    }
    get userID() {
      return this._userID;
    }
    get name() {
      return this._name;
    }
    get previousName() {
      return this._previousName;
    }
    get chatIconHrid() {
      return this._chatIconHrid;
    }
    get isOnline() {
      return this._isOnline;
    }
    get lastOfflineTime() {
      return this._lastOfflineTime;
    }
    get inactiveTime() {
      return this._inactiveTime;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    get createdAt() {
      return this._createdAt;
    }
    get updatedAt() {
      return this._updatedAt;
    }
  }
  class InitCharacterInfoParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.InitCharacterInfo);
    }
    apply(message, game) {
      console.log(message);
      game.abilities.updateCharacterAbilities(message.characterAbilities, false);
      game.abilities.updateCombatTriggers(message.abilityCombatTriggersMap);
      game.actionQueue.updateActions(message.characterActions);
      game.inventory.updateCharacterItems(message.characterItems, false);
      game.inventory.updateCharacterDrinks(message.actionTypeDrinkSlotsMap, false);
      game.inventory.updateCharacterFood(message.actionTypeFoodSlotsMap, false);
      game.skills.updateCharacterSkills(message.characterSkills, false);
      game.character = new Character(message.character);
      game.chat.updateCharacterChatIcons(message.characterChatIconMap);
      game.chat.updateWhisperHistory(message.whisperChatHistory);
      game.combat.updateCombatUnit(message.combatUnit, false);
      game.equipment.updateNonCombatStats(message.noncombatStats, false);
    }
  }
  class InfoParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.Info);
    }
    apply(message, game) {
      game.notifier.processServerInfo(message);
    }
  }
  class LeaderboardInfoUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.LeaderboardInfoUpdated);
    }
    apply(message, game) {
      game.leaderboard.updateLeaderBoard(message.leaderboardList);
    }
  }
  var ClientMessageType = /* @__PURE__ */ ((ClientMessageType2) => {
    ClientMessageType2["Ping"] = "/character_tasks/ping";
    return ClientMessageType2;
  })(ClientMessageType || {});
  class PingParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ClientMessageType.Ping);
    }
    apply(message, game) {
      game.lastPing = /* @__PURE__ */ new Date();
    }
  }
  class PongParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.Pong);
    }
    apply(message, game) {
      game.lastPong = new Date(Date.parse(message.serverTimestamp));
    }
  }
  class LocalStorage {
    static store(data) {
      const saveString = JSON.stringify(data);
      localStorage.setItem(this.SAVE_KEY, saveString);
    }
    static get() {
      const saveString = localStorage.getItem(this.SAVE_KEY);
      return JSON.parse(saveString);
    }
  }
  __publicField(LocalStorage, "SAVE_KEY", "MooLite");
  class CombatTriggersUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.CombatTriggersUpdated);
    }
    apply(message, game) {
      if (message.abilityHrid) {
        game.abilities.updateCombatTriggers(message.combatTriggers);
      }
    }
  }
  class CharacterStatsUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.CharacterStatsUpdated);
    }
    apply(message, game) {
      game.combat.updateCombatUnit(message.combatUnit);
      game.equipment.updateNonCombatStats(message.nonCombatStats);
    }
  }
  class EquipmentBuffsUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.EquipmentBuffsUpdated);
    }
    apply(message, game) {
      game.equipment.updateEquipmentActionTypeBuffs(message.equipmentActionTypeBuffsMap);
    }
  }
  class ItemsUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.ItemsUpdated);
    }
    apply(message, game) {
      game.inventory.updateCharacterItems(message.endCharacterItems);
    }
  }
  class LootOpenedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.LootOpened);
    }
    apply(message, game) {
      game.lootBoxes.lootBoxOpened(message.openedItem, message.gainedItems);
    }
  }
  class AbilitiesUpdatedParser extends MessageParser {
    constructor() {
      super(...arguments);
      __publicField(this, "type", ServerMessageType.AbilitiesUpdated);
    }
    apply(message, game) {
      game.abilities.updateCharacterAbilities(message.endCharacterAbilities);
    }
  }
  class MooLite {
    constructor(game, pluginManager, mooSocket) {
      __publicField(this, "pluginManager");
      __publicField(this, "mooSocket");
      __publicField(this, "game");
      __publicField(this, "messageParsers", [
        // Server messages
        new InitCharacterInfoParser(),
        new PongParser(),
        new ActionCompletedParser(),
        new ChatMessageReceivedParser(),
        new ActivePlayerCountUpdatedParser(),
        new ActionsUpdatedParser(),
        new ConsumableSlotsUpdatedParser(),
        new InfoParser(),
        new CombatTriggersUpdatedParser(),
        new LeaderboardInfoUpdatedParser(),
        new LootOpenedParser(),
        new CharacterStatsUpdatedParser(),
        new EquipmentBuffsUpdatedParser(),
        new ItemsUpdatedParser(),
        new AbilitiesUpdatedParser(),
        // Client messages
        new PingParser()
      ]);
      __publicField(this, "_interval");
      __publicField(this, "_timeSinceLastSave", 0);
      __publicField(this, "SAVE_INTERVAL", 5);
      this.game = game;
      this.pluginManager = pluginManager;
      this.mooSocket = mooSocket;
      this.mooSocket.onServerMessage.subscribe((message) => this.parseMessage(message, false));
      this.mooSocket.onClientMessage.subscribe((message) => this.parseMessage(message, true));
      this._interval = setInterval(() => {
        this._clientTick(1);
      }, 1e3);
      this._load();
    }
    _clientTick(delta) {
      this._timeSinceLastSave += delta;
      if (this._timeSinceLastSave > this.SAVE_INTERVAL) {
        this._save();
        this._timeSinceLastSave = 0;
      }
      this.pluginManager.clientTick();
    }
    _save() {
      const saveData = {
        plugins: {}
      };
      this.pluginManager.plugins.forEach((plugin) => {
        var _a;
        const config = plugin.config.map((config2) => {
          return {
            key: config2.key,
            value: config2.value
          };
        });
        const data = (_a = plugin.save) == null ? void 0 : _a.call(plugin);
        saveData.plugins[plugin.key] = {
          isEnabled: plugin.isEnabled,
          config,
          data
        };
      });
      LocalStorage.store(saveData);
    }
    _load() {
      const saveData = LocalStorage.get();
      if (!saveData) {
        alert(
          "Thank you for using MooLite.\nMooLite is community-made client, unrelated to the development of Milky Way Idle\nPlease report any issues with MooLite over at \nhttps://github.com/Ishadijcks/MooLite\nand do not bother the Milky Way Idle developers about it on Discord.\n"
        );
        return;
      }
      Object.keys(saveData.plugins).forEach((pluginKey) => {
        var _a;
        const pluginData = saveData.plugins[pluginKey];
        const plugin = this.pluginManager.plugins.find((plugin2) => plugin2.key === pluginKey);
        if (!plugin) {
          return;
        }
        pluginData.config.forEach((configSaveData) => {
          const config = plugin.getConfig(configSaveData.key);
          if (config) {
            config.value = configSaveData.value;
          }
        });
        if (pluginData.data) {
          try {
            (_a = plugin.load) == null ? void 0 : _a.call(plugin, pluginData.data);
          } catch (e) {
            console.warn(e);
            console.warn(
              `An error occurred while trying to load plugin ${plugin.key} with data ${JSON.stringify(
              pluginData.data
            )}`
            );
          }
        }
        if (pluginData.isEnabled) {
          plugin.enable();
        }
        if (!pluginData.isEnabled && plugin.isEnabled) {
          plugin.disable();
        }
      });
    }
    parseMessage(message, isClientMessage) {
      const parser = this.messageParsers.find((parser2) => {
        return parser2.canParse(message);
      });
      if (!parser) {
        if (!isClientMessage) {
          console.warn(`Unhandled message type ${message.type}`);
          console.log(message);
        }
        return;
      }
      parser.apply(message, this.game);
    }
  }
  var dist$7 = {};
  var dist$6 = {};
  var DispatcherBase$1 = {};
  var DispatcherWrapper$1 = {};
  Object.defineProperty(DispatcherWrapper$1, "__esModule", { value: true });
  DispatcherWrapper$1.DispatcherWrapper = void 0;
  class DispatcherWrapper {
    /**
     * Creates an instance of DispatcherWrapper.
     * @param {ISubscribable<TEventHandler>} dispatcher
     *
     * @memberOf DispatcherWrapper
     */
    constructor(dispatcher) {
      this._subscribe = (fn) => dispatcher.subscribe(fn);
      this._unsubscribe = (fn) => dispatcher.unsubscribe(fn);
      this._one = (fn) => dispatcher.one(fn);
      this._has = (fn) => dispatcher.has(fn);
      this._clear = () => dispatcher.clear();
      this._count = () => dispatcher.count;
      this._onSubscriptionChange = () => dispatcher.onSubscriptionChange;
    }
    /**
     * Triggered when subscriptions are changed (added or removed).
     *
     * @readonly
     * @type {ISubscribable<SubscriptionChangeEventHandler>}
     * @memberOf DispatcherWrapper
     */
    get onSubscriptionChange() {
      return this._onSubscriptionChange();
    }
    /**
     * Returns the number of subscriptions.
     *
     * @readonly
     * @type {number}
     * @memberOf DispatcherWrapper
     */
    get count() {
      return this._count();
    }
    /**
     * Subscribe to the event dispatcher.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     * @returns {() => void} A function that unsubscribes the event handler from the event.
     *
     * @memberOf DispatcherWrapper
     */
    subscribe(fn) {
      return this._subscribe(fn);
    }
    /**
     * Subscribe to the event dispatcher.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     * @returns {() => void} A function that unsubscribes the event handler from the event.
     *
     * @memberOf DispatcherWrapper
     */
    sub(fn) {
      return this.subscribe(fn);
    }
    /**
     * Unsubscribe from the event dispatcher.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     *
     * @memberOf DispatcherWrapper
     */
    unsubscribe(fn) {
      this._unsubscribe(fn);
    }
    /**
     * Unsubscribe from the event dispatcher.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     *
     * @memberOf DispatcherWrapper
     */
    unsub(fn) {
      this.unsubscribe(fn);
    }
    /**
     * Subscribe once to the event with the specified name.
     *
     * @returns {() => void} A function that unsubscribes the event handler from the event.
     *
     * @memberOf DispatcherWrapper
     */
    one(fn) {
      return this._one(fn);
    }
    /**
     * Checks it the event has a subscription for the specified handler.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     *
     * @memberOf DispatcherWrapper
     */
    has(fn) {
      return this._has(fn);
    }
    /**
     * Clears all the subscriptions.
     *
     * @memberOf DispatcherWrapper
     */
    clear() {
      this._clear();
    }
  }
  DispatcherWrapper$1.DispatcherWrapper = DispatcherWrapper;
  var Subscription$1 = {};
  Object.defineProperty(Subscription$1, "__esModule", { value: true });
  Subscription$1.Subscription = void 0;
  class Subscription {
    /**
     * Creates an instance of Subscription.
     *
     * @param {TEventHandler} handler The handler for the subscription.
     * @param {boolean} isOnce Indicates if the handler should only be executed once.
     */
    constructor(handler, isOnce) {
      this.handler = handler;
      this.isOnce = isOnce;
      this.isExecuted = false;
    }
    /**
     * Executes the handler.
     *
     * @param {boolean} executeAsync True if the even should be executed async.
     * @param {*} scope The scope the scope of the event.
     * @param {IArguments} args The arguments for the event.
     */
    execute(executeAsync, scope, args) {
      if (!this.isOnce || !this.isExecuted) {
        this.isExecuted = true;
        var fn = this.handler;
        if (executeAsync) {
          setTimeout(() => {
            fn.apply(scope, args);
          }, 1);
        } else {
          fn.apply(scope, args);
        }
      }
    }
  }
  Subscription$1.Subscription = Subscription;
  var EventManagement$1 = {};
  Object.defineProperty(EventManagement$1, "__esModule", { value: true });
  EventManagement$1.EventManagement = void 0;
  class EventManagement {
    /**
     * Creates an instance of EventManagement.
     * @param {() => void} unsub An unsubscribe handler.
     *
     * @memberOf EventManagement
     */
    constructor(unsub) {
      this.unsub = unsub;
      this.propagationStopped = false;
    }
    /**
     * Stops the propagation of the event.
     * Cannot be used when async dispatch is done.
     *
     * @memberOf EventManagement
     */
    stopPropagation() {
      this.propagationStopped = true;
    }
  }
  EventManagement$1.EventManagement = EventManagement;
  Object.defineProperty(DispatcherBase$1, "__esModule", { value: true });
  DispatcherBase$1.SubscriptionChangeEventDispatcher = DispatcherBase$1.DispatcherBase = void 0;
  const DispatcherWrapper_1 = DispatcherWrapper$1;
  const Subscription_1 = Subscription$1;
  const EventManagement_1$1 = EventManagement$1;
  class DispatcherBase {
    constructor() {
      this._subscriptions = new Array();
    }
    /**
     * Returns the number of subscriptions.
     *
     * @readonly
     * @type {number}
     * @memberOf DispatcherBase
     */
    get count() {
      return this._subscriptions.length;
    }
    /**
     * Triggered when subscriptions are changed (added or removed).
     *
     * @readonly
     * @type {ISubscribable<SubscriptionChangeEventHandler>}
     * @memberOf DispatcherBase
     */
    get onSubscriptionChange() {
      if (this._onSubscriptionChange == null) {
        this._onSubscriptionChange = new SubscriptionChangeEventDispatcher();
      }
      return this._onSubscriptionChange.asEvent();
    }
    /**
     * Subscribe to the event dispatcher.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     *
     * @memberOf DispatcherBase
     */
    subscribe(fn) {
      if (fn) {
        this._subscriptions.push(this.createSubscription(fn, false));
        this.triggerSubscriptionChange();
      }
      return () => {
        this.unsubscribe(fn);
      };
    }
    /**
     * Subscribe to the event dispatcher.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     *
     * @memberOf DispatcherBase
     */
    sub(fn) {
      return this.subscribe(fn);
    }
    /**
     * Subscribe once to the event with the specified name.
     *
     * @param {TEventHandler} fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     *
     * @memberOf DispatcherBase
     */
    one(fn) {
      if (fn) {
        this._subscriptions.push(this.createSubscription(fn, true));
        this.triggerSubscriptionChange();
      }
      return () => {
        this.unsubscribe(fn);
      };
    }
    /**
     * Checks it the event has a subscription for the specified handler.
     *
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf DispatcherBase
     */
    has(fn) {
      if (!fn)
        return false;
      return this._subscriptions.some((sub) => sub.handler == fn);
    }
    /**
     * Unsubscribes the handler from the dispatcher.
     *
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf DispatcherBase
     */
    unsubscribe(fn) {
      if (!fn)
        return;
      let changes = false;
      for (let i = 0; i < this._subscriptions.length; i++) {
        if (this._subscriptions[i].handler == fn) {
          this._subscriptions.splice(i, 1);
          changes = true;
          break;
        }
      }
      if (changes) {
        this.triggerSubscriptionChange();
      }
    }
    /**
     * Unsubscribes the handler from the dispatcher.
     *
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf DispatcherBase
     */
    unsub(fn) {
      this.unsubscribe(fn);
    }
    /**
     * Generic dispatch will dispatch the handlers with the given arguments.
     *
     * @protected
     * @param {boolean} executeAsync `True` if the even should be executed async.
     * @param {*} scope The scope of the event. The scope becomes the `this` for handler.
     * @param {IArguments} args The arguments for the event.
     * @returns {(IPropagationStatus | null)} The propagation status, or if an `executeAsync` is used `null`.
     *
     * @memberOf DispatcherBase
     */
    _dispatch(executeAsync, scope, args) {
      for (let sub of [...this._subscriptions]) {
        let ev = new EventManagement_1$1.EventManagement(() => this.unsub(sub.handler));
        let nargs = Array.prototype.slice.call(args);
        nargs.push(ev);
        let s = sub;
        s.execute(executeAsync, scope, nargs);
        this.cleanup(sub);
        if (!executeAsync && ev.propagationStopped) {
          return { propagationStopped: true };
        }
      }
      if (executeAsync) {
        return null;
      }
      return { propagationStopped: false };
    }
    /**
     * Creates a subscription.
     *
     * @protected
     * @param {TEventHandler} handler The handler.
     * @param {boolean} isOnce True if the handler should run only one.
     * @returns {ISubscription<TEventHandler>} The subscription.
     *
     * @memberOf DispatcherBase
     */
    createSubscription(handler, isOnce) {
      return new Subscription_1.Subscription(handler, isOnce);
    }
    /**
     * Cleans up subs that ran and should run only once.
     *
     * @protected
     * @param {ISubscription<TEventHandler>} sub The subscription.
     *
     * @memberOf DispatcherBase
     */
    cleanup(sub) {
      let changes = false;
      if (sub.isOnce && sub.isExecuted) {
        let i = this._subscriptions.indexOf(sub);
        if (i > -1) {
          this._subscriptions.splice(i, 1);
          changes = true;
        }
      }
      if (changes) {
        this.triggerSubscriptionChange();
      }
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     *
     * @returns {ISubscribable<TEventHandler>}
     *
     * @memberOf DispatcherBase
     */
    asEvent() {
      if (this._wrap == null) {
        this._wrap = new DispatcherWrapper_1.DispatcherWrapper(this);
      }
      return this._wrap;
    }
    /**
     * Clears the subscriptions.
     *
     * @memberOf DispatcherBase
     */
    clear() {
      if (this._subscriptions.length != 0) {
        this._subscriptions.splice(0, this._subscriptions.length);
        this.triggerSubscriptionChange();
      }
    }
    /**
     * Triggers the subscription change event.
     *
     * @private
     *
     * @memberOf DispatcherBase
     */
    triggerSubscriptionChange() {
      if (this._onSubscriptionChange != null) {
        this._onSubscriptionChange.dispatch(this.count);
      }
    }
  }
  DispatcherBase$1.DispatcherBase = DispatcherBase;
  class SubscriptionChangeEventDispatcher extends DispatcherBase {
    /**
     * Dispatches the event.
     *
     * @param {number} count The currrent number of subscriptions.
     *
     * @memberOf SubscriptionChangeEventDispatcher
     */
    dispatch(count) {
      this._dispatch(false, this, arguments);
    }
  }
  DispatcherBase$1.SubscriptionChangeEventDispatcher = SubscriptionChangeEventDispatcher;
  var DispatchError$1 = {};
  Object.defineProperty(DispatchError$1, "__esModule", { value: true });
  DispatchError$1.DispatchError = void 0;
  class DispatchError extends Error {
    /**
     * Creates an instance of DispatchError.
     * @param {string} message The message.
     *
     * @memberOf DispatchError
     */
    constructor(message) {
      super(message);
    }
  }
  DispatchError$1.DispatchError = DispatchError;
  var EventListBase$1 = {};
  Object.defineProperty(EventListBase$1, "__esModule", { value: true });
  EventListBase$1.EventListBase = void 0;
  class EventListBase {
    constructor() {
      this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     *
     * @param {string} name The name of the event.
     * @returns {TEventDispatcher} The disptacher.
     *
     * @memberOf EventListBase
     */
    get(name) {
      let event = this._events[name];
      if (event) {
        return event;
      }
      event = this.createDispatcher();
      this._events[name] = event;
      return event;
    }
    /**
     * Removes the dispatcher associated with the name.
     *
     * @param {string} name
     *
     * @memberOf EventListBase
     */
    remove(name) {
      delete this._events[name];
    }
  }
  EventListBase$1.EventListBase = EventListBase;
  var HandlingBase$1 = {};
  Object.defineProperty(HandlingBase$1, "__esModule", { value: true });
  HandlingBase$1.HandlingBase = void 0;
  class HandlingBase {
    /**
     * Creates an instance of HandlingBase.
     * @param {TList} events The event list. Used for event management.
     *
     * @memberOf HandlingBase
     */
    constructor(events) {
      this.events = events;
    }
    /**
     * Subscribes once to the event with the specified name.
     * @param {string} name The name of the event.
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf HandlingBase
     */
    one(name, fn) {
      this.events.get(name).one(fn);
    }
    /**
     * Checks it the event has a subscription for the specified handler.
     * @param {string} name The name of the event.
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf HandlingBase
     */
    has(name, fn) {
      return this.events.get(name).has(fn);
    }
    /**
     * Subscribes to the event with the specified name.
     * @param {string} name The name of the event.
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf HandlingBase
     */
    subscribe(name, fn) {
      this.events.get(name).subscribe(fn);
    }
    /**
     * Subscribes to the event with the specified name.
     * @param {string} name The name of the event.
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf HandlingBase
     */
    sub(name, fn) {
      this.subscribe(name, fn);
    }
    /**
     * Unsubscribes from the event with the specified name.
     * @param {string} name The name of the event.
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf HandlingBase
     */
    unsubscribe(name, fn) {
      this.events.get(name).unsubscribe(fn);
    }
    /**
     * Unsubscribes from the event with the specified name.
     * @param {string} name The name of the event.
     * @param {TEventHandler} fn The event handler.
     *
     * @memberOf HandlingBase
     */
    unsub(name, fn) {
      this.unsubscribe(name, fn);
    }
  }
  HandlingBase$1.HandlingBase = HandlingBase;
  var PromiseDispatcherBase$1 = {};
  var PromiseSubscription$1 = {};
  Object.defineProperty(PromiseSubscription$1, "__esModule", { value: true });
  PromiseSubscription$1.PromiseSubscription = void 0;
  class PromiseSubscription {
    /**
     * Creates an instance of PromiseSubscription.
     * @param {TEventHandler} handler The handler for the subscription.
     * @param {boolean} isOnce Indicates if the handler should only be executed once.
     *
     * @memberOf PromiseSubscription
     */
    constructor(handler, isOnce) {
      this.handler = handler;
      this.isOnce = isOnce;
      this.isExecuted = false;
    }
    /**
     * Executes the handler.
     *
     * @param {boolean} executeAsync True if the even should be executed async.
     * @param {*} scope The scope the scope of the event.
     * @param {IArguments} args The arguments for the event.
     *
     * @memberOf PromiseSubscription
     */
    async execute(executeAsync, scope, args) {
      if (!this.isOnce || !this.isExecuted) {
        this.isExecuted = true;
        var fn = this.handler;
        if (executeAsync) {
          setTimeout(() => {
            fn.apply(scope, args);
          }, 1);
          return;
        }
        let result = fn.apply(scope, args);
        await result;
      }
    }
  }
  PromiseSubscription$1.PromiseSubscription = PromiseSubscription;
  Object.defineProperty(PromiseDispatcherBase$1, "__esModule", { value: true });
  PromiseDispatcherBase$1.PromiseDispatcherBase = void 0;
  const PromiseSubscription_1 = PromiseSubscription$1;
  const EventManagement_1 = EventManagement$1;
  const DispatcherBase_1 = DispatcherBase$1;
  const DispatchError_1 = DispatchError$1;
  class PromiseDispatcherBase extends DispatcherBase_1.DispatcherBase {
    /**
     * The normal dispatch cannot be used in this class.
     *
     * @protected
     * @param {boolean} executeAsync `True` if the even should be executed async.
     * @param {*} scope The scope of the event. The scope becomes the `this` for handler.
     * @param {IArguments} args The arguments for the event.
     * @returns {(IPropagationStatus | null)} The propagation status, or if an `executeAsync` is used `null`.
     *
     * @memberOf DispatcherBase
     */
    _dispatch(executeAsync, scope, args) {
      throw new DispatchError_1.DispatchError("_dispatch not supported. Use _dispatchAsPromise.");
    }
    /**
     * Crates a new subscription.
     *
     * @protected
     * @param {TEventHandler} handler The handler.
     * @param {boolean} isOnce Indicates if the handler should only run once.
     * @returns {ISubscription<TEventHandler>} The subscription.
     *
     * @memberOf PromiseDispatcherBase
     */
    createSubscription(handler, isOnce) {
      return new PromiseSubscription_1.PromiseSubscription(handler, isOnce);
    }
    /**
     * Generic dispatch will dispatch the handlers with the given arguments.
     *
     * @protected
     * @param {boolean} executeAsync `True` if the even should be executed async.
     * @param {*} scope The scope of the event. The scope becomes the `this` for handler.
     * @param {IArguments} args The arguments for the event.
     * @returns {(IPropagationStatus | null)} The propagation status, or if an `executeAsync` is used `null`.
     *
     * @memberOf DispatcherBase
     */
    async _dispatchAsPromise(executeAsync, scope, args) {
      for (let sub of [...this._subscriptions]) {
        let ev = new EventManagement_1.EventManagement(() => this.unsub(sub.handler));
        let nargs = Array.prototype.slice.call(args);
        nargs.push(ev);
        let ps = sub;
        await ps.execute(executeAsync, scope, nargs);
        this.cleanup(sub);
        if (!executeAsync && ev.propagationStopped) {
          return { propagationStopped: true };
        }
      }
      if (executeAsync) {
        return null;
      }
      return { propagationStopped: false };
    }
  }
  PromiseDispatcherBase$1.PromiseDispatcherBase = PromiseDispatcherBase;
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript - Core
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionChangeEventDispatcher = exports.HandlingBase = exports.PromiseDispatcherBase = exports.PromiseSubscription = exports.DispatchError = exports.EventManagement = exports.EventListBase = exports.DispatcherWrapper = exports.DispatcherBase = exports.Subscription = void 0;
    const DispatcherBase_12 = DispatcherBase$1;
    Object.defineProperty(exports, "DispatcherBase", { enumerable: true, get: function() {
      return DispatcherBase_12.DispatcherBase;
    } });
    Object.defineProperty(exports, "SubscriptionChangeEventDispatcher", { enumerable: true, get: function() {
      return DispatcherBase_12.SubscriptionChangeEventDispatcher;
    } });
    const DispatchError_12 = DispatchError$1;
    Object.defineProperty(exports, "DispatchError", { enumerable: true, get: function() {
      return DispatchError_12.DispatchError;
    } });
    const DispatcherWrapper_12 = DispatcherWrapper$1;
    Object.defineProperty(exports, "DispatcherWrapper", { enumerable: true, get: function() {
      return DispatcherWrapper_12.DispatcherWrapper;
    } });
    const EventListBase_1 = EventListBase$1;
    Object.defineProperty(exports, "EventListBase", { enumerable: true, get: function() {
      return EventListBase_1.EventListBase;
    } });
    const EventManagement_12 = EventManagement$1;
    Object.defineProperty(exports, "EventManagement", { enumerable: true, get: function() {
      return EventManagement_12.EventManagement;
    } });
    const HandlingBase_1 = HandlingBase$1;
    Object.defineProperty(exports, "HandlingBase", { enumerable: true, get: function() {
      return HandlingBase_1.HandlingBase;
    } });
    const PromiseDispatcherBase_1 = PromiseDispatcherBase$1;
    Object.defineProperty(exports, "PromiseDispatcherBase", { enumerable: true, get: function() {
      return PromiseDispatcherBase_1.PromiseDispatcherBase;
    } });
    const PromiseSubscription_12 = PromiseSubscription$1;
    Object.defineProperty(exports, "PromiseSubscription", { enumerable: true, get: function() {
      return PromiseSubscription_12.PromiseSubscription;
    } });
    const Subscription_12 = Subscription$1;
    Object.defineProperty(exports, "Subscription", { enumerable: true, get: function() {
      return Subscription_12.Subscription;
    } });
  })(dist$6);
  var dist$5 = {};
  var EventDispatcher$1 = {};
  Object.defineProperty(EventDispatcher$1, "__esModule", { value: true });
  EventDispatcher$1.EventDispatcher = void 0;
  const ste_core_1$h = dist$6;
  class EventDispatcher extends ste_core_1$h.DispatcherBase {
    /**
     * Creates an instance of EventDispatcher.
     *
     * @memberOf EventDispatcher
     */
    constructor() {
      super();
    }
    /**
     * Dispatches the event.
     *
     * @param {TSender} sender The sender.
     * @param {TArgs} args The arguments.
     * @returns {IPropagationStatus} The propagation status to interact with the event
     *
     * @memberOf EventDispatcher
     */
    dispatch(sender, args) {
      const result = this._dispatch(false, this, arguments);
      if (result == null) {
        throw new ste_core_1$h.DispatchError("Got `null` back from dispatch.");
      }
      return result;
    }
    /**
     * Dispatches the event in an async way. Does not support event interaction.
     *
     * @param {TSender} sender The sender.
     * @param {TArgs} args The arguments.
     *
     * @memberOf EventDispatcher
     */
    dispatchAsync(sender, args) {
      this._dispatch(true, this, arguments);
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     *
     * @returns {IEvent<TSender, TArgs>} The event.
     *
     * @memberOf EventDispatcher
     */
    asEvent() {
      return super.asEvent();
    }
  }
  EventDispatcher$1.EventDispatcher = EventDispatcher;
  var EventHandlingBase$1 = {};
  var EventList$1 = {};
  Object.defineProperty(EventList$1, "__esModule", { value: true });
  EventList$1.EventList = void 0;
  const ste_core_1$g = dist$6;
  const EventDispatcher_1$1 = EventDispatcher$1;
  class EventList extends ste_core_1$g.EventListBase {
    /**
     * Creates a new EventList instance.
     */
    constructor() {
      super();
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new EventDispatcher_1$1.EventDispatcher();
    }
  }
  EventList$1.EventList = EventList;
  Object.defineProperty(EventHandlingBase$1, "__esModule", { value: true });
  EventHandlingBase$1.EventHandlingBase = void 0;
  const ste_core_1$f = dist$6;
  const EventList_1 = EventList$1;
  class EventHandlingBase extends ste_core_1$f.HandlingBase {
    constructor() {
      super(new EventList_1.EventList());
    }
  }
  EventHandlingBase$1.EventHandlingBase = EventHandlingBase;
  var NonUniformEventList$1 = {};
  Object.defineProperty(NonUniformEventList$1, "__esModule", { value: true });
  NonUniformEventList$1.NonUniformEventList = void 0;
  const EventDispatcher_1 = EventDispatcher$1;
  class NonUniformEventList {
    constructor() {
      this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    get(name) {
      if (this._events[name]) {
        return this._events[name];
      }
      const event = this.createDispatcher();
      this._events[name] = event;
      return event;
    }
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    remove(name) {
      delete this._events[name];
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new EventDispatcher_1.EventDispatcher();
    }
  }
  NonUniformEventList$1.NonUniformEventList = NonUniformEventList;
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript - Core
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonUniformEventList = exports.EventList = exports.EventHandlingBase = exports.EventDispatcher = void 0;
    const EventDispatcher_12 = EventDispatcher$1;
    Object.defineProperty(exports, "EventDispatcher", { enumerable: true, get: function() {
      return EventDispatcher_12.EventDispatcher;
    } });
    const EventHandlingBase_1 = EventHandlingBase$1;
    Object.defineProperty(exports, "EventHandlingBase", { enumerable: true, get: function() {
      return EventHandlingBase_1.EventHandlingBase;
    } });
    const EventList_12 = EventList$1;
    Object.defineProperty(exports, "EventList", { enumerable: true, get: function() {
      return EventList_12.EventList;
    } });
    const NonUniformEventList_1 = NonUniformEventList$1;
    Object.defineProperty(exports, "NonUniformEventList", { enumerable: true, get: function() {
      return NonUniformEventList_1.NonUniformEventList;
    } });
  })(dist$5);
  var dist$4 = {};
  var SimpleEventDispatcher$1 = {};
  Object.defineProperty(SimpleEventDispatcher$1, "__esModule", { value: true });
  SimpleEventDispatcher$1.SimpleEventDispatcher = void 0;
  const ste_core_1$e = dist$6;
  class SimpleEventDispatcher extends ste_core_1$e.DispatcherBase {
    /**
     * Creates an instance of SimpleEventDispatcher.
     *
     * @memberOf SimpleEventDispatcher
     */
    constructor() {
      super();
    }
    /**
     * Dispatches the event.
     *
     * @param {TArgs} args The arguments object.
     * @returns {IPropagationStatus} The status of the event.
     *
     * @memberOf SimpleEventDispatcher
     */
    dispatch(args) {
      const result = this._dispatch(false, this, arguments);
      if (result == null) {
        throw new ste_core_1$e.DispatchError("Got `null` back from dispatch.");
      }
      return result;
    }
    /**
     * Dispatches the event without waiting for the result.
     *
     * @param {TArgs} args The arguments object.
     *
     * @memberOf SimpleEventDispatcher
     */
    dispatchAsync(args) {
      this._dispatch(true, this, arguments);
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     *
     * @returns {ISimpleEvent<TArgs>} The event.
     *
     * @memberOf SimpleEventDispatcher
     */
    asEvent() {
      return super.asEvent();
    }
  }
  SimpleEventDispatcher$1.SimpleEventDispatcher = SimpleEventDispatcher;
  var SimpleEventHandlingBase$1 = {};
  var SimpleEventList$1 = {};
  Object.defineProperty(SimpleEventList$1, "__esModule", { value: true });
  SimpleEventList$1.SimpleEventList = void 0;
  const ste_core_1$d = dist$6;
  const SimpleEventDispatcher_1$1 = SimpleEventDispatcher$1;
  class SimpleEventList extends ste_core_1$d.EventListBase {
    /**
     * Creates a new SimpleEventList instance.
     */
    constructor() {
      super();
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new SimpleEventDispatcher_1$1.SimpleEventDispatcher();
    }
  }
  SimpleEventList$1.SimpleEventList = SimpleEventList;
  Object.defineProperty(SimpleEventHandlingBase$1, "__esModule", { value: true });
  SimpleEventHandlingBase$1.SimpleEventHandlingBase = void 0;
  const ste_core_1$c = dist$6;
  const SimpleEventList_1 = SimpleEventList$1;
  class SimpleEventHandlingBase extends ste_core_1$c.HandlingBase {
    constructor() {
      super(new SimpleEventList_1.SimpleEventList());
    }
  }
  SimpleEventHandlingBase$1.SimpleEventHandlingBase = SimpleEventHandlingBase;
  var NonUniformSimpleEventList$1 = {};
  Object.defineProperty(NonUniformSimpleEventList$1, "__esModule", { value: true });
  NonUniformSimpleEventList$1.NonUniformSimpleEventList = void 0;
  const SimpleEventDispatcher_1 = SimpleEventDispatcher$1;
  class NonUniformSimpleEventList {
    constructor() {
      this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    get(name) {
      if (this._events[name]) {
        return this._events[name];
      }
      const event = this.createDispatcher();
      this._events[name] = event;
      return event;
    }
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    remove(name) {
      delete this._events[name];
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new SimpleEventDispatcher_1.SimpleEventDispatcher();
    }
  }
  NonUniformSimpleEventList$1.NonUniformSimpleEventList = NonUniformSimpleEventList;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonUniformSimpleEventList = exports.SimpleEventList = exports.SimpleEventHandlingBase = exports.SimpleEventDispatcher = void 0;
    const SimpleEventDispatcher_12 = SimpleEventDispatcher$1;
    Object.defineProperty(exports, "SimpleEventDispatcher", { enumerable: true, get: function() {
      return SimpleEventDispatcher_12.SimpleEventDispatcher;
    } });
    const SimpleEventHandlingBase_1 = SimpleEventHandlingBase$1;
    Object.defineProperty(exports, "SimpleEventHandlingBase", { enumerable: true, get: function() {
      return SimpleEventHandlingBase_1.SimpleEventHandlingBase;
    } });
    const NonUniformSimpleEventList_1 = NonUniformSimpleEventList$1;
    Object.defineProperty(exports, "NonUniformSimpleEventList", { enumerable: true, get: function() {
      return NonUniformSimpleEventList_1.NonUniformSimpleEventList;
    } });
    const SimpleEventList_12 = SimpleEventList$1;
    Object.defineProperty(exports, "SimpleEventList", { enumerable: true, get: function() {
      return SimpleEventList_12.SimpleEventList;
    } });
  })(dist$4);
  var dist$3 = {};
  var SignalDispatcher$1 = {};
  Object.defineProperty(SignalDispatcher$1, "__esModule", { value: true });
  SignalDispatcher$1.SignalDispatcher = void 0;
  const ste_core_1$b = dist$6;
  class SignalDispatcher extends ste_core_1$b.DispatcherBase {
    /**
     * Dispatches the signal.
     *
     * @returns {IPropagationStatus} The status of the signal.
     *
     * @memberOf SignalDispatcher
     */
    dispatch() {
      const result = this._dispatch(false, this, arguments);
      if (result == null) {
        throw new ste_core_1$b.DispatchError("Got `null` back from dispatch.");
      }
      return result;
    }
    /**
     * Dispatches the signal without waiting for the result.
     *
     * @memberOf SignalDispatcher
     */
    dispatchAsync() {
      this._dispatch(true, this, arguments);
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     *
     * @returns {ISignal} The signal.
     *
     * @memberOf SignalDispatcher
     */
    asEvent() {
      return super.asEvent();
    }
  }
  SignalDispatcher$1.SignalDispatcher = SignalDispatcher;
  var SignalHandlingBase$1 = {};
  var SignalList$1 = {};
  Object.defineProperty(SignalList$1, "__esModule", { value: true });
  SignalList$1.SignalList = void 0;
  const ste_core_1$a = dist$6;
  const SignalDispatcher_1 = SignalDispatcher$1;
  class SignalList extends ste_core_1$a.EventListBase {
    /**
     * Creates an instance of SignalList.
     *
     * @memberOf SignalList
     */
    constructor() {
      super();
    }
    /**
     * Creates a new dispatcher instance.
     *
     * @protected
     * @returns {SignalDispatcher}
     *
     * @memberOf SignalList
     */
    createDispatcher() {
      return new SignalDispatcher_1.SignalDispatcher();
    }
  }
  SignalList$1.SignalList = SignalList;
  Object.defineProperty(SignalHandlingBase$1, "__esModule", { value: true });
  SignalHandlingBase$1.SignalHandlingBase = void 0;
  const ste_core_1$9 = dist$6;
  const SignalList_1 = SignalList$1;
  class SignalHandlingBase extends ste_core_1$9.HandlingBase {
    /**
     * Creates an instance of SignalHandlingBase.
     *
     * @memberOf SignalHandlingBase
     */
    constructor() {
      super(new SignalList_1.SignalList());
    }
  }
  SignalHandlingBase$1.SignalHandlingBase = SignalHandlingBase;
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript - Promise Signals
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignalList = exports.SignalHandlingBase = exports.SignalDispatcher = void 0;
    const SignalDispatcher_12 = SignalDispatcher$1;
    Object.defineProperty(exports, "SignalDispatcher", { enumerable: true, get: function() {
      return SignalDispatcher_12.SignalDispatcher;
    } });
    const SignalHandlingBase_1 = SignalHandlingBase$1;
    Object.defineProperty(exports, "SignalHandlingBase", { enumerable: true, get: function() {
      return SignalHandlingBase_1.SignalHandlingBase;
    } });
    const SignalList_12 = SignalList$1;
    Object.defineProperty(exports, "SignalList", { enumerable: true, get: function() {
      return SignalList_12.SignalList;
    } });
  })(dist$3);
  var dist$2 = {};
  var PromiseEventDispatcher$1 = {};
  Object.defineProperty(PromiseEventDispatcher$1, "__esModule", { value: true });
  PromiseEventDispatcher$1.PromiseEventDispatcher = void 0;
  const ste_core_1$8 = dist$6;
  class PromiseEventDispatcher extends ste_core_1$8.PromiseDispatcherBase {
    /**
     * Creates a new EventDispatcher instance.
     */
    constructor() {
      super();
    }
    /**
     * Dispatches the event.
     *
     * @param {TSender} sender The sender object.
     * @param {TArgs} args The argument object.
     * @returns {Promise<IPropagationStatus>} The status.
     *
     * @memberOf PromiseEventDispatcher
     */
    async dispatch(sender, args) {
      const result = await this._dispatchAsPromise(false, this, arguments);
      if (result == null) {
        throw new ste_core_1$8.DispatchError("Got `null` back from dispatch.");
      }
      return result;
    }
    /**
     * Dispatches the event without waiting for the result.
     *
     * @param {TSender} sender The sender object.
     * @param {TArgs} args The argument object.
     *
     * @memberOf PromiseEventDispatcher
     */
    dispatchAsync(sender, args) {
      this._dispatchAsPromise(true, this, arguments);
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    asEvent() {
      return super.asEvent();
    }
  }
  PromiseEventDispatcher$1.PromiseEventDispatcher = PromiseEventDispatcher;
  var PromiseEventHandlingBase$1 = {};
  var PromiseEventList$1 = {};
  Object.defineProperty(PromiseEventList$1, "__esModule", { value: true });
  PromiseEventList$1.PromiseEventList = void 0;
  const ste_core_1$7 = dist$6;
  const PromiseEventDispatcher_1$1 = PromiseEventDispatcher$1;
  class PromiseEventList extends ste_core_1$7.EventListBase {
    /**
     * Creates a new EventList instance.
     */
    constructor() {
      super();
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new PromiseEventDispatcher_1$1.PromiseEventDispatcher();
    }
  }
  PromiseEventList$1.PromiseEventList = PromiseEventList;
  Object.defineProperty(PromiseEventHandlingBase$1, "__esModule", { value: true });
  PromiseEventHandlingBase$1.PromiseEventHandlingBase = void 0;
  const ste_core_1$6 = dist$6;
  const PromiseEventList_1 = PromiseEventList$1;
  class PromiseEventHandlingBase extends ste_core_1$6.HandlingBase {
    constructor() {
      super(new PromiseEventList_1.PromiseEventList());
    }
  }
  PromiseEventHandlingBase$1.PromiseEventHandlingBase = PromiseEventHandlingBase;
  var NonUniformPromiseEventList$1 = {};
  Object.defineProperty(NonUniformPromiseEventList$1, "__esModule", { value: true });
  NonUniformPromiseEventList$1.NonUniformPromiseEventList = void 0;
  const PromiseEventDispatcher_1 = PromiseEventDispatcher$1;
  class NonUniformPromiseEventList {
    constructor() {
      this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    get(name) {
      if (this._events[name]) {
        return this._events[name];
      }
      const event = this.createDispatcher();
      this._events[name] = event;
      return event;
    }
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    remove(name) {
      delete this._events[name];
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new PromiseEventDispatcher_1.PromiseEventDispatcher();
    }
  }
  NonUniformPromiseEventList$1.NonUniformPromiseEventList = NonUniformPromiseEventList;
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript - Core
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonUniformPromiseEventList = exports.PromiseEventList = exports.PromiseEventHandlingBase = exports.PromiseEventDispatcher = void 0;
    const PromiseEventDispatcher_12 = PromiseEventDispatcher$1;
    Object.defineProperty(exports, "PromiseEventDispatcher", { enumerable: true, get: function() {
      return PromiseEventDispatcher_12.PromiseEventDispatcher;
    } });
    const PromiseEventHandlingBase_1 = PromiseEventHandlingBase$1;
    Object.defineProperty(exports, "PromiseEventHandlingBase", { enumerable: true, get: function() {
      return PromiseEventHandlingBase_1.PromiseEventHandlingBase;
    } });
    const PromiseEventList_12 = PromiseEventList$1;
    Object.defineProperty(exports, "PromiseEventList", { enumerable: true, get: function() {
      return PromiseEventList_12.PromiseEventList;
    } });
    const NonUniformPromiseEventList_1 = NonUniformPromiseEventList$1;
    Object.defineProperty(exports, "NonUniformPromiseEventList", { enumerable: true, get: function() {
      return NonUniformPromiseEventList_1.NonUniformPromiseEventList;
    } });
  })(dist$2);
  var dist$1 = {};
  var PromiseSignalDispatcher$1 = {};
  Object.defineProperty(PromiseSignalDispatcher$1, "__esModule", { value: true });
  PromiseSignalDispatcher$1.PromiseSignalDispatcher = void 0;
  const ste_core_1$5 = dist$6;
  class PromiseSignalDispatcher extends ste_core_1$5.PromiseDispatcherBase {
    /**
     * Creates a new SignalDispatcher instance.
     */
    constructor() {
      super();
    }
    /**
     * Dispatches the signal.
     *
     * @returns {IPropagationStatus} The status of the dispatch.
     *
     * @memberOf SignalDispatcher
     */
    async dispatch() {
      const result = await this._dispatchAsPromise(false, this, arguments);
      if (result == null) {
        throw new ste_core_1$5.DispatchError("Got `null` back from dispatch.");
      }
      return result;
    }
    /**
     * Dispatches the signal threaded.
     */
    dispatchAsync() {
      this._dispatchAsPromise(true, this, arguments);
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    asEvent() {
      return super.asEvent();
    }
  }
  PromiseSignalDispatcher$1.PromiseSignalDispatcher = PromiseSignalDispatcher;
  var PromiseSignalHandlingBase$1 = {};
  var PromiseSignalList$1 = {};
  Object.defineProperty(PromiseSignalList$1, "__esModule", { value: true });
  PromiseSignalList$1.PromiseSignalList = void 0;
  const ste_core_1$4 = dist$6;
  const PromiseSignalDispatcher_1 = PromiseSignalDispatcher$1;
  class PromiseSignalList extends ste_core_1$4.EventListBase {
    /**
     * Creates a new SignalList instance.
     */
    constructor() {
      super();
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new PromiseSignalDispatcher_1.PromiseSignalDispatcher();
    }
  }
  PromiseSignalList$1.PromiseSignalList = PromiseSignalList;
  Object.defineProperty(PromiseSignalHandlingBase$1, "__esModule", { value: true });
  PromiseSignalHandlingBase$1.PromiseSignalHandlingBase = void 0;
  const ste_core_1$3 = dist$6;
  const PromiseSignalList_1 = PromiseSignalList$1;
  class PromiseSignalHandlingBase extends ste_core_1$3.HandlingBase {
    constructor() {
      super(new PromiseSignalList_1.PromiseSignalList());
    }
  }
  PromiseSignalHandlingBase$1.PromiseSignalHandlingBase = PromiseSignalHandlingBase;
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript - Promise Signals
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PromiseSignalList = exports.PromiseSignalHandlingBase = exports.PromiseSignalDispatcher = void 0;
    const PromiseSignalDispatcher_12 = PromiseSignalDispatcher$1;
    Object.defineProperty(exports, "PromiseSignalDispatcher", { enumerable: true, get: function() {
      return PromiseSignalDispatcher_12.PromiseSignalDispatcher;
    } });
    const PromiseSignalHandlingBase_1 = PromiseSignalHandlingBase$1;
    Object.defineProperty(exports, "PromiseSignalHandlingBase", { enumerable: true, get: function() {
      return PromiseSignalHandlingBase_1.PromiseSignalHandlingBase;
    } });
    const PromiseSignalList_12 = PromiseSignalList$1;
    Object.defineProperty(exports, "PromiseSignalList", { enumerable: true, get: function() {
      return PromiseSignalList_12.PromiseSignalList;
    } });
  })(dist$1);
  var dist = {};
  var NonUniformPromiseSimpleEventList$1 = {};
  var PromiseSimpleEventDispatcher$1 = {};
  Object.defineProperty(PromiseSimpleEventDispatcher$1, "__esModule", { value: true });
  PromiseSimpleEventDispatcher$1.PromiseSimpleEventDispatcher = void 0;
  const ste_core_1$2 = dist$6;
  class PromiseSimpleEventDispatcher extends ste_core_1$2.PromiseDispatcherBase {
    /**
     * Creates a new SimpleEventDispatcher instance.
     */
    constructor() {
      super();
    }
    /**
     * Dispatches the event.
     * @param args The arguments object.
     * @returns {IPropagationStatus} The status of the dispatch.
     * @memberOf PromiseSimpleEventDispatcher
     */
    async dispatch(args) {
      const result = await this._dispatchAsPromise(false, this, arguments);
      if (result == null) {
        throw new ste_core_1$2.DispatchError("Got `null` back from dispatch.");
      }
      return result;
    }
    /**
     * Dispatches the event without waiting for it to complete.
     * @param args The argument object.
     * @memberOf PromiseSimpleEventDispatcher
     */
    dispatchAsync(args) {
      this._dispatchAsPromise(true, this, arguments);
    }
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    asEvent() {
      return super.asEvent();
    }
  }
  PromiseSimpleEventDispatcher$1.PromiseSimpleEventDispatcher = PromiseSimpleEventDispatcher;
  Object.defineProperty(NonUniformPromiseSimpleEventList$1, "__esModule", { value: true });
  NonUniformPromiseSimpleEventList$1.NonUniformPromiseSimpleEventList = void 0;
  const PromiseSimpleEventDispatcher_1$1 = PromiseSimpleEventDispatcher$1;
  class NonUniformPromiseSimpleEventList {
    constructor() {
      this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    get(name) {
      if (this._events[name]) {
        return this._events[name];
      }
      const event = this.createDispatcher();
      this._events[name] = event;
      return event;
    }
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    remove(name) {
      delete this._events[name];
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new PromiseSimpleEventDispatcher_1$1.PromiseSimpleEventDispatcher();
    }
  }
  NonUniformPromiseSimpleEventList$1.NonUniformPromiseSimpleEventList = NonUniformPromiseSimpleEventList;
  var PromiseSimpleEventHandlingBase$1 = {};
  var PromiseSimpleEventList$1 = {};
  Object.defineProperty(PromiseSimpleEventList$1, "__esModule", { value: true });
  PromiseSimpleEventList$1.PromiseSimpleEventList = void 0;
  const ste_core_1$1 = dist$6;
  const PromiseSimpleEventDispatcher_1 = PromiseSimpleEventDispatcher$1;
  class PromiseSimpleEventList extends ste_core_1$1.EventListBase {
    /**
     * Creates a new SimpleEventList instance.
     */
    constructor() {
      super();
    }
    /**
     * Creates a new dispatcher instance.
     */
    createDispatcher() {
      return new PromiseSimpleEventDispatcher_1.PromiseSimpleEventDispatcher();
    }
  }
  PromiseSimpleEventList$1.PromiseSimpleEventList = PromiseSimpleEventList;
  Object.defineProperty(PromiseSimpleEventHandlingBase$1, "__esModule", { value: true });
  PromiseSimpleEventHandlingBase$1.PromiseSimpleEventHandlingBase = void 0;
  const ste_core_1 = dist$6;
  const PromiseSimpleEventList_1 = PromiseSimpleEventList$1;
  class PromiseSimpleEventHandlingBase extends ste_core_1.HandlingBase {
    constructor() {
      super(new PromiseSimpleEventList_1.PromiseSimpleEventList());
    }
  }
  PromiseSimpleEventHandlingBase$1.PromiseSimpleEventHandlingBase = PromiseSimpleEventHandlingBase;
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript - Core
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonUniformPromiseSimpleEventList = exports.PromiseSimpleEventList = exports.PromiseSimpleEventHandlingBase = exports.PromiseSimpleEventDispatcher = void 0;
    const NonUniformPromiseSimpleEventList_1 = NonUniformPromiseSimpleEventList$1;
    Object.defineProperty(exports, "NonUniformPromiseSimpleEventList", { enumerable: true, get: function() {
      return NonUniformPromiseSimpleEventList_1.NonUniformPromiseSimpleEventList;
    } });
    const PromiseSimpleEventDispatcher_12 = PromiseSimpleEventDispatcher$1;
    Object.defineProperty(exports, "PromiseSimpleEventDispatcher", { enumerable: true, get: function() {
      return PromiseSimpleEventDispatcher_12.PromiseSimpleEventDispatcher;
    } });
    const PromiseSimpleEventHandlingBase_1 = PromiseSimpleEventHandlingBase$1;
    Object.defineProperty(exports, "PromiseSimpleEventHandlingBase", { enumerable: true, get: function() {
      return PromiseSimpleEventHandlingBase_1.PromiseSimpleEventHandlingBase;
    } });
    const PromiseSimpleEventList_12 = PromiseSimpleEventList$1;
    Object.defineProperty(exports, "PromiseSimpleEventList", { enumerable: true, get: function() {
      return PromiseSimpleEventList_12.PromiseSimpleEventList;
    } });
  })(dist);
  (function(exports) {
    /*!
     * Strongly Typed Events for TypeScript
     * https://github.com/KeesCBakker/StronlyTypedEvents/
     * http://keestalkstech.com
     *
     * Copyright Kees C. Bakker / KeesTalksTech
     * Released under the MIT license
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonUniformPromiseSimpleEventList = exports.PromiseSimpleEventList = exports.PromiseSimpleEventHandlingBase = exports.PromiseSimpleEventDispatcher = exports.PromiseSignalList = exports.PromiseSignalHandlingBase = exports.PromiseSignalDispatcher = exports.NonUniformPromiseEventList = exports.PromiseEventList = exports.PromiseEventHandlingBase = exports.PromiseEventDispatcher = exports.SignalList = exports.SignalHandlingBase = exports.SignalDispatcher = exports.NonUniformSimpleEventList = exports.SimpleEventList = exports.SimpleEventHandlingBase = exports.SimpleEventDispatcher = exports.NonUniformEventList = exports.EventList = exports.EventHandlingBase = exports.EventDispatcher = exports.HandlingBase = exports.PromiseDispatcherBase = exports.PromiseSubscription = exports.DispatchError = exports.EventManagement = exports.EventListBase = exports.DispatcherWrapper = exports.DispatcherBase = exports.Subscription = void 0;
    var ste_core_12 = dist$6;
    Object.defineProperty(exports, "Subscription", { enumerable: true, get: function() {
      return ste_core_12.Subscription;
    } });
    Object.defineProperty(exports, "DispatcherBase", { enumerable: true, get: function() {
      return ste_core_12.DispatcherBase;
    } });
    Object.defineProperty(exports, "DispatcherWrapper", { enumerable: true, get: function() {
      return ste_core_12.DispatcherWrapper;
    } });
    Object.defineProperty(exports, "EventListBase", { enumerable: true, get: function() {
      return ste_core_12.EventListBase;
    } });
    Object.defineProperty(exports, "EventManagement", { enumerable: true, get: function() {
      return ste_core_12.EventManagement;
    } });
    Object.defineProperty(exports, "DispatchError", { enumerable: true, get: function() {
      return ste_core_12.DispatchError;
    } });
    Object.defineProperty(exports, "PromiseSubscription", { enumerable: true, get: function() {
      return ste_core_12.PromiseSubscription;
    } });
    Object.defineProperty(exports, "PromiseDispatcherBase", { enumerable: true, get: function() {
      return ste_core_12.PromiseDispatcherBase;
    } });
    Object.defineProperty(exports, "HandlingBase", { enumerable: true, get: function() {
      return ste_core_12.HandlingBase;
    } });
    var ste_events_1 = dist$5;
    Object.defineProperty(exports, "EventDispatcher", { enumerable: true, get: function() {
      return ste_events_1.EventDispatcher;
    } });
    Object.defineProperty(exports, "EventHandlingBase", { enumerable: true, get: function() {
      return ste_events_1.EventHandlingBase;
    } });
    Object.defineProperty(exports, "EventList", { enumerable: true, get: function() {
      return ste_events_1.EventList;
    } });
    Object.defineProperty(exports, "NonUniformEventList", { enumerable: true, get: function() {
      return ste_events_1.NonUniformEventList;
    } });
    var ste_simple_events_1 = dist$4;
    Object.defineProperty(exports, "SimpleEventDispatcher", { enumerable: true, get: function() {
      return ste_simple_events_1.SimpleEventDispatcher;
    } });
    Object.defineProperty(exports, "SimpleEventHandlingBase", { enumerable: true, get: function() {
      return ste_simple_events_1.SimpleEventHandlingBase;
    } });
    Object.defineProperty(exports, "SimpleEventList", { enumerable: true, get: function() {
      return ste_simple_events_1.SimpleEventList;
    } });
    Object.defineProperty(exports, "NonUniformSimpleEventList", { enumerable: true, get: function() {
      return ste_simple_events_1.NonUniformSimpleEventList;
    } });
    var ste_signals_1 = dist$3;
    Object.defineProperty(exports, "SignalDispatcher", { enumerable: true, get: function() {
      return ste_signals_1.SignalDispatcher;
    } });
    Object.defineProperty(exports, "SignalHandlingBase", { enumerable: true, get: function() {
      return ste_signals_1.SignalHandlingBase;
    } });
    Object.defineProperty(exports, "SignalList", { enumerable: true, get: function() {
      return ste_signals_1.SignalList;
    } });
    var ste_promise_events_1 = dist$2;
    Object.defineProperty(exports, "PromiseEventDispatcher", { enumerable: true, get: function() {
      return ste_promise_events_1.PromiseEventDispatcher;
    } });
    Object.defineProperty(exports, "PromiseEventHandlingBase", { enumerable: true, get: function() {
      return ste_promise_events_1.PromiseEventHandlingBase;
    } });
    Object.defineProperty(exports, "PromiseEventList", { enumerable: true, get: function() {
      return ste_promise_events_1.PromiseEventList;
    } });
    Object.defineProperty(exports, "NonUniformPromiseEventList", { enumerable: true, get: function() {
      return ste_promise_events_1.NonUniformPromiseEventList;
    } });
    var ste_promise_signals_1 = dist$1;
    Object.defineProperty(exports, "PromiseSignalDispatcher", { enumerable: true, get: function() {
      return ste_promise_signals_1.PromiseSignalDispatcher;
    } });
    Object.defineProperty(exports, "PromiseSignalHandlingBase", { enumerable: true, get: function() {
      return ste_promise_signals_1.PromiseSignalHandlingBase;
    } });
    Object.defineProperty(exports, "PromiseSignalList", { enumerable: true, get: function() {
      return ste_promise_signals_1.PromiseSignalList;
    } });
    var ste_promise_simple_events_1 = dist;
    Object.defineProperty(exports, "PromiseSimpleEventDispatcher", { enumerable: true, get: function() {
      return ste_promise_simple_events_1.PromiseSimpleEventDispatcher;
    } });
    Object.defineProperty(exports, "PromiseSimpleEventHandlingBase", { enumerable: true, get: function() {
      return ste_promise_simple_events_1.PromiseSimpleEventHandlingBase;
    } });
    Object.defineProperty(exports, "PromiseSimpleEventList", { enumerable: true, get: function() {
      return ste_promise_simple_events_1.PromiseSimpleEventList;
    } });
    Object.defineProperty(exports, "NonUniformPromiseSimpleEventList", { enumerable: true, get: function() {
      return ste_promise_simple_events_1.NonUniformPromiseSimpleEventList;
    } });
  })(dist$7);
  class MooSocket extends WebSocket {
    constructor(url, protocols) {
      super(url, protocols);
      __publicField(this, "_onServerMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onClientMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onInitClientInfoMessage", new dist$7.SimpleEventDispatcher());
      if (url.toString().includes("milkyway")) {
        _unsafeWindow.mooSocket = this;
      }
    }
    get onServerMessage() {
      return this._onServerMessage.asEvent();
    }
    get onClientMessage() {
      return this._onClientMessage.asEvent();
    }
    get onInitClientInfoMessage() {
      return this._onInitClientInfoMessage.asEvent();
    }
    initialize() {
      this.addEventListener("message", (e) => {
        const msg = JSON.parse(e.data);
        if (msg.type === ServerMessageType.InitClientInfo) {
          this._onInitClientInfoMessage.dispatch(msg);
        }
        this._onServerMessage.dispatch(msg);
      });
    }
    send(data) {
      this._onClientMessage.dispatch(JSON.parse(data));
      super.send(data);
    }
  }
  class ChatNotifierPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Chat Notifier");
      __publicField(this, "key", "chat-notifier");
      __publicField(this, "description", "Notifies your of chat messages");
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "config", [
        {
          type: PluginConfigType.Text,
          name: "Words",
          description: "Select the words to trigger a notification (comma separated)",
          key: "highlighted-words",
          value: "moooo, cow"
        }
      ]);
    }
    get highlightedWords() {
      return this.getConfig("highlighted-words").value.replaceAll(", ", ",").split(",");
    }
    onChatMessage(message) {
      this.highlightedWords.forEach((word) => {
        if (message.message.toLowerCase().includes(word.toLowerCase())) {
          this._game.notifier.sendBrowserNotification(`Chat notification (${word}): ${message.message}`);
        }
      });
    }
  }
  const _hoisted_1$h = {
    width: "100%",
    height: "100%"
  };
  const _hoisted_2$b = ["href"];
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    __name: "SkillIcon",
    props: {
      skill: null
    },
    setup(__props) {
      const props = __props;
      const imgUrl = vue.computed(() => {
        const split = props.skill.split("/");
        const skillPostfix = split[split.length - 1];
        return `/static/media/skills_sprite.3704eb13.svg#${skillPostfix}`;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$h, [
          vue.createElementVNode("use", { href: vue.unref(imgUrl) }, null, 8, _hoisted_2$b)
        ]);
      };
    }
  });
  const _hoisted_1$g = { class: "overflow-hidden h-4 text-xs flex rounded bg-gray-300 relative" };
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    __name: "ProgressBar",
    props: {
      percentage: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createElementVNode("div", {
            style: vue.normalizeStyle({ width: __props.percentage * 100 + "%" }),
            class: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-hitpoints"
          }, null, 4)
        ]);
      };
    }
  });
  const _hoisted_1$f = { class: "flex flex-col bg-divider p-2 hover:opacity-70" };
  const _hoisted_2$a = ["title"];
  const _hoisted_3$7 = { class: "flex flex-col flex-1" };
  const _hoisted_4$5 = { class: "text-xxs" };
  const _hoisted_5$5 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-ocean-200" }, "XP Gained:", -1);
  const _hoisted_6$5 = { class: "text-xxs" };
  const _hoisted_7$4 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-ocean-200" }, "XP/hr:", -1);
  const _hoisted_8$4 = { class: "flex flex-col items-end" };
  const _hoisted_9$4 = { class: "text-xxs" };
  const _hoisted_10$3 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-ocean-200" }, "XP Left:", -1);
  const _hoisted_11$4 = { class: "text-xxs" };
  const _hoisted_12$3 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-ocean-200" }, "Actions:", -1);
  const _hoisted_13$3 = { class: "absolute flex flex-row justify-between w-full text-black px-2" };
  const _hoisted_14$3 = { class: "text-xxs mt-0.5 text-midnight-600" };
  const _hoisted_15$3 = { class: "text-xxs mt-0.5 text-midnight-600" };
  const _hoisted_16$3 = { class: "text-xxs mt-0.5 text-midnight-600" };
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    __name: "XpTrackerSkillDisplay",
    props: {
      skill: null,
      level: null,
      xpLeft: null,
      percentage: null
    },
    setup(__props) {
      const props = __props;
      const actionsLeft = vue.computed(() => {
        return props.xpLeft / props.skill.averageAction;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$f, [
          vue.createElementVNode("div", {
            class: "flex flex-row justify-between items-center",
            title: __props.skill.name
          }, [
            vue.createVNode(_sfc_main$h, {
              skill: __props.skill.hrid,
              class: "w-8 h-8 mr-2"
            }, null, 8, ["skill"]),
            vue.createElementVNode("div", _hoisted_3$7, [
              vue.createElementVNode("span", _hoisted_4$5, [
                _hoisted_5$5,
                vue.createTextVNode(" " + vue.toDisplayString(Math.floor(__props.skill.xpGained).toLocaleString()), 1)
              ]),
              vue.createElementVNode("span", _hoisted_6$5, [
                _hoisted_7$4,
                vue.createTextVNode(" " + vue.toDisplayString(Math.floor(__props.skill.xpPerHour).toLocaleString()), 1)
              ])
            ]),
            vue.createElementVNode("div", _hoisted_8$4, [
              vue.createElementVNode("span", _hoisted_9$4, [
                _hoisted_10$3,
                vue.createTextVNode(" " + vue.toDisplayString(Math.ceil(__props.xpLeft).toLocaleString()), 1)
              ]),
              vue.createElementVNode("span", _hoisted_11$4, [
                _hoisted_12$3,
                vue.createTextVNode(" " + vue.toDisplayString(Math.ceil(vue.unref(actionsLeft)).toLocaleString()), 1)
              ])
            ])
          ], 8, _hoisted_2$a),
          vue.createVNode(_sfc_main$g, {
            class: "mt-2",
            percentage: __props.percentage
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_13$3, [
                vue.createElementVNode("span", _hoisted_14$3, "Lvl. " + vue.toDisplayString(__props.level), 1),
                vue.createElementVNode("span", _hoisted_15$3, vue.toDisplayString((__props.percentage * 100).toFixed(2)) + "%", 1),
                vue.createElementVNode("span", _hoisted_16$3, "Lvl. " + vue.toDisplayString(__props.level + 1), 1)
              ])
            ]),
            _: 1
          }, 8, ["percentage"])
        ]);
      };
    }
  });
  const _hoisted_1$e = { class: "flex flex-col space-y-2" };
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "XpTrackerDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const gains = vue.computed(() => {
        return props.plugin.gains;
      });
      const xpLeft = (skillHrid) => {
        return props.plugin.getXpLeft(skillHrid);
      };
      const percentage = (skillHrid) => {
        return props.plugin.getPercentage(skillHrid);
      };
      const level = (skillHrid) => {
        return props.plugin.getLevel(skillHrid);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(gains), (skill) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$f, {
              skill,
              "actions-left": 0,
              "xp-left": xpLeft(skill.hrid),
              percentage: percentage(skill.hrid),
              level: level(skill.hrid)
            }, null, 8, ["skill", "xp-left", "percentage", "level"]);
          }), 256))
        ]);
      };
    }
  });
  class XpTrackerSkill {
    constructor(name, skill) {
      __publicField(this, "name");
      __publicField(this, "hrid");
      __publicField(this, "xpGained", 0);
      __publicField(this, "xpPerHour", 0);
      __publicField(this, "averageAction", 0);
      __publicField(this, "_startTime", /* @__PURE__ */ new Date());
      __publicField(this, "_actionHistory", []);
      __publicField(this, "ACTION_MEMORY", 20);
      __publicField(this, "MS_PER_HOUR", 1e3 * 60 * 60);
      this.name = name;
      this.hrid = skill;
    }
    getXpGain(xp) {
      if (this.xpGained === 0) {
        this._reset();
      }
      this._actionHistory.push(xp);
      if (this._actionHistory.length > this.ACTION_MEMORY) {
        this._actionHistory.shift();
      }
      this.averageAction = this._actionHistory.reduce((sum, xp2) => sum + xp2, 0) / this._actionHistory.length;
      this.xpGained += xp;
      this.updateXpPerHour();
    }
    updateXpPerHour() {
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - this._startTime.getTime();
      const hoursSpend = diff / this.MS_PER_HOUR;
      this.xpPerHour = this.xpGained / hoursSpend;
    }
    _reset() {
      this._startTime = /* @__PURE__ */ new Date();
    }
  }
  class XpTrackerPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Xp Tracker");
      __publicField(this, "key", "xp-tracker");
      __publicField(this, "description", "Tracks Xp gains over time");
      __publicField(this, "_isEnabled", true);
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "tab", {
        icon: "📊",
        pluginName: "Xp Tracker",
        componentName: "XpTrackerDisplay",
        component: vue.markRaw(_sfc_main$e)
      });
      __publicField(this, "_gains", {});
    }
    get gains() {
      return Object.values(this._gains).filter((skill) => {
        return skill.xpGained > 0;
      });
    }
    initialize(game) {
      super.initialize(game);
      this._game.skills.sortedSkills.forEach((detail) => {
        this._gains[detail.hrid] = new XpTrackerSkill(detail.name, detail.hrid);
      });
    }
    getXpLeft(skill) {
      return this._game.skills.getXpLeft(skill);
    }
    getPercentage(skillHrid) {
      return this._game.skills.getProgressPercentage(skillHrid);
    }
    onXpGained(xpGained) {
      this._gains[xpGained.skillHrid].getXpGain(xpGained.delta);
    }
    onClientTick() {
      this.gains.forEach((gain) => gain.updateXpPerHour());
    }
    getLevel(skillHrid) {
      return this._game.skills.getLevel(skillHrid);
    }
  }
  class Skills {
    constructor(skillDetailMap, levelExperienceTable) {
      __publicField(this, "_characterSkills");
      __publicField(this, "_onXpGained", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onLvlGained", new dist$7.SimpleEventDispatcher());
      __publicField(this, "skillDetailMap");
      __publicField(this, "sortedSkills");
      __publicField(this, "levelExperienceTable");
      this.skillDetailMap = skillDetailMap;
      this.levelExperienceTable = levelExperienceTable;
      this.sortedSkills = Object.values(this.skillDetailMap).sort((a, b) => {
        return a.sortIndex - b.sortIndex;
      });
      this._characterSkills = {};
      this.sortedSkills.forEach((detail) => {
        this._characterSkills[detail.hrid] = {
          skillHrid: detail.hrid,
          experience: 0,
          level: 0
        };
      });
    }
    get onXpGained() {
      return this._onXpGained.asEvent();
    }
    get onLvlGained() {
      return this._onLvlGained.asEvent();
    }
    updateCharacterSkills(skills, notify = true) {
      skills.forEach((info) => {
        const xpChanged = info.experience - this._characterSkills[info.skillHrid].experience;
        const lvlChanged = info.level - this._characterSkills[info.skillHrid].level;
        this._characterSkills[info.skillHrid] = info;
        if (!notify) {
          return;
        }
        if (xpChanged !== 0) {
          this._onXpGained.dispatch({
            ...this._characterSkills[info.skillHrid],
            delta: xpChanged
          });
        }
        if (lvlChanged !== 0) {
          this._onLvlGained.dispatch({
            ...this._characterSkills[info.skillHrid],
            delta: lvlChanged
          });
        }
      });
    }
    getXpLeft(skill) {
      const currentLevel = this._characterSkills[skill].level;
      const targetXp = this.levelExperienceTable[currentLevel + 1];
      return targetXp - this._characterSkills[skill].experience;
    }
    getProgressPercentage(skill) {
      const currentLevel = this._characterSkills[skill].level;
      const currentXp = this._characterSkills[skill].experience;
      const previousXp = this.levelExperienceTable[currentLevel];
      const targetXp = this.levelExperienceTable[currentLevel + 1];
      const currentLevelXp = targetXp - previousXp;
      return (currentXp - previousXp) / currentLevelXp;
    }
    getLevel(skillHrid) {
      return this._characterSkills[skillHrid].level;
    }
  }
  var ChatChannelTypeHrid = /* @__PURE__ */ ((ChatChannelTypeHrid2) => {
    ChatChannelTypeHrid2["General"] = "/chat_channel_types/general";
    ChatChannelTypeHrid2["Trade"] = "/chat_channel_types/trade";
    ChatChannelTypeHrid2["Help"] = "/chat_channel_types/help";
    ChatChannelTypeHrid2["Whisper"] = "/chat_channel_types/whisper";
    return ChatChannelTypeHrid2;
  })(ChatChannelTypeHrid || {});
  class Chat {
    constructor(chatIconDetailMap) {
      __publicField(this, "_messages", []);
      __publicField(this, "_whisperHistory", []);
      __publicField(this, "_characterChatIcons", {});
      __publicField(this, "_onMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onGeneralMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onTradeMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onHelpMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onWhisperMessage", new dist$7.SimpleEventDispatcher());
      __publicField(this, "chatIconDetailMap");
      this.chatIconDetailMap = chatIconDetailMap;
    }
    updateCharacterChatIcons(chatIconMap) {
      this._characterChatIcons = chatIconMap;
    }
    updateWhisperHistory(whisperChatHistory) {
      this._whisperHistory = whisperChatHistory;
    }
    get whisperHistory() {
      return this._whisperHistory;
    }
    get onMessage() {
      return this._onMessage.asEvent();
    }
    get onGeneralMessage() {
      return this._onGeneralMessage.asEvent();
    }
    get onTradeMessage() {
      return this._onTradeMessage.asEvent();
    }
    get onHelpMessage() {
      return this._onHelpMessage.asEvent();
    }
    get onWhisperMessage() {
      return this._onWhisperMessage.asEvent();
    }
    addMessage(chatMessage) {
      this._messages.push(chatMessage);
      this._onMessage.dispatch(chatMessage);
      switch (chatMessage.channel) {
        case ChatChannelTypeHrid.General:
          this._onGeneralMessage.dispatch(chatMessage);
          break;
        case ChatChannelTypeHrid.Trade:
          this._onTradeMessage.dispatch(chatMessage);
          break;
        case ChatChannelTypeHrid.Help:
          this._onHelpMessage.dispatch(chatMessage);
          break;
        case ChatChannelTypeHrid.Whisper:
          this._onWhisperMessage.dispatch(chatMessage);
          break;
      }
    }
  }
  class ActionQueue {
    constructor(actionDetailMap, actionCategoryDetailMap, actionTypeDetailMap) {
      __publicField(this, "_characterActions", []);
      __publicField(this, "_onActionQueueUpdated", new dist$7.SimpleEventDispatcher());
      __publicField(this, "actionDetailMap");
      __publicField(this, "actionCategoryDetailMap");
      __publicField(this, "actionTypeDetailMap");
      __publicField(this, "actionDetailList");
      this.actionDetailMap = actionDetailMap;
      this.actionCategoryDetailMap = actionCategoryDetailMap;
      this.actionTypeDetailMap = actionTypeDetailMap;
      this.actionDetailList = Object.values(this.actionDetailMap).sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    get onActionQueueUpdated() {
      return this._onActionQueueUpdated.asEvent();
    }
    updateActions(actions) {
      actions.forEach((newAction) => {
        const actionInQueue = this._characterActions.find((action) => {
          return action.id === newAction.id;
        });
        if (!actionInQueue) {
          this._characterActions.push(newAction);
          return;
        }
        const index = this._characterActions.indexOf(actionInQueue);
        if (newAction.isDone) {
          this._characterActions.splice(index, 1);
          return;
        }
        this._characterActions[index] = newAction;
      });
      this._onActionQueueUpdated.dispatch(this._characterActions);
    }
  }
  class Inventory {
    constructor(itemDetailMap, itemCategoryDetailMap, itemLocationDetailMap) {
      __publicField(this, "_characterItems", []);
      __publicField(this, "_onItemGained", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_characterDrinks", {});
      __publicField(this, "_characterFoods", {});
      __publicField(this, "_onConsumableDepleted", new dist$7.SimpleEventDispatcher());
      __publicField(this, "itemDetailMap");
      __publicField(this, "itemCategoryDetailMap");
      __publicField(this, "itemLocationDetailMap");
      __publicField(this, "sortedItems");
      __publicField(this, "sortedAlphabeticalItems");
      this.itemDetailMap = itemDetailMap;
      this.itemCategoryDetailMap = itemCategoryDetailMap;
      this.itemLocationDetailMap = itemLocationDetailMap;
      this.sortedItems = Object.values(this.itemDetailMap).sort((a, b) => {
        return a.sortIndex - b.sortIndex;
      });
      this.sortedAlphabeticalItems = Object.values(this.itemDetailMap).sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    get onItemGained() {
      return this._onItemGained.asEvent();
    }
    get onConsumableDepleted() {
      return this._onConsumableDepleted.asEvent();
    }
    updateCharacterItems(items, notify = true) {
      items.forEach((newItem) => {
        const itemInInventory = this._characterItems.find((item) => {
          return item.id === newItem.id;
        });
        if (!itemInInventory) {
          this._characterItems.push(newItem);
          if (notify) {
            this._onItemGained.dispatch({
              ...newItem,
              delta: newItem.count
            });
          }
          return;
        }
        const index = this._characterItems.indexOf(itemInInventory);
        if (newItem.count === 0) {
          this._characterItems.splice(index, 1);
          return;
        }
        const delta = newItem.count - this._characterItems[index].count;
        this._characterItems[index] = newItem;
        if (notify) {
          this._onItemGained.dispatch({
            ...this._characterItems[index],
            delta
          });
        }
      });
    }
    updateCharacterDrinks(actionTypeDrinkSlotsMap, notify = true) {
      for (const actionType in actionTypeDrinkSlotsMap) {
        const consumables = actionTypeDrinkSlotsMap[actionType];
        if (this._characterDrinks[actionType] == null) {
          this._characterDrinks[actionType] = consumables;
        }
        this._characterDrinks[actionType].forEach((storedConsumable, i) => {
          if (storedConsumable === null) {
            return;
          }
          const newConsumable = actionTypeDrinkSlotsMap[actionType][i];
          if (!(newConsumable == null ? void 0 : newConsumable.isActive) && storedConsumable.isActive && notify) {
            this._onConsumableDepleted.dispatch(storedConsumable);
          }
        });
        this._characterDrinks[actionType] = actionTypeDrinkSlotsMap[actionType];
      }
    }
    updateCharacterFood(actionTypeFoodSlotsMap, notify = true) {
      for (const actionType in actionTypeFoodSlotsMap) {
        const consumables = actionTypeFoodSlotsMap[actionType];
        if (this._characterFoods[actionType] == null) {
          this._characterFoods[actionType] = consumables;
        }
        this._characterFoods[actionType].forEach((storedConsumable, i) => {
          if (storedConsumable === null)
            return;
          const newConsumable = actionTypeFoodSlotsMap[actionType][i];
          if (!(newConsumable == null ? void 0 : newConsumable.isActive) && storedConsumable.isActive && notify) {
            this._onConsumableDepleted.dispatch(storedConsumable);
          }
        });
        this._characterFoods[actionType] = actionTypeFoodSlotsMap[actionType];
      }
    }
    isAbilityBook(itemHrid) {
      var _a;
      return ((_a = this.itemDetailMap[itemHrid].abilityBookDetail) == null ? void 0 : _a.abilityHrid.toString().length) > 0;
    }
    getEquippedFood() {
      return this._characterFoods;
    }
    getEquippedDrinks() {
      return this._characterDrinks;
    }
  }
  var NotificationType = /* @__PURE__ */ ((NotificationType2) => {
    NotificationType2["Info"] = "info";
    return NotificationType2;
  })(NotificationType || {});
  class Notifier {
    constructor() {
      __publicField(this, "_onNotification", new dist$7.SimpleEventDispatcher());
    }
    get onNotification() {
      return this._onNotification.asEvent();
    }
    processServerInfo(info) {
      this._onNotification.dispatch({
        message: info.message,
        type: NotificationType.Info
      });
    }
    sendBrowserNotification(title, options = {}) {
      new Notification(title, options);
    }
  }
  class Abilities {
    constructor(abilityDetailMap, abilitySlotsLevelRequirementList) {
      __publicField(this, "_characterAbilities", {});
      __publicField(this, "_abilityCombatTriggers", {});
      __publicField(this, "_onAbilityXpGained", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onAbilityLvlGained", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onAbilitySlotChanged", new dist$7.SimpleEventDispatcher());
      __publicField(this, "abilityDetailMap");
      __publicField(this, "abilitySlotsLevelRequirementList");
      __publicField(this, "sortedAbilities");
      this.abilityDetailMap = abilityDetailMap;
      this.abilitySlotsLevelRequirementList = abilitySlotsLevelRequirementList;
      this.sortedAbilities = Object.values(this.abilityDetailMap).sort((a, b) => {
        return a.sortIndex - b.sortIndex;
      });
    }
    get onAbilityXpGained() {
      return this._onAbilityXpGained.asEvent();
    }
    get onAbilityLvlGained() {
      return this._onAbilityLvlGained.asEvent();
    }
    get onAbilitySlotChanged() {
      return this._onAbilitySlotChanged.asEvent();
    }
    get unlockedAbilities() {
      const abilityList = Object.values(this._characterAbilities);
      return abilityList.filter((ability) => ability != null);
    }
    get equippedAbilities() {
      const equippedAbilities = this.unlockedAbilities.filter((ability) => ability.slotNumber > 0);
      return equippedAbilities.sort((a, b) => a.slotNumber - b.slotNumber);
    }
    updateCharacterAbilities(abilities, notify = true) {
      abilities == null ? void 0 : abilities.forEach((ability) => {
        var _a, _b;
        const xpChanged = ability.experience - (((_a = this._characterAbilities[ability.abilityHrid]) == null ? void 0 : _a.experience) ?? 0);
        const lvlChanged = ability.level - (((_b = this._characterAbilities[ability.abilityHrid]) == null ? void 0 : _b.level) ?? 0);
        this._characterAbilities[ability.abilityHrid] = ability;
        if (!notify) {
          return;
        }
        if (xpChanged !== 0) {
          this._onAbilityXpGained.dispatch({
            ...this._characterAbilities[ability.abilityHrid],
            delta: xpChanged
          });
        }
        if (lvlChanged !== 0) {
          this._onAbilityLvlGained.dispatch({
            ...this._characterAbilities[ability.abilityHrid],
            delta: lvlChanged
          });
        }
      });
    }
    updateCombatTriggers(abilityCombatTriggersMap) {
      this._abilityCombatTriggers = abilityCombatTriggersMap;
    }
    hasUnlockedAbility(abilityHrid) {
      return this._characterAbilities[abilityHrid] != null;
    }
  }
  class Combat {
    constructor(monsterDetailMap, combatTriggerComparatorMap, combatTriggerConditionMap, combatTriggerDependencyMap) {
      __publicField(this, "_combatUnit");
      __publicField(this, "_onCombatUnitChanged", new dist$7.SimpleEventDispatcher());
      __publicField(this, "monsterDetailMap");
      __publicField(this, "monsterDetailList");
      __publicField(this, "combatTriggerComparatorMap");
      __publicField(this, "combatTriggerConditionMap");
      __publicField(this, "combatTriggerDependencyMap");
      this.combatTriggerComparatorMap = combatTriggerComparatorMap;
      this.combatTriggerConditionMap = combatTriggerConditionMap;
      this.combatTriggerDependencyMap = combatTriggerDependencyMap;
      this.monsterDetailMap = monsterDetailMap;
      this.monsterDetailList = Object.values(this.monsterDetailMap).sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    get onCombatUnitChanged() {
      return this._onCombatUnitChanged.asEvent();
    }
    updateCombatUnit(combatUnit, notify = false) {
      this._combatUnit = combatUnit;
      if (notify) {
        this._onCombatUnitChanged.dispatch(combatUnit);
      }
    }
  }
  class Leaderboard {
    constructor() {
      __publicField(this, "leaderboardList", []);
      __publicField(this, "lastUpdated", null);
      __publicField(this, "_onLeaderboardUpdated", new dist$7.SimpleEventDispatcher());
    }
    getSkillLeaderboards() {
      return this.leaderboardList.filter((leaderboard) => leaderboard.columnNames.includes("Experience"));
    }
    getTaskLeaderboard() {
      return this.leaderboardList.find(
        (leaderboard) => leaderboard.columnNames.includes("Task Points")
      );
    }
    get onLeaderboardUpdated() {
      return this._onLeaderboardUpdated.asEvent();
    }
    updateLeaderBoard(list) {
      this.leaderboardList = list;
      this.lastUpdated = /* @__PURE__ */ new Date();
      this._onLeaderboardUpdated.dispatch(this.leaderboardList);
    }
    getPlayerSummary(name) {
      if (this.leaderboardList.length === 0) {
        return null;
      }
      console.log(this.leaderboardList);
      const skills = this.getSkillLeaderboards().flatMap((value) => {
        const playerEntry2 = value.data.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
        if (!playerEntry2) {
          return [];
        }
        return [
          {
            name: value.title,
            level: playerEntry2.value1,
            rank: value.data.indexOf(playerEntry2) + 1,
            experience: playerEntry2.value2
          }
        ];
      });
      const taskLeaderboard = this.getTaskLeaderboard();
      const playerEntry = taskLeaderboard.data.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
      const tasks = playerEntry && {
        name: taskLeaderboard.title,
        taskPoints: playerEntry.value1,
        rank: taskLeaderboard.data.indexOf(playerEntry) + 1
      };
      return {
        name,
        skills,
        taskPoints: tasks
      };
    }
  }
  class Equipment {
    constructor(equipmentTypeDetailMap) {
      __publicField(this, "_nonCombatStats");
      __publicField(this, "_equipmentActionTypeBuffs", {});
      __publicField(this, "_onNonCombatStatsChanged", new dist$7.SimpleEventDispatcher());
      __publicField(this, "_onEquipmentActionTypeBuffsChanged", new dist$7.SimpleEventDispatcher());
      __publicField(this, "equipmentTypeDetailMap");
      this.equipmentTypeDetailMap = equipmentTypeDetailMap;
    }
    get onNonCombatStatsChanged() {
      return this._onNonCombatStatsChanged.asEvent();
    }
    get onEquipmentActionTypeBuffsChanged() {
      return this._onEquipmentActionTypeBuffsChanged.asEvent();
    }
    updateNonCombatStats(nonCombatStats, notify = false) {
      this._nonCombatStats = nonCombatStats;
      if (notify) {
        this._onNonCombatStatsChanged.dispatch(this._nonCombatStats);
      }
    }
    updateEquipmentActionTypeBuffs(equipmentActionTypeBuffs, notify = false) {
      this._equipmentActionTypeBuffs = equipmentActionTypeBuffs;
      if (notify) {
        this._onEquipmentActionTypeBuffsChanged.dispatch(this._equipmentActionTypeBuffs);
      }
    }
  }
  class LootBoxes {
    constructor() {
      __publicField(this, "_onLootBoxOpened", new dist$7.SimpleEventDispatcher());
    }
    get onLootBoxOpened() {
      return this._onLootBoxOpened.asEvent();
    }
    lootBoxOpened(openedItem, gainedItems) {
      this._onLootBoxOpened.dispatch({
        lootBox: openedItem,
        gainedItems
      });
    }
  }
  class Game {
    constructor(clientInfo) {
      __publicField(this, "gameVersion");
      __publicField(this, "versionTimestamp");
      __publicField(this, "abilities");
      __publicField(this, "character");
      __publicField(this, "combat");
      __publicField(this, "equipment");
      __publicField(this, "leaderboard");
      __publicField(this, "lootBoxes");
      __publicField(this, "skills");
      __publicField(this, "chat");
      __publicField(this, "actionQueue");
      __publicField(this, "inventory");
      __publicField(this, "notifier");
      __publicField(this, "activePlayerCount", 0);
      __publicField(this, "lastPing", null);
      __publicField(this, "lastPong", null);
      this.gameVersion = clientInfo.gameVersion;
      this.versionTimestamp = clientInfo.versionTimeStamp;
      this.abilities = new Abilities(clientInfo.abilityDetailMap, clientInfo.abilitySlotsLevelRequirementList);
      this.combat = new Combat(
        clientInfo.combatMonsterDetailMap,
        clientInfo.combatTriggerComparatorDetailMap,
        clientInfo.combatTriggerConditionDetailMap,
        clientInfo.combatTriggerDependencyDetailMap
      );
      this.leaderboard = new Leaderboard();
      this.lootBoxes = new LootBoxes();
      this.skills = new Skills(clientInfo.skillDetailMap, clientInfo.levelExperienceTable);
      this.chat = new Chat(clientInfo.chatIconDetailMap);
      this.character = {};
      this.actionQueue = new ActionQueue(
        clientInfo.actionDetailMap,
        clientInfo.actionCategoryDetailMap,
        clientInfo.actionTypeDetailMap
      );
      this.equipment = new Equipment(clientInfo.equipmentTypeDetailMap);
      this.inventory = new Inventory(
        clientInfo.itemDetailMap,
        clientInfo.itemCategoryDetailMap,
        clientInfo.itemLocationDetailMap
      );
      this.notifier = new Notifier();
    }
    get pingPong() {
      if (!this.lastPing || !this.lastPong) {
        return -1;
      }
      return this.lastPong.getTime() - this.lastPing.getTime();
    }
  }
  class PluginManager {
    constructor(game, plugins) {
      __publicField(this, "plugins");
      __publicField(this, "game");
      this.game = game;
      this.plugins = plugins;
      this.game.abilities.onAbilityXpGained.subscribe((gains) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onAbilityXpGained) == null ? void 0 : _a.call(plugin, gains);
        });
      });
      this.game.abilities.onAbilityLvlGained.subscribe((gains) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onAbilityLvlGained) == null ? void 0 : _a.call(plugin, gains);
        });
      });
      this.game.abilities.onAbilitySlotChanged.subscribe((slotChanged) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onAbilitySlotChanged) == null ? void 0 : _a.call(plugin, slotChanged);
        });
      });
      this.game.skills.onXpGained.subscribe((info) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onXpGained) == null ? void 0 : _a.call(plugin, info);
        });
      });
      this.game.inventory.onItemGained.subscribe((itemGained) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onItemGained) == null ? void 0 : _a.call(plugin, itemGained);
        });
      });
      this.game.inventory.onConsumableDepleted.subscribe((consumable) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onConsumableDepleted) == null ? void 0 : _a.call(plugin, consumable);
        });
      });
      this.game.chat.onMessage.subscribe((chatMessage) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onChatMessage) == null ? void 0 : _a.call(plugin, chatMessage);
        });
      });
      this.game.notifier.onNotification.subscribe((notification) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onNotification) == null ? void 0 : _a.call(plugin, notification);
        });
      });
      this.game.actionQueue.onActionQueueUpdated.subscribe((queue) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onActionQueueUpdated) == null ? void 0 : _a.call(plugin, queue);
        });
      });
      this.game.leaderboard.onLeaderboardUpdated.subscribe((topics) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onLeaderboardUpdated) == null ? void 0 : _a.call(plugin, topics);
        });
      });
      this.game.lootBoxes.onLootBoxOpened.subscribe((lootBoxOpened) => {
        this.enabledPlugins.forEach((plugin) => {
          var _a;
          (_a = plugin.onLootBoxOpened) == null ? void 0 : _a.call(plugin, lootBoxOpened);
        });
      });
      this.plugins.forEach((plugin) => {
        plugin.initialize(this.game);
      });
    }
    get enabledPlugins() {
      return this.plugins.filter((plugin) => plugin.isEnabled);
    }
    get tabs() {
      return this.enabledPlugins.flatMap((plugin) => {
        return plugin.tab ? [plugin.tab] : [];
      });
    }
    clientTick() {
      this.enabledPlugins.forEach((plugin) => {
        var _a;
        (_a = plugin.onClientTick) == null ? void 0 : _a.call(plugin);
      });
    }
  }
  const _sfc_main$d = {};
  const _hoisted_1$d = { class: "flex flex-col" };
  const _hoisted_2$9 = /* @__PURE__ */ vue.createStaticVNode('<span>Thank you for using MooLite.</span><br><span class="text-xs"> MooLite was developed by <a target="_blank" href="https://github.com/Ishadijcks/">Isha</a>. If you like MooLite and encounter him online, please say &#39;whaddup&#39; (he likes the attention) </span><br><div class="text-xxs"><a target="_blank" href="https://github.com/Ishadijcks/MooLite/issues/new" title="MooLite on GitHub" class="space-x-1"><span> Found a bug?<br> Please report it on </span><img class="w-4 h-4 inline" src="https://github.com/fluidicon.png"><span>GitHub</span></a></div><br><div class="text-xxs"><a target="_blank" href="https://github.com/Ishadijcks/MooLite/issues/new" title="Submit an issue" class="flex flex-row space-x-1 items"><span>Have a feature request?</span><img class="w-4 h-4 inline" src="https://github.com/fluidicon.png"><span>GitHub</span></a></div><br><div class="text-xxs"><a target="_blank" href="https://github.com/Ishadijcks/MooLite/" title="Help Develop" class="space-x-1"><span>Want to be awesome and help develop MooLite? You guessed it.</span><img class="w-4 h-4 inline" src="https://github.com/fluidicon.png"><span>GitHub</span></a></div>', 9);
  const _hoisted_11$3 = [
    _hoisted_2$9
  ];
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, _hoisted_11$3);
  }
  const MooLiteClientPluginDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$2]]);
  class MooLiteClientPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "MooLite");
      __publicField(this, "key", "moolite");
      __publicField(this, "description", "Your favourite (milky) way to play!");
      __publicField(this, "_isEnabled", true);
      __publicField(this, "_canBeDisabled", false);
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "tab", {
        pluginName: this.name,
        icon: "🐮",
        componentName: "MooLiteClientPluginDisplay",
        component: vue.markRaw(MooLiteClientPluginDisplay)
      });
      __publicField(this, "config", [
        {
          key: "mooliteclient/browser-notifications",
          name: "Info message notifications",
          description: "Show browser notifications when you gain an info message (such as levelling up)\nRemember to allow them in your browser",
          type: PluginConfigType.CheckBox,
          value: true
        },
        {
          key: "mooliteclient/notifications-in-chat",
          name: "Notifications in chat",
          description: "Show notifications in the chat",
          type: PluginConfigType.CheckBox,
          value: true
        },
        {
          key: "mooliteclient/start-collapsed",
          name: "Collapse MooLite sidebar on launch",
          description: "Collapses the MooLite sidebar on launch",
          type: PluginConfigType.CheckBox,
          value: false
        }
      ]);
    }
    initialize(game) {
      super.initialize(game);
      Notification.requestPermission().then();
    }
    /**
     * Cannot be disabled
     */
    disable() {
      return;
    }
    get showBrowserNotifications() {
      var _a;
      return (_a = this.getConfig("mooliteclient/browser-notifications")) == null ? void 0 : _a.value;
    }
    onNotification(notification) {
      if (this.showBrowserNotifications) {
        this._game.notifier.sendBrowserNotification(notification.message);
      }
    }
  }
  const _hoisted_1$c = { class: "flex flex-col" };
  const _hoisted_2$8 = /* @__PURE__ */ vue.createElementVNode("span", null, "Loot Simulator", -1);
  const _hoisted_3$6 = ["value"];
  const _hoisted_4$4 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_5$4 = { class: "flex flex-col" };
  const _hoisted_6$4 = { class: "flex flex-row justify-between" };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "LootSimulatorPluginDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const options = vue.computed(() => {
        return props.plugin.allMonsters.sort().map((monsterDetail) => {
          return {
            text: monsterDetail.name,
            value: monsterDetail.hrid
          };
        });
      });
      const selectedHrid = vue.ref(options.value[0].value);
      const iterations = vue.ref(1);
      const loot = vue.ref([]);
      const simulate = () => {
        loot.value = props.plugin.simulate(selectedHrid.value, iterations.value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
          _hoisted_2$8,
          vue.withDirectives(vue.createElementVNode("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedHrid.value = $event),
            class: "bg-divider"
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(options), (option) => {
              return vue.openBlock(), vue.createElementBlock("option", {
                value: option.value,
                class: "bg-divider"
              }, vue.toDisplayString(option.text), 9, _hoisted_3$6);
            }), 256))
          ], 512), [
            [vue.vModelSelect, selectedHrid.value]
          ]),
          _hoisted_4$4,
          vue.withDirectives(vue.createElementVNode("input", {
            class: "bg-divider",
            type: "number",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => iterations.value = $event)
          }, null, 512), [
            [vue.vModelText, iterations.value]
          ]),
          vue.createElementVNode("button", { onClick: simulate }, "Simulate!"),
          vue.createElementVNode("div", _hoisted_5$4, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(loot.value, (drop) => {
              return vue.openBlock(), vue.createElementBlock("div", _hoisted_6$4, [
                vue.createElementVNode("span", null, vue.toDisplayString(drop.itemHrid), 1),
                vue.createElementVNode("span", null, vue.toDisplayString(drop.count), 1)
              ]);
            }), 256))
          ])
        ]);
      };
    }
  });
  class Random {
    /**
     * Return a random integer between min (inclusive) and max (exclusive)
     * @param min inclusive
     * @param max exclusive
     */
    static intBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    /**
     * Return a boolean with probability [0, 1] to be true.
     * Returns false if the probability is not in this range. Can be ignored with the second argument requireNormalizedProbability.
     */
    static booleanWithProbability(probability, requireNormalizedProbability = true) {
      if (requireNormalizedProbability && (probability < 0 || probability > 1)) {
        console.warn(`Trying to generate a boolean with probability ${probability} outside of [0,1].
            Run this method with requireNormalizedProbability=false if you're okay with this.`);
        return false;
      }
      return Math.random() < probability;
    }
    /**
     * Return a boolean with a 1 in chance to be true.
     * booleanWithChance(300) for example
     * @param chance
     */
    static booleanWithOneInChance(chance) {
      return this.intBetween(0, chance) == 0;
    }
    /**
     * Return a random float between min (inclusive) and max (exclusive)
     * @param min inclusive
     * @param max exclusive
     */
    static floatBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    /**
     * Return a random index from the array
     */
    static arrayIndex(array) {
      return this.intBetween(0, array.length);
    }
    /**
     * Get a random entry from the array
     */
    static fromArray(array) {
      return array[this.arrayIndex(array)];
    }
    /**
     * Shuffle an array using fisher-yates
     * @param array
     */
    static shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
  class LootSimulator {
    static simulate(monster, iterations) {
      const totalLoot = {};
      for (let i = 0; i < iterations; i++) {
        monster.dropTable.concat(monster.rareDropTable).forEach((entry) => {
          const success = Random.booleanWithProbability(entry.dropRate);
          if (!success) {
            return;
          }
          const count = Random.intBetween(entry.minCount, entry.maxCount + 1);
          if (totalLoot[entry.itemHrid]) {
            totalLoot[entry.itemHrid] += count;
          } else {
            totalLoot[entry.itemHrid] = count;
          }
        });
      }
      return Object.keys(totalLoot).map((itemHrid) => {
        return {
          itemHrid,
          count: totalLoot[itemHrid]
        };
      }).sort((a, b) => {
        return b.count - a.count;
      });
    }
  }
  class LootSimulatorPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Loot Simulator");
      __publicField(this, "key", "loot-simulator");
      __publicField(this, "description", "Try your 'luck' against some of the monsters in the game!");
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "tab", {
        icon: "👩‍💻",
        pluginName: this.name,
        componentName: "LootSimulatorPluginDisplay",
        component: vue.markRaw(_sfc_main$c)
      });
    }
    get allMonsters() {
      return this._game.combat.monsterDetailList;
    }
    simulate(monsterHrid, iterations) {
      const monster = this._game.combat.monsterDetailMap[monsterHrid];
      return LootSimulator.simulate(monster, iterations);
    }
  }
  const _hoisted_1$b = ["href"];
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "ItemIcon",
    props: {
      item: null,
      size: { default: "8" }
    },
    setup(__props) {
      const props = __props;
      const imgUrl = vue.computed(() => {
        const split = props.item.split("/");
        const itemPostfix = split[split.length - 1];
        return `/static/media/items_sprite.951ef1ec.svg#${itemPostfix}`;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("svg", {
          class: vue.normalizeClass("w-" + __props.size + " h-" + __props.size)
        }, [
          vue.createElementVNode("use", { href: vue.unref(imgUrl) }, null, 8, _hoisted_1$b)
        ], 2);
      };
    }
  });
  const _hoisted_1$a = ["title"];
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "ItemAmountDisplay",
    props: {
      itemAmount: null,
      name: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "flex flex-col items-center",
          title: __props.name
        }, [
          vue.createVNode(_sfc_main$b, {
            item: __props.itemAmount.itemHrid
          }, null, 8, ["item"]),
          vue.createElementVNode("span", null, vue.toDisplayString(__props.itemAmount.count), 1)
        ], 8, _hoisted_1$a);
      };
    }
  });
  const _hoisted_1$9 = { class: "w-8 h-8" };
  const _hoisted_2$7 = ["href"];
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "MonsterIcon",
    props: {
      monster: null
    },
    setup(__props) {
      const props = __props;
      const imgUrl = vue.computed(() => {
        const split = props.monster.split("/");
        const monsterPostfix = split[split.length - 1];
        return `/static/media/combat_monsters_sprite.0f9c0366.svg#${monsterPostfix}`;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$9, [
          vue.createElementVNode("use", { href: vue.unref(imgUrl) }, null, 8, _hoisted_2$7)
        ]);
      };
    }
  });
  const _hoisted_1$8 = { class: "w-8 h-8" };
  const _hoisted_2$6 = ["href"];
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "ActionIcon",
    props: {
      actionHrid: null,
      itemHrid: null,
      showAction: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const imgUrl = vue.computed(() => {
        if (props.showAction) {
          const split = props.actionHrid.split("/");
          const actionPostfix = split[split.length - 1];
          return `/static/media/actions_sprite.cd16f1a6.svg#${actionPostfix}`;
        } else {
          const split = props.itemHrid.split("/");
          const itemPostfix = split[split.length - 1];
          return `/static/media/items_sprite.20cec8ed.svg#${itemPostfix}`;
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$8, [
          vue.createTextVNode(vue.toDisplayString(vue.unref(imgUrl)) + " ", 1),
          vue.createElementVNode("use", { href: vue.unref(imgUrl) }, null, 8, _hoisted_2$6)
        ]);
      };
    }
  });
  const _hoisted_1$7 = { class: "flex flex-col" };
  const _hoisted_2$5 = { class: "text-center" };
  const _hoisted_3$5 = ["value"];
  const _hoisted_4$3 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_5$3 = { class: "flex flex-col space-y-8" };
  const _hoisted_6$3 = { key: 0 };
  const _hoisted_7$3 = /* @__PURE__ */ vue.createElementVNode("span", { class: "font-bold" }, "Combat", -1);
  const _hoisted_8$3 = { class: "bg-divider p-2" };
  const _hoisted_9$3 = { class: "w-full" };
  const _hoisted_10$2 = { class: "text-left" };
  const _hoisted_11$2 = ["title"];
  const _hoisted_12$2 = { key: 0 };
  const _hoisted_13$2 = { key: 1 };
  const _hoisted_14$2 = { key: 1 };
  const _hoisted_15$2 = /* @__PURE__ */ vue.createElementVNode("span", { class: "font-bold" }, "Gathering", -1);
  const _hoisted_16$2 = { class: "bg-divider p-2" };
  const _hoisted_17$1 = { class: "w-full" };
  const _hoisted_18$1 = ["title"];
  const _hoisted_19$1 = { key: 0 };
  const _hoisted_20$1 = { key: 1 };
  const _hoisted_21 = { key: 2 };
  const _hoisted_22 = /* @__PURE__ */ vue.createElementVNode("span", { class: "font-bold" }, "Ingredient", -1);
  const _hoisted_23 = { class: "flex flex-col space-y-4" };
  const _hoisted_24 = { class: "bg-divider p-1 flex flex-col" };
  const _hoisted_25 = { class: "text-center w-full" };
  const _hoisted_26 = { class: "flex flex-row justify-around items-center" };
  const _hoisted_27 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-xxs" }, "➡", -1);
  const _hoisted_28 = { key: 3 };
  const _hoisted_29 = /* @__PURE__ */ vue.createElementVNode("span", { class: "font-bold" }, "Product", -1);
  const _hoisted_30 = { class: "flex flex-col space-y-4" };
  const _hoisted_31 = { class: "bg-divider p-1 flex flex-col" };
  const _hoisted_32 = { class: "text-center w-full" };
  const _hoisted_33 = { class: "flex flex-row justify-around items-center" };
  const _hoisted_34 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-xxs" }, "➡", -1);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "ItemFinderPluginDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const options = vue.computed(() => {
        return props.plugin.allItems.map((item) => {
          return {
            text: item.name,
            value: item.hrid
          };
        });
      });
      const selectedHrid = vue.ref(options.value[0].value);
      const monsters = vue.computed(() => {
        return props.plugin.findItemInLoot(selectedHrid.value);
      });
      const actions = vue.computed(() => {
        return props.plugin.findItemInActions(selectedHrid.value);
      });
      const actionsDropTable = vue.computed(() => {
        return props.plugin.findItemInActionDropTable(selectedHrid.value);
      });
      const actionsInput = vue.computed(() => {
        return actions.value.filter((action) => {
          return action.type === "input";
        });
      });
      const actionsOutput = vue.computed(() => {
        return actions.value.filter((action) => {
          return action.type === "output";
        });
      });
      const getItemName = (itemHrid) => {
        var _a;
        return (_a = props.plugin.allItems.find((item) => {
          return item.hrid === itemHrid;
        })) == null ? void 0 : _a.name;
      };
      const formatDropRate = (percentage, digits = 3, threshold = 0.01) => {
        return percentage < threshold ? "~" + (percentage * 100).toFixed(digits) : percentage * 100;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
          vue.createElementVNode("span", _hoisted_2$5, vue.toDisplayString(__props.plugin.name), 1),
          vue.createVNode(MooDivider, { class: "mb-2" }),
          vue.withDirectives(vue.createElementVNode("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedHrid.value = $event),
            class: "bg-divider p-2"
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(options), (option) => {
              return vue.openBlock(), vue.createElementBlock("option", {
                value: option.value,
                class: "bg-divider"
              }, vue.toDisplayString(option.text), 9, _hoisted_3$5);
            }), 256))
          ], 512), [
            [vue.vModelSelect, selectedHrid.value]
          ]),
          _hoisted_4$3,
          vue.createElementVNode("div", _hoisted_5$3, [
            vue.unref(monsters).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$3, [
              _hoisted_7$3,
              vue.createElementVNode("div", _hoisted_8$3, [
                vue.createElementVNode("table", _hoisted_9$3, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(monsters), (monster) => {
                    return vue.openBlock(), vue.createElementBlock("tr", null, [
                      vue.createElementVNode("td", null, [
                        vue.createVNode(_sfc_main$9, {
                          class: "w-6 h-6",
                          monster: monster.monsterHrid
                        }, null, 8, ["monster"])
                      ]),
                      vue.createElementVNode("td", _hoisted_10$2, vue.toDisplayString(monster.monsterName), 1),
                      vue.createElementVNode("td", {
                        title: "1/" + Math.round(1 / monster.loot.dropRate)
                      }, vue.toDisplayString(formatDropRate(monster.loot.dropRate)) + "% ", 9, _hoisted_11$2),
                      vue.createElementVNode("td", null, [
                        vue.createElementVNode("span", null, vue.toDisplayString(monster.loot.minCount), 1),
                        monster.loot.minCount !== monster.loot.maxCount ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_12$2, "-")) : vue.createCommentVNode("", true),
                        monster.loot.minCount !== monster.loot.maxCount ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_13$2, vue.toDisplayString(monster.loot.maxCount), 1)) : vue.createCommentVNode("", true)
                      ])
                    ]);
                  }), 256))
                ])
              ])
            ])) : vue.createCommentVNode("", true),
            vue.unref(actionsDropTable).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_14$2, [
              _hoisted_15$2,
              vue.createElementVNode("div", _hoisted_16$2, [
                vue.createElementVNode("table", _hoisted_17$1, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(actionsDropTable), (action) => {
                    var _a;
                    return vue.openBlock(), vue.createElementBlock("tr", null, [
                      vue.createElementVNode("td", null, [
                        vue.createVNode(_sfc_main$8, {
                          class: "w-6 h-6",
                          actionHrid: action.action.hrid,
                          itemHrid: action.loot.itemHrid,
                          showAction: (((_a = action.action.dropTable) == null ? void 0 : _a.length) ?? 0) > 1
                        }, null, 8, ["actionHrid", "itemHrid", "showAction"])
                      ]),
                      vue.createElementVNode("td", null, vue.toDisplayString(action.action.name), 1),
                      vue.createElementVNode("td", {
                        title: "1/" + Math.round(1 / action.loot.dropRate)
                      }, vue.toDisplayString(formatDropRate(action.loot.dropRate)) + "% ", 9, _hoisted_18$1),
                      vue.createElementVNode("td", null, [
                        vue.createElementVNode("span", null, vue.toDisplayString(action.loot.minCount), 1),
                        action.loot.minCount !== action.loot.maxCount ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_19$1, "-")) : vue.createCommentVNode("", true),
                        action.loot.minCount !== action.loot.maxCount ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_20$1, vue.toDisplayString(action.loot.maxCount), 1)) : vue.createCommentVNode("", true)
                      ])
                    ]);
                  }), 256))
                ])
              ])
            ])) : vue.createCommentVNode("", true),
            vue.unref(actionsInput).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_21, [
              _hoisted_22,
              vue.createElementVNode("div", _hoisted_23, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(actionsInput), (action) => {
                  return vue.openBlock(), vue.createElementBlock("div", _hoisted_24, [
                    vue.createElementVNode("span", _hoisted_25, vue.toDisplayString(action.action.name), 1),
                    vue.createElementVNode("div", _hoisted_26, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(action.action.inputItems, (input) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$a, {
                          name: getItemName(input.itemHrid),
                          "item-amount": input
                        }, null, 8, ["name", "item-amount"]);
                      }), 256)),
                      _hoisted_27,
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(action.action.outputItems, (output) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$a, {
                          name: getItemName(output.itemHrid),
                          "item-amount": output
                        }, null, 8, ["name", "item-amount"]);
                      }), 256))
                    ])
                  ]);
                }), 256))
              ])
            ])) : vue.createCommentVNode("", true),
            vue.unref(actionsOutput).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_28, [
              _hoisted_29,
              vue.createVNode(MooDivider),
              vue.createElementVNode("div", _hoisted_30, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(actionsOutput), (action) => {
                  return vue.openBlock(), vue.createElementBlock("div", _hoisted_31, [
                    vue.createElementVNode("span", _hoisted_32, vue.toDisplayString(action.action.name), 1),
                    vue.createElementVNode("div", _hoisted_33, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(action.action.inputItems, (input) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$a, {
                          name: getItemName(input.itemHrid),
                          "item-amount": input
                        }, null, 8, ["name", "item-amount"]);
                      }), 256)),
                      _hoisted_34,
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(action.action.outputItems, (output) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$a, {
                          name: getItemName(output.itemHrid),
                          "item-amount": output
                        }, null, 8, ["name", "item-amount"]);
                      }), 256))
                    ])
                  ]);
                }), 256))
              ])
            ])) : vue.createCommentVNode("", true)
          ])
        ]);
      };
    }
  });
  class ItemFinderPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Item Finder");
      __publicField(this, "key", "item-finder");
      __publicField(this, "description", "Inspect the possible ways to obtain items");
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "tab", {
        icon: "📖",
        pluginName: this.name,
        componentName: "ItemFinderPluginDisplay",
        component: vue.markRaw(_sfc_main$7)
      });
    }
    get allItems() {
      return this._game.inventory.sortedAlphabeticalItems;
    }
    findItemInLoot(item) {
      return this._game.combat.monsterDetailList.filter((monster) => {
        const dropTable = monster.dropTable.concat(monster.rareDropTable);
        const foundItem = dropTable.find((loot) => loot.itemHrid === item);
        return foundItem != void 0;
      }).map((monster) => {
        return {
          monsterName: monster.name,
          monsterHrid: monster.hrid,
          loot: monster.dropTable.concat(monster.rareDropTable).find((loot) => loot.itemHrid === item)
        };
      });
    }
    findItemInActions(item) {
      return this._game.actionQueue.actionDetailList.flatMap((action) => {
        var _a, _b;
        const foundItemInput = ((_a = action.inputItems) == null ? void 0 : _a.find((input) => input.itemHrid === item)) ?? void 0;
        const foundItemOutput = ((_b = action.outputItems) == null ? void 0 : _b.find((output) => output.itemHrid === item)) ?? void 0;
        if (!foundItemInput && !foundItemOutput) {
          return [];
        }
        return [
          {
            type: foundItemInput ? "input" : "output",
            action
          }
        ];
      });
    }
    findItemInActionDropTable(item) {
      return this._game.actionQueue.actionDetailList.flatMap((action) => {
        const dropTable = (action.dropTable ?? []).concat(action.rareDropTable ?? []);
        const foundItem = dropTable.find((loot) => loot.itemHrid === item);
        if (!foundItem) {
          return [];
        }
        return [
          {
            action,
            loot: foundItem
          }
        ];
      });
    }
  }
  class DateFormatter {
    static toHHMM(date) {
      return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    }
  }
  const _hoisted_1$6 = { class: "flex flex-col" };
  const _hoisted_2$4 = /* @__PURE__ */ vue.createElementVNode("span", null, "Leaderboard", -1);
  const _hoisted_3$4 = {
    key: 0,
    class: "italic text-xs"
  };
  const _hoisted_4$2 = {
    key: 1,
    class: "flex flex-col"
  };
  const _hoisted_5$2 = {
    key: 0,
    class: "italic text-xs"
  };
  const _hoisted_6$2 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_7$2 = /* @__PURE__ */ vue.createElementVNode("span", null, "Player", -1);
  const _hoisted_8$2 = { key: 1 };
  const _hoisted_9$2 = /* @__PURE__ */ vue.createElementVNode("tr", null, [
    /* @__PURE__ */ vue.createElementVNode("th", null, "Skill"),
    /* @__PURE__ */ vue.createElementVNode("th", null, "📊"),
    /* @__PURE__ */ vue.createElementVNode("th", null, "Exp"),
    /* @__PURE__ */ vue.createElementVNode("th", null, "🏆")
  ], -1);
  const _hoisted_10$1 = { class: "text-left" };
  const _hoisted_11$1 = /* @__PURE__ */ vue.createElementVNode("tr", { class: "spacer h-6" }, null, -1);
  const _hoisted_12$1 = {
    key: 0,
    class: "pt-8"
  };
  const _hoisted_13$1 = /* @__PURE__ */ vue.createElementVNode("th", null, "Tasks", -1);
  const _hoisted_14$1 = { class: "flex flex-row justify-center" };
  const _hoisted_15$1 = /* @__PURE__ */ vue.createElementVNode("th", null, null, -1);
  const _hoisted_16$1 = /* @__PURE__ */ vue.createElementVNode("th", null, "🏆", -1);
  const _hoisted_17 = { key: 1 };
  const _hoisted_18 = { class: "text-left" };
  const _hoisted_19 = /* @__PURE__ */ vue.createElementVNode("th", null, null, -1);
  const _hoisted_20 = {
    key: 0,
    class: "italic text-xs"
  };
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "LeaderboardPluginDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const selectedName = vue.ref("");
      const playerData = vue.computed(() => {
        if (!selectedName.value) {
          return null;
        }
        return props.plugin.getPlayerSummary(selectedName.value);
      });
      const lastUpdatedText = vue.computed(() => {
        const lastUpdated = props.plugin.lastUpdated;
        if (!lastUpdated) {
          return null;
        }
        return DateFormatter.toHHMM(lastUpdated);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
          _hoisted_2$4,
          vue.createVNode(MooDivider),
          !__props.plugin.hasData ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$4, "Please visit the leaderboard tab to load in the latest data")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$2, [
            __props.plugin.lastUpdated ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$2, "Last updated on " + vue.toDisplayString(vue.unref(lastUpdatedText)), 1)) : vue.createCommentVNode("", true),
            _hoisted_6$2,
            _hoisted_7$2,
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedName.value = $event),
              class: "bg-divider"
            }, null, 512), [
              [vue.vModelText, selectedName.value]
            ]),
            vue.unref(playerData) ? (vue.openBlock(), vue.createElementBlock("table", _hoisted_8$2, [
              _hoisted_9$2,
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(playerData).skills, (entry) => {
                return vue.openBlock(), vue.createElementBlock("tr", null, [
                  vue.createElementVNode("th", _hoisted_10$1, vue.toDisplayString(entry.name), 1),
                  vue.createElementVNode("th", null, vue.toDisplayString(entry.level), 1),
                  vue.createElementVNode("th", null, vue.toDisplayString(entry.experience.toLocaleString()), 1),
                  vue.createElementVNode("th", null, vue.toDisplayString(entry.rank), 1)
                ]);
              }), 256)),
              _hoisted_11$1,
              vue.unref(playerData).taskPoints ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_12$1, [
                _hoisted_13$1,
                vue.createElementVNode("th", _hoisted_14$1, [
                  vue.createVNode(_sfc_main$b, {
                    size: "4",
                    item: "/items/task_token"
                  })
                ]),
                _hoisted_15$1,
                _hoisted_16$1
              ])) : vue.createCommentVNode("", true),
              vue.unref(playerData).taskPoints ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_17, [
                vue.createElementVNode("th", _hoisted_18, vue.toDisplayString(vue.unref(playerData).taskPoints.name), 1),
                vue.createElementVNode("th", null, vue.toDisplayString(vue.unref(playerData).taskPoints.taskPoints), 1),
                _hoisted_19,
                vue.createElementVNode("th", null, vue.toDisplayString(vue.unref(playerData).taskPoints.rank), 1)
              ])) : vue.createCommentVNode("", true)
            ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
              selectedName.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_20, "Player " + vue.toDisplayString(selectedName.value) + " not found on the leaderboards", 1)) : vue.createCommentVNode("", true)
            ], 64))
          ]))
        ]);
      };
    }
  });
  class LeaderboardPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Leaderboard");
      __publicField(this, "key", "leaderboard");
      __publicField(this, "description", "See how you stack against other players");
      __publicField(this, "_isEnabled", true);
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "tab", {
        icon: "🏆",
        pluginName: this.name,
        componentName: "LeaderboardPluginDisplay",
        component: vue.markRaw(_sfc_main$6)
      });
    }
    get hasData() {
      return this._game.leaderboard.lastUpdated != null;
    }
    get lastUpdated() {
      return this._game.leaderboard.lastUpdated;
    }
    getPlayerSummary(name) {
      return this._game.leaderboard.getPlayerSummary(name);
    }
  }
  class LootNotifierPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Loot Notifier");
      __publicField(this, "key", "loot-notifier");
      __publicField(this, "description", "Notifies you whenever you get certain drops");
      __publicField(this, "_isEnabled", true);
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha"
      });
      __publicField(this, "config", [
        {
          type: PluginConfigType.Choice,
          name: "Item",
          description: "Select the item to highlight",
          key: "highlighted-items",
          value: "",
          options: PluginBuiltinOption.Items
        },
        {
          type: PluginConfigType.Choice,
          name: "Abilities",
          description: "Send a notification whenever you loot an ability",
          key: "highlight-abilities",
          value: "new",
          options: [
            {
              text: "Never",
              value: "never"
              /* Never */
            },
            {
              text: "New",
              value: "new"
              /* New */
            },
            {
              text: "Always",
              value: "always"
              /* Always */
            }
          ]
        }
      ]);
    }
    get highlightedItemHrids() {
      return this.getConfig("highlighted-items").value.replaceAll(", ", ",").split(",");
    }
    get highlightAbilities() {
      return this.getConfig("highlight-abilities").value;
    }
    onItemGained(itemGained) {
      this.highlightedItemHrids.forEach((hrid) => {
        if (itemGained.itemHrid === hrid) {
          const name = this._game.inventory.itemDetailMap[hrid].name;
          this._game.notifier.sendBrowserNotification(`Highlighted drop: ${itemGained.delta} ${name}`);
          return;
        }
      });
      if (this._game.inventory.isAbilityBook(itemGained.itemHrid)) {
        const itemDetail = this._game.inventory.itemDetailMap[itemGained.itemHrid];
        const name = itemDetail.name;
        const abilityHrid = itemDetail.abilityBookDetail.abilityHrid;
        const isNew = !this._game.abilities.hasUnlockedAbility(abilityHrid);
        switch (this.highlightAbilities) {
          case "never":
            break;
          case "new":
            if (isNew) {
              this._game.notifier.sendBrowserNotification(`New ability book: ${name}`);
            }
            break;
          case "always":
            this._game.notifier.sendBrowserNotification(`${isNew ? "New a" : "A"}bility book: ${name}`);
            break;
        }
      }
    }
  }
  class ConsumableNotifierPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Consumable Notifier");
      __publicField(this, "key", "consumable-notifier");
      __publicField(this, "description", "Notifies you when a consumable is used up completely");
      __publicField(this, "credits", {
        author: "Granttank2",
        maintainer: "Isha"
      });
    }
    onConsumableDepleted(consumable) {
      this._game.notifier.sendBrowserNotification(`Consumable depleted`, {
        body: `${consumable.actionTypeHrid}, Slot ${consumable.slotIndex + 1} (${consumable.itemHrid})`
      });
    }
  }
  const _hoisted_1$5 = { class: "flex flex-col" };
  const _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("span", null, "Voids Equipment Exporter", -1);
  const _hoisted_3$3 = { class: "flex flex-col" };
  const _hoisted_4$1 = /* @__PURE__ */ vue.createElementVNode("span", null, "Current Equipment: ", -1);
  const _hoisted_5$1 = { key: 0 };
  const _hoisted_6$1 = /* @__PURE__ */ vue.createElementVNode("tr", null, [
    /* @__PURE__ */ vue.createElementVNode("th", null, "Name"),
    /* @__PURE__ */ vue.createElementVNode("th", null, "Level")
  ], -1);
  const _hoisted_7$1 = { class: "text-left" };
  const _hoisted_8$1 = {
    key: 1,
    class: "italic text-xs"
  };
  const _hoisted_9$1 = /* @__PURE__ */ vue.createElementVNode("a", {
    style: { "text-align": "center" },
    href: "https://amvoidguy.github.io/MWICombatSimulator/",
    target: "_blank"
  }, " Open Combat Sim ", -1);
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "EquipmentExporterPluginDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const equipmentData = vue.computed(() => {
        var _a;
        return (_a = props.plugin.getEquipmentSummary()) == null ? void 0 : _a.map((item) => {
          return {
            name: props.plugin.getItemName(item.itemHrid),
            enhancementLevel: item.enhancementLevel
          };
        });
      });
      const exportData = () => {
        props.plugin.exportDetails();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          _hoisted_2$3,
          vue.createVNode(MooDivider),
          vue.createElementVNode("div", _hoisted_3$3, [
            _hoisted_4$1,
            vue.unref(equipmentData) ? (vue.openBlock(), vue.createElementBlock("table", _hoisted_5$1, [
              _hoisted_6$1,
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(equipmentData), (entry) => {
                return vue.openBlock(), vue.createElementBlock("tr", null, [
                  vue.createElementVNode("th", _hoisted_7$1, vue.toDisplayString(entry.name), 1),
                  vue.createElementVNode("th", null, vue.toDisplayString(entry.enhancementLevel), 1)
                ]);
              }), 256))
            ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_8$1, "No Equipment data found")),
            vue.createVNode(MooDivider),
            vue.createElementVNode("button", { onClick: exportData }, "Export to Clipboard"),
            vue.createVNode(MooDivider),
            _hoisted_9$1
          ])
        ]);
      };
    }
  });
  class EquipmentExporterPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Equipment Exporter");
      __publicField(this, "key", "equipment-exporter");
      __publicField(this, "description", "Export your equipment details for the Combat Sim");
      __publicField(this, "tab", {
        icon: "🗡",
        pluginName: this.name,
        componentName: "EquipmentExporterPluginDisplay",
        component: vue.markRaw(_sfc_main$5)
      });
      __publicField(this, "credits", {
        author: "Void",
        maintainer: "Isha"
      });
    }
    getEquipmentSummary() {
      const equippedItems = [];
      const allItems = this._game.inventory._characterItems;
      const itemLocations = this._game.inventory.itemLocationDetailMap;
      for (let location in itemLocations) {
        const locationName = itemLocations[location].hrid.toString();
        if (!locationName.includes("tool") && !locationName.includes("inventory")) {
          let index = allItems.findIndex((item) => item.itemLocationHrid.toString() === location);
          if (index != -1) {
            equippedItems.push(allItems[index]);
          }
        }
      }
      return equippedItems;
    }
    getFoodSummary() {
      return this._game.inventory.getEquippedFood();
    }
    getDrinkSummary() {
      return this._game.inventory.getEquippedDrinks();
    }
    getLevel(skillHrid) {
      return this._game.skills.getLevel(skillHrid);
    }
    getAbilities() {
      return this._game.abilities.equippedAbilities;
    }
    getItemName(itemHrid) {
      return this._game.inventory.itemDetailMap[itemHrid].name;
    }
    exportDetails() {
      const equipmentData = this.getEquipmentSummary();
      const drinks = this.getDrinkSummary();
      const food = this.getFoodSummary();
      const abilities = this.getAbilities();
      const zone = "/actions/combat/fly";
      const simulationTime = "100";
      const exportSet = {
        player: {
          attackLevel: this.getLevel("/skills/attack"),
          magicLevel: this.getLevel("/skills/magic"),
          powerLevel: this.getLevel("/skills/power"),
          rangedLevel: this.getLevel("/skills/ranged"),
          defenseLevel: this.getLevel("/skills/defense"),
          staminaLevel: this.getLevel("/skills/stamina"),
          intelligenceLevel: this.getLevel("/skills/intelligence"),
          equipment: equipmentData
        },
        drinks,
        food,
        abilities,
        zone,
        simulationTime
      };
      const copyValue = JSON.stringify(exportSet);
      if (!navigator.clipboard) {
        throw new Error("Browser don't have support for native clipboard.");
      }
      try {
        void navigator.clipboard.writeText(copyValue).then(() => alert("Current set has been copied to clipboard."));
      } catch (err) {
        alert("Error copying to clipboard: " + err);
      }
    }
  }
  const _sfc_main$4 = {};
  const _hoisted_1$4 = {
    fill: "none",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 10",
    "aria-hidden": "true"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M15 1.2l-7 7-7-7",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$4, _hoisted_3$2);
  }
  const ChevronIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1]]);
  const _hoisted_1$3 = { class: "text-dark-mode" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "ChatElement",
    props: {
      message: null
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["flex flex-row items-end space-x-1 w-full", {
            "justify-end": !__props.message.isInbound
          }])
        }, [
          vue.createVNode(ChevronIcon, {
            class: vue.normalizeClass(["w-3 h-3 shrink-0 mb-1.5", __props.message.isInbound ? "-rotate-90 text-progress" : "rotate-90 text-neutral-200 order-2"])
          }, null, 8, ["class"]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["flex flex-row bg-opacity-40 px-3 py-1.5 rounded-mwi-default", __props.message.isInbound ? "bg-space-700" : "bg-midnight-500"])
          }, [
            vue.createElementVNode("span", _hoisted_1$3, vue.toDisplayString(props.message.message), 1)
          ], 2)
        ], 2);
      };
    }
  });
  const _hoisted_1$2 = { class: "flex flex-col-reverse gap-y-2 bg-space-900 px-1 py-1.5 border-midnight-300 border-2 rounded-mwi-default overflow-y-auto overflow-x-clip" };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ChatBox",
    props: {
      messages: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.messages, (message) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$3, { message }, null, 8, ["message"]);
          }), 256))
        ]);
      };
    }
  });
  const _sfc_main$1 = {};
  const _hoisted_1$1 = {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 460.775 460.775",
    "xml:space": "preserve"
  };
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("path", { d: "M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55\n        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55\n        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505\n        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55\n        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719\n        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" }, null, -1);
  const _hoisted_3$1 = [
    _hoisted_2$1
  ];
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
  const CrossIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const _hoisted_1 = { class: "flex flex-col space-y-1.5 h-full max-h-full mb-1.5 bg-background-game" };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "flex flex-row justify-between items-center" }, [
    /* @__PURE__ */ vue.createElementVNode("h1", { class: "text-lg font-bold transition duration-700 ease-in-out" }, "Whisper Manager")
  ], -1);
  const _hoisted_3 = {
    key: 0,
    class: "flex flex-col justify-center gap-y-3 items-center w-full h-full text-center"
  };
  const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("span", { class: "bold text-4xl" }, "No whispers!", -1);
  const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("span", { class: "text-xl" }, " Start one by clicking a users name in chat and selecting the whisper option. You can also type the following in chat: ", -1);
  const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("code", { class: "text-xl p-1.5 rounded-mwi-default bg-midnight-300" }, "/w <username>", -1);
  const _hoisted_7 = [
    _hoisted_4,
    _hoisted_5,
    _hoisted_6
  ];
  const _hoisted_8 = {
    key: 1,
    class: "flex flex-col space-y-1.5 h-full max-h-full mb-1.5"
  };
  const _hoisted_9 = { class: "flex flex-row space-x-0.5 overflow-y-visible overflow-x-auto" };
  const _hoisted_10 = ["onClick"];
  const _hoisted_11 = {
    key: 0,
    class: "absolute top-0 right-0"
  };
  const _hoisted_12 = /* @__PURE__ */ vue.createElementVNode("div", { class: "bg-warning rounded-full w-2 h-2" }, null, -1);
  const _hoisted_13 = /* @__PURE__ */ vue.createElementVNode("div", { class: "bg-warning rounded-full w-2 h-2 animate-ping absolute top-0 right-0" }, null, -1);
  const _hoisted_14 = [
    _hoisted_12,
    _hoisted_13
  ];
  const _hoisted_15 = { class: "font-semibold text-base text-dark-mode" };
  const _hoisted_16 = { class: "relative h-full" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "WhisperManagerPluginDisplay",
    props: {
      plugin: null
    },
    setup(__props) {
      const props = __props;
      const chatMessageText = vue.ref("");
      const chatMessageInput = vue.ref(null);
      const searchText = vue.ref("");
      props.plugin.game.character.name;
      const systemTabs = ["System", "Mods"];
      const conversations = vue.computed(() => {
        return props.plugin.conversations;
      });
      const hasConversations = vue.computed(() => {
        return Object.keys(conversations.value).length > 0;
      });
      const tabList = vue.computed(() => {
        return Object.entries(conversations.value).filter(
          ([user, conversation]) => user.toLowerCase().includes(searchText.value.toLowerCase()) && !conversation.hidden
        ).sort((a, b) => {
          if (a[1].unread && !b[1].unread)
            return -1;
          if (!a[1].unread && b[1].unread)
            return 1;
          return 0;
        }).sort((a, b) => {
          if (systemTabs.includes(a[0]))
            return -1;
          if (systemTabs.includes(b[0]))
            return 1;
          return 0;
        });
      });
      const activeConversation = vue.computed(() => {
        return props.plugin.activeConversation;
      });
      const activeConversationName = vue.computed(() => {
        return props.plugin.activeConversationName;
      });
      const hiddenConversationCount = vue.computed(() => {
        return Object.keys(conversations.value).filter((name) => conversations.value[name].hidden).length;
      });
      const visibleConversationCount = vue.computed(() => {
        return Object.keys(conversations.value).filter((name) => !conversations.value[name].hidden).length;
      });
      function setNativeValue(el, value) {
        const previousValue = el.value;
        if (el.type === "checkbox" || el.type === "radio") {
          if (!!value && !el.checked || !!!value && el.checked) {
            el.click();
          }
        } else
          el.value = value;
        const tracker = el._valueTracker;
        if (tracker) {
          tracker.setValue(previousValue);
        }
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
      const sendWhisper = (recipient, message) => {
        const chatInput = document.getElementsByClassName("Chat_chatInput__16dhX")[0];
        const sendButton = Array.from(document.getElementsByClassName("Button_button__1Fe9z")).find(
          (button) => button.textContent === "Send"
        );
        const msg = `/w ${recipient} ${message}`;
        setNativeValue(chatInput, msg);
        chatMessageText.value = "";
        sendButton.click();
      };
      const unhideAllConversations = () => {
        for (const [user, conversation] of Object.entries(conversations.value)) {
          conversation.show();
        }
      };
      const onTabClick = (name) => {
        var _a;
        props.plugin.setActiveConversation(name);
        (_a = chatMessageInput.value) == null ? void 0 : _a.focus();
      };
      props.plugin.populateConversations();
      return (_ctx, _cache) => {
        var _a;
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          !vue.unref(hasConversations) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, _hoisted_7)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
            vue.unref(hiddenConversationCount) ? (vue.openBlock(), vue.createElementBlock("button", {
              key: 0,
              class: "bg-midnight-500 font-semibold p-1.5 rounded-mwi-default text-dark-mode hover:bg-midnight-300",
              onClick: _cache[0] || (_cache[0] = ($event) => unhideAllConversations())
            }, " Unhide All ")) : vue.createCommentVNode("", true),
            vue.unref(visibleConversationCount) > 4 ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
              key: 1,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchText.value = $event),
              type: "text",
              placeholder: "Search users...",
              class: "p-1 bg-midnight-500 rounded-mwi-default my-2 text-dark-mode w-full"
            }, null, 512)), [
              [vue.vModelText, searchText.value]
            ]) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_9, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tabList), ([user, conversation]) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: vue.normalizeClass(["flex-grow flex flex-row align-middle items-center rounded-t-mwi-default py-1 px-2 cursor-pointer relative overflow-visible", {
                    "bg-space-800 justify-between gap-2": vue.unref(activeConversationName) === user,
                    "justify-center": !(vue.unref(activeConversationName) === user),
                    "bg-midnight-500": !(vue.unref(activeConversationName) === user) && !vue.unref(conversations)[user].unread,
                    "bg-midnight-400": vue.unref(conversations)[user].unread
                  }]),
                  onClick: ($event) => onTabClick(user)
                }, [
                  vue.unref(conversations)[user].unread ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, _hoisted_14)) : vue.createCommentVNode("", true),
                  vue.createElementVNode("span", _hoisted_15, vue.toDisplayString(user), 1),
                  vue.unref(activeConversationName) === user ? (vue.openBlock(), vue.createBlock(CrossIcon, {
                    key: 1,
                    class: "h-5 aspect-square fill-dark-mode stroke-3 rounded-full p-1 transition-colors hover:fill-progress hover:bg-neutral-200",
                    onClick: ($event) => conversation.hide()
                  }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
                ], 10, _hoisted_10);
              }), 256))
            ]),
            vue.createVNode(MooDivider, { style: { "margin-top": "0" } }),
            vue.createElementVNode("div", _hoisted_16, [
              vue.createVNode(_sfc_main$2, {
                messages: ((_a = vue.unref(activeConversation)) == null ? void 0 : _a.messages) ?? [],
                class: "absolute inset-0 flex-1"
              }, null, 8, ["messages"])
            ]),
            !systemTabs.includes(vue.unref(activeConversationName)) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => chatMessageText.value = $event),
              type: "text",
              ref_key: "chatMessageInput",
              ref: chatMessageInput,
              placeholder: "Send a message...",
              class: "p-1 bg-midnight-500 rounded-mwi-default my-2 text-dark-mode w-full",
              onKeyup: _cache[3] || (_cache[3] = vue.withKeys(($event) => sendWhisper(vue.unref(activeConversationName), chatMessageText.value), ["enter"]))
            }, null, 544)), [
              [vue.vModelText, chatMessageText.value]
            ]) : vue.createCommentVNode("", true)
          ]))
        ]);
      };
    }
  });
  class Conversation {
    constructor(messages) {
      __publicField(this, "_messages", []);
      __publicField(this, "_unread", false);
      __publicField(this, "_hidden", false);
      this._messages = messages;
    }
    get unread() {
      return this._unread;
    }
    get messages() {
      return this._messages;
    }
    get hidden() {
      return this._hidden;
    }
    hide() {
      this._hidden = true;
    }
    show() {
      this._hidden = false;
    }
    toggleUnread() {
      this._unread = !this._unread;
    }
    addMessage(message) {
      this._messages.unshift(message);
    }
    addMessages(messages) {
      this._messages.unshift(...messages);
    }
  }
  class WhisperManagerPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Whisper Manager");
      __publicField(this, "key", "whisper-manager");
      __publicField(this, "description", "A plugin to help manage all of your conversations!");
      __publicField(this, "credits", {
        author: "LagunaE",
        maintainer: "LagunaE",
        contributors: ["JBQ", "knighterd", "Thessaloniki", "Houston", "Champ", "ML", "Maxion", "hoador"]
      });
      __publicField(this, "_conversations", {});
      __publicField(this, "_activeConversationName", "");
      __publicField(this, "config", [
        {
          type: PluginConfigType.CheckBox,
          name: "Hide System Messages",
          description: "Hide system messages from the conversation list",
          key: "hide-system-messages",
          value: false
        },
        {
          type: PluginConfigType.CheckBox,
          name: "Hide Mod Messages",
          description: "Hide mod messages from the conversation list",
          key: "hide-mod-messages",
          value: false
        }
      ]);
      __publicField(this, "tab", {
        icon: "💬",
        pluginName: this.name,
        componentName: "WhisperManagerPluginDisplay",
        component: vue.markRaw(_sfc_main),
        width: "w-80"
      });
    }
    get hideSystemMessages() {
      return this.getConfig("hide-system-messages").value;
    }
    get hideModMessages() {
      return this.getConfig("hide-mod-messages").value;
    }
    get activeConversation() {
      return this._conversations[this._activeConversationName];
    }
    get activeConversationName() {
      return this._activeConversationName;
    }
    get conversations() {
      let conversations = this.hideSystemMessages ? (({ System, ...o }) => o)(this._conversations) : this._conversations;
      conversations = this.hideModMessages ? (({ Mods, ...o }) => o)(conversations) : conversations;
      return conversations;
    }
    get game() {
      return this._game;
    }
    populateConversations() {
      if (Object.keys(this._conversations).length > 0)
        return;
      for (const message of this._game.chat.whisperHistory) {
        this._addToConversations(message);
      }
    }
    setActiveConversation(name) {
      if (!this._conversations[name])
        return;
      this._activeConversationName = name;
      if (this._conversations[name].unread) {
        this._conversations[name].toggleUnread();
      }
    }
    onChatMessage(message) {
      const { channel, isModMessage, isSystemMessage } = message;
      const isNonStandardMessage = channel === ChatChannelTypeHrid.Whisper || isModMessage || isSystemMessage;
      if (isNonStandardMessage) {
        this._addToConversations(message, true);
        return;
      }
    }
    _addToConversations(message, markUnread) {
      var _a;
      const conversationMessage = {
        ...message,
        isInbound: message.receiverName === this._game.character.name
      };
      const { senderName, receiverName, isModMessage, isSystemMessage } = conversationMessage;
      let otherName = senderName === this._game.character.name ? receiverName : senderName;
      otherName = isModMessage ? "Mods" : otherName;
      otherName = isSystemMessage ? "System" : otherName;
      (_a = this._conversations)[otherName] ?? (_a[otherName] = new Conversation([]));
      this._conversations[otherName].addMessage(conversationMessage);
      if (markUnread && otherName !== this._activeConversationName && senderName !== this._game.character.name && !this._conversations[otherName].unread) {
        this._conversations[otherName].toggleUnread();
      }
    }
  }
  var ThemeHrid = /* @__PURE__ */ ((ThemeHrid2) => {
    ThemeHrid2["Default"] = "default";
    ThemeHrid2["Strawberry"] = "strawberry";
    ThemeHrid2["Mint"] = "mint";
    ThemeHrid2["Banana"] = "banana";
    return ThemeHrid2;
  })(ThemeHrid || {});
  const strawberry = ":root {\n    --color-burble-200: #ff99a8;\n    --color-burble-250: #ff8093;\n    --color-burble-300: #ff667d;\n    --color-burble-350: #ff4d67;\n    --color-burble-400: #ff3352;\n    --color-midnight-100: #8f7391;\n    --color-midnight-200: #8c708a;\n    --color-midnight-300: #886c84;\n    --color-midnight-400: #84687d;\n    --color-midnight-500: #806477;\n    --color-midnight-550: #7f6274;\n    --color-midnight-600: #7d6070;\n    --color-midnight-700: #795d69;\n    --color-midnight-800: #755863;\n    --color-space-100: #ffccd4;\n    --color-space-200: #ff99a8;\n    --color-space-250: #ff8093;\n    --color-space-300: #ff667d;\n    --color-space-400: #ff3352;\n    --color-space-500: #ff0026;\n    --color-space-600: #cc001f;\n    --color-space-650: #b3001b;\n    --color-space-700: #990017;\n    --color-space-750: #800013;\n    --color-space-800: #66000f;\n    --color-space-850: #4d000b;\n    --color-space-880: #3c0009;\n    --color-space-900: #330008;\n    --color-space-950: #1a0004;\n}\n\n.Header_header__1DxsV {\n    background: linear-gradient(180deg, rgba(255, 182, 193, 0.5019607843137255), rgba(84, 109, 219, 0));\n}\n\n.css-raibn {\n    background-color: rgb(255, 182, 193);\n}\n";
  const mint = ":root {\n    --color-burble-200: #b3e5d3;\n    --color-burble-250: #a0dec8;\n    --color-burble-300: #8dd8bc;\n    --color-burble-350: #7ad1b1;\n    --color-burble-400: #67cba6;\n    --color-midnight-100: #42737b;\n    --color-midnight-200: #3f6f74;\n    --color-midnight-300: #3b6b6d;\n    --color-midnight-400: #376767;\n    --color-midnight-500: #336460;\n    --color-midnight-550: #31615d;\n    --color-midnight-600: #305f5a;\n    --color-midnight-700: #2c5c53;\n    --color-midnight-800: #28584c;\n    --color-space-100: #d9f2e9;\n    --color-space-200: #b3e5d3;\n    --color-space-250: #a0dec8;\n    --color-space-300: #8dd8bc;\n    --color-space-400: #67cba6;\n    --color-space-500: #41be90;\n    --color-space-600: #349873;\n    --color-space-650: #2e8565;\n    --color-space-700: #277256;\n    --color-space-750: #215f48;\n    --color-space-800: #1a4c3a;\n    --color-space-850: #14392b;\n    --color-space-880: #0f2c22;\n    --color-space-900: #0d261d;\n    --color-space-950: #07130e;\n}\n\n.Header_header__1DxsV {\n    background: linear-gradient(180deg, rgba(62, 180, 137, 0.5019607843137255), rgba(84, 109, 219, 0));\n}\n\n.css-raibn {\n    background-color: rgb(62, 180, 137);\n}\n";
  const banana = ":root {\n    --color-burble-200: #fee79a;\n    --color-burble-250: #fee180;\n    --color-burble-300: #fedb67;\n    --color-burble-350: #fed54d;\n    --color-burble-400: #fecf34;\n    --color-midnight-100: #8f8169;\n    --color-midnight-200: #8b7d62;\n    --color-midnight-300: #88795c;\n    --color-midnight-400: #847655;\n    --color-midnight-500: #80724f;\n    --color-midnight-550: #7e704c;\n    --color-midnight-600: #7c6e48;\n    --color-midnight-700: #796a41;\n    --color-midnight-800: #75663b;\n    --color-space-100: #fff3cc;\n    --color-space-200: #fee79a;\n    --color-space-250: #fee180;\n    --color-space-300: #fedb67;\n    --color-space-400: #fecf34;\n    --color-space-500: #fec301;\n    --color-space-600: #cb9c01;\n    --color-space-650: #b28801;\n    --color-space-700: #987501;\n    --color-space-750: #7f6101;\n    --color-space-800: #654e01;\n    --color-space-850: #4c3a00;\n    --color-space-880: #3c2e00;\n    --color-space-900: #332700;\n    --color-space-950: #191300;\n}\n\n.Header_header__1DxsV {\n    background: linear-gradient(180deg, rgba(254, 216, 93, 0.5019607843137255), rgba(84, 109, 219, 0));\n}\n\n.css-raibn {\n    background-color: rgb(254, 216, 93);\n}\n";
  class ThemesPlugin extends MooLitePlugin {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "Themes");
      __publicField(this, "key", "themes");
      __publicField(this, "description", "Change the appearance of Milky Way Idle with various themes");
      __publicField(this, "credits", {
        author: "Isha",
        maintainer: "Isha",
        contributors: ["Kawa-Chan"]
      });
      __publicField(this, "STYLE_ID", "moolite-theme");
      __publicField(this, "config", [
        {
          type: PluginConfigType.Choice,
          name: "Theme",
          description: "Change the appearance of Milky Way Idle with various themes",
          key: "selected-theme",
          value: "default",
          options: [
            { text: "Default", value: ThemeHrid.Default },
            { text: "Strawberry by Kawa-Chan", value: ThemeHrid.Strawberry },
            { text: "Mint by Kawa-Chan", value: ThemeHrid.Mint },
            { text: "Banana by Kawa-Chan", value: ThemeHrid.Banana }
          ]
        }
      ]);
      __publicField(this, "_themes", {
        [ThemeHrid.Default]: "",
        [ThemeHrid.Mint]: mint,
        [ThemeHrid.Strawberry]: strawberry,
        [ThemeHrid.Banana]: banana
      });
    }
    get selectedTheme() {
      return this.getConfig("selected-theme").value;
    }
    onThemeChanged(themeName) {
      const previousStyle = document.getElementById(this.STYLE_ID);
      if (previousStyle) {
        document.head.removeChild(previousStyle);
      }
      const theme = this._themes[themeName];
      const style2 = document.createElement("style");
      style2.setAttribute("id", this.STYLE_ID);
      style2.appendChild(document.createTextNode(theme));
      document.head.appendChild(style2);
    }
    enable() {
      super.enable();
      this.onThemeChanged(this.selectedTheme);
    }
    disable() {
      super.disable();
      this.onThemeChanged(ThemeHrid.Default);
    }
    onConfigChange(key, newValue) {
      switch (key) {
        case "selected-theme":
          this.onThemeChanged(newValue);
      }
    }
  }
  {
    _unsafeWindow.WebSocket = MooSocket;
  }
  const maxTries = 100;
  let tries = 0;
  const launchMooLite = () => {
    const mooSocket = _unsafeWindow.mooSocket;
    if (!mooSocket) {
      if (tries++ === maxTries) {
        console.error("MooLite did not initialize in time");
      }
      setTimeout(launchMooLite, 10);
      return;
    }
    mooSocket.initialize();
    mooSocket.onInitClientInfoMessage.subscribe((clientInfo) => {
      const game = vue.reactive(new Game(clientInfo));
      const plugins = vue.reactive([
        new MooLiteClientPlugin(),
        new ChatNotifierPlugin(),
        new XpTrackerPlugin(),
        new IdleNotifierPlugin(),
        new LootSimulatorPlugin(),
        new LootNotifierPlugin(),
        new ItemFinderPlugin(),
        new LeaderboardPlugin(),
        new ConsumableNotifierPlugin(),
        new EquipmentExporterPlugin(),
        new WhisperManagerPlugin(),
        new ThemesPlugin()
      ]);
      const pluginManager = vue.reactive(new PluginManager(game, plugins));
      const mooLite = vue.reactive(new MooLite(game, pluginManager, mooSocket));
      const app = vue.createApp(_sfc_main$i, { client: mooLite });
      app.mount(
        (() => {
          const app2 = document.createElement("div");
          const root = document.getElementById("root");
          if (root == null) {
            throw new Error("Could not append MooLite to the element with id 'root' as it does not exist");
          }
          root.append(app2);
          root.style.setProperty("display", "flex");
          root.style.setProperty("flex-direction", "row");
          return app2;
        })()
      );
      plugins.forEach((plugin) => {
        if (plugin.tab) {
          console.debug("Registering custom component", plugin.tab.componentName);
          app.component(plugin.tab.componentName, plugin.tab.component);
        }
      });
      console.log("MooLite connected successfully");
    });
  };
  launchMooLite();

})(Vue);
