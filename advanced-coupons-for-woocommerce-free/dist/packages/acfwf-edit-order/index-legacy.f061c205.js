System.register([],(function(e,o){"use strict";return{execute:function(){function e(){jQuery("#woocommerce-order-items").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})}function o(){jQuery("#woocommerce-order-items").unblock()}const t=jQuery;function r(){t("#acfw-refund-as-store-credits").length||(t("#post-body .refund-actions").prepend(`<button type="button" id="acfw-refund-as-store-credits" class="button button-primary">${acfwEditOrder.button_text}</button>`),t("#post-body button.refund-items").on("click",r))}function n(){const e=t(this).val(),o=accounting.unformat(e,woocommerce_admin.mon_decimal_point);t("button#acfw-refund-as-store-credits .amount").text(accounting.formatMoney(o,{symbol:woocommerce_admin_meta_boxes.currency_format_symbol,decimal:woocommerce_admin_meta_boxes.currency_format_decimal_sep,thousand:woocommerce_admin_meta_boxes.currency_format_thousand_sep,precision:woocommerce_admin_meta_boxes.currency_format_num_decimals,format:woocommerce_admin_meta_boxes.currency_format}))}function c(){e(),window.confirm(woocommerce_admin_meta_boxes.i18n_do_refund)||o();const r=t("input#refund_amount").val(),n=t("input#refund_reason").val(),c=t("input#refunded_amount").val(),a={},d={},i={};t(".refund input.refund_order_item_qty").each((function(e,o){t(o).closest("tr").data("order_item_id")&&t(o).val()&&(a[t(o).closest("tr").data("order_item_id")]=t(o).val())})),t(".refund input.refund_line_total").each((function(e,o){t(o).closest("tr").data("order_item_id")&&(d[t(o).closest("tr").data("order_item_id")]=accounting.unformat(t(o).val(),woocommerce_admin.mon_decimal_point))})),t(".refund input.refund_line_tax").each((function(e,o){if(t(o).closest("tr").data("order_item_id")){var r=t(o).data("tax_id");i[t(o).closest("tr").data("order_item_id")]||(i[t(o).closest("tr").data("order_item_id")]={}),i[t(o).closest("tr").data("order_item_id")][r]=accounting.unformat(t(o).val(),woocommerce_admin.mon_decimal_point)}}));const s={action:"woocommerce_refund_line_items",order_id:woocommerce_admin_meta_boxes.post_id,refund_amount:r,refunded_amount:c,refund_reason:n,line_item_qtys:JSON.stringify(a,null,""),line_item_totals:JSON.stringify(d,null,""),line_item_tax_totals:JSON.stringify(i,null,""),api_refund:t(this).is(".do-api-refund"),restock_refunded_items:t("#restock_refunded_items:checked").length?"true":"false",security:woocommerce_admin_meta_boxes.order_item_nonce,acfw_store_credits:!0};t.ajax({url:woocommerce_admin_meta_boxes.ajax_url,data:s,type:"POST",success:function(e){!0===e.success?window.location.reload():(window.alert(e.data.error),t("#woocommerce-order-items").trigger("wc_order_items_reload"),o())},complete:function(){wcTracks.recordEvent("order_edit_refunded",{order_id:s.order_id,status:t("#order_status").val(),api_refund:s.api_refund,has_reason:!!s.refund_reason,restock:"true"===s.restock_refunded_items})}})}function a(){t(".wc-order-totals-items .wc-order-totals tr.acfw-payment-row").length&&(t(".wc-order-totals-items .wc-order-totals tr.acfw-payment-row").appendTo(".wc-order-totals-items .wc-order-totals:first-child tbody"),t(".wc-order-totals-items .wc-order-totals tr.acfw-payment-row").removeClass("acfw-payment-row"),t(".wc-order-totals-items table.wc-order-totals").length>2&&t(t(".wc-order-totals-items table.wc-order-totals")[1]).remove())}const d=jQuery;function i(){d("body").on("click","button.acfw-apply-store-credits",s),d(`ul.wc_coupon_list li span span:contains('${acfwEditOrder.store_credit_coupon_code}')`).closest(".code").removeClass("editable").find("a.remove-coupon").remove()}function s(){d(this);const t=window.prompt(acfwEditOrder.apply_store_credits_prompt,acfwEditOrder.order_store_credits_amount);null!==t&&(e(),d.ajax({url:woocommerce_admin_meta_boxes.ajax_url,data:{action:"acfwf_apply_store_credits_to_order",order_id:woocommerce_admin_meta_boxes.post_id,amount:t,security:woocommerce_admin_meta_boxes.order_item_nonce},type:"POST",success:function(e){!0===e.success?window.location.reload():window.alert(e.data.error),o()}}))}const _=jQuery;function m(){_("body").on("click","button.acfw-refund-store-credits",u)}function u(){const t=_(this),r=window.prompt(t.data("prompt"));null!==r&&(e(),_.ajax({url:woocommerce_admin_meta_boxes.ajax_url,data:{action:"acfwf_refund_store_credits_discount_from_order",order_id:woocommerce_admin_meta_boxes.post_id,amount:r,security:woocommerce_admin_meta_boxes.order_item_nonce},type:"POST",success:function(e){!0===e.success?window.location.reload():window.alert(e.data.error),o()}}))}jQuery(document).ready((function(e){t("#woocommerce-order-items").on("click","button.refund-items",r),t("#woocommerce-order-items").on("change keyup",".wc-order-refund-items #refund_amount",n),t("body").on("click","button#acfw-refund-as-store-credits",c),t("body").on("order-totals-recalculate-complete",a),a(),i(),m()}))}}}));
