pragma solidity 0.6.12;


interface IUniswap  {
 function swapExactTokensForETH(
   uint amountIn,
   uint amountOutMin,
   address[] calldata path,
   address to,
   uint deadline)
   external
   returns (uint[] memory amounts);
 function WETH() external pure returns (address);
}

interface IERC20 {
 function transferFrom(
   address sender,
   address recipient,
   uint256 amount)
   external
   returns (bool);
 function approve(address spender, uint256 amount) external returns (bool);
 function balanceOf(address owner) external view returns (uint);
 function allowance(address owner, address spender) external view returns (uint);
}
