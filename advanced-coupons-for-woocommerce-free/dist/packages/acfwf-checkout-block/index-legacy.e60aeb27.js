System.register(["../../common/NoticesPlugin-legacy.6df8da26.js","../../common/index-legacy.1e4d52e6.js"],(function(e,t){"use strict";var c,o,a,n,r,s;return{setters:[e=>{c=e.g,o=e.s,a=e.c,n=e.i,r=e.r,s=e.a},null],execute:function(){var e=document.createElement("style");function t(){const{OrderSummarySubtotalBlock:e}=acfwfObj.components,{store_credits:t}=c(a.integration),{pay_with_store_credits_text:n}=t,{acfwf_block:r}=o.getCartData().extensions;if(r&&r.store_credits&&r.store_credits.amount){const{amount_text:t}=r.store_credits;return React.createElement(e,{label:n,value:t})}return null}e.textContent='.acfw-checkout-form-button-field{margin:0}.acfw-checkout-form-button-field:after{content:"";display:table;clear:both}.acfw-checkout-form-button-field .form-row-last label{display:none}.acfw-checkout-form-button-field .form-row-last .button{width:100%}.acfwf-components .acfw-accordion:last-child{border-bottom:0}.acfwf-components .acfw-accordion h3{padding:.7em 1.2em;margin:0;background:#f5f5f5;font-size:1em;font-weight:400;cursor:pointer}.acfwf-components .acfw-accordion h3 .caret{position:relative;top:-2px;margin-left:5px}.acfwf-components .acfw-accordion h3 .caret img{display:inline-block;transition:transform .5s ease;transform:rotate(-90deg)}.acfwf-components .acfw-accordion .acfw-accordion-inner{overflow:hidden;background:#fcfcfc;max-height:0;transition:max-height .5s ease}.acfwf-components .acfw-accordion .acfw-accordion-inner .acfw-accordion-content{padding:1em 1.2em}.acfwf-components .acfw-accordion.show h3 .caret img{transform:rotate(0)}.acfwf-components .acfw-accordion .acfw-accordion-content{font-size:.9em}.acfwf-components .acfw-accordion .acfw-accordion-content p{margin-bottom:.5em}.acfwf-components .acfw-accordion .acfw-accordion-content p.acfw-store-credit-instructions{margin-bottom:.2em}\n',document.head.appendChild(e);const i=e=>{const{adminAjaxUrl:t}=acfwfObj,{dummyUpdateCart:c}=acfwfObj.wc,{setButtonDisabled:o,amount:a,setAmount:n,redeem_nonce:r}=e,{dispatch:s}=wp.data;o(!0),jQuery.post(t,{action:"acfwf_redeem_store_credits",amount:a,wpnonce:r,is_cart_checkout_block:!0},(function(e){c(),n(""),s("core/notices").createNotice(e.status,e.message,{type:"snackbar",context:"wc/checkout"}),setTimeout((()=>{o(!1)}),200)}))};function l(){const{Accordion:e}=acfwfObj.components,{useState:t}=wp.element,{caret_img_src:n,store_credits:r}=c(a.integration),{button_text:s,redeem_nonce:l,hide_store_credits_on_zero_balance:m,auto_display_store_credits_redeem_form:f}=r,{balance_text:d,instructions:u,placeholder:w}=r.labels,{toggle_text:p}=r.labels,[_,b]=t(""),[g,h]=t(!1),{acfwf_block:k}=o.getCartData().extensions;if(!k||!k.store_credits)return null;const{balance:y,balance_text:x}=k.store_credits;return y||"yes"!==m?React.createElement("div",{className:"acfwf-components acfw-checkout-ui-block"},React.createElement(e,{title:p,caret_img_src:n,auto_display_store_credits_redeem_form:f},React.createElement("div",null,React.createElement("p",{className:"acfw-store-credit-user-balance"},React.createElement("div",{dangerouslySetInnerHTML:{__html:d.replace("%s",`<strong>${x}</strong>`)}})),React.createElement("p",{className:"acfw-store-credit-instructions"},u),React.createElement("div",{id:"acfw_redeem_store_credit",className:"acfw-redeem-store-credit-form-field acfw-checkout-form-button-field "},React.createElement("p",{className:"form-row form-row-first acfw-form-control-wrapper acfw-col-left-half wfacp-input-form"},React.createElement("label",{htmlFor:"coupon_code"}),React.createElement("input",{type:"text",className:"input-text wc_input_price ",value:_,placeholder:w,onChange:e=>{b(e.target.value)}})),React.createElement("p",{className:"form-row form-row-last acfw-col-left-half acfw_coupon_btn_wrap"},React.createElement("label",{className:"acfw-form-control-label"}),React.createElement("button",{type:"button",className:"button alt",onClick:()=>i({setButtonDisabled:h,amount:_,setAmount:b,redeem_nonce:l}),disabled:g},s)))))):null}n(),r(),s(),function(){const{ExperimentalDiscountsMeta:e,ExperimentalOrderMeta:o}=wc.blocksCheckout,{registerPlugin:n}=wp.plugins,{store_credits:r}=c(a.integration),{apply_type:s,display_store_credits_redeem_form:i,store_credits_module:m,is_allow_store_credits:f}=r;m&&"yes"===i&&f&&(n("acfw-store-credit-discount-form",{render:()=>React.createElement(o,null,React.createElement(l,null)),scope:"woocommerce-checkout"}),"coupon"!==s&&n("acfw-store-credit-discount-row",{render:()=>React.createElement(e,null,React.createElement(t,null)),scope:"woocommerce-checkout"}))}()}}}));
