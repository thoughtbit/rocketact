import WebpackChain from "webpack-chain";

import CoreAPI from "./CoreAPI";

export interface webpackChainFn {
  (webpackChain: WebpackChain): void;
}

class Core {
  private webpackChainFns: webpackChainFn[];
  private commands: {
    [key: string]: { fn: () => void };
  };
  webpackChain: WebpackChain;

  constructor() {
    this.webpackChainFns = [];
    this.webpackChain = new WebpackChain();
    this.commands = {};
  }

  run() {
    // this.applyAp
  }
}

export default Core;