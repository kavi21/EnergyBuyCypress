
class energyBuyPage {
    purchasedUnit=0;
    availableGasUnit=0;
    availableElectricityUnit=0;
    availableOilUnit=0;
    openUrl () {
        cy.open('https://ensekautomationcandidatetest.azurewebsites.net/')
    }

    clickBuyEnergyLink () {
        cy.Click('a[href*="Energy"][href*="Buy"]')
    }

    enterGasEnergyUnit(unitCount) {
        cy.enter('tr:nth-child(1) input[id="energyType_AmountPurchased"]',unitCount)
        this.purchasedUnit = unitCount
        
    }
    changeAvailableUnitGas() {
        this.availableGasUnit = this.availableGasUnit - this.purchasedUnit
    }
    enterElectricityEnergyUnit(unitCount) {
        cy.enter('tr:nth-child(3) input[id="energyType_AmountPurchased"]',unitCount)
        this.purchasedUnit = unitCount
    }
    enterOilEnergyUnit(unitCount) {
        cy.enter('tr:nth-child(4) input[id="energyType_AmountPurchased"]',unitCount)
        this.purchasedUnit = unitCount
    }
    clickGasBuyButton () {
        cy.Click('tr:nth-child(1) input[name="Buy"]')
    }
    clickElectricityBuyButton () {
        cy.Click('tr:nth-child(3) input[name="Buy"]')
    }
    clickOilBuyButton () {
        cy.Click('tr:nth-child(4) input[name="Buy"]')
    }
    clickBuyMoreButton () {
        cy.assertTextContains('a[class="btn btn-default"]','Buy more','be.visible')
        cy.Click('a[class="btn btn-default"]')
    }
    clickResetButton () {
        cy.Click('input[name="Reset"]')
    }

    verifyGasUnitMessage () {
        let remainingUnit = this.availableGasUnit - this.purchasedUnit
        cy.log("available unit : "+this.availableGasUnit)
        cy.log("purchasedUnit unit : "+this.purchasedUnit)
        cy.log("remainingUnit unit : "+remainingUnit)
        cy.assertTextContains('div[class="well"] p',`There are now ${remainingUnit} units of Gas left in our stores.`,'be.visible')
        this.clickBuyMoreButton()
        cy.assertTextContains('tr:nth-child(1) > td:nth-child(5)',remainingUnit.toString(),'be.visible')
        if (remainingUnit <=0) {
            cy.assertTextContains('tr:nth-child(1) > td:nth-child(6)','Not Available','be.visible')
        }
    }

    verifyGasAvailableUnit() {
        cy.assertTextContains('tr:nth-child(1) > td:nth-child(5)',this.availableGasUnit,'be.visible')
    }
    verifyElectricityUnitMessage () {
        let remainingUnit = this.availableElectricityUnit - this.purchasedUnit
        cy.assertTextContains('div[class="well"] p',`There are now ${remainingUnit} units of Electricity left in our stores.`,'be.visible')
        this.clickBuyMoreButton()
        cy.assertTextContains('tr:nth-child(3) > td:nth-child(5)',remainingUnit.toString(),'be.visible')
        if (remainingUnit <=0) {
            cy.assertTextContains('tr:nth-child(3) > td:nth-child(6)','Not Available','be.visible')
        }
    }
    verifyElectricityAvailableUnit() {
        cy.assertTextContains('tr:nth-child(3) > td:nth-child(5)',this.availableElectricityUnit,'be.visible')
    }
    verifyOilUnitMessage() {
        let remainingUnit = this.availableOilUnit - this.purchasedUnit
        cy.assertTextContains('div[class="well"] p',`There are now ${remainingUnit} units of Oil left in our stores.`,'be.visible')
        this.clickBuyMoreButton()
        cy.assertTextContains('tr:nth-child(4) > td:nth-child(5)',remainingUnit.toString(),'be.visible')
        if (remainingUnit <=0) {
            cy.assertTextContains('tr:nth-child(4) > td:nth-child(6)','Not Available','be.visible')
        }
    }
    verifyOilUnitMessageForNegativePurchasedUnit() {
        let remainingUnit = this.availableOilUnit - this.purchasedUnit
        cy.assertTextContains('div[class="well"] p',`There are now ${remainingUnit} units of Oil left in our stores.`,'not.be.visible')
        this.clickBuyMoreButton()
        cy.assertTextContains('tr:nth-child(4) > td:nth-child(5)',remainingUnit.toString(),'not.be.visible')
    }
    verifyOilAvailableUnit() {
        cy.assertTextContains('tr:nth-child(4) > td:nth-child(5)',this.availableOilUnit,'be.visible')
    }
    getGasAvailableUnit () {
        cy.getText('tr:nth-child(1) > td:nth-child(5)','Gas')
        cy.task('getGasUnit').then((value) => {
            this.availableGasUnit = value
            cy.log("available Gas Unit :"+value)
        })

    }
    getElectricityAvailableUnit () {
        cy.getText('tr:nth-child(3) > td:nth-child(5)','Electricity')
        cy.task('getElectricityUnit').then((value) => {
            this.availableElectricityUnit = value
            cy.log("available Electricity Unit :"+value)
        })
        
    }
    getOilAvailableUnit () {
        cy.getText('tr:nth-child(4) > td:nth-child(5)','Oil')
        cy.task('getOilUnit').then((value) => {
            this.availableOilUnit = value
            cy.log("available Oil Unit :"+value)
        })
    }
    assertFailOnErrorMessage () {
        cy.assertTextContains('h2[class="text-danger"]','An error occurred while processing your request','not.be.visible')
    }
    clickBackToHomePage () {
        cy.Click('div[class="container body-content"] a[href]')
    }
    verifyHomePage() {
        cy.assertTextContains('a[class="btn btn-default"][href*="Energy"][href*="Buy"]','Buy energy','be.visible')
    }
    verifyTradeWindowOpenMessage() {
        cy.assertTextContains('div[class="container body-content"] h4','trading window is open','be.visible')
    }
    verifyDiscountMessage () {
        cy.assertTextContains('div[class="container body-content"] h3','we have a special discount','be.visible')
    }

    buyGasSuccess() {

        const energyType = 'Gas';
        const price = '£0.34 per m3';
        const unitsAvailable = 3000;
        const unitsToBuy = 10;


        cy.contains(energyType)
        cy.contains(price)
        cy.contains(unitsAvailable)

        cy.get(':nth-child(1) > :nth-child(6) > #energyType_AmountPurchased').clear().type(unitsToBuy)

        cy.get(':nth-child(1) > :nth-child(7) > .btn[name="Buy"][value="Buy"]').click()


        // Check that the success message is displayed
        cy.get('h2').contains('Sale Confirmed!')

        // Click the back button
        cy.contains('Buy more').click()

        // Check that the number of units available is decreased
        const soldUnits = unitsAvailable - unitsToBuy;
        cy.contains(soldUnits)

        // Click the reset button
        cy.contains('Reset').click()

        // Check that the number of units available is reset to the original value
        cy.contains(unitsAvailable)

    }

    buyElectricitySuccess() {

        const energyType2 = 'Electricity';
        const price2 = '£0.47 per kWh';
        const unitsAvailable2 = 4322;
        const unitsToBuy2 = 100;

        // Go to the page with the energy offer
        // cy.visit('/energy-offer')

        // Check that the offer details are displayed
        cy.contains(energyType2)
        cy.contains(price2)
        cy.contains(unitsAvailable2)


        cy.get(':nth-child(3) > :nth-child(6) > #energyType_AmountPurchased').clear().type(unitsToBuy2)

        cy.get(':nth-child(3) > :nth-child(7) > .btn[name="Buy"][value="Buy"]').click()


        // Check that the success message is displayed
        cy.get('h2').contains('Sale Confirmed!')

        // Click the back button
        cy.contains('Buy more').click()

        // Check that the number of units available is decreased
        const soldUnits2 = unitsAvailable2 - unitsToBuy2;
        cy.contains(soldUnits2)

        // Click the reset button
        cy.contains('Reset').click()

        // Check that the number of units available is reset to the original value
        cy.contains(unitsAvailable2)
    }


    buyOilSuccess() {

        const energyType3 = 'Oil';
        const price3 = '£0.50 per Litres';
        const unitsAvailable3 = 20;
        const unitsToBuy3 = 10;

        // Go to the page with the energy offer
        // cy.visit('/energy-offer')

        // Check that the offer details are displayed
        cy.contains(energyType3)
        cy.contains(price3)
        cy.contains(unitsAvailable3)


        cy.get(':nth-child(4) > :nth-child(6) > #energyType_AmountPurchased').clear().type(unitsToBuy3)

        cy.get(':nth-child(4) > :nth-child(7) > .btn[name="Buy"][value="Buy"]').click()


        // Check that the success message is displayed
        cy.get('h2').contains('Sale Confirmed!')

        // Click the back button
        cy.contains('Buy more').click()

        // Check that the number of units available is decreased
        const soldUnits3 = unitsAvailable3 - unitsToBuy3;
        cy.contains(soldUnits3)

        // Click the reset button
        cy.contains('Reset').click()

        // Check that the number of units available is reset to the original value
        cy.contains(unitsAvailable3)
    }




}

export default new energyBuyPage();