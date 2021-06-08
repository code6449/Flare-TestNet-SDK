import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 16,
    BSCTESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x3834D86D32D0A8b6d5c59cCddD07Ea20d6292F6e";
export declare const INIT_CODE_HASH = "0x767207be629d587cbedb620cbccb6ce161fa59c1b8d670bc86561df26653f2b1";
export declare const ROUTER = "0x00095E52D8771bB7A044ee69Dcb40A988e72a48A";
export declare const LPname = "UniFlare Liquidity";
export declare const LPsymbol = "UNI-FLR";
export declare const NATIVEsymbol = "UNIf";
export declare const NATIVEname = "UniFlare";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const etherName = "FLARE";
export declare const etherSymbol = "FLR";
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
