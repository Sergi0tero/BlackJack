var init = function(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('profile')
    console.log(product);
}

ko.applyBindings(init());