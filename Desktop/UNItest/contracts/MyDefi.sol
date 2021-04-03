import "./IUni.sol";

contract MyDeFiProject  {
 IUniswap uniswap;

 constructor(address _uniswap) public {
   uniswap = IUniswap(_uniswap);
 }

 function getbalance(address token, address owner) external view returns (uint) {
   IERC20(token).balanceOf(owner);
 }
  // La fonction qui va permettre le swap
 function swapTokensForEth(address token, uint amountIn, uint amountOutMin, uint deadline) external {
   IERC20(token).allowance(msg.sender, address(this));
   IERC20(token).transferFrom(msg.sender, address(this), amountIn); // Transfert des tokens en question au smart contract ! Il faut penser à approve ce transfert avant l’utilisation de cette fonction
   address[] memory path = new address[](2); // Création du path
   path[0] = address(token); // initialisation du path avec l'address du token à échanger
   path[1] = uniswap.WETH(); // initialisation du path avec l'address du WETH d'Uniswap
   IERC20(token).approve(address(uniswap), amountIn); // autoriser uniswap à utiliser nos tokens
   uniswap.swapExactTokensForETH(
     amountIn,
     amountOutMin,
     path,
     msg.sender,
     deadline
   ); // effectuer le swap, ETH sera transférer directement au msg.sender
 }
}
