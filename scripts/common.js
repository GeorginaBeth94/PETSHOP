function Common() {
    let self = this;
    /* Properties */
    this.promoBar =
    {
        promoItems: null;
        currentItem: 0,
        numberOfItems: 0,
    };
    /* Methods */
    this.initialisePromo = function () {
        /* Get all items in promo bar */
        let promoItems = $("#promo > div");
        /* Set values */
        this.promoBar.promoItems = promoItems;
        this.promoBar.numberOfItems = promoItems.length;
        /* Initiate promo loop to show next item */
        this.startDelay();
    }
    this.startDelay = function() {
        /* Wait 4 seconds then show the next message */
        setTimeout(function () {
            self.showNextPromoItem()
        }, 4000);
    }
}
$(document).ready(function (){
    /* Instantiate new Common class */
    app.common = new Common();
});