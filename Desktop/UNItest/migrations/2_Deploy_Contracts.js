
const MyDeFiProject = artifacts.require("MyDeFiProject");


module.exports = async function(deployer, _network, accounts) {
  const usdtAddress = "0x07de306ff27a2b630b1141956844eb1552b956b5";
 const daiAddress = "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa";
 const uniRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
 const wethAddress = "0xf3a6679b266899042276804930b3bfbaf807f15b";
 await deployer.deploy(MyDeFiProject, uniRouter);
// const MyDeFi = await MyDeFiProject.deployed();
 // await MyDeFi.approveStack(daiAddress,MyDeFi.address,10);
 // const balanceWBefore = await MyDeFi.getbalance(wethAddress, accounts[0]);
 // const balanceDBefore = await MyDeFi.getBalance(daiAddress, accounts[0]);
 //
 // await MyDeFi.swapTokensForEth(daiAddress, 10, Amountmin , 60);
 // const balanceWAfter = await MyDeFi.getbalance(wethAddress, accounts[0]);
 // const balanceDAfter = await MyDeFi.getbalance(daiAddress, accounts[0]);
 //
 // console.log(balanceWBefore.toString(), balanceDBefore.toString());
 // console.log(balanceWAfter.toString(), balanceDAfter.toString());

};
