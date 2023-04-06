import { timeout } from "async";
import energyBuyPage from "../page/energyBuy";

describe('ensek energy corp Energy Buy page', () => {
  beforeEach(() => {
    energyBuyPage.openUrl()
    energyBuyPage.clickBuyEnergyLink() //EK0029
    energyBuyPage.clickResetButton()//EK0038
    energyBuyPage.getGasAvailableUnit()
    energyBuyPage.getElectricityAvailableUnit()
    energyBuyPage.getOilAvailableUnit()
  })
  it.only('Buy some units of Gas,Verify the success message,Verify the units after sale and Click Reset displays old value ', () => {
    energyBuyPage.buyGasSuccess();
  })
  it.only('Buy some units of Electricity,Verify the success message,Verify the units after sale and Click Reset displays old value ', () => {
    energyBuyPage.buyElectricitySuccess();
  })
  it.only('Buy some units of Oil,Verify the success message,Verify the units after sale and Click Reset displays old value ', () => {
    energyBuyPage.buyOilSuccess();
  })
  it('EK0030,EK0035,EK0037,EK0042,EK0043,EK0044,EK0045,EK0046,EK0048,EK0049_buy Gas energy less than available unit', () => {
    energyBuyPage.verifyTradeWindowOpenMessage()
    energyBuyPage.verifyDiscountMessage()
    energyBuyPage.verifyGasAvailableUnit()
    energyBuyPage.enterGasEnergyUnit(1000)
    energyBuyPage.clickGasBuyButton()
    energyBuyPage.verifyGasUnitMessage()
    energyBuyPage.changeAvailableUnitGas()
    energyBuyPage.enterGasEnergyUnit(500)
    energyBuyPage.clickGasBuyButton()
    energyBuyPage.verifyGasUnitMessage()
  })
  it('EK0030,EK0035,EK0040,EK0046,EK0048,EK0049_buy all the Gas energy availabel unit', () => {
    energyBuyPage.verifyGasAvailableUnit()
    energyBuyPage.enterGasEnergyUnit(3000)
    energyBuyPage.clickGasBuyButton()
    energyBuyPage.verifyGasUnitMessage()
  })
  it('EK0030,EK0035,EK0040,EK0046,EK0048,EK0049_buy Gas energy more than availabel unit', () => {
    energyBuyPage.verifyGasAvailableUnit()
    energyBuyPage.enterGasEnergyUnit(4000)
    energyBuyPage.clickGasBuyButton()
    energyBuyPage.verifyGasUnitMessage()
  })

  it('EK0031,EK0035,EK0046,EK0048,EK0049_buy Electricity energy less than available unit', () => {
    energyBuyPage.verifyElectricityAvailableUnit()
    energyBuyPage.enterElectricityEnergyUnit(2000)
    energyBuyPage.clickElectricityBuyButton()
    energyBuyPage.verifyElectricityUnitMessage()
  })
  it('EK0031,EK0035,EK0040,EK0046,EK0048,EK0049_buy all the Electricity energy availabel unit', () => {
    energyBuyPage.verifyElectricityAvailableUnit()
    energyBuyPage.enterElectricityEnergyUnit(4322)
    energyBuyPage.clickElectricityBuyButton()
    energyBuyPage.verifyElectricityUnitMessage()
  })
  it('EK0031,EK0035,EK0040,EK0046,EK0048,EK0049_buy Electricity energy more than availabel unit', () => {
    energyBuyPage.verifyElectricityAvailableUnit()
    energyBuyPage.enterElectricityEnergyUnit(5000)
    energyBuyPage.clickElectricityBuyButton()
    energyBuyPage.verifyElectricityUnitMessage()
  })

  it('EK0032,EK0035,EK0046,EK0048,EK0049_buy Oil energy less than available unit', () => {
    energyBuyPage.verifyOilAvailableUnit()
    energyBuyPage.enterOilEnergyUnit(10)
    energyBuyPage.clickOilBuyButton()
    energyBuyPage.verifyOilUnitMessage()
  })
  it('EK0032,EK0035,EK0040,EK0046,EK0048,EK0049_buy all the Oil energy availabel unit', () => {
    energyBuyPage.verifyOilAvailableUnit()
    energyBuyPage.enterOilEnergyUnit(20)
    energyBuyPage.clickOilBuyButton()
    energyBuyPage.verifyOilUnitMessage()
  })
  it('EK0032,EK0035,EK0040,EK0046,EK0048,EK0049_buy Oil energy more than availabel unit', () => {
    energyBuyPage.verifyOilAvailableUnit()
    energyBuyPage.enterOilEnergyUnit(22)
    energyBuyPage.clickOilBuyButton()
    energyBuyPage.verifyOilUnitMessage()
  })
  it('EK0036_without enter unit value', () => {
    energyBuyPage.verifyOilAvailableUnit()
    energyBuyPage.enterOilEnergyUnit(' ')
    energyBuyPage.clickOilBuyButton()
    energyBuyPage.assertFailOnErrorMessage()
  })
  it('EK0050_Enter special character in Electricity unit field', () => {
    energyBuyPage.verifyElectricityAvailableUnit()
    energyBuyPage.enterElectricityEnergyUnit('$#$$')
    energyBuyPage.clickElectricityBuyButton()
    energyBuyPage.assertFailOnErrorMessage()
  })
  it('EK0039_Enter alphabet in Electricity unit field', () => {
    energyBuyPage.verifyElectricityAvailableUnit()
    energyBuyPage.enterElectricityEnergyUnit('abcgd')
    energyBuyPage.clickElectricityBuyButton()
    energyBuyPage.assertFailOnErrorMessage()
  })
  it('EK0041_Enter arithmatic operation in Electricity unit field', () => {
    energyBuyPage.verifyElectricityAvailableUnit()
    energyBuyPage.enterElectricityEnergyUnit('2+5')
    energyBuyPage.clickElectricityBuyButton()
    energyBuyPage.assertFailOnErrorMessage()
  })
  it('EK0047_Navigate back to Homepage', () => {
    energyBuyPage.clickBackToHomePage()
    energyBuyPage.verifyHomePage()
  })
  it('EK0033_Enter negative value in Oil unit field', () => {
    energyBuyPage.verifyOilAvailableUnit()
    energyBuyPage.enterOilEnergyUnit(-2)
    energyBuyPage.clickOilBuyButton()
    energyBuyPage.verifyOilUnitMessageForNegativePurchasedUnit()
  })
  it('EK0034_Enter decimal value in Oil unit field', () => {
    energyBuyPage.verifyOilAvailableUnit()
    energyBuyPage.enterOilEnergyUnit(2.5)
    energyBuyPage.clickOilBuyButton()
    energyBuyPage.assertFailOnErrorMessage()
  })

})