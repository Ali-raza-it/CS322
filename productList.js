(function () {

    var mockDatabase = [
        { pic:"keyboard.jpg", _price: '27.99', name: 'Arteck 2.4G Wireless Keyboard Stainless Steel Ultra Slim Full Size Keyboard with Numeric Keypad, Windows 10/8/ 7 Built in Rechargeable Battery', inStock: false },
        { pic:"combo.jpg", _price: '27.99', name: 'Logitech M510 Wireless Computer Mouse for PC with USB Unifying Receiver - Graphite', inStock: true },
        { pic:"mouse.jpg", _price: '19.99', name: 'MK270 Wireless Keyboard and Mouse Combo', inStock: true },
        { pic:"Netgear%20extender.jpg", _price: '38.89', name: 'NETGEAR WiFi Extender (EX3700) Signal Booster for Home with Ethernet Port, Coverage Up to 1,000 sq.ft. & 15 Devices, AC750 (Up to 750 Mbps) Dual-Band Range Extender & Wireless Repeater', inStock: true },
        { pic:"oculus%20quest.jpg", _price: '299', name: 'Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 128 GB', inStock: true },
        { pic:"USB%20hub.jpg", _price: '16.96', name: 'Sabrent 4-Port USB 3.0 Hub with Individual LED Lit Power Switches, Includes 5V/2.5A Power Adapter (HB-UMP3)', inStock: true },
    ];

    function renderList (results) {
        var productBody = document.querySelector('#product-container pbody');
        productBody.innerHTML = '';
        var tableRows = results.map(function (result, index) {
            return '<div id="product"><img src='+result.pic+ ' alt='+result.name+'></img><h5>' + result.name  + " <br> in stock: " + result.inStock + " </h5><h3>$" + result._price + "</h3></div>";
        });
        tableRows.forEach(function (row) {
            productBody.innerHTML += row;
        });
    }

    renderList(mockDatabase);

    function orderBy(sortValue) {
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    document.querySelector('#orderBy' ).addEventListener('change', function(event){
        orderBy(event.target.value);
    });

    function toggleInStock(showInStock) {
        var filteredResults = mockDatabase.filter(function (result) {
            return showInStock || result.inStock;
        });
        renderList(filteredResults);
    }
    document.querySelector('#inStock').addEventListener('change', function(event){
        var value = event.target.value === 'true';
        toggleInStock(value);
    });



})();