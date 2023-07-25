// /**=====================
//     Quantity 2 js
// ==========================**/
// //  $(".addcart-button").click(function () {
// //      $(this).next().addClass("open");
// //      $(".add-to-cart-box .qty-input").val('1');
// //  });

// //  $('.add-to-cart-box').on('click', function () {
// //      var $qty = $(this).siblings(".qty-input");
// //      var currentVal = parseInt($qty.val());
// //      if (!isNaN(currentVal)) {
// //          $qty.val(currentVal + 1);
// //      }
// //  });

// //  $('.qty-left-minus').on('click', function () {
// //      var $qty = $(this).siblings(".qty-input");
// //      var _val = $($qty).val();
// //      if (_val == '1') {
// //          var _removeCls = $(this).parents('.cart_qty');
// //          $(_removeCls).removeClass("open");
// //      }
// //      var currentVal = parseInt($qty.val());
// //      if (!isNaN(currentVal) && currentVal > 0) {
// //          $qty.val(currentVal - 1);
// //      }
// //  });

// //  $('.qty-right-plus').click(function () {
// //      if ($(this).prev().val() < 9) {
// //          $(this).prev().val(+$(this).prev().val() + 1);
// //      }
// //  });


// $(".addcart-button").click(function () {
   
    
//     $(this).next().addClass("open");
//     $(".add-to-cart-box .qty-input").val('1');
//     // // var $qty = $(this).siblings(".qty-box").find(".qty-input");
//     // var currentVal = parseInt($qty.val());
//     // if (!isNaN(currentVal)) {
//     //     $qty.val(currentVal + 1);
//         updateLocalStorage();
    
// });

// $('.qty-left-minus').on('click', function () {
//     var $qty = $(this).parent().siblings(".qty-input");
//     var _val = $qty.val();
//     if (_val == '1') {
//         var _removeCls = $(this).parents('.cart_qty');
//         $(_removeCls).removeClass("open");
//         removeItemFromCart($(this));
//     } else {
//         var currentVal = parseInt($qty.val());
//         if (!isNaN(currentVal) && currentVal > 0) {
//             $qty.val(currentVal - 1);
//             updateLocalStorage();
//         }
//     }
// });

// $('.qty-right-plus').click(function () {
//     var $qty = $(this).parent().siblings(".qty-input");
//     if ($qty.val() < 9) {
//         $qty.val(parseInt($qty.val()) + 1);
//         updateLocalStorage();
//     }
// });

// function removeItemFromCart(element) {
//     var productName = element.closest(".product-box").find(".name").text();
//     var cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     var updatedCartItems = cartItems.filter(function (item) {
//         return item.name !== productName;
//     });
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//     updateCartIcon(); // Update cart icon and item list
// }



// // Function to update the local storage
// function updateLocalStorage() {
//     var cartItems = [];
//     $('.add-to-cart-box').each(function () {
//         var $qty = $(this).find(".qty-input");
//         var quantity = parseInt($qty.val());
//         if (!isNaN(quantity) && quantity > 0) {
//             var productName = $(this).closest(".product-box").find(".name").text();
//             var item = {
//                 name: productName,
//                 quantity: quantity
//             };
//             cartItems.push(item);
//         }
//     });
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// }

// function removeItemFromCart() {
//     var productName = $(this).closest(".product-box").find(".name").text();
//     var cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     var updatedCartItems = cartItems.filter(function (item) {
//         return item.name !== productName;
//     });
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
// }

// function updateCartIcon() {
//     var cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     var itemCount = cartItems ? cartItems.length : 0;
//     $('.cart-icon').text(itemCount);

//     var $cartList = $('.cart-list');
//     $cartList.empty();
//     cartItems.forEach(function (item) {
//         var productName = item.name;
//         var quantity = item.quantity;
//         var listItem = '<li class="product-box-contain">' +
//             '<div class="drop-cart">' +
//             '<a href="product-left-thumbnail.html" class="drop-image">' +
//             '<img src="../assets/images/vegetable/product/1.png" class="blur-up lazyload" alt="">' +
//             '</a>' +
//             '<div class="drop-contain-content">' +
//             '<h5 class="product-name">' + productName + '</h5>' +
//             '<span class="product-quantity">' + quantity + '</span>' +
//             '</div>' +
//             '</div>' +
//             '</li>';
//         $cartList.append(listItem);
//     });
// }

// updateCartIcon();

