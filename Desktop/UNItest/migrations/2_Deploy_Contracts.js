
const MyDeFiProject = artifacts.require("MyDeFiProject");


module.exports = async function(deployer, _network, accounts) {
 const daiAddress = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";
 const uniRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
 const wethAddress = "0xf3a6679b266899042276804930b3bfbaf807f15b";
 const Amountmin = 4*10^15;
 await deployer.deploy(MyDeFiProject, uniRouter);
 const MyDeFi = await MyDeFiProject.deployed();
 const balanceWBefore = await MyDeFi.getbalance(wethAddress, accounts[0]);
 const balanceDBefore = await MyDeFi.getbalance(daiAddress, accounts[0]);
 await MyDeFi.swapTokensForEth(daiAddress, 10, Amountmin , 60);
 const balanceWAfter = await MyDeFi.getbalance(wethAddress, accounts[0]);
 const balanceDAfter = await MyDeFi.getbalance(daiAddress, accounts[0]);

 console.log(balanceWBefore.toString(), balanceDBefore.toString());
 console.log(balanceWAfter.toString(), balanceDAfter.toString());

};
